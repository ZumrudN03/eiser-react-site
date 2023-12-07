import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MainLayout from '../../MainLayout';

function HomeDetail() {
    let { id } = useParams();
    const [productDetail, setProductDetails] = useState([]);

    useEffect(() => {
        getProductDetails();
    }, [])

    async function getProductDetails() {
        const data = await fetch(`https://fakestoreapi.com/products` + id);
        const res = await data.json();
        setProductDetails(res);
    }

    return (
        <div className='productDetail'>
            <MainLayout></MainLayout>
            {productDetail &&
            <ul className="cardList" key={productDetail.id}>
                <li className='cardImg'> <img src={productDetail.image} alt="" /></li>
                <li className='title'>{productDetail.title}</li>
                <li className='price'>${productDetail.price} <span> $35.00</span></li>
            </ul>}
        </div>
    )
}

export default HomeDetail