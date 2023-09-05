
import { ImageBackground, TouchableOpacity} from "react-native";
import { AvatarUserHome,
  
    Conteiner,
    ConteinerList,
    ConteinerList2, 
    HeaderHome,
    TitleHome,
    Conteinertop,
    } from "./style";

import { useRef, useState } from "react";
import BottomSheet from '@gorhom/bottom-sheet';

import Card2 from "../../components/Card2/Card2";
import Card from "../../components/Card/Card";
import { FlatList } from "react-native-gesture-handler";
import Card3 from './../../components/Card3/Card';



export default function Home(){
    const [modalVisible, setModalVisible] = useState(0);
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints =  ['1%', '50%'];

  

    return(
    <Conteiner>
 
   <Conteinertop>
       <HeaderHome>
       <AvatarUserHome
       source={{
        uri:'https://avatars.githubusercontent.com/u/111377254?v=4'
       }}
       
       />
        <TitleHome> Olá! Flávio</TitleHome>
       </HeaderHome>
      
       <ConteinerList>
        <FlatList
            data={['1','2','3','4']}
           horizontal={true}
            keyExtractor={item=>item}
            renderItem={()=><Card name={"Do Math HomeWork"} />}
            />
       </ConteinerList>
   </Conteinertop>
        <ConteinerList2>
            <FlatList
              horizontal={true}
            data={['1','2','3','4']}
            keyExtractor={item=>item}
            renderItem={()=><Card2 name={"Minhas aulas de hoje"} />}
            />
            
        </ConteinerList2>
        <FlatList
              horizontal={true}
            data={['1','2',]}
            keyExtractor={item=>item}
            renderItem={()=><Card3 name={"Nova maneira de educação finaceira"} />}
            />
  
        
    </Conteiner>
    )
}