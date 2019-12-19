import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logos/logo';
import ImageForm from './components/ImageForm/ImageForm';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  

  render(){
    return (
      <div className="App">
         <Particles className='particles'
            params={particlesOptions} />
        <Navigation />
        <Logo />
        <ImageForm />
      </div>
    );
  }
}

export default App;
