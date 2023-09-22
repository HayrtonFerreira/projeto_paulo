

    import React ,{useState} from "react";
    import { Container, Form, Logo } from "./stylesPage";
    import FilledInput from "@mui/material/FilledInput";
    import { Button, Input, Radio, RadioGroup } from "@mui/material";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
        
        export const RegisterPage = () => {
        
          // criando estado 
          const [name, setName]= useState('');
        
        function handleName(envet: { target: { value: React.SetStateAction<string>; }; }) {
          setName(envet.target.value)
        }
        
        
        console.log(name);
          return (
            <Container>
              <div className="container">
                <div className="container1">
                  <div className="image">
                    <img
        
                      src = "pngwing.com (4).png"
                      width={500}
                      height={500}
                      className="img-banner"
                      alt="banner"         
                      />
                  </div>
                </div>
                <div className="container2">
                  <Form>
                    <Logo>
                      <p>Preecha suas Informações</p>
                    </Logo>
                    <FilledInput
                     
                      className="input"
                      placeholder="Nome"
                      value={name}
                      onChange={handleName}
                    
                 
                    />
                      <FilledInput
                      
                      className="input"
                      placeholder="Email"
                      value={name}
                      onChange={handleName}
                      
                      /> 

                    <FilledInput
                     
                      className="input"
                      type="password"
                      placeholder="Senha"
                     
                    />
                      <FilledInput
                      
                      className="input"
                      placeholder="Comfirmar Senha"
                      value={name}
                      onChange={handleName}
                      
                      /> 
                       <div className="bottom">
                      <Button variant="contained" className="buttom"href="../login/LoginPage">
                       Voltar
                      </Button>
                    
                    </div>
                    
                   
                  </Form>
                  <Form>
                  <FilledInput
                     
                     className="input"
                     placeholder="Endereço"
                 
                   
                
                   />
                    <FilledInput
                     
                      className="input"
                      placeholder="Cidade"
                      
                    
                 
                    />
                 

                      <div className="checkbox">
                <span>
                  <input type="checkbox" className="input-checkbox" />
                </span>
                <p>masculino</p>
                <span>
                  <input type="checkbox" className="input-checkbox" />
                </span>
                <p>Feminino</p>
                <span>
                  <input type="checkbox" className="input-checkbox" />
                </span>
                <p>outro</p>
                

              </div>

                    <FormCheckLabel className="nasc"  htmlFor="nasc" color="#cccc" >Data de Nascimento</FormCheckLabel >
                      <Input  font-famili="Poppins"  id="nasc" type="date" />

                  

                 
                      
                    <div className="bottom">
                      <Button variant="contained" className="buttom" href="../login/LoginPage.tsx">Cadastrar
                        
                      </Button>
                    
                    </div>
                   
                    
                  </Form>
                </div>
              </div>
            </Container>
          );
        };


export default RegisterPage;

/*

*/
