import logo from './logo.svg';
import './App.css';
import InputWithIcon from './components/Common/InputField/InputField';
import {  TEXT_EMAIL } from './constants/TextConstants';
import HomePage from './components/App/HomePage/HomePage';
import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <HomePage />
      
    </div>
    </ThemeProvider>
  );
}

export default App;
