import axios from 'axios'

export const getAllCharacters = () => {
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_BASE_URl}/api/character/`,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios(config);
};

export const getAllCharactersBySpecie = (specie: String) => {
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_BASE_URl}/api/character/specie/` + specie,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios(config);
};

export const getAllCharactersByGender = (gender: string) => {
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_BASE_URl}/api/character/gender/` + gender,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios(config);
};

export const getNextorPrevPage = (page: string, complement?: string) => {
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_BASE_URl}/api/character/page/` + page + (complement ? complement : ""),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios(config);
};

export const getFavorites = () => {
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_BASE_URl}/api/character/favorite`,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios(config);
};

export const getFavoritesInfo = (pages: []) => {
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_BASE_URl}/api/character/getInfo?ids=` + pages.toLocaleString(),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios(config);
};

export const addFavoriteCharacter = (id: string) => {
  var config = {
    method: "post",
    url: `${process.env.REACT_APP_BASE_URl}/api/character/favorite/` + id,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios(config);
};

export const deleteFavoriteCharacter = (id: string) => {
  var config = {
    method: "delete",
    url: `${process.env.REACT_APP_BASE_URl}/api/character/favorite/` + id,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios(config);
};


