import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./card";

const sampleCharacter = {
  id: "1",
  name: "John Doe",
  imagen: "image-url",
  gender: "Male",
  url: "character-url",
  species: "Human",
  status: "Alive",
  origin: { name: "Earth" },
  type: "Superhuman",
  episodes: ["Episode 1", "Episode 2"],
};

describe("Card Component", () => {
  it("renders with required props", () => {
    render(<Card {...sampleCharacter} />);
    
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Gender: Male/i)).toBeInTheDocument();
    expect(screen.getByText(/Status: Alive/i)).toBeInTheDocument();
    expect(screen.getByText(/Specie: Human/i)).toBeInTheDocument();
    expect(screen.getByText(/Origin: Earth/i)).toBeInTheDocument();
    expect(screen.getByText(/Type: Superhuman/i)).toBeInTheDocument();
    expect(screen.getByText(/Appearances: 2/i)).toBeInTheDocument();
  });
});