import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './index.scss'
import { BasketContext } from '../../Context/basket';
import { WishlistContext } from '../../Context/wishlist';

function HomeDetailCard() {
    let { id } = useParams();
    const [productDetail, setProductDetails] = useState([]);
    const { addBasket } = useContext(BasketContext)
    const { addWishlist } = useContext(WishlistContext)



    useEffect(() => {
        getProductDetails();
    }, [])

    async function getProductDetails() {
        const data = await fetch(`https://fakestoreapi.com/products/` + id);
        const res = await data.json();
        setProductDetails(res);
    }
    return (
        <div className='productDetail'>
            <div className="productDetailCard">
                {productDetail &&
                    <ul className="cardList" key={productDetail.id}>
                        <div className='cardImgDiv'>
                            <li className='cardImg'> <img src={productDetail.image} /></li>
                        </div>
                        <div className="productDetailCardText">
                            <li className='title'>Title: {productDetail.title}</li>
                            <li className='category'>Category: {productDetail.category}</li>
                            <li className='description'>Description: {productDetail.description}</li>
                            <li className='price'>Price: ${productDetail.price} <span> $35.00</span></li>
                        </div>
                        <i class="fa-solid fa-cart-shopping" onClick={() => addBasket(productDetail)}></i>
                        <i class="fa-regular fa-heart" onClick={()=>addWishlist(productDetail)}></i>
                    </ul>
                }
            </div>
        </div>
    )
}

export default HomeDetailCard