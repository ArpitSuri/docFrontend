const { default: axios } = require("axios");

const Api_key =process.env.NEXT_PUBIC_STRAPI_API_KEY;

const axiosClient = axios.create({
    baseURL:"http://localhost:1337/api",
    headers:{
        "Authorization":`Beared ${Api_key}`
    },
})

const getCategory=()=>axiosClient.get("department-categories?populate=*");
export default {
    getCategory
} ;