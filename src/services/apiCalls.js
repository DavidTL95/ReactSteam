import axios from "axios";

const URL = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15'

const URLByTitle = ('https://www.cheapshark.com/api/1.0/deals?title=')

const URLByID = ('https://www.cheapshark.com/api/1.0/games?id=')

const BASIC_API_URL = "http://localhost:3000";



export const getDeals = async () => {
    let res = await axios.get(URL);

    // console.log(res.data);

    return res.data;
}

export const getDealsByTitle = async (title) => {

    let res = await axios.get(URLByTitle+title);

    // console.log(res.data);

    return res.data;
}

export const getDealsByID = async (id) => {
    let res = await axios.get(URLByID+id);

    console.log(res.data);

    return res.data;
}

export const logMe = async (body) => {

    let res = {
        token: "123456789ABCD",
        name: "David",
        id: 1,
        age: 27,
        rol: true
    }

    return res;
}

export const registerMe = async (body) => {

    let {data} = await axios.post(`${BASIC_API_URL}/users`, body);

    return data;
}

export const profileUser = async (id) => {

    let {data} = await axios.get(`${BASIC_API_URL}/users/${id}`);

    return data;
}

export const modifyMe = async (id,body) => {

    let {data} = await axios.put(`${BASIC_API_URL}/users/${id}`, body);

    return data;
}