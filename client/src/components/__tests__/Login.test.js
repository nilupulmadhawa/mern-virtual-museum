import {render, screen, clenaup, getByTestId} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Login from "../../views/Login";



test('test', () => {
    expect(true).toBe(true);
})


//test case for email validation
test("should passed on email validation", () => {
    const testEmail = "admin@gmail.com";
});


//negative test case for email type
test("email input field should accept email", () => {
    render(<Login />);
    const email = screen.getByPlaceholderText("Enter Your Email");
    userEvent.type(email, "admin");
    expect(email.value).toMatch("admin@gmail.com");
});

//match email input type with its attribute
test("email input type should have type email", () => {
    render(<Login />);
    const email = screen.getByPlaceholderText("Enter Your Email");
    expect(email).toHaveAttribute("type","email");
});