import React, { Component } from 'react'
import { Consumer } from './wishlistContext';

export default class WishlistAdd extends Component {
    state = {
        id: 4,
        title: "",
        purchased: false
    }

    update = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    add = (dispatch, e) => {
        e.preventDefault()
        const newItem = this.state
        dispatch({ type: "ADD", payload: newItem })
        this.setState({ title: "" })
    }
    render() {
        return (
            <Consumer>{value => {
                const { dispatch } = value
                return <form onSubmit={this.add.bind(this, dispatch)}>
                    <input type="text" className="form-control rounded-0" placeholder="Add Wishlist Item..." onChange={this.update} value={this.state.value} />
                    <button className="form-control rounded-0 btn-secondary" type="submit">Add Item</button>
                </form>
            }}</Consumer>

        )
    }
}
