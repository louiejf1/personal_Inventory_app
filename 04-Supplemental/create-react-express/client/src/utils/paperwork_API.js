import axios from 'axios';

export default{
    // get all items from array
    getPaperworks: function(){
        return axios.get('/api/paperwork')
    },
    // get item from array with the given id
    getPaperwork: function(id){
        return axios.get('/api/paperwork' + id)
    },
    // deletes item from array with given id
    deletePaperwork: function(id){
        return axios.delete('/api/paperwork' + id)
    },
    // save the item to the database
    savePaperwork: function(itemData){
        return axios.post('/api/paperwork', itemData)
    }
}