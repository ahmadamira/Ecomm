import logo from './logo.svg';
import './App.css';
import { Container, Grid, Typography, Box } from "@mui/material";
import Header from './Components/Header';
import Herosec from './Components/Herosec';
import Factcard from './Components/Fact';
import Card from './Components/Card';
import Service from './Components/Service';
import Footer from './Components/Footer';
import Factsgrid from './Components/Factsgrid';
import Cardgrid from './Components/Cardgrid';
import Servicegrid from './Components/Servicegrid';
import Carousel from './Components/Carousel';

function App() {
  return (
    <div className="App">

      <Header />
      <Herosec />
      <Factsgrid />
      <Carousel />
      <Servicegrid />
      <Footer />
    </div>
  );
}

export default App;
