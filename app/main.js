import $http from './http.js';
import menuBuilder from './create-menu.js';

const URL = './data/items.json';

$http(URL)
    .get()
    .then(data => {
    	return JSON.parse(data);
    })
    .then(data => {
        let items = menuBuilder(data, 0);
        document.getElementById('main-menu').insertAdjacentHTML('beforeEnd', items);
    })
     .catch(console.log.bind(console));
