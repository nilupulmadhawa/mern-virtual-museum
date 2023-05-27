import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";



describe("test for museum component", () => {
    
    //test case for buttons
    test("render the museum form with button", () => {
        render(<editMuseum />);
        const buttonList = screen.findAllByRole("button");       
    });
})