

let selectedTarget;



const allElements = document.querySelectorAll('div > *')





allElements.forEach((element, index) => {

    element.addEventListener('click', (ev) => {


        // console.log(ev.target)

        selectedTarget = ev.target
        console.log(selectedTarget)

       
        selectedTarget.classList.toggle('parent')
        

    })
} )



