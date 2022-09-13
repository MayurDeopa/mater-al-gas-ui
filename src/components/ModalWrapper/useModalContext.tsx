import { useContext } from "react";
import { ModalContext } from "./ModalWrapper";


const useModalContext =()=> useContext(ModalContext)!

export default useModalContext;