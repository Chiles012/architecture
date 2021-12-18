import axios from "../../util/axios";

/**
 * ! Clase Controller
 * * Esta clase es para crear un controlador para una api request con axios
 * * Solo es necesario extender a esta clase y poner sus propiedades de cada modelo para crear un crud inmediatamente 
 */
export default class Controller {
    request = axios;

    constructor(name = "user") {
        this.name = name;
    }

    async post(
        url = "",
        config = {}
    ) {
        return await this.request.post(
            `${this.name}/${url}`,
            this.toString(),
            config,
        )
    }

    async get(
        url = "",
        config = {}
    ) {
        return await this.request.get(
            `${this.name}/${url}`, 
            config
        )
    }

    async patch(
        url = "",
        config = {}
    ) {
        return await this.request.patch(
            `${this.name}/${url}`,
            this.toString(),
            config
        )
    }

    async delete(
        url = "",
        config = {}
    ) {
        return await this.request.delete(
            `${this.name}/${url}`,
            config
        )
    }

    async put(
        url = "",
        config = {}
    ) {
        return await this.request.put(
            `${this.name}/${url}`,
            this.toString(),
            config
        )
    }

    toString() {
        const jsonRequest = 
            JSON.parse(JSON.stringify(this))
        
        delete jsonRequest.request
        delete jsonRequest.name

        return jsonRequest;
    }

}
