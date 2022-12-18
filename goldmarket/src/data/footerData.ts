
// import payments icons
import visa from "src/style/Icons/visa.png"
import master from "src/style/Icons/master.png"
import google_pay from "src/style/Icons/google-pay.png"
import apple_pay from "src/style/Icons/apple-pay.png";
import arca from "src/style/Icons/arca.png"

//import social links
import facebookIcon from "src/style/Icons/fb.png"
import instagramIcon from "src/style/Icons/insta.png"
import okIcon from "src/style/Icons/ok.png"
import telegramIcon from "src/style/Icons/tg.png"
import vkIcon from "src/style/Icons/vk.png"

export type TGoldCenter = {
    name:string;
    path: string;
}
type TGoldHelp = {
    name: string,
    path: string,
}
type TContact = {
    name: string,
    address: string,
    phone: string,
    mail: string,
}
type TSocialLinks = {
    name: string,
    target: string,
    path: string,
}

export type TFooterData = {
    goldCenter: TGoldCenter[],
    getHelp:TGoldHelp[],
    contact:  TContact[],
    paymentsMethods: string[],
    socialLinks: TSocialLinks[],
}

export const footerData: TFooterData = {
    goldCenter: [
        {
            name: "About us",
            path: "/"
        },
        {
            name: "Shop Jewelry",
            path: "/",
        },
        {
            name: "Shop Stores",
            path: "/",
        }
    ],

    getHelp: [
        {
            name: "Account",
            path: "/",
        },
        {
            name: "Orders",
            path: "/",
        }
    ],
    contact: [
        {
            name: "Main Office",
            address: "Amiryan 12",
            phone: "+374 94 73 73 43",
            mail: "goldCenterInfo@.am",
        },
    ],
    paymentsMethods: [visa, master, arca, google_pay, apple_pay],

    socialLinks: [
        {
            name: vkIcon,
            target: "_blank",
            path: "/",
        },
        {
            name: okIcon,
            target: "_blank",
            path: "/"
        },
        {
            name: instagramIcon,
            target: "_blank",
            path: "/"
        },
        {
            name: facebookIcon,
            target: "_blank",
            path: "/"
        },
        {
            name: telegramIcon,
            target: "_blank",
            path: "/"
        },
    ],
}