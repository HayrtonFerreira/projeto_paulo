import styled, { keyframes } from "styled-components";

const moveToRight = keyframes`

0% {
  opacity: 0;
  transform: translate(-200px);

}
50%{
  opacity: 3;
}
100%{

  transform: translate(0px);
  opacity: 1;
}


`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  .container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100%;
  }

  .container1 {
    width: 30%;
    background-image: radial-gradient(
      circle at 50% 50%,
      #c3ecbc 0,
      #9ad891 50%,
      #5CC6A0 100%
    );
    box-shadow: 1px 2px 3px #ccc;
    height: 100vh;
  }
  @media (max-width: 999px) {
    .container1 {
      display: none;
    }
  }
  .image {
    margin: auto;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    height: 100%;
    animation: ${moveToRight} 0.5s;
  }
  .container2 {
    width: 70%;
    display: flex;
    align-items: center;
    margin: auto;
    height: 100vh;
    height: 100%;
  }
  @media (max-width: 999px) {
    .container2 {
      width: 90%;
    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50vh;
  align-items: center;
  margin: auto;

  .input {
    width: 60%;
    justify-content: center;
    margin: auto;
    background: #fff;
    margin-bottom: 1rem;
    animation: ${moveToRight} 0.5s;
  }
  @media (max-width: 999px) {
    width: 100%;
    height: 65vh;
    background-image: radial-gradient(
      circle at 50% 50%,
      #c3ecbc 0,
      #9ad891 50%,
      #5CC6A0 100%
    );
    border-radius: 30px;
    .input {
      width: 80%;
      animation: ${moveToRight} 0.5s;
    }
  }
  .checkbox {
    align-items: center;
    display: flex;
    margin: auto;
    flex-direction:center;
    width: 100%;
    justify-content:center;
    animation: ${moveToRight} 0.5s;
    p {
      font-size: 1.2rem;
      color: #cccc;
    }
  }
  .input-checkbox {
    margin-right: 5px;
    margin-bottom: -4px;
  }
  .bottom {
    width: 60%;
    margin-top: 1.2rem;
    margin-bottom: 1.0rem;
    justify-content: space-between;
    display: flex;
    flex-direction: column-reverse;
   
  }
  @media (max-width: 999px) {
    .bottom {
      width: 80%;
    }
    .buttom {
      background: #5CC6A0;
    }
    .checkbox p {
      color: #fff;
    }
  
  }
  .buttom {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    padding: 0 30px;
    height: 40px;
  }
  .cad {
    margin-top: 1.2rem;
    p {
      font-size: 1.2rem;
      color: #cccc;
    }
    a {
      color: #5CC6A0;
    }
  }
  @media (max-width: 999px) {
    .cad {
      width: 85%;
      gap: 1rem;
      margin-top: 1rem;

      p {
        font-size: 1rem;
        margin-top: 1rem;
        text-align: center;
        color: #fff;
      }
      a {
        font-weight: 500;
        color: #5CC6A0
      }
    }
  }
`;

export const Logo = styled.div`
  font-family: "Poppins", sans-serif;
  width: 60%;
  font-size: 2rem;
  font-weight: 400;
  color: #5CC6A0;
  margin: auto;
  justify-content: center;

  p {
    margin-top: -1rem;
    animation: ${moveToRight} 0.5s;
  }
  @media (max-width: 999px) {
    width: 100%;
    margin: auto;
    justify-content: center;

    p {
      font-family: "Poppins", sans-serif;
      text-align: center;
      font-size: 2.5rem;
      margin-top: 0;
      animation: ${moveToRight} 0.5s;
      color: #fff;
    }
   
  }
  .nasc{
    color: #cccc;
    font-family: 'Courier New', Courier, monospace;
  }
#nasc{
  color: #cccc;
}
`;

