import api from "./index.js";

export const singUp = async (singUpData) => {

    const { data } = await api.post('/auth/signup', singUpData)

    return data

}