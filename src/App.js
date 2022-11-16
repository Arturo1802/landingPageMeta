import './App.css'; 
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Main from './components/Main';  
import Offer from './components/Offer';
import Edutainers from './components/Edutainers';
import Benefits from './components/Benefits';
import { motion } from "framer-motion";
import Contact from './components/Contact';
import Us2 from './components/Us2';
import Footer from './components/Footer';


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
    <ThemeProvider style={{overflowX:'hidden'}} theme={theme} >
      <Navbar/>

      <Main/>

      <Us2 />
      <Offer /> 
      <Edutainers/>
      <Benefits/>
      <Contact/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
