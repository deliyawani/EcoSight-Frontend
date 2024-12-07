import axios from "axios";

const REGISTER_URL = 'http://localhost:8080/user/register';

export const registerUser = (user) => axios.post(REGISTER_URL, user);