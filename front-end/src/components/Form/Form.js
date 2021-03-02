import { useContext, useState } from 'react';
import { GlobalContext } from './../../GlobalStore/GlobalStore';

function Form(){

    const [ inputTask, setInputTask ] = useState('');
    const { createTask } = useContext( GlobalContext );

    function addTask(e) {

        e.preventDefault();
        createTask(inputTask);
        setInputTask('');

    }

    return(
        <form onSubmit={ addTask }>
            <div className="input-group">

                <input 
                    type="text" 
                    className="form-control"  
                    name="task" 
                    onChange={(e)=>setInputTask(e.target.value)} 
                    value={inputTask}
                    placeholder="New Task..."/>

                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Add Item</button>
                </span>

            </div>
        </form>
    )
}

export default Form;