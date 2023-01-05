// ** Icons Import
import { MdOutlineDesignServices } from 'react-icons/md'
import { BsCartCheck, BsShop } from 'react-icons/bs'

export default [
    {
        id: 'shop',
        title: 'Shop',
        icon: <BsShop size={20} />,
        children: [
            {
                id: 'subscription',
                title: 'Subscription',
                icon: <MdOutlineDesignServices />,
                navLink: '/shop/subscription'
            },
            {
                id: 'product',
                title: 'Product',
                icon: <BsCartCheck />,
                navLink: '/shop/product'
            }
        ]
    }
]
