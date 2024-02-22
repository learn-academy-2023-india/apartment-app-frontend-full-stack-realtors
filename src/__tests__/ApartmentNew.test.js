import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import ApartmentNew from "../pages/ApartmentNew"
import React from "react"
import mockUsers from '../mockUsers'

describe("<ApartmentNew />", () => {
    it("renders the form", () => {
        render(
            <BrowserRouter>
                <ApartmentNew currentUser={mockUsers[0]} />
            </BrowserRouter>
        )
        screen.logTestingPlaygroundURL()
        expect(screen.getByText(/street:/i)).toBeInTheDocument()
        expect(screen.getByText(/city:/i)).toBeInTheDocument()
        expect(screen.getByText(/state:/i)).toBeInTheDocument()
        expect(screen.getByText(/price per month:/i)).toBeInTheDocument()
        expect(screen.getByText(/bedrooms:/i)).toBeInTheDocument()
        expect(screen.getByText(/bathrooms:/i)).toBeInTheDocument()
        expect(screen.getByText(/pets:/i)).toBeInTheDocument()
        expect(screen.getByText(/image url:/i)).toBeInTheDocument()
        expect(screen.getByText(/manager:/i)).toBeInTheDocument()
        expect(screen.getByText(/email:/i)).toBeInTheDocument()
    })  

    it("renders the button", () => {
        render(
            <BrowserRouter>
                <ApartmentNew currentUser={mockUsers[0]}/>
            </BrowserRouter>
        )
        
        expect(screen.getByRole('button', {name: /submit/i})).toBeInTheDocument()
    })
})