const shops = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CART':
      return [
        ...state,
        {
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