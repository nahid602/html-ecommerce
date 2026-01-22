

const previousTabContainer = document.querySelector('.tab_menu .previous_tab')

const addNewTabSpan = document.querySelector('.tab_menu .add_new_tab')




addNewTabSpan.addEventListener('click', () => {
    

   handleNewTab()
    

})


function handleNewTab () {
    const span = document.createElement('span')
    span.textContent = 'New Tab'
    previousTabContainer.appendChild(span)
    
    handleTabActiveClass ()
}



 function handleTabActiveClass () {
        const tabItems = previousTabContainer.querySelectorAll('span')
        console.log(tabItems)
        tabItems.forEach(item => {
            item.addEventListener('click', (ev) => {
                ev.target.classList.add('tab_active')
            })
        })
 }


handleTabActiveClass ()