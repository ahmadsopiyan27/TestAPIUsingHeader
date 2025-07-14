const request = require('supertest')

describe('coba header', async function() {
    let header = {
        'x-access-token': '321d6a221f8926b5ec41ae89a3b2ae7b'
    }
    let url = 'http://api.travelpayouts.com';
    let endpoint = '/v1/prices/monthly'
    
})