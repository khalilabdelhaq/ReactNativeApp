import * as React from "react";
import { Styles } from "./LineItem.style";

interface Props {}

const LineItem: React.FC<Props> = ({}) => (
  <Styles.Container>
    <Styles.ImgContainer />
    <Styles.InfoContainer>
      <Styles.Title>Fuji Sushui</Styles.Title>
      <Styles.Type>Restaurant</Styles.Type>
      <Styles.Adress>Avenu le Cair Tetouan 93000</Styles.Adress>
    </Styles.InfoContainer>
  </Styles.Container>
);

export default LineItem;
