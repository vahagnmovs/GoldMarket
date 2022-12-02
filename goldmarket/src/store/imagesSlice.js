import { createSlice } from "@reduxjs/toolkit";

const imagesSlice = createSlice({
    name: "storeImages",
    initialState: {
        index: 0,

        IMAGES: [
            "https://www.turkishjewellery.org/resim/urun/ELIS117.jpg",
            "https://www.turkishjewellery.org/resim/urun/ELIS117-3.jpg",
            "https://www.turkishjewellery.org/resim/urun/ELIS117-4.jpg"
        ],

    },
    reducers: {
        nextImage(state, action ) {
            if(state.index === state.IMAGES.length-1) {
                state.index = 0;
            }else{
                state.index += action.payload;
            }
        },
        prevImage(state, action){
            if(state.index === state.IMAGES.length - state.IMAGES.length) {
                state.index = 0;
            }else{
                state.index -= action.payload;
            }
        },
        clickImage(state, action) {
            state.index = action.payload;
        },

    },
});

export const { nextImage, prevImage, clickImage,} = imagesSlice.actions;

export default imagesSlice.reducer;