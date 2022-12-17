import { TData } from "src/components/header/header/types";

export type TDropDownProps = {
    menuOpen: boolean,
    toggleMenu: () => void,
    chosen: TData,
    state: TData[],
    handleChange: (flag: TData) => void,
}
