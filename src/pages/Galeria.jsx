import React, { useEffect } from "react";
import M from "materialize-css";

// Componente Carrusel con zoom y descripciones
function Carrusel({ items }) {
  useEffect(() => {
    const elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, { fullWidth: true, indicators: true, duration: 300 });

    const zoomElems = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(zoomElems);
  }, []);

  return (
    <div className="carousel carousel-slider">
      {items.map((item, index) => (
        <div key={index} className="carousel-item center" style={{ padding: "20px" }}>
          <img
            src={item.img}
            alt={item.desc}
            className="materialboxed"
            style={{ maxHeight: "400px", borderRadius: "10px", objectFit: "cover" }}
          />
          <p style={{ marginTop: "15px", fontSize: "1.1rem", fontWeight: "500" }}>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}


const theme = {
  bg: "#f3efe7",
  accent: "#8b5e34",
  text: "#2a2522",
  card: "#ffffff",
};

// Productos con descripción
const productos = [
  { img: "https://estancocasafuster.es/wp-content/uploads/2023/09/Estanco-Casa-Fuster-Barcelona-maridaje-21.jpg", desc: "Selección de tabacos premium importados" },
  { img: "https://scontent.fnva2-1.fna.fbcdn.net/v/t39.30808-6/475077187_917869050503464_7994421703192390483_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3a1ebe&_nc_eui2=AeF4C9VpnblKf6-MCWfwBDdjYp0lvKZowItinSW8pmjAiykwU0wxMxWoInaRRwCDdM7McGSVxTcDXpQFFAF6nRCp&_nc_ohc=q4I-0G05qOwQ7kNvwG-zXAi&_nc_oc=AdkoR9s2PS_I0C_BZHEim22mSvytQogn9-ezjcbJXvKSo_SmBY_BnY-JX_N4e2jCJtI&_nc_zt=23&_nc_ht=scontent.fnva2-1.fna&_nc_gid=RhHXUC_jMkK_uQeYR6vYbg&oh=00_AffSjD2QRda2r8ydkzLaGNcf4lp2U0a4N0_5FO9eOerqOg&oe=69095B8E", desc: "Accesorios exclusivos y encendedores de colección" },
  { img: "https://www.estancoluque.com/wp-content/uploads/2023/03/wave-xikar-cenicero-scaled.jpg", desc: "Ceniceros de lujo para fumadores selectos" },
  { img: "https://www.telemadrid.es/2013/10/29/imagenes-de-archivo/cigarrilloelectronico470_1514858547_2260355_1300x731.jpg", desc: "Variedad en vapeadores y dispositivos electrónicos" }
];

// Ambiente con descripción
const ambiente = [
  { img: "https://saludconlupa.com/media/images/red-wine-pouring-from-bottle-gla.width-1600.format-webp.webp", desc: "Maridajes seleccionados para acompañar la experiencia" },
  { img: "https://descorcha.com/cdn/shop/articles/1738072462758.jpg?v=1757001400&width=800", desc: "Estilo, sabor y ambiente acogedor" },
  { img: "https://www.telemadrid.es/2013/10/29/imagenes-de-archivo/cigarrilloelectronico470_1514858547_2260355_1300x731.jpg", desc: "Momentos únicos con amigos y buena compañía" }
];

function Galeria() {
  return (
    <div style={{ backgroundColor: theme.bg, minHeight: "100vh", color: theme.text }}>
      <header style={{ padding: "80px 0", textAlign: "center" }}>
        <h1 style={{ fontFamily: "serif", fontWeight: 600, fontSize: "3rem", color: theme.accent }}>
          Estanco Premium
        </h1>
        <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
          Productos exclusivos · Experiencia · Calidad
        </p>
      </header>

      <section className="container" style={{ padding: "50px 0" }}>
        <h3 className="center-align" style={{ marginBottom: "30px", fontFamily: "serif", color: theme.accent }}>
          Productos Destacados
        </h3>
        <Carrusel items={productos} />
      </section>

      <section
        className="container"
        style={{
          padding: "60px 0",
          backgroundColor: theme.card,
          borderRadius: "14px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          marginBottom: "80px",
        }}
      >
        <h3 className="center-align" style={{ marginBottom: "30px", fontFamily: "serif", color: theme.accent }}>
          Ambiente & Experiencia
        </h3>
        <Carrusel items={ambiente} />
      </section>
    </div>
  );
}

export default Galeria;