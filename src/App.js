
import './App.css';
//import VrArea from './components/VrArea'; 
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
 import Main from './components/Main';
import Us from './components/Us';
import Us2 from './components/Us2';
import Offer from './components/Offer';
import Edutainers from './components/Edutainers';
import Benefits from './components/Benefits';
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
      <Navbar/>
      <Main/>
      <Us2  id="#nosotros"/>
      <Offer id="#oferta"/> 
      <Edutainers/>
      <Benefits/>
    </ThemeProvider>
  );
}

export default App;
