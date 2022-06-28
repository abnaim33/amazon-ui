import React, { useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Link from 'next/link'
// import Image from 'next/image'
// import Currency from 'react-currency-formatter';
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../store/reducers/cartReducer'
const MAX_RATING = 5
const MIN_RATING = 1

const Product = ({ id, title, price, description, category, image }) => {
    const quantity = 1
    const cartProductId = useSelector((state) => state.cart.products.id)
    // console.log(cartProductId)
    const rating = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING) + MIN_RATING)
    )

    const [hasPrime] = useState(Math.random() < 0.5)
    // const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className="product relative flex flex-col 
         mx-auto my-5 bg-white z-30 p-10 w-[270px] height-[400px]"

        >
            <p className='absolute top-2 right-2 text-xm italic text-gray-400'>{category}</p>

            <Image src={image} height={200} width={200} objectFit="contain"
                alt="product_pic" />

            <h4 className='my-3 line-clamp-3'>{title}</h4>

            <div>
                {Array(rating).fill().map((_, i) => (
                    <StarIcon className='h-5 text-yellow-500' key={i} />
                ))}
            </div>




            <p className='text-xs my-2 line-clamp-2'>{description}</p>






            <div className='flex justify-between shop_button md:invisible hover:visible'>

                <button className='bg-yellow-400 text-white border-yellow-400 hover:bg-yellow-300 px-2 py-1'
                    onClick={() => dispatch(addProduct({ id, title, price, description, category, image, quantity }))}>Shop now</button>

                <Link href={`/product/${id}`} passHref >
                    <button className='px-2 py-1 bg-black text-white hover:bg-gray-50 border-1'>View Details</button>
                </Link>
            </div>
        </div>
    )
}

export default Product