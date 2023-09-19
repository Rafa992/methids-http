let buttons = [...document.querySelectorAll('.list button')];

buttons.forEach(item => {

    item.addEventListener('click', () => {
        
        buttons.forEach(btn => {
            btn.classList.remove('active')
        })

        item.classList.add('active')

    })

})