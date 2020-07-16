import React from 'react';
import { Form } from 'react-bootstrap';

// This will be used for searching different items

export default function Search() {
    const searchItem = [];

    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Search for an item..." />
            </Form.Group>
        </Form>
    )
}
