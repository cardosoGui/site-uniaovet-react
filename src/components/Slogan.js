import React from "react"
import Row from "react-materialize/lib/Row"
import logo from "../img/logo/logo.png"

const Slogan = ({ img }) => {
  const slogan = {
    img: img,
    logo: logo
  }
  return (
    <Row>
      <div
        style={{
          background: `url(${slogan.img})  no-repeat center `,
          height: "24em",
          backgroundSize: "100%",
          opacity: "0.6",
          WebkitFilter: "blur(01px)"
        }}
        alt="Slogan imagem uniao vet materiais veternarios"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          width: "100%",
          top: "5em"
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={slogan.logo}
            alt="logo união vet materiais vetenários"
            height="200px"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3 style={{ color: "#00572d", textAlign: "center" }}>
            Materiais Veterinários
          </h3>
        </div>
      </div>
    </Row>
  )
}

export default Slogan
