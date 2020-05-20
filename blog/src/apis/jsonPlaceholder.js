import axios from 'axios';

// export default axios.create({
//     baseULR: "https://jsonplaceholder.typicode.com"
// });

const jsonPlaceholder = axios.create({
    baseULR: 'https://jsonplaceholder.typicode.com'
});

export default jsonPlaceholder;