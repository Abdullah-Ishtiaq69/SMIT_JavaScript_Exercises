// Abdullah

//  const fatchData = (url) => {
//     return new Promise((resolve , reject) => {
//         const objext = new XMLHttpRequest();

//     objext.addEventListener('readystatechange', () => {
//         if (objext.readyState === 4 && objext.status === 200) {
//             let data = JSON.parse(objext.responseText)
//             resolve(data)
//         }
//         else if (objext.readyState === 4) {
//             reject('No Data')
//         }
//     });

//     objext.open('GET', url);

//     objext.send();
//     })
// };

// fatchData('https://jsonplaceholder.typicode.com/todos/1').then((data) => {
//     console.log(data);
//     fatchData('https://jsonplaceholder.typicode.com/todos/2').then((data) => {
//         console.log(data);
//         fatchData('https://jsonplaceholder.typicode.com/todos/3').then((data) => {
//             console.log(data);
//         }).catch((err) => {
//             console.log(err);
//         })
//     }).catch((err) => {
//         console.log(err);
//     })
// }).catch((err) => {
//     console.log(err);
// });

// Abdullah


// janan
// const fatchData = (url) => {
//     return new Promise((resolve, reject) => {


//         const objext = new XMLHttpRequest();

//         objext.addEventListener('readystatechange', () => {
//             if (objext.readyState === 4 && objext.status === 200) {
//                 let data = JSON.parse(objext.responseText)
//                 resolve(data)
//             }
//             else if (objext.readyState === 4) {
//                 reject('No Data!')
//             }
//         });

//         objext.open('GET', url);

//         objext.send();
//     })
//     }

//     fatchData('https://jsonplaceholder.typicode.com/todos/1').then((data) => {
//         console.log(data);
//         fatchData('https://jsonplaceholder.typicode.com/todos/2').then((data)=>{
//             console.log(data);
//         }).catch((err) => {
//             console.log(err);
//         })
//     }).catch((err) => {
//         console.log(err);
//     })
// janan

// const fatchData = (url, callback) => {
//     const objext = new XMLHttpRequest();

//     objext.addEventListener('readystatechange', () => {
//         if (objext.readyState === 4 && objext.status === 200) {
//             let data = JSON.parse(objext.responseText)
//             callback(data, null)
//         }
//         else if (objext.readyState === 4) {
//             callback(null, 'no data')
//         }
//     });

//     objext.open('GET', url);

//     objext.send();
// }

// fatchData('https://jsonplaceholder.typicode.com/todos/1', (data, errar) => {
//     if (data) {
//         console.log(data);
//         fatchData('https://jsonplaceholder.typicode.com/todos/20', (data, errar) => {
//             if (data) console.log(data);
//             else console.log(errar);
//         })
//     } else console.log(errar);
// })























const sendRequest = (url, callback) => {
    const request = new XMLHttpRequest();


    request.addEventListener('readystatechange', () => {
        if (request.status === 200 && request.readyState === 4) {
            let data = JSON.parse(request.responseText)
            callback(null, data)
        } else if (request.readyState === 4) {
            callback('Data Not Found', null)
        }
    })

    request.open('GET', url);
    request.send()
}



sendRequest('https://jsonplaceholder.typicode.com/todos/1', (data, err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        sendRequest('https://jsonplaceholder.typicode.com/todos/3', (data, err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        })
    }
})
