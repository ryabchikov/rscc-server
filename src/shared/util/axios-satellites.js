import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://mern-fulstack-course.firebaseio.com'
})

export default instance;