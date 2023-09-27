# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Based on the  `DonationPage` and `DonationCard` components, three project featured are explained here:

1. **React Component and State Management**:
   - The code is written in React, a JavaScript library for building user interfaces.
   - React components are defined using functional components (`DonationPage` and `DonationCard`) which can manage their own state using the `useState` hook.

2. **Local Storage**:
   - Local Storage is a web API used to store key-value pairs in a web browser. In this code, `localStorage.getItem("DonationPage")` is used to retrieve data stored in the browser's local storage.
   - The retrieved data is then parsed using `JSON.parse` and assigned to the `donations` state variable.

3. **Conditional Rendering**:
   - Conditional rendering is used to determine whether to display certain elements based on the `notFound` state variable. If `notFound` is truthy, a message is displayed indicating that no data was found. Otherwise, a grid of `DonationCard` components is rendered.
   - Additionally, the "See More" / "See Less" button is conditionally rendered based on the length of the `donations` array.

These are some of the key features and concepts used in the provided code snippets. If you have specific questions about any other features or if you'd like a more detailed explanation of a particular aspect, please let me know.