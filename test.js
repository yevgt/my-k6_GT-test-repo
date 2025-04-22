import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
	  vus: 10, // virtual users
	  duration: '30s',
	  // iteration: 6,    // можно ставить количество итераций. оно не может быть меньше числа vus                               (виртуальных юзеров)
	//    stages: [
	//    { duration: '10s', target: '10'}, // в течении 10с одновременно 10 пользователей
	//    { duration: '10s', target: '75'}, // в течении 10с одновременно 75 пользователей
	//    { duration: '5s', target: '0'},  //  в течении 5с - никого
	
	//    ]
};

export default function () {
	  let res = http.get('https://test.k6.io');
	  check(res, { 'status was 200': (r) => r.status === 200 });
	  sleep(1);
}
