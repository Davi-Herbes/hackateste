import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: "Open Sans", sans-serif;
  font-weight: 100;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 2.4rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;

}

label,input {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
}

button {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
}

h2 {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
}

h1{
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
}

  @keyframes fadeInAnimation {
      from {
        padding-top: 3vh;
        opacity: 0.8;
      }
      to {
        padding-top: 0;
        opacity: 1;
      }
    }




`;
