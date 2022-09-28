import '../assets/styles/footer.css'
function Pie() {
    return (  
        <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
        <a href=" " target="_blank" rel="noopener noreferrer">Terminos Y condiciones de uso</a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
              SDI: Rodrigo Ruiz Garcia
          </section>
          <section className="footer-info__returns">
            Terminos de privacidad
            <br />
            Documentacion legal
          </section>        
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            Dudas Y soporte tecnico:
          </section>
          <section className="footer-info__terms">
            QVMSoporte@QVM.com
            <br />
            &copy; 2022 QuienVieneaMexico
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
            961-629-3953
          </section>
          <section className="footer-info__contact">
            No somos una boletera
            <br />
            Profe pongame 100 :c
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
    );
}

export default Pie;
