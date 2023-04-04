// log numbers < 5

const logNumbers = () => {
    i = 0
    while (i < 5){
      console.log(i)
    i++ ; 
    }
    }
  logNumbers()
  // return true or false
  const returnTrueOlderThan30 = (age) => {
    if ( age > 30){
      return true;
    }
    else{
      return false;
    }
  }
  console.log(returnTrueOlderThan30(4))
  console.log(returnTrueOlderThan30(40))
  
  // return false if the score is less than 50 and true over 50
  
  const returnFalse = (score) => {
    if (score<50){
      return false;
    }
    else{
      return true;
    }
  }
  console.log(returnFalse(40))
  console.log(returnFalse(55))
  
  // take a name as an input and log it 10 times
  const logNameTen = (name) =>{
    for (let i=0 ; i<10; i++){
      console.log(name)
    }
  }
  input_name = prompt("Enter name to you want to see 10 times")
  logNameTen(input_name)
  
  // check and return if Chase is typed correctly
  const trueIfChase = (name) =>{
    if ( name === 'Chase'){
      return true;
    }
    else {
      return false;
    }
  }
  console.log(trueIfChase('Chase'))
  console.log(trueIfChase('chase'))