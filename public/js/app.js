

// fetch('http://puzzle.mead.io/puzzle').then((res) => {
//     res.json().then(data => {
//         console.log(data)
//     })
// })


    // fetch('http://localhost:3001/weather?address='+ address).then((res) => {
    //     res.json().then(data => {
    //         if (data.error) {
    //             console.log(data.error)
    //         } else {
    //             console.log(data.location)
    //             console.log(data.forecast)
    //         }
    //     })
    // })


   

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    const location = search.value



    fetch('/weather?address='+ location).then((res) => {
        res.json().then(data => {
            if (data.error) {
                //console.log(data.error)
                messageOne.textContent = data.error
            } else {
                // console.log(data.location)
                // console.log(data.forecast)
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast

            }
        })
    })
  
})