import React, { useState } from 'react'
import styled from 'styled-components'
import { createBackgroundColor } from "styled-components";

const BackgroundColor = createBackgroundColor`
    #root {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
      
      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.react:hover {
        filter: drop-shadow(0 0 2em #61dafbaa);
      }
      
      @keyframes logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      
      @media (prefers-reduced-motion: no-preference) {
        a:nth-of-type(2) .logo {
          animation: logo-spin infinite 20s linear;
        }
      }
      
      .card {
        padding: 2em;
      }
      
      .read-the-docs {
        color: #888;
      }
      
      :root {
        background-color: ${props => props.darkMode ? '#333' : '#6AEBF9'};
        font-family: Roboto, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;
      
        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
      
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
      }
      
      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }
      
      body {
        margin: 0;
        display: flex;
        place-items: center;
        min-width: 320px;
        min-height: 100vh;
      }
      
      h1 {
        font-size: 3.2em;
        line-height: 1.1;
      }
      
      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }
      
      @media (prefers-color-scheme: light) {
        :root {
          color: #213547;
          background-color: #ffffff;
        }
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
      
`

function BackgroundColorComponent({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    }

    return (
        <BackgroundColor darkMode={darkMode} onClick={toggleDarkMode}>
            {children}
        </BackgroundColor>
    )
}

export default BackgroundColorComponent;