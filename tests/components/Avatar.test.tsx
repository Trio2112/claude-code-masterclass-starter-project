import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import Avatar from "@/components/Avatar"

describe("Avatar", () => {
  it("renders the first letter of a simple name", () => {
    render(<Avatar name="alice" />)
    expect(screen.getByText("A")).toBeDefined()
  })

  it("renders the first two uppercase letters for a PascalCase name", () => {
    render(<Avatar name="JohnDoe" />)
    expect(screen.getByText("JD")).toBeDefined()
  })

  it("renders only first letter when name starts uppercase but has no second capital", () => {
    render(<Avatar name="Alice" />)
    expect(screen.getByText("A")).toBeDefined()
  })
})
