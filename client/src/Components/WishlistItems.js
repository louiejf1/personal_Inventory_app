import React from 'react'
import { Component } from 'react'
import { Consumer } from '../Components/wishlistContext';

export default class WishlistItems extends Component {
    style = () => {
        const { purchased } = this.props.items
        return { textDecoration: purchased ? "line-through" : "none" }
    }

    toggle = (id, dispatch) => {
        dispatch({ type: "TOGGLE", payload: id })
    }

    remove = (id, dispatch) => {
        dispatch({ type: "REMOVE", payload: id })
    }

    render() {
        const { title, id } = this.props.items
        return (
            <Consumer>{value => {
                const { dispatch } = value
                return <h3 className="text-dark text-center p-1 bg-light" style={this.style()}>
                    <i className="far fa-times-circle fa-sm float-left m-1 text-danger" onClick={this.remove.bind(this, id, dispatch)}></i>{title}
                    <input type="checkbox" className="m-2 float-right" onChange={this.toggle.bind(this, id, dispatch)} />
                </h3 >
            }}
            </Consumer>

        )
    }
}
