import axios from 'axios';
// For React Native apps

const API_URL = "http://192.168.0.3:8000/api/";

class AuthService {
  async login(email, password) {
    return axios
      .post(API_URL + 'auth/token/', {
        username: email,
        password: password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  async cadastro(email, password, endereco, cidade, estado) {
    return axios
      .post(API_URL + 'users/', {
        email: email,
        senha: password,
        logradouro: endereco,
        cidade: cidade,
        ufNome: estado,
      })
      .then((response) => {
        return response;
      });
  }

  authUser() {
    var token = JSON.parse(localStorage.getItem('user'));
    if (token) {
      var jwt = this.parseJwt(token.token);
      if (Date.now() >= jwt.exp * 1000) {
        localStorage.clear();
        return null;
      }
    }
    return token;
  }

  parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  }

  logout() {
    localStorage.removeItem('user');
  }

  signUpInitial = async (username, password, first_name, last_name) => {
    await axios
      .post(`${API_URL}/auth/register`, {
        password,
        username,
        first_name,
        last_name,
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
  signUpFoward = async (userId, categoria, documento, endereco) => {
    await axios
      .post(`${API_URL}/users`, {
        user: userId,
        categoria,
        documento,
        endereco,
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export default new AuthService();