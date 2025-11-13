import React, { useEffect } from 'react';
import M from 'materialize-css';

export default function Contacto() {

  useEffect(() => {
    M.updateTextFields();
  }, []);

  const enviarSimulado = (e) => {
    e.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (!nombre || !email || !mensaje) {
      M.toast({
        html: 'Por favor completa todos los campos',
        classes: 'red darken-2'
      });
      return;
    }

    M.toast({
      html: `Gracias ${nombre}, tu mensaje ha sido enviado!`,
      classes: 'green darken-2'
    });

    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensaje').value = '';
    M.updateTextFields(); 
  };

  return (
    <section className="contacto-section">
      <div className="container">
        <h2 className="contacto-titulo">Contáctanos</h2>
        <p className="contacto-sub">
          Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible.
        </p>

        <div className="card contacto-card">
          <form onSubmit={enviarSimulado}>
            <div className="input-field">
              <input id="nombre" type="text" className="validate" />
              <label htmlFor="nombre">Nombre</label>
            </div>

            <div className="input-field">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Correo electrónico</label>
            </div>

            <div className="input-field">
              <textarea id="mensaje" className="materialize-textarea"></textarea>
              <label htmlFor="mensaje">Mensaje</label>
            </div>

            <div className="center">
              <button 
                className="btn btn-contacto waves-effect waves-light"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
