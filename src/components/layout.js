// src/components/layout.js
// ここが表示される。
import React from "react"
import "../styles/layout.scss"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout