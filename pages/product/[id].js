import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/Header'
import { ArrowLeftIcon } from '@heroicons/react/solid'
const Product = ({ product }) => {
    const { id, title, price, description, category, image, rating } = product
    return (
        <div className=''>
            <Header />
            <div className='product-details flex items-center flex-col md:flex-row md:justify-between w-[90%] pt-3 m-auto'>
                <div className='w-2/1'>
                    <Image src={`${image}`} alt="product" width={500} height={600} />
                    <div>
                        <Link href={`/`} passHref className='Button'>Add to Cart</Link>
                        <Link href={`/cart`} passHref className='Button'>Buy Now</Link>
                    </div>
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
            </div></div>
    )
}

export default Product


export async function getServerSideProps({ params }) {
    // const product = fetch(`https://fakestoreapi.com/product/${params.id}`).then((res) => res.json())
    const product = await fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then(res => res.json())
    console.log(product)
    return {
        props: {
            product
        }
    }

}