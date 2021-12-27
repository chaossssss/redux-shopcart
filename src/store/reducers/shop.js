const shops = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GOOD':
      let result = state.findIndex(item => {
        return item.id === action.id
      })
      if(result === -1) {
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            price: action.price,
            count: 1
          }
        ]
      }else {
        let good = state[result]
        good.count = good.count + 1
        let newState = Object.assign({}, ...state, good)
        return [newState]
      }
    default:
      return state
  }
}

export default shops