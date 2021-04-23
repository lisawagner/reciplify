import React from "react"

const footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()}
        <span> reciplify</span> ~ built with{" "}
        <a href="https://www.gatsbyjs.com">love from gatsby</a>
      </p>
    </footer>
  )
}

export default footer
