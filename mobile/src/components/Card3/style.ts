
import styled from "styled-components/native";
import { Theme } from "../../../Thema";



export const  Conteiner =  styled.View`
  flex:1;
  justify-content:center;
  align-items:center;
  height:80px;
  width:286px;
  background-color:${Theme.colors.white100};
  border-radius:20px;
  gap:10px;
  margin-left:45px;
  margin-top:45px;
`;


export const  ConteinerTask =  styled.TouchableOpacity`
  height:100%;
  width:99%;
  align-items: center;
  justify-content:center;
  margin-top:50px;
  gap:10px;

`;



export const  TextCard =  styled.Text`
 color:#000;
 font-size:16;
text-align:center;
width:99%;
height:100%;
 
 
`;