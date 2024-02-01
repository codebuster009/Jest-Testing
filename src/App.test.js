import {render , screen} from '@testing-library/react'
import App from './App.js'
test('testing app component text' , ()=> {
  render(<App/>)
  const text = screen.getByText(/First React test case/i);
  const text2 = screen.getByText(/sEcOnd React test case/i);
  const title = screen.getByTitle("Grand Theft Auto")
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
})

test("checking if input box is there" , () => {
  render(<App/>)
  let checkInput = screen.getByRole("textbox")
  let checkPlaceholder = screen.getByPlaceholderText(/Enter Your Name Gracefully/i)
  expect(checkInput).toBeInTheDocument();
  expect(checkPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name" , "Kartavya");
  expect(checkInput).toHaveAttribute("type" , "text");
  expect(checkInput).toHaveAttribute("value" , "Barsat singh");
})
describe.only("UI test cases" , ()=> {
  test("check the input" , ()=> {
    render(<App/>)
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("type" , "text")
  })
  test("check the input2" , ()=> {
    render(<App/>)
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("type" , "text")
  })
  test("check the input3" , ()=> {
    render(<App/>)
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("type" , "text")
  })
})
describe("API test cases" , ()=> {
  test("api input" , ()=> {
    render(<App/>)
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("type" , "text")
  })
  test("api input2" , ()=> {
    render(<App/>)
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("type" , "text")
  })
  test("api input3" , ()=> {
    render(<App/>)
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("type" , "text")
  })
  describe('inner describe group', () => {
    test('api nested test' , ()=> {
      render(<App/>)
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("type" , "text")
    })
  })
  
})