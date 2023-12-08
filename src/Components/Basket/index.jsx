import React, { useContext } from 'react'
import { BasketContext } from '../../Context/basket'
import './index.scss'
import MainLayout from '../../MainLayout'
import { SearchContext } from '../../Context/search'

function Basket() {
    const { basket, increase, decrease, removeItem, totalPrice } = useContext(BasketContext)
    const {search} = useContext(SearchContext)

    return (
        <div>
            <MainLayout></MainLayout>
            <div className='totalPrice'>
                <p>Total Price: {totalPrice()}</p>
            </div>
            <div className='basketContainer'>
                {basket.length ? (
                    basket.filter((x) => x.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((x) => (
                        <ul className='basketCard' key={x.id}>
                            <li>
                                <img src={x.image} />
                            </li>
                            <li className='title'>{x.title}</li>
                            <li className='price'>${(x.count * x.price).toFixed(2)} <span> $35.00</span></li>
                            <div className="basketBtn">
                                <li><button className='countBtn' onClick={() => increase(x)}>+</button></li>
                                <li className='count'>{x.count}</li>
                                <li><button className='countBtn' onClick={() => decrease(x)}>-</button></li>
                                <li><button className='removeItem' onClick={() => removeItem(x)}>Remove Item</button></li>
                            </div>
                        </ul>

                    ))
                ) : (
                    <p className='basketTextBox'>Basket is empty...</p>
                )}
            </div>


        </div>
    )
}

export default Basket