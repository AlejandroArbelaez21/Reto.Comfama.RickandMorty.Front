import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  getAllCharacters,
  getAllCharactersBySpecie,
  getAllCharactersByGender,
  getNextorPrevPage,
  getFavorites,
  getFavoritesInfo,
  addFavoriteCharacter,
  deleteFavoriteCharacter,
} from './characterService';

const mock = new MockAdapter(axios);

const baseUrl = process.env.REACT_APP_BASE_URl;
const characterUrl = `${baseUrl}/api/character/`;

afterEach(() => {
  mock.reset();
});

test('getAllCharacters sends a GET request to the correct URL', async () => {
  mock.onGet(characterUrl).reply(200, {});

  const response = await getAllCharacters();

  expect(response.status).toBe(200);
});

test('getAllCharactersBySpecie sends a GET request to the correct URL with the specie parameter', async () => {
  const specie = 'Human';
  const urlWithSpecie = `${characterUrl}/specie/${specie}`;

  mock.onGet(urlWithSpecie).reply(200, {});

  const response = await getAllCharactersBySpecie(specie);

  expect(response.status).toBe(200);
});