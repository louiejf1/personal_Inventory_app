import axios from 'axios';

export default {
    // get all items from array
    getinventoryItems: function () {
        return axios.get('/api/inventoryItems')
    },
    // get item from array with the given id
    getinventoryItem: function (id) {
        return axios.get('/api/inventoryItems' + id)
    },
    // deletes item from array with given id
    deleteinventoryItem: function (id) {
        return axios.delete('/api/inventoryItems' + id)
    },
    // save the item to the database
    saveinventoryItem: function (itemData) {
        return axios.post('/api/inventoryItems', itemData)
    },
    updateinventoryItem: function (id) {
        return axios.update('/api/inventoryItems' + id)
    }
}