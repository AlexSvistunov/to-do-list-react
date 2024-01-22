import './Item.css'

export default function Item(props) {
   
    return(
        <li className='todo-item' data-index={props.index}>
            <span className='todo-item__text'>{props.text}</span>

            <div className="todo-item__buttons">
                <button className="todo-item__btn" onClick={() => props.delete(props.index)}>X</button>
                <button className="todo-item__btn" onClick={props.edit}>Edit</button>
                <button className="todo-item__btn" onClick={(e) => props.done(e.target)}>Done</button>
            </div>
        </li>
    )
}