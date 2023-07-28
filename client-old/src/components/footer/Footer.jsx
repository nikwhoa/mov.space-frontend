import React from 'react';
import './styles/footer.scss';

const Footer = () => {
  return (
    <footer className='container'>
      <div className='row'>
        <div className='col-12 footer'>
          <div className='footer-about'>
            <h4>Про нас</h4>
            <p>
              У mov.space, ми працюємо над тим, щоб забезпечити затишне та дружнє середовище для людей будь-якого рівня
              фізичної підготовки. Наші сучасні тренажерні зони та досвідчені тренери допоможуть вам досягти своїх
              фітнес-цілей.
            </p>
          </div>
          <div className='footer-contact'>
            <h4>Контактна інформація</h4>
            <p>
              Адреса: Крюківщина, Панорамна 2Д
              <br />
              Телефон: 096 451 53 11
              <br />
              Телеграм: Телега
              <br />
              <b>Ми працюємо з 08 до 22 годин.</b>
            </p>
          </div>
          <div className='footer-social'>
            <h4>Соціальні мережі</h4>
            <ul>
              <li>
                <a href='[Посилання на вашу сторінку у Instagram]'>Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
