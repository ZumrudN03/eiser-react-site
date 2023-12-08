import React, { useContext, useEffect, useState } from 'react'
import './index.scss'
import { BasketContext } from '../../Context/basket'
import { Link } from 'react-router-dom'
import { WishlistContext } from '../../Context/wishlist'
import { SearchContext } from '../../Context/search'

const HomeCard = () => {
    const [product, setProduct] = useState([])
    const { addBasket } = useContext(BasketContext)
    const {addWishlist} = useContext(WishlistContext)
    const {search} = useContext(SearchContext)
function getFetch() {
    
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProduct(data))
    
}
useEffect(() => {
getFetch()
}, [])

    return (
        <div className='home_container'>
            <div className='homeCard'>
                {product.filter((x) => x.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((x) =>
                    <ul key={x.id}>
                        <li>
                            <img src={x.image} alt="" />
                            <div className='cardHover'>
                                <Link to={"/productdetail/" + x.id}>
                                    <i class="fa-regular fa-eye"></i>
                                </Link>
                                <i class="fa-regular fa-heart" onClick={()=>addWishlist(x)}></i>
                                <i class="fa-solid fa-cart-shopping" onClick={() => addBasket(x)}></i>
                            </div>
                        </li>
                        <li className='title'>{x.title}</li>
                        <li className='price'>${x.price} <span> $35.00</span></li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default HomeCard