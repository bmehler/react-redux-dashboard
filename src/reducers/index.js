import { createSlice } from "@reduxjs/toolkit";
import data from "../components/Utilities/data";

const initialState = data

const consultantsSlice = createSlice({
    name: "consultants",
    initialState,
    reducers: {},
});

export default consultantsSlice.reducer;