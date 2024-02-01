import { fireEvent, render ,screen } from "@testing-library/react"
import App from "../App"
import cleanDb from "../service"

beforeAll(()=>{console.log("Before running all tests i will be logged")})
beforeEach(()=>{cleanDb();})
//similarly explore afterAll and AfterEach
test("click event testing" , ()=> {
render(<App/>)
const button = screen.getByRole("button")
fireEvent.click(button);
expect(screen.getByText("hello")).toBeInTheDocument();
})
test("click event testing 2" , ()=> {
render(<App/>)
const button = screen.getByRole("button")
fireEvent.click(button);
expect(screen.getByText("hello")).toBeInTheDocument();
})
test("click event testing 3" , ()=> {
render(<App/>)
const button = screen.getByRole("button")
fireEvent.click(button);
expect(screen.getByText("hello")).toBeInTheDocument();
})