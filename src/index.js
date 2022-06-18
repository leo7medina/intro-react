import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

/*ReactDOM.render(
  <React.StrictMode>
    <App saludo="HolaLeonardo"/>
  </React.StrictMode>,
  document.getElementById('root')
);*/



const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


// ReactDom.createRoot(
//   <App />,
  
// );



/*ReactDOM.createPortal(
  <App></App>,
  document.getElementById('modal')
);*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();






///----HIGH ORDER COMPONENT
// function App(props) {
//   return (
//     <h1>!{props.saludo}, {props.nombre}!</h1>
//   );
// }


// function withSaludo(saludo) {
//   return function WrapperComponentWithSaludo(WrapperComponent) {
//     return function ComponentTrue(props) {
//       return (
//         <React.Fragment >
//           <WrapperComponent {...props} saludo={saludo} />
//           <p>Estamos acompaniando al WrapperComponent</p>
//         </React.Fragment>
//       );
//     }
//   }
// }

// const AppWithSaludo = withSaludo('Buenas')(App);

// const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <AppWithSaludo nombre="Juanita"/>
//   </React.StrictMode>
// )
