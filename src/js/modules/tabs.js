export const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector)

    let hideTabs = () => {
        tab.forEach((item) => {
            item.classList.remove(activeClass)
        })
        content.forEach(item => {
            item.style.display = 'none'
        })
    }

    let showTab = (i = 0) => {
        tab[i].classList.add(activeClass)
        content[i].style.display = display
    }

    header.addEventListener('click', (e) => {
        let target = e.target
        if(target && (target.classList.contains(tabSelector.split(/[. ]/)[1]) || target.parentNode.classList.contains(tabSelector.split(/[. ]/)[1]))) {
            tab.forEach((item, i) => {
                if (target === item || target.parentNode === item) {
                    hideTabs();
                    showTab(i);
                }
            });
        }
    })

    hideTabs()
    showTab()
}