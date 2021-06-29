import React, { useState } from "react";
import { Button, Picker, View, TextInput } from "react-native";
import { Styles } from "./AddPage.style";
import LineItem from "../../molecules/LineItem";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import {
  mockedVilles,
  mockedCategories,
  mockedItems,
} from "../ResultPage/fixtures";
import { addItemRequest } from "../../redux/actions";
interface Props {}

const AddPage: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();
  const [ville, setVille] = useState(1);
  const [category, setCategory] = useState(1);
  const [title, onChangeTitle] = React.useState("");
  const [adress, onChangeAdress] = React.useState("");

  const handleSubmit = () => {
    dispatch(addItemRequest({ title, ville, category, adress }));
  };
  return (
    <Styles.Container>
      <View>
        <View>
          <Styles.TextInput
            placeholder="Titre"
            onChangeText={onChangeTitle}
            value={title}
          />
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
          <Styles.TextInput
            placeholder="Adresse"
            onChangeText={onChangeAdress}
            value={adress}
          />
        </View>
        <Button onPress={() => handleSubmit()} title="Ajouter Lieu" />
      </View>
    </Styles.Container>
  );
};

export default AddPage;
