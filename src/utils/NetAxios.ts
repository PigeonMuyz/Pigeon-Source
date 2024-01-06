import axios from "axios";
export class netAxios {
  get(url:any) {
    return axios(url,{
        method: 'GET',
        headers: {
            "computerId": "MTAzLjE0OC43Mi4xLUI4NS1IRDM=",
        },
    })
      .then(response => {
        if (!response.data) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.data;
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  post(url:any, data:any) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }
}
