import { FontAwesome } from '@expo/vector-icons';
import {
    Conteiner,
    ConteinerTask,
    ConteinerView,
    TextIcon,

} from "./style";
import { Theme } from '../../../Thema';

interface PropsCard2 {
    name: string;

}
export default function Card4(props: PropsCard2) {


    return (
        <Conteiner>

            <ConteinerView>
                <ConteinerTask >
                    <FontAwesome name={"calendar-plus-o"} size={24} color={Theme.colors.greem} />
                </ConteinerTask>

                <TextIcon>{props.name}</TextIcon>

            </ConteinerView>
        </Conteiner>
    )
}