const shops = (state = [], action) => {
  let result = state.findIndex(item => {
    return item.id === action.id
  })
  console.log("result", result)
  switch (action.type) {
    case 'ADD_GOOD':
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
      case 'SUB_COUNT':
        if(state[result].count > 1) {
          return state.map(item => {
            if(item.id === action.id) {
              item.count = item.count - 1
              return item
            }else{
              return item
            }
          })
        } else {
          return state.filter(item => {
            return item.id !== action.id
          })
        }
    default:
      return state
  }
}

export default shops