import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import AuthForm from "@/components/AuthForm";

// Use exact label text "Password" to avoid matching the aria-label on the toggle button
const getPasswordInput = () => screen.getByLabelText("Password");

describe("AuthForm — login", () => {
  it("renders email field, password field, and Log In button", () => {
    render(<AuthForm type="login" />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(getPasswordInput()).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
  });

  it("contains a link to /signup", () => {
    render(<AuthForm type="login" />);

    const link = screen.getByRole("link", { name: /sign up/i });
    expect(link).toHaveAttribute("href", "/signup");
  });

  it("logs email and password to console on submit", async () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const user = userEvent.setup();

    render(<AuthForm type="login" />);

    await user.type(screen.getByLabelText(/email/i), "test@example.com");
    await user.type(getPasswordInput(), "secret123");
    await user.click(screen.getByRole("button", { name: /log in/i }));

    expect(consoleSpy).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "secret123",
    });

    consoleSpy.mockRestore();
  });
});

describe("AuthForm — signup", () => {
  it("renders email field, password field, and Sign Up button", () => {
    render(<AuthForm type="signup" />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(getPasswordInput()).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign up/i }),
    ).toBeInTheDocument();
  });

  it("contains a link to /login", () => {
    render(<AuthForm type="signup" />);

    const link = screen.getByRole("link", { name: /log in/i });
    expect(link).toHaveAttribute("href", "/login");
  });

  it("logs email and password to console on submit", async () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const user = userEvent.setup();

    render(<AuthForm type="signup" />);

    await user.type(screen.getByLabelText(/email/i), "new@example.com");
    await user.type(getPasswordInput(), "password456");
    await user.click(screen.getByRole("button", { name: /sign up/i }));

    expect(consoleSpy).toHaveBeenCalledWith({
      email: "new@example.com",
      password: "password456",
    });

    consoleSpy.mockRestore();
  });
});

describe("AuthForm — password visibility toggle", () => {
  beforeEach(() => {
    render(<AuthForm type="login" />);
  });

  it("password field starts as type=password", () => {
    expect(getPasswordInput()).toHaveAttribute("type", "password");
  });

  it("clicking the toggle reveals the password (type=text)", async () => {
    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: /show password/i }));

    expect(getPasswordInput()).toHaveAttribute("type", "text");
  });

  it("clicking the toggle twice hides the password again", async () => {
    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: /show password/i }));
    await user.click(screen.getByRole("button", { name: /hide password/i }));

    expect(getPasswordInput()).toHaveAttribute("type", "password");
  });
});
