
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../screens/login';
import Options from '../screens/Options';
import { PerfilTeacher } from '../screens/PerfilTeacher';
import StarTeacher from '../screens/StarTeacher';
import { Theme } from '../../Thema';
import { StarRating } from '../screens/StarRating';
import { Schedule } from '../screens/Schedule';






const{Navigator,Screen} =  createStackNavigator();

export default function Stack() {
    return(
        <Navigator>
           <Screen
          name='Schedule'
          component={Schedule}
         
          />
           <Screen
          name='Options'
          component={Options}
          options={{
               
            headerShown:false
          }}
          />
        <Screen
          name='StarTeacher'
          component={StarTeacher}
          options={{
               
            headerShown:false
          }}
           />  
          <Screen
          name='Login'
          component={Login}
          options={{
            
            headerShown:false
          }}
        
          />
        
          <Screen
          name='PerfilTeacher'
          component={PerfilTeacher}
          options={{
               
            headerShown:true,
            headerTitle:'',
            headerTintColor:Theme.colors.greem,
           
          }}
         />
               <Screen
          name='StarRating'
          component={StarRating}
          options={{
               
            headerShown:true,
            headerTitle:'',
            headerTintColor:Theme.colors.greem,
           
          }}
         />
        
         
         
        </Navigator>
    )
}
StarRating