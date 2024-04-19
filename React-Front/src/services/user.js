import api from "./index.js";

export const getOneUser = async (userId) => {

    const { data } = await api.get(`/user/${userId}`, {
        headers: {
            authorization: localStorage.token
        }
    })

    return data
}