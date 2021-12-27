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
        return state.map(item => {
          if(item.id === action.id) {
            item.count = item.count + 1
          }
          return item
        })
      }
      case 'ADD_COUNT':
        return state.map(item => {
          if(item.id === action.id) {
            item.count = item.count + 1
          }
          return item
        })
    default:
      return state
  }
}

export default shops