import './CreateTodoButton.css'


function CreateTodoButton(props) {
    
    const onClickButton = () => {
        //props.setOpenModal(!props.openModal);
        props.setOpenModal(prevState => !prevState);
    }

    return (
        <button 
            className="CreateTodoButton" 
            /*onClick={() => console.log('clic')}*/
            /*onClick={onClickButton}*/
            onClick={onClickButton}>
            +
        </button>
    );
}

export {CreateTodoButton};