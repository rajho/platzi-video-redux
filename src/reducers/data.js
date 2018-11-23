function data(state, action) {
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      // action.payload.query
      let results = []
      if (action.payload.query){
        const list = state.data.categories[2].playlist
        // RETO001: Iterar sobre todos los elementos de los playlist de las distintas categorias
        results = list.filter((item) => {
          return item.author.toLowerCase().includes(action.payload.query.toLowerCase())
        })
      }
      return {
        ...state,
        search: results
      }
    }
    default:
      return state
  }
}

export default data