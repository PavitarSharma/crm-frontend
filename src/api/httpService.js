import http from "./http"

const httpDataService =  {
    createPost: async (data) => {
        const url = "/posts/create"
        return await http.post(url, data)
    },

    getAllPost: async () => {
        const url = "/posts"
        return await http.get(url)
    }

    
}

export default httpDataService