import styled from "styled-components";

export const Styles = {
  Container: styled.view`
    display: flex;
    flex-direction: row;
    height: 60px;
    margin-bottom: 5px;
    font-family: "Century Gothic";
  `,
  ImgContainer: styled.view`
    width: 30%;
    border: solid 1px grey;
    border-radius: 5px;
    margin-right: 10px;
  `,
  InfoContainer: styled.view`
    display: flex;
    flex-direction: column;
    width: 70%;
  `,
  Title: styled.text`
    font-weight: bold;
    color: black;
    width: 100%;
  `,
  Type: styled.text`
    color: black;
    font-size: 15px;
    width: 100%;
  `,
  Adress: styled.text`
    color: black;
    width: 100%;
    font-size: 10px;
  `,
};
