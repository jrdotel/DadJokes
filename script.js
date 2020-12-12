const jokeEle = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json',
        },
    }

    fetch('https://icanhazdadjoke.com', config)
    .then((respond) => respond.json())
    .then((data) => {
        jokeEle.innerHTML = data.joke;
    });
}

//THIS IS HOW YOU WOULD CHANGE THIS TO AN ASYNC/AWAIT
// 
//async function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json',
//         },
//     }

//     const response = await fetch('https://icanhazdadjoke.com', config);
//     
//     const data = await res.json();
//
//     jokeEle.innerHTML = data.joke;
// }