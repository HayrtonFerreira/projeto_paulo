import { useState } from 'react';
import {
    Conteiner,
    ConteinerTask,
    TextCard,
} from "./style";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Theme } from './../../../Thema';

interface PropsList {
    name: string;

}

export default function Card3(props: PropsList) {
    const navigation = useNavigation()
    const [isChecked, setChecked] = useState(false);



    return (
        <Conteiner>
            <ConteinerTask >
                <TextCard >{props.name}</TextCard>
                <MaterialIcons name="monetization-on" size={30} color={Theme.colors.yellow} />


            </ConteinerTask>

        </Conteiner>
    )
}