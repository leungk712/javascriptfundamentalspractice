fetch('https://api.icndb.com/jokes/random', {
    method: 'GET'
}).then(res => {
    res.json()
})
.then(data => console.log(data))
.catch(error => console.log('ERROR'));