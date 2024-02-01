import { fireEvent, render ,screen } from "@testing-library/react"
import App from "../App"
//Before taking the code for production if some changes occur in the component and due to that suppose the app might crash it is recommended to go with snapshot testing as it tells us clearly what recent changes have you done by taking the snapshot of the component and than if you do changes again it will say snapshot testing has failed as it didnt match the prev snapshot so if we need to update the changes simply press the "u" button and it will update the snapshot
test("snapshot for app component" , ()=> {
    const container = render(<App/>)
    expect(container).toMatchSnapshot()
})

