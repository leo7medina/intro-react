import './CreateTodoButton.css'


function CreateTodoButton() {
    
    const onClickButton = (msg) => {
        alert(msg);
    }

    return (
        <button 
            className="CreateTodoButton" 
            /*onClick={() => console.log('clic')}*/
            /*onClick={onClickButton}*/
            onClick={() =>onClickButton('Aqui se debe abrir modal')}>
            +
        </button>
    );
}

export {CreateTodoButton};