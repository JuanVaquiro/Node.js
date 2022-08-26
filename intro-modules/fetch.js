

// const placeHolder = async () => { 
//     const url = fetch('https://jsonplaceholder.typicode.com/photos')
//     const res = await url.json()
//     console.log(res);
// }

// placeHolder()

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then( data => console.log(data))