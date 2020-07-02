import React from 'react'
import {Container} from "react-bootstrap"

export default function MainLayout(props) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}
