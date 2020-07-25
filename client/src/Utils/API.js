import axios from 'axios';

export default {
    // get all items from array

    getinventoryItems: function () {
        return axios.get('/api/inventoryItems');
    },
    // // get item from array with the given id
    getinventoryItem: function (id) {
        return axios.get('/api/inventoryItems' + id)
    },
    // // deletes item from array with given id
    deleteinventoryItems: function (id) {
        return axios.delete('/api/inventoryItems' + id)
    },
    // // save the item to the database
    saveinventoryItem: function (itemData) {
        console.log(itemData)
        return axios.post('/api/inventoryItems', itemData)
    },
    updateinventoryItems: function (id) {
        return axios.update('/api/inventoryItems' + id)
    },
    // Wishlist API
    getWishlists: function () {
        return axios.get('/api/wishlists');
    },
    // Wishlist item with given ID
    getWishlist: function (id) {
        return axios.get('/api/wishlists/' + id);
    },
    deleteWishlist: function (id) {
        return axios.delete('/api/wishlists' + id);
    },
    saveWishlist: function (wishlistData) {
        return axios.get('/api/wishlists', wishlistData);
    },
}