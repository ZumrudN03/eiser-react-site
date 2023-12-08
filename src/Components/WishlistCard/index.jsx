import React, { useContext } from 'react'
import { WishlistContext } from '../../Context/wishlist'
import './index.scss'
import { BasketContext } from '../../Context/basket'
import { SearchContext } from '../../Context/search'

function WishlistCard() {
    const { wishlist, removeWishlist } = useContext(WishlistContext)
    const { addBasket } = useContext(BasketContext)
    const {search} = useContext(SearchContext)
    return (
        <div className='wishlistContainer'>
            {wishlist.length ? (
                wishlist.filter((x) => x.title.toLowerCase().includes(search.toLowerCase())
                ).map((x) => (
                    <ul className='wishlistCard'>
                        <li>
                            <img src={x.image} />
                        </li>
                        <li className='title'>Title: {x.title}</li>
                        <li className='price'>Price: {x.price}</li>
                        <div className="wishlistBtn">
                            <li><button className='removeWishlist' onClick={() => removeWishlist(x)}>Remove Item</button></li>
                            <li><i class="fa-solid fa-cart-shopping" onClick={() => addBasket(x)}></i></li>
                        </div>
                    </ul>
                ))) : (<p className='wishlistTextBox'>Wishlist is empty...</p>)
            }
        </div>
    )
}

export default WishlistCard