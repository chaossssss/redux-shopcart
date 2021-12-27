import React from 'react'
import PropTypes from 'prop-types'

let CartList = ({ shops }) => {
  console.log("shops",shops)
  return (
    <div className='cart-box'>
      {
        shops.map((shop,index) => (
          <div key={index} {...shop} className='cart-list'>
            <div>{shop.name}</div>
            <div>总价：{shop.price * shop.count}</div>
            <div>
              <span className='decrease-btn'>-</span>
              {shop.count}
              <span className='increase-btn'>+</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CartList