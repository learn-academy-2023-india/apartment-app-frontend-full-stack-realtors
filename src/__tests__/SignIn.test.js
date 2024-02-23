import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";
import "@testing-library/jest-dom";

describe("<SignIn />", () => {
  it("has a signIn form", () => {
    render(
      <BrowserRouter>
        <SignIn signIn={SignIn} />
      </BrowserRouter>
    );
    screen.logTestingPlaygroundURL();
    expect(screen.getByRole('textbox', {name: /email:/i})).toBeInTheDocument()
    expect(screen.getByText(/password:\{" "\}/i)).toBeInTheDocument()

  });
});
