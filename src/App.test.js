import{fireEvent,render , screen} from  "@testing-library/react"
import App from "./App"
test("onChange event testing" , ()=> {
  render(<App/>)
  let input = screen.getByRole("textbox")
  fireEvent.change(input ,{target: {value: 'a'}})
  expect(input.value).toBe("atest");
})