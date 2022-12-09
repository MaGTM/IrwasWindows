import './slider'
import {modals} from "./modules/modals";
import {tabs} from "./modules/tabs";
import {forms} from "./modules/forms";
import {changeModalState} from "./modules/changeModalState";
import {timer} from "./modules/timer";
import {image} from "./modules/image";

window.addEventListener('DOMContentLoaded', () => {

    let modalState = {
        form: 0,

    }
    changeModalState(modalState)
    modals()
    tabs('.glazing_slider', '.glazing_block > a', '.glazing_content', 'active')
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click')
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block')
    forms(modalState)
    timer(2022, 12, 9)
    image()
})

