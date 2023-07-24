import axios from '../axios'

 export const apiGetSong = (sid) => new Promise (async (resolve, reject) =>{
    try {
        const response =  await axios({
            url:'/song',
            method: 'get',
            params : {id : sid}
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiGetDetailSong = (sid) => new Promise (async (resolve, reject) =>{
    try {
        const response =  await axios({
            url:'/infosong',
            method: 'get',
            params : {id : sid}
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiGetDetailPlayList = (pid) => new Promise (async (resolve, reject) =>{
    try {
        const response =  await axios({
            url:'/detailplaylist',
            method: 'GET',
            params : {id : pid}
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiSearch = (keyword) => new Promise (async (resolve, reject) =>{
    try {
        const response =  await axios({
            url:'/search',
            method: 'GET',
            params : {keyword}
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiArtistSong = (songerId) => new Promise (async (resolve, reject) =>{
    try {
        const response =  await axios({
            url:'/artistsong',
            method: 'GET',
            params : {
                id: songerId,
                page : 1,
                count: 50
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiArtist = (name) => new Promise (async (resolve, reject) =>{
    try {
        const response =  await axios({
            url:'/artist',
            method: 'GET',
            params : {name}
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apigetChart = (name) => new Promise (async (resolve, reject) =>{
    try {
        const response =  await axios({
            url:'/charthome',
            method: 'GET',
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})