
import styled from "styled-components/native";
import { Theme } from "../../../Thema";



export const  Conteiner =  styled.View`
  flex:1;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  height:112px;
  width:241px;
  margin-top:25px;
  margin-left:15px;
  text-align: center;
  background-color:${Theme.colors.greem};
  border-radius:20px;
  
`;


export const  ConteinerTask =  styled.TouchableOpacity`
  height:50%;
  width:99%;
  align-items: center;
  justify-content:center;
  border-bottom-color: 1px #000 ;
`;
export const  ConteinerhorizontalList =  styled.View`
  margin-top:20px;
  height:0.5px;
  width:100%;
  background-color:#000000;
`;


export const  TextCard =  styled.Text`
 color:#000;
 font-size:18;
  text-align:center;


`;