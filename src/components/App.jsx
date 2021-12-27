import React from 'react'
import Goods from '../containers/Goods'
import CartList from '../containers/Carts'
const ShopApp = () => (
  <div className="clearfix">
    <div className="goods-con">
      <Goods />
    </div>
    <div className="cart-con">
      <CartList />
    </div>
  </div>
)

export default ShopApp