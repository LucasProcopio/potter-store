import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import background from '../assets/images/background.svg';

export default createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smothing: antialiased;

  }

  body, input, button {
    font: 14px 'Open Sans', sans-serif;
    cursor: url(http://media.tumblr.com/6f7ead6833730dc91a348fba0177da9d/tumblr_inline_mw3msxQuOL1r6g9wn.png), auto
  }

#root {
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;
}

button, a {
  cursor:url(http://media.tumblr.com/6f7ead6833730dc91a348fba0177da9d/tumblr_inline_mw3msxQuOL1r6g9wn.png), pointer
}
`;
