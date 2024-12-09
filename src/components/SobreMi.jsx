import React from "react";
import "../styles/SobreMi.css";

const SobreMi = () => {
  return (
    <section id="sobre-mi" className="hero">
      <div className="sobreMi">
        <h3>Sobre mí</h3>
        <p>
          ¡Hola! bienvenido a mi portafolio. Soy un desarrollador Full Stack
          junior con experiencia en tecnologías modernas de front-end y
          back-end. He trabajado en proyectos colaborativos aplicando
          herramientas y metodologías ágiles para crear soluciones innovadoras y
          funcionales.
        </p>
        <p>
          Actualmente, estoy buscando oportunidades laborales que me permitan
          seguir aprendiendo y contribuyendo en el dinámico mundo de la
          tecnología.
        </p>
        <div className="CV">
          <a
            href="https://app.enhancv.com/share/685e7835/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
            className="cv-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-regular fa-file"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
