import {onlyNum} from "./validation";

export const forms = (state) => {
    let form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        buttons = document.querySelectorAll('button[name="submit"]')

    let messages = {
        loading: 'Загрузка...',
        success: 'Форма отправлена успешно',
        error: 'Что-то пошло не так'
    }

    onlyNum('input[name="user_phone"]')

    let inputsClear = () => {
        inputs.forEach(item => {
            item.value = ''
        })
    }

    let postData = async (url, data) => {
        document.querySelector('.status').textContent = messages.loading
        inputsClear()

        return await fetch(url, {
            method: 'POST',
            body: data
        })
    }

    let buttonsDisable = (value) => {
        buttons.forEach(item => {
            if(value === 'false') {
                item.removeAttribute('disabled')
                return
            }
            item.setAttribute('disabled', value)
        })
    }


    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault()

            let data = new FormData(item)

            if(item.getAttribute('data-calc') === 'end') {
                for(let key in state) {
                    data.append(key, state[key])
                }
            }

            buttonsDisable('true')

            let statusMessage = document.createElement('div')
            statusMessage.classList.add('status')
            item.append(statusMessage)

            postData('https://jsonplaceholder.typicode.com/posts', data)
                .then((res) => {
                    statusMessage.textContent = messages.success
                })
                .catch((e) => {
                    statusMessage.textContent = messages.error
                })
                .finally(() => {
                    setTimeout(() => {
                        statusMessage.remove()
                        buttonsDisable('false')
                    }, 10000)
                })

        })
    })
}