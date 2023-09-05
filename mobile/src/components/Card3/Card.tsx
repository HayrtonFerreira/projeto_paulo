import { useState } from 'react';
import {  Conteiner,
     ConteinerTask,
     TextCard,
     } from "./style";
import { useNavigation } from '@react-navigation/native';
import React from 'react';
    
interface PropsList{
    name:string;
  
}

export default function Card3(props:PropsList){
    const navigation = useNavigation()
    const [isChecked, setChecked] = useState(false);
  

     
    return(
        <Conteiner>
            <ConteinerTask >
                 <TextCard >{props.name}</TextCard>
                
            </ConteinerTask>
            
        </Conteiner>
    )
}