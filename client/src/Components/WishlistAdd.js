import React, { useState, useEffect } from 'react'
import { Consumer } from './wishlistContext';
import API from '../Utils/API';
import { List, ListItem } from '../Components/layout/List';
import { LOGOUT } from '../actions/types';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function WishlistAdd() {

    const [wishlists, setWishlists] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load Wishlist once
    useEffect(() => {
        loadWishlist()
    }, [])

    function loadWishlist() {
        API.getWishlists()
            .then(res =>
                setWishlists(res.data)
            )
            .catch(err => console.log(err));
    };

    // Handles new input field
    function handleWishlistInput(event) {
        const { title, value } = event.target;
        setFormObject({ ...formObject, [title]: value })
    };

    // Delete Wishlist Item
    function deleteWishlist(id) {
        API.deleteWishlist(id)
            .then(res => loadWishlist())
            .catch(err => console.log(err));
    };

    // New WishlistItem then reload list
    function handleWishlistSubmit(event) {
        if (formObject.title) {
            API.saveWishlist({
                title: formObject.title,
                purchased: false
            })
                .then(res => loadWishlist())
                .catch(err => console.log(err));
        }
    };


    // update = (e) => {
    //     this.setState({
    //         title: e.target.value
    //     })
    // }

    // add = (dispatch, e) => {
    //     e.preventDefault()
    //     const newItem = this.state
    //     dispatch({ type: "ADD", payload: newItem })
    //     this.setState({ title: "" })
    // }


    // return (
    //     <Consumer>{value => {
    //         const { dispatch } = value
    //         return <form onSubmit={this.add.bind(this, dispatch)}>
    //             <input type="text" className="form-control rounded-0" placeholder="Add Wishlist Item..." onChange={this.update} value={this.state.value} />
    //             <button className="form-control rounded-0 btn-secondary" type="submit">Add Item</button>
    //         </form>
    //     }}</Consumer>

    // )

    return (
        <>

            <form>
                <input type="text" className="form-control rounded-0" placeholder="Add Wishlist Item..." onChange={handleWishlistInput} name="title" />
                <button className="form-control rounded-0 btn-secondary" type="submit" onClick={handleWishlistSubmit}>Add Item</button>
            </form>
            {wishlists.length ? (
                <List>
                    {wishlists.map(wishlist => (
                        <ListItem key={wishlist._id}>
                            <Link to={"/wishlists/" + wishlist._id}>
                                {wishlist.title}
                            </Link>
                        </ListItem>
                    ))}
                </List>
            ) : (
                    <h3>No Wishlist Items Yet</h3>
                )}
        </>
    )
}


