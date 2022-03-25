import { api } from "./api"
import { internalServerError, successStatus } from "../utils/clearRes";

export const getCartWs = () => {
    return api.get("/cart")
    .then(successStatus)
    .catch(internalServerError)
}

export const createCartWs= ( data ) => {
    return api
    .post("/cart/create", data)
    .then(successStatus)
    .catch(internalServerError)
}

export const deleteCartWs = ( id ) => {
    return api
    .delete("/cart/delete")
    .then(successStatus)
    .catch(internalServerError)
}