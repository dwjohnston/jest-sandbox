

let x; 
beforeAll(() =>{
    console.log("before all"); 
    x = Math.random(); 
})

beforeEach(() =>{
    console.log("before each"); 
})
describe("I'm a describe block", () => {

    console.log("Describe block a", x); 

    describe("inner describe", () => {
        it ("it a", () => {
            console.log("inner-it a", x); 
        })
    
        it ("it b", () => {
            console.log("inner-it b", x); 
        })
    })
    it ("it a", () => {
        console.log("it a", x); 
    })

    it ("it b", () => {
        console.log("it b", x); 
    })
})

describe("I'm another describe block", () => {

    console.log("Describe block b", x); 
    it ("it a", () => {
        console.log("it b-a", x); 
    })

    it ("it b", () => {
        console.log("it b-b", x); 
    })
})