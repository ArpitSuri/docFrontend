const { default: axios } = require("axios");



const API_KEY = process.env.NEXT_PUBIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL:"http://localhost:1337/api",
  headers:{
    headers:{
      'Authorization' : `Bearer ${API_KEY}`
    }
  }
})

const getCategory=()=>axiosClient.get("/department-categories?populate=*")

const getDoctorList=()=>axiosClient.get("/doctors?populate=*")

// const getDoctorbyCategory = ()=> axiosClient.get("/doctors?filters[category][Name]")


export default{
  getCategory,
  getDoctorList,
  // getDoctorbyCategory
}