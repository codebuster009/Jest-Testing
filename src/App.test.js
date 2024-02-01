import { fireEvent, render ,screen } from "@testing-library/react"
import App from "./App"

test("click event testing" , ()=> {
render(<App/>)
const button = screen.getByRole("button")
fireEvent.click(button);
expect(screen.getByText("hello")).toBeInTheDocument();
})