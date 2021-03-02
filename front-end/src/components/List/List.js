import { useContext } from 'react';
import { GlobalContext } from './../../GlobalStore/GlobalStore';

import ListItem from './ListItem/ListItem';
import Form from './../Form/Form';
import Spinner from './../Spinner/Spinner';

function List(){

    const { tasks, state } = useContext( GlobalContext );

    console.log(tasks);
    console.log(state);
    
    return(
        <>
        <h1> Todo List </h1>
        
        { state.loading ?  <Spinner/> :

        <ul className='list-group mb-4'>
            { tasks.map( (task, i)=> (
            <ListItem key={ i } text={ task.task } completed={ task.complete } taskID={task._id} />) 
            ) }
        </ul>

        }
        
        <Form/>

        </>
    )
}

export default List;