import { connect } from 'react-redux'
import Cart from '../components/Cart'
import { addGood } from '../store/actions'
const mapStateToProps = state => {
  return {
    shops: state.shops
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onShopClick: (id, name, price) => {
      dispatch(addGood(id, name, price))
    }
  }
}

const CartList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)

export default CartList