import axios from 'axios';

const API_URL: string = 'https://pgwebapi.safarifoneict.com/v1/distributor/login';

export function authentication(data: any): Promise<object> {
  return new Promise((resolve, reject) => {
    axios
      .post(API_URL, data)
      .then((resp) => {
          let data = {
              success: resp.data.success,
              message: resp.data.message,
              data: {
                 id : resp.data.records.userId 
              },
              token: resp.data.token
            }
        resolve(data);
      })
      .catch(reject);
  });
}



export default { authentication };
