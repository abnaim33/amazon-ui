import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { useSelector, useDispatch } from 'react-redux'
const Header = () => {

    const cart = useSelector((state) => state.cart);
    console.log(cart, 'header')
    const dispatch = useDispatch()

    return (
        <header>
            <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
                <div className='mt-5 flex items-center
                 flex-grow sm:flex-grow-0'>
                    <Link href={'/'} passHref>

                        <Image src='https://links.papareact.com/f90'
                            width={150}
                            height={40}
                            alt="logo"
                            objectFit='contain'
                            className='cursor-pointer' />
                    </Link>
                </div>


                <div className='hidden sm:flex items-center h-10 rounded-md
                 bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer'>
                    <input type="text"
                        className='p-2 h-full w-6 flex-grow
                         flex-shrink rounded-l-md focus:outline-none px-4' />
                    <SearchIcon className='h-12 p-4' />
                </div>

                {/* right */}
                <div className='text-white flex items-center text-xs
                space-x-6 mx-6 whitespace-nowrap'>
                    <div className=' hover:outline link'>
                        <p>Hello Naim</p>
                        <p className='font-extrabold md:text-sm'>Account & Lists</p>
                    </div>


                    <div className=' hover:outline  link'>
                        <p>Returns</p>
                        <p className='font-extrabold md:text-sm'>& Orders</p>
                    </div>

                    <Link href={'/cart'} passHref>
                        <a className=' hover:outline  link flex items-center'
                        >
                            <ShoppingCartIcon className='h-8' />
                            <span className="relative mb-8 mr-1 bg-yellow-400 px-2 py-1 rounded-full
                         font-bold text-black">{cart.products.length}</span>
                            <p className='hidden md:inline font-extrabold md:text-sm'>Cart</p>
                        </a>
                    </Link>
                </div>
            </div>


            <div className='flex items-center text-white
             bg-amazon_blue-light space-x-3 p-2 pl-6'>
                <p className='link flex items-center'>
                    <MenuIcon className='h-6 mx-1' />
                    All

                </p>

                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
            </div>
        </header>
    )
}

export default Header