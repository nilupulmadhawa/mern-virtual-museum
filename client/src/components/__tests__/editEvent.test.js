import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";



describe("test for event component", () => {
    
    //test case for buttons
    test("render the event form with button", () => {
        render(<editEvent />);
        const buttonList = screen.findAllByRole("button");       
    });
})