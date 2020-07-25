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
        return axios.post('/api/inventoryItems', itemData)
    },
    updateinventoryItems: function (id) {
        return axios.update('/api/closet' + id)
    },
    // // get all items from array
    // getCollectibles: function () {
    //     return axios.get('/api/collectibles')
    // },
    // // get item from array with the given id
    // getCollectibles: function (id) {
    //     return axios.get('/api/collectibles' + id)
    // },
    // // deletes item from array with given id
    // deleteCollectibles: function (id) {
    //     return axios.delete('/api/collectibles' + id)
    // },
    // // save the item to the database
    // saveCollectibles: function (itemData) {
    //     return axios.post('/api/collectibles', itemData)
    // },
    // updateCollectibles: function (id) {
    //     return axios.update('/api/collectibles' + id)
    // },
    // // get all items from array
    // getDonations: function () {
    //     return axios.get('/api/donations')
    // },
    // // get item from array with the given id
    // getDonation: function (id) {
    //     return axios.get('/api/donations' + id)
    // },
    // // deletes item from array with given id
    // deleteDonation: function (id) {
    //     return axios.delete('/api/donations' + id)
    // },
    // // save the item to the database
    // saveDonation: function (itemData) {
    //     return axios.post('/api/donations', itemData)
    // },
    // updateDonation: function (id) {
    //     return axios.update('/api/donations' + id)
    // },
    // // get all items from array
    // getPaperworks: function () {
    //     return axios.get('/api/paperwork')
    // },
    // // get item from array with the given id
    // getPaperwork: function (id) {
    //     return axios.get('/api/paperwork' + id)
    // },
    // // deletes item from array with given id
    // deletePaperwork: function (id) {
    //     return axios.delete('/api/paperwork' + id)
    // },
    // // save the item to the database
    // savePaperwork: function (itemData) {
    //     return axios.post('/api/paperwork', itemData)
    // },
    // updatePaperwork: function (id) {
    //     return axios.update('/api/paperwork' + id)
    // }

    // Wishlist API
    getWishlists: function () {
        return axios.get('/api/wishlists');
    },
    // Wishlist item with given ID
    getWishlists: function (id) {
        return axios.get('/api/wishlists/' + id);
    },
    deleteWishlist: function (id) {
        return axios.delete('/api/wishlists' + id);
    },
    saveWishlist: function (wishlistData) {
        return axios.get('/api/wishlists', wishlistData);
    },
}