import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Modal from "./Modal";
import UserLogin from "../user/UserLogin";
import {closeModal} from "../../features/modal/modalSlice";
import UserSignupForm from "../user/UserSignupForm";

const ModalContent = () => {

    const {isOpen, modalType} = useSelector((state) => state.modal);
    const dispatch = useDispatch();


    // console.log(isOpen, modalType);

    const onClose = () => {
        dispatch(closeModal())
    }

    const renderContent = () => {
        switch(modalType){
            case "login":
                return <UserLogin/>
            case "signup":
                return <UserSignupForm/>
            default:
                return <></>
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            {renderContent()}
        </Modal>
    );
};

export default ModalContent;