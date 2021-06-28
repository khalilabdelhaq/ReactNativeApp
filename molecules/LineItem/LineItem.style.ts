import styled from "styled-components/native";

export const Styles = {
  Container: styled.View`
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
    font-family: "Century Gothic";
    padding: 10px;
  `,
  ImgContainer: styled.View`
    width: 30%;
    border: solid 1px grey;
    border-radius: 5px;
    margin-right: 10px;
    height: 100px;
    width: 100px;
  `,
  Img: styled.Image`
    height: 100px;
    width: 100px;
    border-radius: 5px;
  `,
  InfoContainer: styled.View`
    display: flex;
    flex-direction: column;
    width: 70%;
  `,
  Title: styled.Text`
    font-weight: bold;
    color: black;
    width: 100%;
  `,
  Type: styled.Text`
    color: black;
    font-size: 15px;
    width: 100%;
  `,
  Adress: styled.Text`
    color: black;
    width: 100%;
    font-size: 10px;
  `,
};
