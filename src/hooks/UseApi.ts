import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi  = ({
    validateToken: async (token: string) => {
        const response = await api ('https://dogbreed-api.q9.com.br/list', {
            headers: { 
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIyYzJkYzExZC0zODlkLTRiMjQtYjk2Ny05MTE5MTJiOTA0NTUiLCJzdWIiOiI2MmY5ZTYyMTJlMTM2MDJiMzBiYWVlZjMiLCJpYXQiOjE2NjA1NDQ1NDUsImV4cCI6MTY2MTg0MDU0NX0.IsG-6cTrj-GdK0UgZ6Noqhwh--I5XlnH678yn55pXwU' 
            },
        })
        return response.data

    },
    signin: async (email: string) => {
        const response = await api.post('https://dogbreed-api.q9.com.br/register', {email})
        return response.data;
    }
})