import axios from "axios"


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7126814f0e68414580839b72c60c42e1'
    }
})