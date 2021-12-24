export const addGood = ({name, price}) => {
  return {
    type: 'ADD_GOOD',
    name,
    price
  }
}