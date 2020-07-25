import axios from 'axios';

export default{


    // has to get all items within all dbs and do similar functions within that db


    // get all items from array
    getInventory: function(){
        return axios.get('/api/inventory')
    },
    // get item from array with the given id
    getInventory: function(id){
        return axios.get('/api/inventory' + id)
    },
    // deletes item from array with given id
    deleteInventory: function(id){
        return axios.delete('/api/inventory' + id)
    },
    // save the item to the database
    saveInventory: function(itemData){
        return axios.post('/api/inventory', itemData)
    }
}