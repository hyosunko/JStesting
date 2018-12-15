//For these exercises - write the function first, then write the test.....

//write a function returns "drink coffee" if you are tired and "keep working" if you are not tired.  Then write the test.

// function tired(str){
// 	return (str ==='tired'? "drink coffee" : "keep working")
// }

// describe('tired',() => {
// 	test("returns a drink coffee if tired", () => {
// 		expect(tired("tired")).toBe("drink coffee")
// 	})
// 	test("return a keep working if not tired", ()=>{
// 		expect(tired("8")).toBe("keep working")
// 	})
// })

//write a function returns "relax" if you are stressed and "keep going" if you are not stressed.  Then write the test.

// function stressed(str){
// 	return (str === "stressed" ? "relax" : "keep going")
// }

// describe('stressed', ()=>{
// 	test("returns relax if stressed otherwise returns keep working", ()=>{
// 		expect(stressed("stressed")).toBe("relax")
// 	})
// 	test("returns relax if stressed otherwise returns keep working", ()=>{
// 		expect(stressed("shit")).toBe("keep going")
// 	})
// })

//Write a function that returns "in budget" if a price is lower than $300.  Then write the test.

// function inBudget(price){
// 	return price< 300 ? "in budget" : "out of budget"
// }


// describe('inBudget', ()=>{
// 	test("returns in budget if price is lower than 300", ()=>{
// 		expect(inBudget(200)).toBe("in budget")
// 	})
// 	test("retruns out of budget if price is greater or equal to 300", ()=>{
// 		expect(inBudget(400)).toBe("out of budget")
// 	})
// })

//write a functions that takes in two arguments(numbers) and returns the smaller number. Then write the test.

// function smaller(num1, num2){
// 	return num1 > num2 ? num2 : num1
// }

// describe('smaller', ()=>{
// 	test("returns a smaller number if one numbere is smaller than the other number", ()=>{
// 		expect(smaller(1, 2)).toBe(1)
// 	})
// 	test("returns a smaller number if one numbere is smaller than the other number", ()=>{
// 		expect(smaller(3, 2)).toBe(2)
// 	})
// })

//Write a functions that takes in one argument(number) and returns whether the number is odd. Then write the test.

// function oddNumber(num){
// 	return num + (num % 2 === 1 ? ' is ' : ' is not ') + 'odd' 
// }

// describe('oddNumber', ()=>{
// 	test("returns number is odd if input is odd", ()=>{
// 		expect(oddNumber(3)).toBe("3 is odd")

// 	})
// 	test("returns number is not odd if input is not odd", ()=>{
// 		expect(oddNumber(4)).toBe("4 is not odd")
// 	})
// })

//Write a function that takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape. Then write the test.

// function fruit(str){
// 	return (str === "banana" ? "yellow" : (str === "apple" ? "red":(str === "grape" ? "purple":"no color")))
// }

// describe('fruit', ()=>{
// 	// test("returns yellow if input is banana",()=>{
// 	// 	expect(fruit('banana')).toBe("yellow")
// 	// }),
// 	// test("returns red if input is apple", ()=>{
// 	// 	expect(fruit("apple")).toBe("red")
// 	// }),
// 	// test("returns purple if input is grape", () =>{
// 	// 	expect(fruit("grape")).toBe("purple")
// 	// }),
// 	test("",()=>{
// 		expect(fruit("apple")).toBe("red")
// 	})
// })

 //For these next exercises - Write the test first, make it fail, write the code then make it pass.....

// Exercise 1
// Write a function called Rick that returns "Morty".

// describe('Rick',()=>{
// 	test("returns Morty",()=>{
// 		expect(Rick()).toBe("Morty")
// 	})
// })

// function Rick(){
// 	return "Morty"
// }

// Exercise 2
// Write a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

// describe('greeter',()=>{
// 	test("returns a greeing with the name",()=>{
// 		expect(greeter("Mike")).toBe("Welcome Mike")
// 	})
// })

// function greeter(name){
// 	return "Welcome " + name;
// }

// Exercise 3
// Write a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even.

// describe('oddOrEven',()=>{
// 	test("returns odd or even whether the number is odd or even",()=>{
// 		expect(oddOrEven(3)).toBe("odd")
// 	}),
// 	test("returns odd or even whether the number is odd or even", ()=>{
// 		expect(oddOrEven(4)).toBe("even")
// 	})
// })


// function oddOrEven(num){
// 	return num % 2 === 0 ? "even" : "odd"
// }

// Exercise 4
// Write a function called triple that takes an number as an argument and returns the result of that number multiplied by 2.

// describe('triple',()=>{
// 	test("returns number multiplied by 2", ()=>{
// 		expect(triple(3)).toBe(6)
// 	})
// })

// function triple(num){
// 	return num * 2;
// }

// Exercise 5
// Write a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

// describe('multiply',()=>{
// 	test("returns multiple of two numbers", ()=>{
// 		expect(multiply(4, 5)).toBe(20)
// 	})
// })

