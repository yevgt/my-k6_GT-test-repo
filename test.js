import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
	  vus: 10, // virtual users
	  duration: '30s',
};

export default function () {
	  let res = http.get('https://test.k6.io');
	  check(res, { 'status was 200': (r) => r.status === 200 });
	  sleep(1);
}
