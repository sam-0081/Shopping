import {createSlice} from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
        modalType: null,
        // modalProps: {},
    },
    reducers: {
        openModal: (state, {payload}) => {
            state.isOpen = true;
            state.modalType = payload;
            // state.modalProps = payload.modalProps;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.modalType = null;
            // state.modalProps = {};
        }
    }
});

export const {openModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer;