
import styled from "styled-components/native";
import { Theme } from "../../../Thema";




export const  Conteiner =  styled.View`
   flex:1;
  justify-content:center;
  background-color:${Theme.colors.greem};
  margin-top:-45px;
`;
export const  Conteinertop =  styled.View`
  height:50%;
  justify-content:center;
  background-color:${Theme.colors.gray100};
  border-radius:45px;

 
`;

export const  ConteinerList =  styled.View`
  height:40%;
  justify-content:center;
  text-align: center;
  width:99%;
  
  background-color:${Theme.colors.gray100};
`;
export const  ConteinerList2 =  styled.View`
  height:25%;
  justify-content:center;
  margin-bottom:20px;
 
 
`;

export const  HeaderHome =  styled.View`
height:15%;
flex-direction:row;
align-items:center;
width:90%;
margin-left:10px;
margin-bottom:20px;
margin-top:90px;
background-color:${Theme.colors.gray100};

`;
export const TitleHome = styled.Text`

 font-size:25px;
 text-align:center;
 color: ${Theme.colors.greem};
 padding:10px;
 margin-left:30px;
`;
;
export const AvatarUserHome = styled.Image`
 margin-left:10px;
 height:90px;
 width:90px;
 border-radius:50px;

 
`;

