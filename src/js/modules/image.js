export const image = () => {
    let mainBlock = document.querySelector('.works'),
        modalImage = document.createElement('div'),
        bigImage = document.createElement('img')

    mainBlock.appendChild(modalImage)
    modalImage.appendChild(bigImage)
    modalImage.classList.add('popup')

    modalImage.style.justifyContent = 'center'
    modalImage.style.alignItems = 'center'
    modalImage.style.display = 'none'

    mainBlock.addEventListener('click', (e) => {
        e.preventDefault()
        let target = e.target

        if(target && target.classList.contains('preview')) {
            let path = target.parentNode.getAttribute('href')
            document.querySelector('body').style.overflowY = 'hidden'
            bigImage.setAttribute('src', path)
            modalImage.style.display = 'flex'
        }

        if(target && target.matches('div.popup')) {
            modalImage.style.display = 'none'
            document.querySelector('body').style.overflowY = 'scroll'
        }
    })

}