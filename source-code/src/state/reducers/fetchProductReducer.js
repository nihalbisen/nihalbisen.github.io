const reducer = (state=0, action) =>{

    if(action.type === 'fetchid'){
        state=0
        return state + action.payload
    }
    else{
        return state;
    }
} 

export default reducer;