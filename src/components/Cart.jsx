import React from 'react'
import PropTypes from 'prop-types'

let CartList = ({ shops, onIncrease, onDecrease }) => {
  console.log("shops",shops)
  return (
    <div className='cart-box'>
      {
        shops.map((shop,index) => (
          <div key={index} {...shop} className='cart-list'>
            <div>{shop.name}</div>
            <div>总价：{shop.price * shop.count}</div>
            <div>
              <span className='decrease-btn' onClick={() => onDecrease(shop.id)}>-</span>
              {shop.count}
              <span className='increase-btn' onClick={() => onIncrease(shop.id)}>+</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CartList