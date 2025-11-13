import React, { useEffect, useState } from "react";
import "../styles/Carrusel.css";


import gifInicio from "../assets/slider/inicio.gif";
import barra from "../assets/slider/barra.png";
import barrita from "../assets/slider/barrita.png";
import bebidas from "../assets/slider/bebidas.png";
import estanco from "../assets/slider/estanco.png";

export default function Carrusel() {
  const slides = [
    {
      imagen: gifInicio, // 1
      overline: "Bienvenido a",
      subtitulo: "Estanco MalaCopa",
      descripcion: "",
      boton: null,
      alt: "Bienvenida Estanco MalaCopa",
    },
    {
      imagen: barra, // 2
      titulo: "Cervezas",
      descripcion:
        "Desde las cervezas más suaves y refrescantes hasta las más intensas y artesanales.",
      boton: { texto: "Ver Más", enlace: "/productos" },
      alt: "Botellas de cerveza",
    },
    {
      imagen: barrita, // 3
      titulo: "Licores",
      descripcion:
        "Explora nuestra selección de licores nacionales e importados, ideales para cualquier ocasión.",
      boton: { texto: "Ver Más", enlace: "/productos" },
      alt: "Botellas de licores en barra",
    },
    {
      imagen: bebidas, // 4
      titulo: "Contáctanos",
      descripcion:
        "Si tienes dudas, quejas o sugerencias, no dudes en comunicarte con nosotros.",
      boton: { texto: "Ir a Contacto", enlace: "/contacto" },
      alt: "Fachada del estanco",
    },
    {
      imagen: estanco, // 5
      alt: "Fachada del estanco de noche",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 8000);
    return () => clearInterval(id);
  }, [slides.length]);

  const go = (dir) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  };

  const goTo = (i) => setIndex(i);

  const slide = slides[index];

  return (
    <div className="carrusel-container" role="region" aria-label="Carrusel de inicio">
      <div className="slide">
        <img src={slide.imagen} alt={slide.alt || `slide-${index + 1}`} />
        <div className="capa" aria-hidden="true" />
        <div className="texto-principal">
          {slide.overline && <p className="overline">{slide.overline}</p>}
          {(slide.titulo || slide.subtitulo) && (
            <h1>{slide.titulo || slide.subtitulo}</h1>
          )}
          {slide.descripcion && (
            <p className="descripcion">{slide.descripcion}</p>
          )}
          {slide.boton && (
            <a className="btn-cta" href={slide.boton.enlace}>
              {slide.boton.texto}
            </a>
          )}
        </div>
      </div>

      {/* Flechas */}
      <button
        className="carrusel-btn izquierda"
        aria-label="Anterior"
        onClick={() => go(-1)}
      >
        ‹
      </button>
      <button
        className="carrusel-btn derecha"
        aria-label="Siguiente"
        onClick={() => go(1)}
      >
        ›
      </button>

      {/* Dots */}
      <div className="dots" role="tablist" aria-label="Indicadores del carrusel">
        {slides.map((_, i) => (
          <button
            key={i}
            className={i === index ? "active" : ""}
            aria-label={`Ir al slide ${i + 1}`}
            aria-current={i === index ? "true" : "false"}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
