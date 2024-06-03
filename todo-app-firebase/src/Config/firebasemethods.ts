import { resolve } from 'path';
import app from './firebaseconfig';
import {getDatabase , set , ref , push , onValue} from 'firebase/database';
import { rejects } from 'assert';



const db = getDatabase(app);


export const sendData = (nodeName:string , obj:any)=>{
        const reference = ref(db , nodeName)
        return push(reference , obj)
}

export const getData = (nodeName:string)=>{
    return new Promise((resolve , reject)=>{
        const reference = ref(db , nodeName)
        onValue(reference , (data)=>{
            if(data.exists()){
                let arr = Object.values(data.val())
                resolve(arr)
            }else{
                reject('No data Found')
            }
        })
    })
}