import NotFound from "../pages/NotFound"
import { BrowserRouter } from "react-router-dom"
import { screen, render } from "@testing-library/react"

describe("<NotFound />", () => {
  it("renders an index link", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    const indexLink = screen.getByText(
      "You don't want to be a homeless, do you?"
    )
    expect(indexLink).toBeInTheDocument()
  })
})