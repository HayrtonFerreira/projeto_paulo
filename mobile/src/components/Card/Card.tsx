import { useState } from 'react';
import {  Conteiner,
     ConteinerTask,
     ConteinerhorizontalList,
     TextCard,
     } from "./style";
import { useNavigation } from '@react-navigation/native';
    
interface PropsList{
    name:string;
  
}

export default function Card(props:PropsList){
    const navigation = useNavigation()
    const [isChecked, setChecked] = useState(false);
  

     
    return(
        <Conteiner>
            <ConteinerTask >
                 <TextCard >{props.name}</TextCard>
                 <ConteinerhorizontalList/>
            </ConteinerTask>
            
        </Conteiner>
    )
}