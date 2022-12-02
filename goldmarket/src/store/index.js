import { configureStore } from "@reduxjs/toolkit";
import sellerReducer  from "./sellersSlice"

import imagesSlice from "./imagesSlice";

export default configureStore({

    reducer: {

        sellerStore: sellerReducer,
        imagesSlice: imagesSlice,
    },
})