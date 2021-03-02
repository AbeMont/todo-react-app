function Reducer( state, action ){

    switch(action.type){

        case 'CREATE_TASK': 
        return { ...state, tasks: [ ...state.tasks, action.payload ] }
        
        case 'FETCH_ALL':
        return { ...state, tasks: action.payload, loading: false  }

        case 'DELETE_TASK': 
        return { ...state, tasks: state.tasks.filter( task => task._id !== action.payload ) }

        case 'UPDATE_TASK': 
        return { ...state, tasks: state.tasks.map( task => {
                        action.payload === task._id && (task.complete = !task.complete) 
                        return task
                    }) 
                }
        
        
  

        default : return state;
    }

}

export default Reducer;