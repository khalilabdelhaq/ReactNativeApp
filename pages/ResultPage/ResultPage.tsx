import * as React from "react";
import { Styles } from "./ResultPage.style";
import { mockedItems } from "./fixtures";
import LineItem from "../../molecules/LineItem";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
interface Props {}

const ResultPage: React.FC<Props> = ({}) => {
  const items = useSelector((state: RootState) => state.items.items);
  return (
    <>
      <Styles.Container>
        {items.map((item, index) => (
          <LineItem key={index} item={item} />
        ))}
      </Styles.Container>
    </>
  );
};

export default ResultPage;
