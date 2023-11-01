import './main.css';
import { BsArrowDown } from 'react-icons/bs';

/* Este componenete recibe un parámétro para mostrar "PASOS" */
const Main = ({ onMostrarComponente }) => {

    return (
        <div>

            <div className="main-container">
                <div className="maintext">
                    <p data-text="conocé los pasos para">Conocé los pasos para</p>
                    <h1>
                        <div className='letter-one'>Un</div>
                        <div className='letter-two'>Buen</div>
                        <div className='letter-three'>Mate</div>
                    </h1>

                    <BsArrowDown className="arrow" onClick={onMostrarComponente} />

                </div>
            </div>
        </div>
    );
}

export default Main;
