export const modals = () => {
    let scrollWidth = () => {
        let div = document.createElement('div');

        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();

        return scrollWidth;
    }

    let bindModal = (triggerSelector, modalSelector, closeSelector, closeOverlayClick = 'true') => {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]')

        let closingAllWindows = () => {
            windows.forEach(item => {
                item.style.display = 'none'
            })
        }

        trigger.forEach((item) => {
            item.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault()
                }
                closingAllWindows()
                modal.style.display = 'block'
                document.body.style.overflow = 'hidden'
            })
        })
        close.addEventListener('click', () => {
            closingAllWindows()
            modal.style.display = 'none'
            document.body.style.overflow = ''
        })

        modal.addEventListener('click', (e) => {
            if(e.target === modal && closeOverlayClick) {
                closingAllWindows()
                modal.style.display = 'none'
                document.body.style.overflow = ''
            }
        })
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
    bindModal('.phone_link', '.popup', '.popup .popup_close')
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close')
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false)
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false)
}