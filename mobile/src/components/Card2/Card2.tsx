
import {  Conteiner,
     
     ConteinerTask,
     ConteinerView,
     TextIcon,

     } from "./style";
interface  PropsCard2{
    name:string;
}    

export default function Card2({name}:PropsCard2){

     
    return(
        <Conteiner>
           
        <ConteinerView>
            <ConteinerTask >
                
            </ConteinerTask>
                
                  <TextIcon>{name}</TextIcon>
                
            </ConteinerView>
        </Conteiner>
    )
}