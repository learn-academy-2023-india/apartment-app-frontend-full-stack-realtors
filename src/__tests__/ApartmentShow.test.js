import { render, screen } from "@testing-library/react"
import ApartmentShow from "../pages/ApartmentShow"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockApartment from "../mockApartment.js"

describe("<ApartmentShow />", () => {
  it("renders one apartment", () => {
    const apartment = "1"
    render(
      <MemoryRouter initialEntries={[`/ApartmentShow/${apartment}`]}>
        <Routes>
          <Route path="/ApartmentShow/:id" element={<ApartmentShow apartments={mockApartment} />} />
        </Routes>
      </MemoryRouter>
    )
   
    expect(screen.getByText(/\$1800\/month/i)).toBeInTheDocument()
    expect(screen.getByText(/101 rimrock, san diego, ca/i)).toBeInTheDocument()
    expect(screen.getByText(/2 bedroom, 2 bath/i)).toBeInTheDocument()
    expect(screen.getByText(/pets: yes!/i)).toBeInTheDocument()
  })
})