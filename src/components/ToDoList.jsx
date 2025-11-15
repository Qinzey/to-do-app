import Item from './Item';

function ToDoList({ todos }) {
    return (
        <ol className="todo_list">
            {todos && todos.length > 0 ? (
            todos?.map((item, index) => <Item key={index} item={item} />)
            ) : (
            <p>Nothing added.</p>
            )}
        </ol>
    );
}
export default ToDoList;