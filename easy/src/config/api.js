// import axios from 'axios';

const API_URL = "http://192.168.0.3:8000/api/";

class General {
  async getBicicletas() {
    // return axios
    //   .get(API_URL + 'bicicleta/')
    //   .then((response) => {
    //     return response;
    //   });
    return [
      {
        id: 1,
        dono: 'Larissa',
        estilo: "Hibrida",
        marca: "Correia",
        ano_fabricacao: "2019-01-09",
        foto: null,
      },
      {
        id: 2,
        dono: 'Rui',
        estilo: "Passeio",
        marca: "---",
        ano_fabricacao: "2017-01-09",
        foto: null,
      },
      {
        id: 3,
        dono: 'Cauane',
        estilo: "Passeio",
        marca: "Fast",
        ano_fabricacao: "2011-05-19",
        foto: null,
      },
    ];
  }
}

export default new General();
