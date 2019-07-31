/* eslint-disable quotes */
/* eslint-disable comma-dangle */
import styled from "styled-components";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const BookList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingTop: getStatusBarHeight() + 30,
    paddingBotton: 30
  }
})``;

export const PageTitle = styled.Text`
  font-size: 34px;
  font-weight: bold;
  text-align: center;
  color: #000;
  font-family: cursive;
`;

export const Book = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  margin-top: 20px;
`;
export const Image = styled.Image`
  width: 150px;
  height: 190px;
  border-radius: 4px;
`;

export const Info = styled.View`
  padding-left: 20px;
`;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
export const Page = styled.Text`
  font-size: 14px;
  font-weight: 600;
`;
export const Categorie = styled.Text`
  font-size: 14px;
  font-weight: 600;
`;
export const Author = styled.Text`
  font-size: 14px;
  font-weight: 600;
`;
