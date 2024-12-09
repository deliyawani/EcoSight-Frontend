import axios from "axios";

const REGISTER_URL = 'http://localhost:8080/user/register';

const LOGIN_URL = 'http://localhost:8080/user/login';

const ALL_USERS_URL = 'http://localhost:8080/user/all';

const VIEW_USER_URL = 'http://localhost:8080/user/';


export const registerUser = (user) => axios.post(REGISTER_URL, user);

export const userLogin = (user) => axios.post(LOGIN_URL, user);

export const allUsers = (header) => axios.get(ALL_USERS_URL, header);

export const viewUser = (id, header) => axios.get(VIEW_USER_URL + id, header);

export const removeUser = (id, header) => axios.delete(VIEW_USER_URL + id, header);