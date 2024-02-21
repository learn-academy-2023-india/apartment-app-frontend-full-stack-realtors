import { render, screen } from "@testing-library/react";
import ApartmentIndex from "../pages/ApartmentIndex";
import { BrowserRouter } from "react-router-dom";
import mockApartment from "../mockApartment";

describe("<ApartmentIndex />", () => {
  it("renders all apartments", () => {
    render(
      <BrowserRouter>
        <ApartmentIndex apartments={mockApartment} />
      </BrowserRouter>
    );

    mockApartment.forEach((apartment) => {
      expect(screen.getByText(`$${apartment.price}/month`)).toBeInTheDocument();
      expect(
        screen.getByText(
          `${apartment.street}, ${apartment.city}, ${apartment.state}`
        )
      ).toBeInTheDocument();
    });

    const bedroomsBathroomsTexts = screen.getAllByText(
      /(\d+) Bedroom (\d+\.?\d*), Bath/
    );
    expect(bedroomsBathroomsTexts.length).toBe(mockApartment.length);
  });
});