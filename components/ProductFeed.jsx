import React from 'react'
import Product from './Product'

const ProductFeed = ({ products }) => {
    return (
        <div className='bg-gray-200 top-[-1.8rem] relative'>
            <div className='relative top-[-5rem] z-50 flex justify-between flex-wrap'>
                {
                    products.map(({ id, title, price, description, category, image }) => (
                        <Product key={id}
                            title={title}
                            id={id}
                            price={price}
                            description={description}
                            category={category}
                            image={image} />
                    ))
                }
            </div>

        </div>
    )
}

export default ProductFeed