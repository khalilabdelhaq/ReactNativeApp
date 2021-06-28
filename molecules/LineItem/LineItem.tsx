import * as React from "react";
import { Item } from "../../redux/types";
import { Styles } from "./LineItem.style";

interface Props {
  item: Item;
}

const LineItem: React.FC<Props> = ({ item }) => {
  console.log(item.img);
  return (
    <Styles.Container>
      <Styles.ImgContainer>
        {item.img && <Styles.Img source={item.img} />}
      </Styles.ImgContainer>
      <Styles.InfoContainer>
        <Styles.Title>{item.title}</Styles.Title>
        <Styles.Type>{item.category.name}</Styles.Type>
        <Styles.Adress>{item.adress}</Styles.Adress>
        <Styles.Adress>{item.ville.name}</Styles.Adress>
      </Styles.InfoContainer>
    </Styles.Container>
  );
};

export default LineItem;
