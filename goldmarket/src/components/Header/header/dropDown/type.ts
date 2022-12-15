import { IData } from "../type";

export interface IDropDownProps {
    menuOpen: boolean,
    toggleMenu: () => void,
    chosen: IData,
    state: IData[],
    handleChange: (flag: IData) => void,
}
