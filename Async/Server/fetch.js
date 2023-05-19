fetch('https://jsonplaceholder.typicode.com/users')
    .then(query => query.json())
    .then(users => consoleName(users))

function consoleName(   users) {
    for (const key in users) {
        console.log(key.name)
    }
}

