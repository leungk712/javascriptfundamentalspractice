let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if(a === 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
});

// anything inside 'then' will run for RESOLVE because I made a promise
// anything inside 'catch' will run for REJECT because if you fail your promise

p.then((message) => {
    console.log('This is in the then ' + message);
}).catch((message) => {
    console.log('This is in the catch ' + message);
});

// Promises are meant to replace callbacks 

// function watchTutorialCallback(callback, errorCallback) {
    // let userLeft = false
    // let userWatchingCatMeme = false
  
//     if (userLeft) {
//       errorCallback({
//         name: 'User Left', 
//         message: ':('
//       })
//     } else if (userWatchingCatMeme) {
//       errorCallback({
//         name: 'User Watching Cat Meme',
//         message: 'WebDevSimplified < Cat' 
//       })
//     } else {
//       callback('Thumbs up and Subscribe')
//     }
//   }

//   watchTutorialCallback(message => {
//     console.log(message)
//   }, error => {
//     console.log(error.name + ' ' + error.message)
//   });

  function watchTutorialPromise() {
    let userLeft = false;
    let userWatchingCatMeme = false;

    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
              name: 'User Left', 
              message: ':('
            });
          } else if (userWatchingCatMeme) {
            reject({
              name: 'User Watching Cat Meme',
              message: 'WebDevSimplified < Cat' 
            });
          } else {
            resolve('Thumbs up and Subscribe')
          }
    });
  }

  watchTutorialPromise().then((message) => {
    console.log(message)
  }).catch((error) => {
    console.log(error.name + ' ' + error.message)
  });

  // PROMISE ALL - allows for things to run at the same time

  const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
  })
  
  const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
  })
  
  const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
  })

  // Promise all waits for everything to finish first before sending the message
  
  Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(messages => {
    console.log(messages)
  }); // this returns an array of ["Video 1 Recorded", "Video 2 Recorded", "Video 3 Recorded"]

// Promise race waits for the first thing to finish before sending the message

  Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(message => {
    console.log(message)
  }); // will return  "Video 1 Recorded"