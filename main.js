//https://pokeapi.co/api/v2/pokemon/charmander

console.log('javascript is working');

// function initialize() {
//     fetch(`https://pokeapi.co/api/v2/pokemon/charmander`)
//         .then((response) => {
//             return response.json()
//                 .then((data) => {
//                     console.log('data:',data)
//             })
//     })
// }

const pkForm = document.getElementById('pk-form')
const pkName = document.getElementById('pk-name')

pkForm.addEventListener('submit', (event) => {
    event.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/charmander/${pkName.value}`)
        .then((response) => {
            return response.json()
                .then((data) => {
                    console.log('data:',data)
            })
    })
})