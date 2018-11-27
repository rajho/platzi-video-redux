import * as actionTypes from '../action-types/index'

export function openModal(mediaId) {
  return {
    type: actionTypes.OPEN_MODAL,
    payload: {
      mediaId
    }      
  }
}

export function closeModal() {
  return {
    type: actionTypes.CLOSE_MODAL
  }
}

export function searchEntities(query) {
  return {
    type: actionTypes.SEARCH_ENTITIES,
    payload: {
      query
    }
  }
}

export function isLoading(value){
  return {
    type: actionTypes.IS_LOADING,
    payload: {
      value
    }
  }
}

export function searchAsyncEntities(query) {
  return (dispatch) => {  
    // fetch
    // XHR
    // trae
    dispatch(isLoading(true))
    setTimeout(() => {

      dispatch(isLoading(false))
      dispatch(searchEntities(query))
      
    }, 5000)
  }
  
  // {
  //   type: actionTypes.SEARCH_ASYNC_ENTITIES,
  //   payload: {
  //     query
  //   }
  // }
}