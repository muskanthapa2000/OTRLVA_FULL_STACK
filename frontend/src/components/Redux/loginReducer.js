import {ONLY_LOGIN,ALL_ROUTE} from './actionTypes'

const initial={
    isLogin:false
}

const loginReducer = (state=initial,action)=>{

    if(action.type==ONLY_LOGIN){
        return {
            ...state,
            isLogin:true
        }
    }

   else if(action.type==ALL_ROUTE){
        return {
            ...state,
            isLogin:false
        }
    }
  return state
}

export {loginReducer}