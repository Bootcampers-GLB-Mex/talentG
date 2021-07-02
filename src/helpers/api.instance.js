import axios from "axios";

export const instance = axios.create({
    baseURL: "http://proyectofinalbootcamp-env.eba-nmb4rsib.us-east-2.elasticbeanstalk.com",
});