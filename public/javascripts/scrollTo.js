function scrollIt(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': element.offsetTop
    })
}


document.querySelectorAll('.vertical-icons-div a,.scrollTo')
    .forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault()
            const href = button.getAttribute('href')
            scrollIt(document.querySelector(`${href}`))
        })
    })

