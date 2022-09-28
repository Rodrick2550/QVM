import '../assets/styles/navbar.css'
function Navbar() {
    return ( 
        <section className='navbar'>
            <a href="" className='navbar-item'>Home</a>
            <a href="https://www.ticketmaster.com.mx/" target="_blank" rel="noopener noreferrer" className='navbar-item'>Boletos</a>
            <a href="" className='navbar-item'>Contactanos</a>
        </section>
     );
}

export default Navbar;