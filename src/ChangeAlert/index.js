import {useStorageListener} from './useStogareListener';
import './ChangeAlert.css';

function ChangeAlert({sincronize}) {

    const {show, toggleShow} = useStorageListener(sincronize);

    if (show) {
        return (
            <div className='ChangeAlert-bg'>
                <div className='ChangeAlert-container'>
                    <p>Parece que cambiaste tus TODOs en otra pestana o ventana del navegardor</p>
                    <p>Quieres sincronizar tus TODOs?</p>
                    <button className="ChangeAlert-container button"
                    onClick={toggleShow}>Yes</button>
                </div>
            </div>

        );
    } else {
        return null;
    }
}

export {ChangeAlert};