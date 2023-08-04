import axios from "axios";

const URL = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15'

export const getDeals = async () => {
    let res = await axios.get(URL);

    console.log(res.data);

    return res.data;
}