import { useState } from 'react';
import './Pasos.css';
/* Importo la transición */
import transition from '../../transition';

const Pasos = () => {
    /* Estado del contenedor de Tip*/
    const [tipVisible, setTipVisible] = useState(false);

    return (

        <section id='pasos'>
            <div className='pasos-container'>

                <div className='intro'>
                    <p className='text'>Basándome en diversas fuentes intelectuales (mi familia), te voy a contar cuales son los mejores procedimientos para preparar el mate</p>
                </div>

                {/* Contenedor De Los Pasos */}
                <div className='steps-container'>

                    {/* PASO 1 */}
                    <div className='step-one circle'>
                        <img className='step-img' src="public/paso1.jpg" alt="en la mesada de la cocina: un mate, un colador y yerba"
                        />
                    </div>
                    <p>Colar la Yerba. Podés usar despolvillador (es más cool)</p>

                    {/* PASO 2 */}
                    <p>Calentar el agua sin dejar que hierva. El agua se debe tomar caliente, no hirviendo</p>
                    <div className='step-two circle'>
                        <img className='step-img' src="public/paso2.jpg" alt="pava con agua sobre hornalla de cocina"
                        />
                    </div>
                    {/* PASO 3 */}

                    <div className='step-three circle'>
                        <img className='step-img' src="public/paso 3.png" alt="dibujo de dos manos sosteniendo un mate"
                        />
                    </div>
                    <p>Luego de poner la yerba en el mate, con ambas manos lo volteas y le sacudis el polvo</p>

                    {/* PASO 4 */}
                    <p>No te olvides de dejarle el huequito para el agua. Buenísimo, ahora estás listo para tomar unos buenos mates</p>
                    <div className='step-four circle'>
                        <img className='step-img' src="public/messi tomando mate.jpg" alt="messi tomando mate con la copa del mundo"
                        />

                        {/* Botón TIP */}
                        <button className={`tip-btn ${tipVisible ? 'clicked' : ''}`} onClick={() => setTipVisible(!tipVisible)}>
                            Tip
                        </button>

                        {/* Texto que muestra el botón */}
                        <div className='tip-container' style={{ display: tipVisible ? 'block' : 'none' }}>
                            <p className='tip'>Tip de entrerriana: Podés ponerle cáscara de naranja o de limón. Coco rayado también queda muy rico</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default transition(Pasos);
