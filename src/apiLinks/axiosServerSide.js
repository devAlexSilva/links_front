import axios from 'axios';
import { parseCookies } from 'nookies';

//para chamadas serverSide
export function axiosClient(ctx){

const { tokenCardLink } = parseCookies(ctx);

const api = axios.create({
  baseURL: 'https://api-card-task.herokuapp.com'
});


if (tokenCardLink) {
  api.defaults.headers['authorization'] = `Bearer ${tokenCardLink}`;
}

return api;
}
