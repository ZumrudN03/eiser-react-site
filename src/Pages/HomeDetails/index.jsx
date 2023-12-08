import React from 'react'
import MainLayout from '../../MainLayout';
import HomeDetailCard from '../../Components/HomeDetailCard';

function HomeDetail() {
    return (
        <div className='productDetail'>
            <MainLayout></MainLayout>
            <HomeDetailCard></HomeDetailCard>
        </div>
    )
}

export default HomeDetail