import { createSlice } from "@reduxjs/toolkit";

const sellersSlice = createSlice({
    name: "sellerSlice",
    initialState: {
        NAME: "ALDORO",
        STAR: "5.0",
        LIKES: "251",
        indexSize: 0,
        indexWeight: 0,
        buyProduct: [],
        IMAGESINFORMATION:
            {
                NAME: "Graziella ring",
                CODE: "GR001",
                COLOR: "WHITE",
                OLDPRICES: "2100$",
                NEWPRICES: "1350$",
                DESCRIPTION: "lorem20",
                DIAMOND: "NO",
                FINENESS: "750",
                FORWHOM: "WOMEN",
                COUNT: 1,
                IMAGES: [
                    "https://www.turkishjewellery.org/resim/urun/ELIS117.jpg",
                    "https://www.turkishjewellery.org/resim/urun/ELIS117-3.jpg",
                    "https://www.turkishjewellery.org/resim/urun/ELIS117-4.jpg"
                ],
                METAL: "GOLD JEWELLERY",
                PRICE: "750",
                PUBLISH: "YES",
                SIZE: ["11.0", "15.0", "16.0", "17.0", "18.0",],
                TYPE: "RINGS",
                WEIGHT: ["7.5", "8.0", "8.5", "9.0", "10.0"]
            },
    },
    reducers: {
        clickSize(state, action) {
            state.indexSize = action.payload;
            console.log("mtnuma")
        },
        clickWeight(state, action){
            state.indexWeight = action.payload;

        },

    },
});

export const { clickSize, clickWeight } = sellersSlice.actions;

export default sellersSlice.reducer;
