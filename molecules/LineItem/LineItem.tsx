import * as React from "react";
import { Item } from "../../redux/types";
import { Styles } from "./LineItem.style";

interface Props {
  item: Item;
}

const LineItem: React.FC<Props> = ({ item }) => (
  <Styles.Container>
    <Styles.ImgContainer />
    <Styles.InfoContainer>
      <Styles.Title>{item.title}</Styles.Title>
      <Styles.Type>{item.category.name}</Styles.Type>
      <Styles.Adress>{`${item.adress} ${item.ville.name}`}</Styles.Adress>
    </Styles.InfoContainer>
  </Styles.Container>
);

export default LineItem;