// function multiply(num1, num2){
// 	return num1 * num2
// }

// Exercise 6
// Write a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// describe('divisibleBy',()=>{
// 	test("returns first number is divisible by second number",()=>{
// 		expect(divisibleBy(10, 5)).toBe("10 is divisible by 5")
// 	})
// })


// function divisibleBy(num1, num2){
// 	return num1 + (num1 % num2 === 0 ? " is divisible by " : ' is not divisible by ') + num2
// }

// Exercise 7
// Consider this variable:
// var product = { name: "chair", price: 14.99 }
// Write a function called describeProduct takes product as an argument and returns "The product is a chair. It costs $14.99".

// describe('describeProduct',()=>{
// 	test("returns The product is a chair. It costs $14.99",()=>{
// 		var product = { name: "chair", price : 14.99}
// 		expect(describeProduct(product)).toBe("The product is a chair. It costs $14.99.")
// 	})
// })

// function describeProduct(arr){
// 	return "The product is a " + arr.name + ". It costs $" + arr.price + "."

// }


// Write a function that takes in an array of five numbers and returns a new array with every number multiplied by 3.
// write the tests
// make it fail
// write the Code
// make it pass
// refactor with map()
// make sure it still passes

// describe('multipleByThree',()=>{
// 	test("returns a new array with multiple of 3", ()=>{
// 		var numArray=[1, 2, 3, 4, 5]
// 		expect(multipleByThree(numArray)).toEqual([3, 6, 9, 12, 15])
// 	})
// })


// function multipleByThree(arr){
// 	let newArr = [];
// 	// for (let i = 0; i < arr.length; i++){
// 	// 		newArr.push(arr[i]*3)
// 	// }
// 	newArr = arr.map(v => v*3)
// 	return newArr
// }

// Write a function that takes in an array and saves all numbers in the numbers array that are evenly divisible by 3 into another array.

// write the tests
// make it fail
// write the Code
// make it pass
// refactor with filter()
// make sure it still passes

// describe('divisibleByThree',()=>{
// 	test("returns number array with evenly divisible by 3", ()=>{
// 		var arr = [3, 5, 9, 12, 14]
// 		expect(divisibleByThree(arr)).toEqual([3, 9, 12])
// 	})
// })

// function divisibleByThree(arr){
// 	let newArr =[];
// 	// for(let i = 0; i < arr.length; i++){
// 	// 	if( arr[i] % 3 === 0){
// 	// 	newArr.push(arr[i])
// 	// 	}
// 	// }

// 	newArr = arr.filter(v => v % 3 === 0)
// 	return newArr;
// }


// describe('divisibleByThree',()=>{
// 	test("returns number array with evenly divisible by 3", ()=>{
// 		var arr = [3, 5, 9, 12, 14]
// 		expect(divisibleByThree(arr)).toEqual([[3, 9, 12],[5, 14]])
// 	})
// })

// function divisibleByThree(arr){
// 	let newArr =[], newArr1 =[], newArr2=[]
// 	// for(let i = 0; i < arr.length; i++){
// 	// 	if( arr[i] % 3 === 0){
// 	// 		newArr1.push(arr[i])
// 	// 	} else {
// 	// 		newArr2.push(arr[i])
// 	// 	}
// 	// }

// 	// newArr = [newArr1 , newArr2]

// 	newArr = [arr.filter(v => v % 3 === 0), arr.filter(v => v % 3 !== 0)]
// 	return newArr;
// }



//
// For these, write the test, make it fail, write the code, make it pass
//
//
//
// The World Translator
// Write a function named helloWorld that:
//
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Test the function for each of the supported languages
//

// describe('worldTranslator',()=>{
// 	test("returns Hello World in different languages",()=>{
// 		expect(worldTranslator("es")).toBe("Buenos, Mundo")
// 	})
// 	test("returns Hello World in different languages",()=>{
// 		expect(worldTranslator("de")).toBe("Wis, Mundo")
// 	})
// 	test("returns Hello World in different languages",()=>{
// 		expect(worldTranslator("en")).toBe("Hello, World")
// 	})
// 	test("returns Hello World in different languages",()=>{
// 		expect(worldTranslator()).toBe("Hello, World")
// 	})
// })

// function worldTranslator(str){
// 	if(str === "es"){
// 		return "Buenos, Mundo"
// 	} else if (str === "de"){
// 		return "Wis, Mundo"
// 	} else {
// 		return "Hello, World"
// 	}
// }


//
// The Grade Assigner
// Write a function named assignGrade that:
//
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Test the function for a few different scores.
//

