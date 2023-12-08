import React, { createContext } from 'react'
import useLocalStorage from '../Hook/useLocalStorage'


export const WishlistContext = createContext()

function WishlistProvider({children}) {
    const [wishlist, setWishlist] =useLocalStorage("wishlist", []);

    function addWishlist(item) {
        const index = wishlist.findIndex((x) => x.id === item.id)

        if (index=== -1) {
            setWishlist([...wishlist, {...item}]);
            return
        }else{
            removeWishlist(item)
        }
    }

    function removeWishlist(item) {
        setWishlist(wishlist.filter((x)=> x.id !== item.id))
    }
 const data = {wishlist, addWishlist, removeWishlist}
  return (
    <WishlistContext.Provider value={data}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider