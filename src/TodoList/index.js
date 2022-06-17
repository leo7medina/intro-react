import './TodoList.css';

function TodoList(props) {
    return(
        <section className="TodoList-container">
            
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}
            
            <ul>
                {props.searchedTodos.map(props.render)}
            </ul>
        </section>
    );
}

export {TodoList};