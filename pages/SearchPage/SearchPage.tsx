import React, { useState } from "react";
import { Button, Picker, View, Text } from "react-native";
import { Formik } from "formik";
import { Styles } from "./SearchPage.style";
import LineItem from "../../molecules/LineItem";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import {
  mockedVilles,
  mockedCategories,
  mockedItems,
} from "../ResultPage/fixtures";
import { filterItemsRequest } from "../../redux/actions";
interface Props {}

const SearchPage: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();
  const [ville, setVille] = useState(1);
  const [category, setCategory] = useState(1);
  const handleSubmit = () => {
    dispatch(filterItemsRequest({ ville, category }));
  };
  const filteredItems = useSelector(
    (state: RootState) => state.items.filteredItems
  );
  return (
    <Styles.Container>
      <View>
        <View>
          <Picker
            selectedValue={ville}
            onValueChange={(itemValue, itemIndex) => setVille(itemValue)}
          >
            {mockedVilles.map((ville) => (
              <Picker.Item key={ville.id} label={ville.name} value={ville.id} />
            ))}
          </Picker>
        </View>
        <View>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
          >
            {mockedCategories.map((cat) => (
              <Picker.Item key={cat.id} label={cat.name} value={cat.id} />
            ))}
          </Picker>
        </View>
        <Button onPress={() => handleSubmit()} title="Rechercher" />

        <View>
          {filteredItems.map((item, index) => (
            <LineItem key={index} item={item} />
          ))}
        </View>
      </View>
    </Styles.Container>
  );
};

export default SearchPage;
