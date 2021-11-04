const firebase = require('../config/firbase.config');

module.exports = class Schema {
    #coleccion = "Schema";
    #db = firebase.firestore().collection(this.#coleccion);
    static #db = firebase.firestore().collection(this.#coleccion);

    constructor() {

    }

    async save() {
        await this.#db.add(this.toJson)
    }

    async static getByDocId(id) {
        let res = await this.#db.doc(id).get();

        return {
            ...res.data(),
            id: res.id
        }
    }

    async static get() {
        let array = [];
        
        const res = await this.#db.get();
        
        res.forEach(doc => {
            array.push({...doc.data(), id: doc.id});
        })

        return array;
    }

    toJson() {
        return JSON.parse(JSON.stringify(this));
    }

}
