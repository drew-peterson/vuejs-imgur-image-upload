import qs from 'qs';
import axios from 'axios';
const CLIENT_ID='2d1f394163917cd';
// const SECRET_KEY='f3a7d480901f45e694edda59737ba032c11e5585';
const IMGUR_URL='https://api.imgur.com';

export default {
  login(){
    const querystring = {
      client_id: CLIENT_ID,
      response_type: "token"
    };

    window.location = `${IMGUR_URL}/oauth2/authorize?${qs.stringify(querystring)}`; // navigate to url...
  },

  fetchImages(token){
      return axios.get(`${IMGUR_URL}/3/account/me/images`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  },

  uploadImages(token, images){
    const promises = Array.from(images).map(image =>{
      const formData = new FormData(); // vanillia JS
      formData.append('image', image);
      return axios.post(`${IMGUR_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    });
    return Promise.all(promises);
  }
}
