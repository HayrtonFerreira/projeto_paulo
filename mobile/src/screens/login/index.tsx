
import { TextErro, ButtomLogin, ConteinerLogin, Label, TextButton, TextLogin, TextLabel, ButtomIcons, ViewHorizontal, HorizontalLine, TextHorizontal, ConteinerImage, IconApp, TextLink } from "./style";
import { Foundation, Fontisto } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Formik } from 'formik';
import * as Yup from "yup";
import { Theme } from "../../../Thema";



interface MyFormValues {
  user: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  user: Yup.string()
    .label('user')
    .required('user is required'),
  password: Yup.string()
    .label('password')
    .required('senha obrigatoria').min(4, 'digite mais quatro digitos')
});

export default function Login() {
  const navigation = useNavigation();


  const FormValues: MyFormValues = { user: '', password: '' };

  return (
    <ConteinerLogin>

      <ConteinerImage>
        <IconApp
          source={require("../../../assets/curuja.png")}
        />
      </ConteinerImage>

      <TextLogin>Login</TextLogin>
      <Formik
        initialValues={FormValues}

        onSubmit={values => {
          if (values) {
            navigation.navigate('Home')
          }

          console.log(values)
        }

        }
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <TextLabel>Usuário</TextLabel>
            <Label
              onChangeText={handleChange('user')}
              onBlur={handleBlur('user')}
              value={values.user}
              placeholder="Digite seu usuário"
              placeholderTextColor={Theme.colors.white100}

            />
            {errors.user ? (<TextErro>user Invalid</TextErro>) : (<></>)}
            <TextLabel>Senha</TextLabel>
            <Label
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Digite sua senha"
              placeholderTextColor={Theme.colors.white100}
              secureTextEntry={true}
            />
            {errors.password ? (<TextErro>{errors.password}</TextErro>) : (<></>)}
            <ButtomLogin
              onPress={() => handleSubmit()}
            >
              <TextButton>Entrar</TextButton>
            </ButtomLogin>


          </>
        )}
      </Formik>
      <ButtomIcons onPress={()=>navigation.navigate('Register')}>
        <TextLink>Ainda não sou cadastrado!</TextLink>
      </ButtomIcons>
    </ConteinerLogin>
  )
}