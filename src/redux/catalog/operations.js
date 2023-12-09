import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const url = new URL('https://6570cd1e09586eff6641f810.mockapi.io/car-rental/adverts');
url.searchParams.append('page', 1);
url.searchParams.append('limit', 12);

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
    }
}

export const getAdverts = createAsyncThunk(
    'adverts/getAdverts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`${url}`, options);
            console.log(response.data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectedWithValue(error.message);
        }
    }
)