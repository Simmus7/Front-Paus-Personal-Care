import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Únete a nuestra página para recibir noticias sobre ofertas y mucho más
        </p>
        <p className='footer-subscription-text'>
          Puedes cancelar la suscripción en cualquier momento.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Tu Email'
            />
            <Button buttonStyle='btn--outline'>Suscribete</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Sobre nosotros</h2>
            <Link to='/aboutus'>Quiénes somos</Link>
            <Link to='/'>Reseñas</Link>
            <Link to={{ pathname: "https://web.whatsapp.com/send?phone=573148239617&text=" }} target='_blank'>Contáctenos</Link>
            <Link to='/'>Terminos de servicio</Link>
          </div>
          <div>
          <div class='footer-link-items'/>
          </div>
          <div class='footer-link-items'>
            <h2>Redes Sociales</h2>
            <Link to={{ pathname: "https://instagram.com" }} target='_blank'>Instagram</Link>
            <Link to={{ pathname: "https://facebook.com" }} target='_blank'>Facebook</Link>
            <Link to={{ pathname: "https://twitter.com" }} target='_blank'>Twitter</Link>
            <Link to={{ pathname: "https://web.whatsapp.com/send?phone=573148239617&text=" }} target='_blank'>WhatsApp</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={process.env.PUBLIC_URL + '/images/Logo P-03.png'} alt="Logo" />
            </Link>
          </div>
          <small class='website-rights'>PAU'S PERSONAL CARE © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to={{ pathname: "https://facebook.com" }}
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to={{ pathname: "https://instagram.com" }}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to={{ pathname: "https://twitter.com" }}
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to={{ pathname: "https://web.whatsapp.com/send?phone=573148239617&text=" }}
              target='_blank'
              aria-label='WhatsApp'
            >
              <i class='fab fa-whatsapp' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;