import React ,{useState} from "react";
import { Container, Form, Logo } from "./styles";
import FilledInput from "@mui/material/FilledInput";
import { Button, InputAdornment } from "@mui/material";
import { HiOutlineUser } from "react-icons/hi";
import { SlLock } from "react-icons/sl";





export const LoginPage = () => {

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
              <p>Login</p>
            </Logo>
            <FilledInput
              id="filled-adornment-weight"
              className="input"
              placeholder="Login"
              value={name}
              onChange={handleName}
              endAdornment={
                <InputAdornment position="end">
                  <HiOutlineUser
                    style={{
                      color: "#5CC6A0",
                      fontSize: "1.3rem",
                    }}
                  />
                </InputAdornment>
              }
            />
            <FilledInput
              id="filled-adornment-weight"
              className="input"
              type="password"
              placeholder="Senha"
              endAdornment={
                <InputAdornment position="end">
                  <SlLock
                    style={{
                      color: "#5CC6A0",
                      fontSize: "1.3rem",
                    }}
                  />
                </InputAdornment>
              }
            />
            <div className="bottom">
              <Button variant="contained" className="buttom" href="../home">
                Login
              </Button>
              <div className="checkbox">
                <span>
                  <input type="checkbox" className="input-checkbox" />
                </span>
                <p>Lembrar senha.</p>
              </div>
            </div>
            <div className="cad">
              <p>
                Ainda não tenho conta ? <a href="./register">Cadastrar.</a>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
};