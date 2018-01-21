export function authReducer (state={}, action){
    switch(action.type){
        case 'AUTH_USER':
            return{...state,authenticated:true,error:''}

        case 'UNAUTH_USER':
            return {...state,authenticated:false,error:''};

        case 'AUTH_ERR':
            return {...state,authenticated:false,error:action.payload};    
        
    }
    return state;
}