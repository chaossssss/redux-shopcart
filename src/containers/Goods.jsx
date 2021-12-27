import React from 'react'
import { connect } from 'react-redux'
import { addGood } from '../store/actions/index'
let GoodsList = [{
  id: 1,
  name: '手机',
  price: 5000
}, {
  id: 2,
  name: '电脑',
  price: 6000
}]

let Goods = ({ dispatch }) => {
  return (
    <div className='good-box'>
      {GoodsList.map((item, index) => {
        return (
          <div key={index} className='good-list' 
            onClick={() => 
              {dispatch(addGood(item.id, item.name, item.price))}}
          >
            <div>{item.name}</div>
            <div>{item.price}</div>
          </div>
        )
      })}
    </div>
  )
}
Goods = connect()(Goods)
export default Goods