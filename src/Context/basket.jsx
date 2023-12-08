import React, { createContext } from 'react'
import useLocalStorage from '../Hook/useLocalStorage';

export const BasketContext = createContext()

function BasketProvider({children}) {
    const [basket, setBasket] = useLocalStorage("basket",[]);

    function addBasket(item) {
        const index = basket.findIndex((x) => x.id === item.id);
        if (index === -1) {
            setBasket([...basket,{...item,count:1}]);
            return
        }
        basket[index].count++   
        setBasket([...basket])
    }

    function increase(item) {
        const index = basket.findIndex((x) => x.id === item.id);
        basket[index].count++
        setBasket([...basket])
    }

    function decrease(item) {
        const index = basket.findIndex((x) => x.id === item.id);
        if (basket[index].count !== 1) {
            basket[index].count--
            setBasket([...basket])
        }
        return
    }

    function removeItem(item) {
        setBasket(basket.filter((x)=> x.id !== item.id))
    }

    function totalPrice() {
       return basket.reduce((acc, basket) => acc + basket.count * basket.price, 0).toFixed(2)
    }

    const data = {basket, addBasket, increase, decrease, removeItem,totalPrice}
    return (
        <BasketContext.Provider value={data}>
            {children}
        </BasketContext.Provider>

    )
}

export default BasketProvider