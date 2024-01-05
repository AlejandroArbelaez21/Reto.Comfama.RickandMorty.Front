import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Home from "./home";

jest.mock("../../../services/characterService", () => ({
  getAllCharacters: jest.fn(() => Promise.resolve({ data: { results: [] } })),
  getAllCharactersBySpecie: jest.fn(() => Promise.resolve({ data: { results: [] } })),
  getAllCharactersByGender: jest.fn(() => Promise.resolve({ data: { results: [] } })),
  getNextorPrevPage: jest.fn(() => Promise.resolve({ data: { results: [], info: {} } })),
  getFavorites: jest.fn(() => Promise.resolve({ data: [] })),
  getFavoritesInfo: jest.fn(() => Promise.resolve({ data: [] })),
  addFavoriteCharacter: jest.fn(() => Promise.resolve()),
  deleteFavoriteCharacter: jest.fn(() => Promise.resolve()),
}));

describe("Home Component", () => {
  it("renders without crashing", async () => {
    await act(async () => {
      render(<Home />);
    });
  });
});