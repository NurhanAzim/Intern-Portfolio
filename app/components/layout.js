"use client";
import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? "dark" : ""}>

            <main className="min-h-screen bg-black px-10 dark:bg-black">
                <Navbar />
                {children}
            </main>
            <Footer />
        </div>
    )
}