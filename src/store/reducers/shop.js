const shops = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GOOD':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          price: action.price,
          count: 1
        }
      ]
    default:
      return state
  }
}

export default shops