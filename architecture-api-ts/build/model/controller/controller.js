"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Controller {
    constructor(name = "controller") {
        this.router = (0, express_1.Router)();
        this.name = name;
    }
    get(url, handler) {
        this.router.get(`/${this.name}/${url}`, handler);
    }
    put(url, handler) {
        this.router.put(`/${this.name}/${url}`, handler);
    }
    delete(url, handler) {
        this.router.delete(`/${this.name}/${url}`, handler);
    }
    post(url, handler) {
        this.router.post(`/${this.name}/${url}`, handler);
    }
    patch(url, handler) {
        this.router.patch(`/${this.name}/${url}`, handler);
    }
    toJson() {
        return JSON.parse(JSON.stringify(this));
    }
}
exports.default = Controller;
