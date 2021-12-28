import { connect } from 'react-redux'
import Cart from '../components/Cart'
import { addCount, subCount } from '../store/actions'
const mapStateToProps = state => {
  return {
    shops: state.shops
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrease: (id) => {
      dispatch(addCount(id))
    },
    onDecrease: (id) => {
      console.log("onDecrease",id)
      dispatch(subCount(id))
    }
  }
}

const CartList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)

export default CartList