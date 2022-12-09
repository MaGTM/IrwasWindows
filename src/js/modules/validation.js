export const onlyNum = (selector) => {
    let inputs = document.querySelectorAll(selector)

    inputs.forEach((item) => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        })
    })
}