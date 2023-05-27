import {render, screen} from "@testing-library/react";
import Footer from "../Footer";


//test case for text in footer
test("footer renders with text", () => {
    render(<Footer/>);
    const linkElement = screen.getByText(/How can we help you. get in touch/);
    expect(linkElement).toBeInTheDocument();
});

