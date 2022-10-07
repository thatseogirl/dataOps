import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button"

//test block
test("clicked button", () => {
    // render the component on virtual dom
    render(<Button />);

    //select the elements you want to interact with
    const testId = screen.getByTestId("allButton");

    //interact with those elements
    fireEvent.click(testId);

});