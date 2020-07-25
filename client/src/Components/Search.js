import React, { useState } from 'react';
import Button from "./Button";
import API from '../Utils/API';

export default function Search() {
    const [search, setSearch] = useState({
        search: ""
    });

    const handleInputChange = (event) => {
        event.preventDefault();
        const inputSearch = event.target.value;
        console.log(inputSearch)
        setSearch({ ...search, search: inputSearch })
    }



    // function searchItem() = {
    //     let id = data;
    //     API.getInventoryItem(id)
    // }


    return (
        <div>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleInputChange} />
                <Button class="btn btn-outline-success my-2 my-sm-0" type="submit" buttonName={"search"}></Button>
            </form>
        </div>
    )
}

