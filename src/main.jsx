import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './assets/styles/card.css'
import Card from'./components/Card'
import './assets/styles/navbar.css'
import uvst from './img/UnVeranoSinTI.png'
import NavBar from './components/Card'
import Rammstein from './img/Rammstein.png'
import ID from './img/ID.png'
import Tecate from './img/Tecate.png'
import Header from './components/Header'
import './assets/styles/header.css'
import './assets/styles/footer.css'
import TM from './img/ticketmaster.svg'
import DO from './img/DO.png'
import SP from './img/SP.png'
import Footer from './components/Footer';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Header img={TM}/>
    <div className='wrapper'>
        <Card img={uvst}
        title= 'Un verano Sin ti' 
        description='09 de Diciembre Foro sol CDMX'
        ></Card>

        <Card img={uvst}
        title='Un Veranos Sin ti'
        description='10 de Diciembre Foro sol CDMX'>
        </Card>
        <Card img={Rammstein}
        title='Rammstein American Tour'
        description='01 Ocutbre Foro sol CDMX'/>

        <Card img={Rammstein}
        title='Rammstein American Tour'
        description='02 Octubre Foro sol CDMX'/>

        <Card img={Rammstein}
        title='Rammstein American Tour'
        description='03 Octubre Foro sol CDMX'/>

        <Card img={Rammstein}
        title='Rammstein American Tour'
        description='04 Octubre Foro sol CDMX'/>

        <Card img={ID}
        title='Imagine Dragons Tour'
        description='01 Noviembre Palacio de los deportes CDMX'/>
        <Card img={ID}
        title='Imagine Dragons Tour'
        description='02 Noviembre Palacio de los deportes CDMX'/>

        <Card img={Tecate}
        title='Tecate Live Out'
        description='15 de octubre Parque fundidora Monterrey'/>

        <Card img={DO}
        title='Danny Ocean Tour'
        description='15 de octubre Auditorio Nacional CDMX'
        />
        <Card img={DO}
        title='Danny Ocean Tour'
        description='23 de octubre Auditorio Nacional CDMX'
        />
        <Card img={SP}
        title='SolarPower by Lorde'
        description=' 11 de ocutbre Pepsi Center CDMX'
        />
    </div>
      <Footer/>
  </React.StrictMode>
)
