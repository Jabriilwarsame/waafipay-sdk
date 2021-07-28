"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentication = void 0;
const axios_1 = __importDefault(require("axios"));
const API_URL = 'https://pgwebapi.safarifoneict.com/v1/distributor/login';
function authentication(data) {
    return new Promise((resolve, reject) => {
        axios_1.default
            .post(API_URL, data)
            .then((resp) => {
            let data = {
                success: resp.data.success,
                message: resp.data.message,
                data: {
                    id: resp.data.records.userId
                },
                token: resp.data.token
            };
            resolve(data);
        })
            .catch(reject);
    });
}
exports.authentication = authentication;
exports.default = { authentication };
