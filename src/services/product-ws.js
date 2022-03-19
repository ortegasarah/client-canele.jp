import { api } from "./api"
import { internalServerError, successStatus } from "../utils/clearRes";

export const getProductWs = () => {
    return api.get("/products")
    .then(successStatus)
    .catch(internalServerError)
}

export const createProductWs = ( data ) => {
    return api
    .post("/products/create", data)
    .then(successStatus)
    .catch(internalServerError)
}

export const idProductWs = ( id ) => {
    return api.get(`/products/${id}`)
    .then(successStatus)
    .catch(internalServerError)
}
