import {onlyNum} from "./validation";

export const changeModalState = (state) => {
    let windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox')

    onlyNum('#width')
    onlyNum('#height')

    let bindActionChange = (event, elem, prop) => {
        elem.forEach((item, index) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = index
                        break
                    case 'INPUT':
                        if(item.getAttribute('type') === 'checkbox') {
                            index === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое'
                            windowProfile.forEach((box, i) => {
                                box.checked = index === i;
                            })
                            break
                        } else {
                            state[prop] = item.value
                            break
                        }
                    case 'SELECT':
                        state[prop] = item.value
                        break
                }
            })
        })
    }

    bindActionChange('click', windowForm, 'form')
    bindActionChange('input', windowWidth, 'width')
    bindActionChange('input', windowHeight, 'height')
    bindActionChange('change', windowType, 'type')
    bindActionChange('change', windowProfile, 'profile')
}