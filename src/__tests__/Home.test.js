import Home from "../pages/Home"
import { BrowserRouter } from "react-router-dom"
import { screen, render } from "@testing-library/react"

describe("<Home />", () => {
  it("renders an index link", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    const indexLink = screen.getByText(
      "EXPLORER YOUR NEW HOME"
    )
    expect(indexLink).toBeInTheDocument()
  })
})