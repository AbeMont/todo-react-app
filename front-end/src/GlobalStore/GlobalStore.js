import { createContext, useReducer, useEffect } from 'react';
import Reducer from './../Reducer/Reducer';

import axios from 'axios';


const initialState = {
    tasks: [],
    loading: true
};

export const GlobalContext = createContext( initialState );

export function GlobalStore({ children }){

    const [ state, dispatch ] = useReducer(Reducer, initialState);

    useEffect(()=>{

        axios.get('http://localhost:5000/api/getitems').then(res=>{

            dispatch({
                type: 'FETCH_ALL',
                payload: res.data.data
            });

        });

    },[])


    function createTask( task ){

        const newTask = {
            task: task
        }

        axios.post('http://localhost:5000/api/additem', newTask).then( res => {

            // As we added a new task, we need to display it on the UI
            dispatch({
                type: 'CREATE_TASK',
                payload: res.data.data
            })

        }).catch(error => console.log(error.message))
        
    }

    function deleteTask( id ){

        axios.delete(`http://localhost:5000/api/delteitem/${id}`).then((res)=>{

            dispatch({
                type: 'DELETE_TASK',
                payload: res.data.data._id
            });

        });

    }

    function completeTask( id ){

        axios.patch(`http://localhost:5000/api/completetask/${id}`).then( res => {

            dispatch({
                type: 'UPDATE_TASK',
                payload: res.data.data._id
            });

        })
    }

    return(
        <GlobalContext.Provider value={ { state: state, tasks: state.tasks, createTask, deleteTask, completeTask } }>
            { children }
        </GlobalContext.Provider>
    )
}