// describe('gradeAssigner',()=>{
// 	test("returns grade based on numbers", ()=>{
// 		expect(gradeAssigner(85)).toBe("B")
// 	})
// 	test("returns grade based on numbers", ()=>{
// 		expect(gradeAssigner(95)).toBe("A")
// 	})
// 	test("returns grade based on numbers", ()=>{
// 		expect(gradeAssigner(71)).toBe("C")
// 	})
// 	test("returns grade based on numbers", ()=>{
// 		expect(gradeAssigner(65)).toBe("D")
// 	})
// 	test("returns grade based on numbers", ()=>{
// 		expect(gradeAssigner(55)).toBe("F")
// 	})
// })

// function gradeAssigner(num){
// 	if(num > 90) { return "A"}
// 	else if(num > 80) { return "B"}
// 	else if(num > 70) { return "C"}
// 	else if(num > 60) { return "D"}
// 	else { return "F"}
// }
//
// The Pluralizer
// Write a function named pluralize that:
//
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form of the noun, if necessary.
// pluralizer(5, cat) should return "5 cats"
// pluralizer(1, dog) should return "1 dog" because the number one does not require a plural noun
//

// describe('pluralizer',()=>{
// 	test("returns plural words",()=>{
// 		expect(pluralizer(5, "cat")).toBe("5 cats")
// 	})
// 	test("returns plural words",()=>{
// 		expect(pluralizer(1, "dog")).toBe("1 dog")
// 	})

// })

// function pluralizer(num, str){
// 	return num + " " + str + (num>1 ? "s" : "")
// }


// Bonus: Make it handle a few collective nouns like "sheep", "geese", "children", "people" and "species".

// describe('pluralizer',()=>{
// 	test("return plural words",()=>{
// 		expect(pluralizer(5, "cat")).toBe("5 cats")
// 	})
// 	test("return plural words",()=>{
// 		expect(pluralizer(1, "dog")).toBe("1 dog")
// 	})
// 	test("return plural words",()=>{
// 		expect(pluralizer(5, "sheep")).toBe("5 sheep")
// 	})
// 	test("return plural words",()=>{
// 		expect(pluralizer(5, "goose")).toBe("5 geese")
// 	})
// 	test("return plural words",()=>{
// 		expect(pluralizer(5, "child")).toBe("5 children")
// 	})
// 	test("return plural words",()=>{
// 		expect(pluralizer(5, "person")).toBe("5 people")
// 	})
// 	test("return plural words",()=>{
// 		expect(pluralizer(5, "species")).toBe("5 species")
// 	})
// })

// function pluralizer(num, str){
// 	if(str === "sheep") { return num + " " + str}
// 	else if(str === "goose") { return num + " " + "geese"}
// 	else if(str === "child") { return num + " " + "children"}
// 	else if(str === "person") { return num + " " + "people"}
// 	else if(str === "species") { return num + " " + str}
// 	else if(num > 1) { return num + " " + str + "s"}
// 	else {return num + " " + str}
// }


// Testing
// Write a test in jest for a function that takes in an array and returns a new array with every number multiplied by 5

// Make it fail

// Write the function for this test using a for loop and .push()

// Make it pass

// Copy/paste the function and Refactor using map()

// Make sure it still passes your test


// describe('multipleByThree',() =>{
// 	test("returns multiple of 5 on number array",()=>{
// 		var input = [[1, 2, 3, 4, 5], [3, 6, 9]]
// 		var output = [[5, 10, 15, 20, 25],[15, 30, 45]]
// 		expect(multipleByThree(input[0])).toEqual(output[0])
// 		expect(multipleByThree(input[1])).toEqual(output[1])
// 	})
// })

// multipleByThree = (arr) =>{

// 	// let newArr =[]
// 	// for(i=0; i<arr.length; i++){
// 	// 	newArr.push(arr[i]*5);
// 	// }

// 	// return newArr;



// 	return newArr = arr.map(v=> v*5)
// }


// describe('oddNumber',()=>{
// 	test("returns odd number from array list",()=>{
// 		var input = [[1, 2, 3, 4, 5, 6],[7, 8, 9, 10]];
// 		var output = [[1, 3, 5],[7,9]]
// 		expect(oddNumber(input[0])).toEqual(output[0])
// 		expect(oddNumber(input[1])).toEqual(output[1])
// 	})
// })

// oddNumber = arr =>{
// 	// let newArr=[];
// 	// for(let i = 0; i<arr.length; i++){
// 	// 	(arr[i]% 2 === 1 ? newArr.push(arr[i]) : newArr)
// 	// }

// 	// return newArr

// 	return newArr = arr.filter(v=>v%2===1)
// }


// console.log(oddNumber([1,2,3]))
// console.log(newArr)


describe('capitalizeStr', ()=>{
	test("return capitalized string",()=>{
		var input = ["Hello","test", 34]
		var output = ["HELLO","TEST", 34]
		expect(capitalizeStr(input[0])).toBe(output[0])
		expect(capitalizeStr(input[1])).toBe(output[1])
		expect(capitalizeStr(input[2])).toBe(output[2])
})
})

capitalizeStr = (str) => {
	return newStr = (typeof str === 'string' ?str.toUpperCase() : str)
}