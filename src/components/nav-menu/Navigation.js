import React from "react"

import Navbar from "react-materialize/lib/Navbar"
import NavItem from "react-materialize/lib/NavItem"
import Footer from "react-materialize/lib/Footer"
import { link } from "fs"

const Navigation = ({ children }) => {
  const link = [
    {
      a: "/",
      title: "Home"
    },
    {
      a: "/sobre-nos",
      title: "Sobre Nós"
    },
    {
      a: "/produtos",
      title: "Produtos"
    },
    {
      a: "/contato",
      title: "Contato"
    }
  ]

  return (
    <>
      <Navbar className="color-site" fixed right>
        {link.map((link, i) => (
          <NavItem key={i} href={link.a}>
            {link.title}
          </NavItem>
        ))}
      </Navbar>
      {children}
      <Footer
        className="color-site"
        copyrights="&copy 2018 Copyright Todos os direitos reservados a União-Veterinária"
        links={
          <ul>
            {link.map((link, i) => (
              <a className="grey-text text-lighten-3" key={i} href={link.a}>
                <li>{link.title}</li>
              </a>
            ))}
          </ul>
        }
      >
        <h5 className="white-text">União-Veterinária</h5>
        <p className="grey-text text-lighten-4">
          Tudo que você precisa esta aqui.
        </p>
      </Footer>
    </>
  )
}

export default Navigation
