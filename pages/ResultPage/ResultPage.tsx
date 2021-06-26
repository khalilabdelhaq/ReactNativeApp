import * as React from "react";
import { Styles } from "./ResultPage.style";
import { mockedItems } from "./fixtures";
import LineItem from "../../molecules/LineItem";
interface Props {}

const ResultPage: React.FC<Props> = ({}) => (
  <Styles.Container>
    {mockedItems.map((item) => (
      <LineItem />
    ))}
  </Styles.Container>
);

export default ResultPage;
