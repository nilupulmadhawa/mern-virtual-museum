import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";



describe("test for blog component", () => {
    
    //test case for buttons
    test("render the blog form with button", () => {
        render(<editBlog />);
        const buttonList = screen.findAllByRole("button");       
    });
})