import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import "normalize.css"
import "../assets/css/main.css"

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default layout
