import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const apiSlice = createApi({
    reducerPath : "api",
    baseQuery : fetchBaseQuery({
        baseUrl : "https://hair-cut-recommendation-server.vercel.app/"
    }),
    endpoints : (builder) => ({
        
    })
})

export default apiSlice