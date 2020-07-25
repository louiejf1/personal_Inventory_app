import axios from 'axios';

export default{
    // get all items from array
    getDonations: function(){
        return axios.get('/api/donations')
    },
    // get item from array with the given id
    getDonation: function(id){
        return axios.get('/api/donations' + id)
    },
    // deletes item from array with given id
    deleteDonation: function(id){
        return axios.delete('/api/donations' + id)
    },
    // save the item to the database
    saveDonation: function(itemData){
        return axios.post('/api/donations', itemData)
    }
}