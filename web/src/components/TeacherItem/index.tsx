import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/13947440?s=460&u=26b5d9b410c2a03e76807f370e0e55d03438cec4&v=4" alt="Mário Santos" />
        <div>
          <strong>Mário Santos</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> <br />
            Ab voluptatum ratione velit tempora culpa iste minima tempore, ex quod natus quasi commodi officiis? Quibusdam tempora dolor necessitatibus cupiditate molestias sed?
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
