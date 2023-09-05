
import styled from "styled-components/native";
import { Theme } from "../../../Thema";




export const  Conteiner =  styled.View`
  flex:1;
  flex-direction:column;
  width:142px;
  height:138px;
  margin-top:45px;
  margin-left:15px;
  text-align: center;
  background-color:${Theme.colors.gray200};
  border-radius:25px;
 
`;

export const  ConteinerView =  styled.TouchableOpacity`
  
  flex-direction:column;
  justify-content:space-around;
  height:100%;
  width:80%;
  margin-left:15px;
  margin-bottom:5px;
  text-align: center;

`;
export const  ConteinerTask =  styled.View`
  height:25px;
  width:80%;

`;
export const  ConteinerData =  styled.View`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  border-radius:7px;
  gap:3px;
 
`;
export const  ViewButtomIcon=  styled.View`
  width:45%;
  height:30px;
  display: flex;
  align-items:center;
  flex-direction:row;
  justify-content:space-around;
  gap:2px;
 
 
 
`;

export const  TextIcon =  styled.Text`
  font-size:12px;
  text-align: center;
  color:#000;
 
`;


 
