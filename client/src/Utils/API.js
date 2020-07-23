import axios from 'axios';

export default {
    // get all items from array
    getClosets: function () {
        return axios.get('/api/inventoryItems')
    },
    // get item from array with the given id
    getCloset: function (id) {
        return axios.get('/api/inventoryItems' + id)
    },
    // deletes item from array with given id
    deleteCloset: function (id) {
        return axios.delete('/api/inventoryItems' + id)
    },
    // save the item to the database
    saveCloset: function (itemData) {
        return axios.post('/api/inventoryItems', itemData)
    },
    updateCloset: function (id) {
        return axios.update('/api/inventoryItems' + id)
    },
    // get all items from array
    getCollectibles: function () {
        return axios.get('/api/inventoryItems')
    },
    // get item from array with the given id
    getCollectibles: function (id) {
        return axios.get('/api/inventoryItems' + id)
    },
    // deletes item from array with given id
    deleteCollectibles: function (id) {
        return axios.delete('/api/inventoryItems' + id)
    },
    // save the item to the database
    saveCollectibles: function (itemData) {
        return axios.post('/api/inventoryItems', itemData)
    },
    updateCollectibles: function (id) {
        return axios.update('/api/inventoryItems' + id)
    },
    // get all items from array
    getDonations: function () {
        return axios.get('/api/inventoryItems')
    },
    // get item from array with the given id
    getDonation: function (id) {
        return axios.get('/api/inventoryItems' + id)
    },
    // deletes item from array with given id
    deleteDonation: function (id) {
        return axios.delete('/api/inventoryItems' + id)
    },
    // save the item to the database
    saveDonation: function (itemData) {
        return axios.post('/api/inventoryItems', itemData)
    },
    updateDonation: function (id) {
        return axios.update('/api/inventoryItems' + id)
    },
    // get all items from array
    getPaperworks: function () {
        return axios.get('/api/inventoryItems')
    },
    // get item from array with the given id
    getPaperwork: function (id) {
        return axios.get('/api/inventoryItems' + id)
    },
    // deletes item from array with given id
    deletePaperwork: function (id) {
        return axios.delete('/api/inventoryItems' + id)
    },
    // save the item to the database
    savePaperwork: function (itemData) {
        return axios.post('/api/inventoryItems', itemData)
    },
    updatePaperwork: function (id) {
        return axios.update('/api/inventoryItems' + id)
    }
}