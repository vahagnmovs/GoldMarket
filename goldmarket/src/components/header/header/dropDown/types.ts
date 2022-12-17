import { IData } from "src/components/header/header/types";

export interface IDropDownProps {
    menuOpen: boolean,
    toggleMenu: () => void,
    chosen: IData,
    state: IData[],
    handleChange: (flag: IData) => void,
}
