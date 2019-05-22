var request = require('supertest')
const app = require('./app');
function serialise(obj){
    return Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
}



    test('POST /date', () => {
      const params = { method: 'POST',
          headers: {
              'content-Type': 'application/x-www-form-urlencoded'
          },
          body: '2000-05-21'

      }
        return request(app)
	    .post('/date')
	    .send(serialise(params)).expect(200)
    });

    test('POST /subject', () => {
      const params = { method: 'POST',
          headers: {
              'content-Type': 'application/x-www-form-urlencoded'
          },
          body: '123'

      }
        return request(app)
	    .post('/subject')
	    .send(serialise(params)).expect(200)
    });

    test('POST /diary', () => {
      const params = { method: 'POST',
          headers: {
              'content-Type': 'application/x-www-form-urlencoded'
          },
          body: '123'

      }
        return request(app)
      .post('/diary')
      .send(serialise(params)).expect(200)
    });


    test('GET /time', () => {
      return request(app)
	     .get('/time')
	    .expect(200)
    });



    test('GET /search', () => {
      return request(app)
	   .get('/search?searchtime=1000-01-03')
	    .expect(200)
    });

    test('GET /searchsubject', () => {
      return request(app)
	    .get('/searchsubject?searchsubject=www')
	    .expect(200)
    });





    





    test('GET /listdate', () => {
      return request(app)
	    .get('/listdate')
	    .expect(200)
    });

    test('GET /listesubject', () => {
      return request(app)
	    .get('/listsubject')
	    .expect(200)
    });
