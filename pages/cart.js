import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../components/CartProduct';
import Header from '../components/Header';

const cart = () => {
    const products = useSelector((state) => state.cart.products);
    // console.log(products)
    const total = useSelector((state) => state.cart.total);
    // console.log(total, 'total')
    const quantity = useSelector((state) => state.cart.quantity);
    // console.log(quantity, 'quantity')
    return (
        <div>
            <Header />

            <div className='flex md:flex-row flex-col'>
                <div>

                    {products.length === 0 ? <p>Emty</p> :
                        products.map((product) => (
                            <CartProduct key={product.id} product={product} />
                        ))
                    }
                </div>
                <div className='md:w-[100px] flex'>
                    <p>total <span className='font-bold'> {total}</span></p>
                </div>
            </div>
        </div>

    )
}

export default cart