import logo from '../img/ticketmaster.svg'
import '../assets/styles/header.css'
import Navbar from './Navbar';
function Cabeza(props) {
    return (  
        <header>
            <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
        <img src={props.img}  />
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">
          Sign In
        </section>
        <section className="header-bottom__email">
          Sign Up
        </section>
      </section>
    </section>
        </header>
        
    );
}

export default Cabeza
