import React from 'react'

let GoodsList = [{
  name: '手机',
  price: 5000
},{
  name: '电脑',
  price: 6000
}]

let Goods = ({ dispatch }) => {
  return (
    <div className='good-box'>
      {GoodsList.map((item,index) => {
        return (
          <div key={index} className='good-list'>
            <div>{item.name}</div>
            <div>{item.price}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Goods