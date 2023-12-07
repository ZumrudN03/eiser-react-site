import React, { useContext } from 'react'
import { BasketContext } from '../../Context/basket'
import './index.scss'
import MainLayout from '../../MainLayout'

function Basket() {
    const { basket, increase, decrease, removeItem } = useContext(BasketContext)
    return (
        <div>
            <MainLayout></MainLayout>
            <div className='basketContainer'>
                {basket.length ? (
                    basket.map((x) => (
                        <ul className='basketCard' key={x.id}>
                            <li>
                                <img src={x.image} alt="" />
                            </li>
                            <li className='title'>{x.title}</li>
                            <li className='price'>${x.price} <span> $35.00</span></li>
                            <div className="basketBtn">
                                <li><button className='countBtn' onClick={() => increase(x)}>+</button></li>
                                <li className='count'>{x.count}</li>
                                <li><button className='countBtn' onClick={() => decrease(x)}>-</button></li>
                                <li><button className='removeItem' onClick={() => removeItem(x)}>Remove Item</button></li>
                            </div>
                        </ul>
                    ))
                ) : (
                    <p>Empty</p>
                )}
            </div>

        </div>
    )
}

export default Basket