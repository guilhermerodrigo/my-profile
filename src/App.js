import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  return (
    <div className="w-100">
        <h1 className="mb-0">Rodrigo
          <span className="text-primary">Guilherme</span>
        </h1>
        <div className="subheading mb-5">Rua Edna Maria Vanconcelos Gomes Cabral · João Pessoa-PB · (84)99902-8242 ·
          <a href="mailto:rodrigo.rn@hotmail.com.br">rodrigo.rn@hotmail.com.br</a>
        </div>
        <p className="lead mb-5">Estudante de Gestão da Tecnologia da Informação, estagiando com desenvolvimento de sistemas em Fábrica de Software UNIPÊ</p>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
  );
}

export default App;
