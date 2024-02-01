import Add from "./sum";
test('testing for add function' , () => {
    expect(Add(5,4)).toBe(9)
})
test('testing for add function 2' , () => {
    expect(Add(80,10)).toBe(90)
})