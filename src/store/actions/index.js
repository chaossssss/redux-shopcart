export const addGood = (id, name, price) => {
  return {
    type: 'ADD_GOOD',
    id,
    name,
    price
  }
}