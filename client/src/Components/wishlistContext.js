import React, { Component } from 'react';

const Context = React.createContext()

const reducer = (prevState, action) => {
    switch (action.type) {
        case "TOGGLE":
            return { items: prevState.items.map(t => { if (t.id === action.payload) { t.purchased = !t.purchased }; return t }) }

        case "REMOVE":
            return { items: prevState.items.filter(items => items.id !== action.payload) }

        case "ADD":
            return { items: [...prevState.items, action.payload] }


        default:
            return prevState
    }
}

export class Provider extends Component {
    state = {
        items: [
            {
                id: 1,
                title: "Thor",
                purchased: false
            },
            {
                id: 2,
                title: "Captain America",
                purchased: false
            },
            {
                id: 3,
                title: "Iron Man",
                purchased: false
            }
        ],
        dispatch: (action) => this.setState(prevState => reducer(prevState, action))

    }



    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>

        )
    }
}

export const Consumer = Context.Consumer
