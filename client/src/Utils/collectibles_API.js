import axios from 'axios';

export default{
    // get all items from array
    getCollectibles: function(){
        return axios.get('/api/collectibles')
    },
    // get item from array with the given id
    getCollectibles: function(id){
        return axios.get('/api/collectibles' + id)
    },
    // deletes item from array with given id
    deleteCollectibles: function(id){
        return axios.delete('/api/collectibles' + id)
    },
    // save the item to the database
    saveCollectibles: function(itemData){
        return axios.post('/api/collectibles', itemData)
    }
}