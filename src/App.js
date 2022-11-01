
import './App.css';
//import VrArea from './components/VrArea'; 
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
 import Main from './components/Main';
import Us from './components/Us';
const theme = createTheme({
  palette: {
    secondary: {
      main: '#021C45'
    },
    primary: {
      main: '#000000'
    }
  }

});
function App() {

  return (
    <ThemeProvider theme={theme} >
      <Navbar></Navbar>
      <Main/>
      <Us/>
      
    </ThemeProvider>
  );
}

export default App;
