export const STATUS = {
  LOADING  : 'LOADING',
  RESOLVED : 'RESOLVED',
  ERROR    : 'ERROR',
  IDLE     : 'IDLE'
}

export const INIT_STATE = {
  loading : false,
  result  : null,
  error   : null,
  status  : STATUS.IDLE
}

export const reducer = (state, action) => {
  switch(action.type) {
    case STATUS.LOADING: {
      return { 
        ...state, 
        loading : true,
        // error   : null,
        status  : STATUS.LOADING
      }
    }
    case STATUS.RESOLVED: {
      return {
        ...state,
        loading  : false,
        result   : action.response,
        error    : null,
        status   : STATUS.RESOLVED
      }
    }
    case STATUS.ERROR: {
      return {
        ...state,
        loading  : false,
        result   : null,
        error    : action.error,
        status   : STATUS.ERROR
      }
    }
    default: return state
  }   
}