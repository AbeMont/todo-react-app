import { useContext } from 'react';
import { GlobalContext } from './../../../GlobalStore/GlobalStore';
import Button from './../../Button/Button';

function ListItem({text, completed, taskID }){

    const { deleteTask, completeTask } = useContext(GlobalContext);

    return (
        <li className="list-group-item">
            <div className='d-flex justify-content-between'>       
                <Button  text={ completed ? "Completed" : "Not Completed" } btnStatus={ completed ? "success" : "primary" } clickHandler={ ()=>completeTask(taskID) }/> 
                    {text}
                <Button text="Delete" btnStatus="danger" clickHandler={()=>deleteTask(taskID)}/>        
            </div>  
        </li>
    )

}

export default ListItem;