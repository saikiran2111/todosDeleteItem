// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteUser} = props
  const {title, id} = todoDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="eachTodo-container">
      <p className="todo-title">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
