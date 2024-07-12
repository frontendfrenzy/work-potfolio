function compile(){
    throw new Error('you are using the wrong JDK');
}

module.exports = compile;

const fetchData = () => 
    Promise.resolve('peanut butter');

module.exports = fetchData;

class MyClass {
    myMethod() {
      return 'Real Method';
    }
  }
  
  module.exports = MyClass;
  

  const fetchdatabase = () => {
    return new Promise((resolve) => {
      setImmediate(()=> {
        resolve('hello,world');
      },2000);
    })
  }
  module.exports = fetchdatabase;

  const asyncfunction = async ()=>{
    return 'how are you'
  }
  module.exports = asyncfunction;

  const asyncReject = async () => {
    throw new Error('Async Error');
  };

  module.exports = asyncReject;

  const fetchDB = (callback) => {
    setTimeout(()=>{
      callback('hello,welcome to javascript testing jest');
    },2000);
  };

  module.exports = fetchDB;

  const value = async () => 'Real Data';

module.exports = value;


const timeoutFunction = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Timeout Data');
    }, 1000);
  });
};

module.exports = timeoutFunction;

const fetch = require('node-fetch');

const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  return data;
};

module.exports = getData;

const multiStepAsync = async () => {
  const step1 = await Promise.resolve('Step 1');
  const step2 = await Promise.resolve('Step 2');
  return `${step1}, ${step2}`;
};

module.exports = multiStepAsync;

