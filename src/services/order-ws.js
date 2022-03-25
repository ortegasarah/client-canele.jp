import { api } from "./api"
import { internalServerError, successStatus } from "../utils/clearRes";

export const getOrderWs = () => {
    return api.get("/order")
    .then(successStatus)
    .catch(internalServerError)
}

export const createOrdertWs= ( data ) => {
    return api
    .post("/order/create", data)
    .then(successStatus)
    .catch(internalServerError)
}

export const idOrderWs = ( id ) => {
    return api.get(`/order/${id}`)
    .then(successStatus)
    .catch(internalServerError)
}
