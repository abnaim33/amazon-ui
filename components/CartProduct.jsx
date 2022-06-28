import React from 'react'
import Image from 'next/image'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import Link from 'next/link'
const CartProduct = ({ product }) => {
    const { category, description, id, image, price, quantity, title } = product
    console.log(product, 'cart product')

    return (
        <div className='product-details flex items-center flex-col md:flex-row md:justify-between w-[90%] pt-3 m-auto'>
            <div className='md:mr-5'>
                <Image src={`${image}`} alt="product" width={500} height={600} />

            </div>


            <div>

                <div className='flex items-center'>
                    <ArrowLeftIcon className='h-5' />
                    <Link href={`/`} passHref>Back to Previous page</Link>
                </div>

                <h4 className='my-3 line-clamp-3'>{title}</h4>

                <p className=' text-xm italic text-gray-400'>{category}</p>

                <p className='text-xs my-2 line-clamp-2'>{description}</p>


                <p>{price}</p>
            </div>
        </div>
    )
}

export default CartProduct