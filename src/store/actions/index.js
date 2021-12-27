export const addGood = (id, name, price) => {
  return {
    type: 'ADD_GOOD',
    id,
    name,
    price
  }
}

export const addCount = (id) => {
  return {
    type: 'ADD_COUNT',
    id
  }
}