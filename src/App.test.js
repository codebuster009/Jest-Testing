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