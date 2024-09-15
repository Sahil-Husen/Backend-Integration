# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# What is Proxy and Why it is used.
- Proxy is used when we want to all the Route come or access any route Through it.
- All the Routes will go through this Proxy
- As http://localhost:3000/api/getData
- Here /api/getData is a poxy that we can set that every route go through it.


# How to set Proxy in Vite for React Js
- Go to vite.config.js and set these below things after (export default defaultConfig)
- server:{
   - proxy:{
    -  '/api':'http://localhost:3000',
  -  },
  - },
