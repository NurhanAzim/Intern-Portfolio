"use client";
import { useState } from "react";
import Navbar from "./navbar";

export default function Layout({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? "dark" : ""}>
            
            <main className="bg-black px-10 dark:bg-black">
                <Navbar />
                {children}
                </main>
        </div>
    )
}