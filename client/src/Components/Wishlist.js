import React from 'react'
import WishlistItems from './WishlistItems';
import { Consumer } from './wishlistContext';


const Wishlist = () => {


    return (
        <div>
            <div>

                <Consumer>

                    {value => {
                        const { items } = value
                        return items.map(t => <WishlistItems items={t} key="t.id"></WishlistItems>)
                    }}
                </Consumer>
            </div>


        </div>

    )

}

export default Wishlist;
