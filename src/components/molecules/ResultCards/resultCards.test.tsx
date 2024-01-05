import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import ResultCards from "./resultCards";

const mockCharacter = {
  id: "1",
  name: "Test Character",
  image: "test-image.jpg",
  gender: "Male",
  url: "https://example.com",
  species: "Human",
  status: "Alive",
  origin: { name: "Test Origin" },
  type: "Test Type",
  episode: ["Episode 1", "Episode 2"],
};

const mockFavorites = ["1", "2", "3"];

const mockOnToggleFavorite = jest.fn();

const mockListResult = [mockCharacter];

describe("ResultCards Component", () => {
  it("renders characters correctly", () => {
    const { getByTestId } = render(
      <ResultCards listResult={mockListResult} favorites={mockFavorites} onToggleFavorite={mockOnToggleFavorite} />
    );
  });

});