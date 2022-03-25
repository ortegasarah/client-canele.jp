import axios from "axios";
import * as USER_HELPERS from "../utils/userToken";
import {
  api
} from './api'
// here we are just maing our code look more DRY. With every backend call we must deal with errors and success states. The idea of creating these kinds of services is to make our lives easier in the components
function internalServerError(err) {
  if (err.response && err.response.data && err.response.data.errorMessage) {
    return {
      status: false,
      errorMessage: err.response.data.errorMessage,
    };
  }
  return {
    status: false,
    errorMessage: "Internal server error. Please check your server",
  };
}

function successStatus(res) {
  return {
    status: true,
    data: res.data,
  };
}

export function getUserLogged() {
  return api
    .get("/user/getUser")
    .then(successStatus)
    .catch(internalServerError);
}

export function login(credentials) {
  return api
    .post("/auth/login", credentials)
    .then(successStatus)
    .catch(internalServerError);
}


export function signup(credentials) {
  return api
    .post("/auth/signup", credentials)
    .then(successStatus)
    .catch(internalServerError);
}

export function logout() {
  return api
    .delete("/auth/logout", {
      headers: {
        Authorization: USER_HELPERS.getUserToken(),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}