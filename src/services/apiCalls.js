import axios from "axios";

const URL = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15'

const URLByTitle = ('https://www.cheapshark.com/api/1.0/deals?title=')

const URLByID = ('https://www.cheapshark.com/api/1.0/games?id=')


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