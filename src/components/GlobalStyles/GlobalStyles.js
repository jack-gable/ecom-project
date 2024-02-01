"use client";
import { createGlobalStyle } from "styled-components";
import { COLORS } from "@/constants";

const GlobalStyles = createGlobalStyle`
  /* Josh Comeau's CSS reset */
  *, 
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, 
  body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, 
  picture, 
  video, 
  canvas, 
  svg {
    display: block;
    max-width: 100%;
  }

  input, 
  button, 
  textarea, 
  select {
    font: inherit;
  }

  p, 
  h1, 
  h2, 
  h3, 
  h4, 
  h5, 
  h6 {
    overflow-wrap: break-word;
  }

  #root, 
  #__next {
    isolation: isolate;
  }

  /* Global Styles */
  html {
    --color-white: hsl(${COLORS.white});
    --color-primary: hsl(${COLORS.primary});
    --color-secondary: hsl(${COLORS.secondary});
    --color-gray-100: hsl(${COLORS.gray[100]});
    --color-gray-300: hsl(${COLORS.gray[300]});
    --color-gray-500: hsl(${COLORS.gray[500]});
    --color-gray-700: hsl(${COLORS.gray[700]});
    --color-gray-900: hsl(${COLORS.gray[900]});
    --color-backdrop: hsl(${COLORS.gray[700]} / 0.8);
  }
`;

export default GlobalStyles;
