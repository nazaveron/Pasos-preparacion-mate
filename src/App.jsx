import './App.css';
/* Importamos componentes */
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Pasos from './components/Pasos/Pasos';

import { useState } from 'react';

function App() {

  const [mostrarComponente, setMostrarComponente] = useState(false);

  return (

    <>
      <Header />
      <Main onMostrarComponente={() => setMostrarComponente(true)} />
      {mostrarComponente && <Pasos />}
      <Footer />
    </>
  );
}

export default App;