// payments
import visa from "src/style/Icons/visa.png"
import master from "src/style/Icons/master.png"
import google_pay from "src/style/Icons/google-pay.png"
import apple_pay from "src/style/Icons/apple-pay.png";
import arca from "src/style/Icons/arca.png"

//social link
import facebookIcon from "src/style/Icons/fb.png"
import instagramIcon from "src/style/Icons/insta.png"
import okIcon from "src/style/Icons/ok.png"
import telegramIcon from "src/style/Icons/tg.png"
import vkIcon from "src/style/Icons/vk.png"

export type TFooter = {
    goldCenter: string[],
    getHelp: string[],
    contact: string[],
    paymentMethods: string[],
    socialLink: string[],
}


export const footerData: TFooter = {
    goldCenter: ["About us", "Shop Jewelry", "SHop Stores"],
    getHelp: ["Account", "Orders"],
    contact: ["Main office", "Yerevan Amiryan 12", "(+374737343)", "GoldMarketinfo@gmail.com", "PAYMENTS METHOD"],
    paymentMethods: [visa, master, arca, google_pay, apple_pay],
    socialLink: [vkIcon, okIcon, instagramIcon, facebookIcon, telegramIcon],

}