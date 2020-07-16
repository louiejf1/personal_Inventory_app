import axios from 'axios';

export default{
    // get all items from array
    getClosets: function(){
        return axios.get('/api/closets')
    },
    // get item from array with the given id
    getCloset: function(id){
        return axios.get('/api/closets' + id)
    },
    // deletes item from array with given id
    deleteCloset: function(id){
        return axios.delete('/api/closets' + id)
    },
    // save the item to the database
    saveCloset: function(itemData){
        return axios.post('/api/closets', itemData)
    }
}