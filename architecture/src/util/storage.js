import firebase from "../config/firebase.config";

const storage = firebase.storage();

export const uploadFile = async (file, bucket, metadata) => 
    await storage.ref().child(`${bucket}/${file.name}`).put(file, metadata)
export const deleteFile = async (bucket, name) => 
    await storage.ref().child(`${bucket}/${name}`).delete()
