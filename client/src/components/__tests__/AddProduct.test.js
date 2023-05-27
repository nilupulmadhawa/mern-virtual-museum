import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";



describe("test for product component", () => {
    
    //test case for buttons
    test("render the product form with button", () => {
        render(<addProduct />);
        const buttonList = screen.findAllByRole("button");       
    });
})