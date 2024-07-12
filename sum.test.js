
                                                     //MATCHES CODE CONCEPT
//Basic matches
test('basic matches',() => {
    expect(2+2).toBe(4);
    expect('hello').toEqual('hello');
});

//Number Mtaches
test('number matches',() => {
    expect(4).toBeGreaterThan(3);
    expect(4).toBeGreaterThanOrEqual(4);
    expect(3).toBeLessThan(4);
    expect(3).toBeLessThanOrEqual(3);
    expect(0.1+0.2).toBeCloseTo(0.3)
});

//Truthiness Matches
test('truthiness matches',() => {
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect({}).toBeDefined();
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
});

//String Matches
test('string matches',() => {
    expect('team').not.toMatch(/v/);
    expect('Christian').toMatch(/tian/);
});

//Array matches
test('array matches',() => {
    const shopping = ['stationary','snacks','choclate','fruits','ice creame'];
    expect(shopping).toContain('snacks');
   // expect(new Set(shopping)).toContain('snacks');
});

//Object matches
test('object matches',() => {
    const PersonData = {firstName:'Tom',lastName:'cruse'};
    expect(PersonData).toEqual({firstName:'Tom',lastName:'cruse'});
   //expect(PersonData).toHaveProperty('firstName');
   // expect(PersonData).toHaveProperty('firstName','Tom');
});

//exception matches
const compile = require('./sum');
test('exception matches',() => {
    expect(() => compile()).toThrow();
    expect(() => compile()).toThrow(Error);
    expect(() => compile()).toThrow('you are using the wrong JDK');
});

//Async matches
const fetchData = require('./sum');

test('async matches', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
});

const fetchError = require('./sum');

test('async matches rejections', async () => {
    await expect(fetchError()).rejects.toThrow('error');
});

//Custom matches
expect.extend({
    toBeWithinRange(received,floor,celling){
        const pass = received >= floor && received <= celling;
        
        if(pass){
            return{
                message: () => `expected ${received} not to be with in range ${floor}-${celling}`,
                pass:true,
            }
        }else{
            return{
                message: () => `expected ${received} not to be with in range ${floor}-${celling}`,
                pass:false,
            }
        }
    }
})

test('Custom matches',() => {
    expect(100).toBeWithinRange(90,110);
});


                                                        //SNAPSHOT CONCEPT
//Snapshot matches
const generate = () => ({
    id:Math.floor(Math.random * 1000),
    name:'faleel',
})
test('snapshot matches',() => {
    const user = generate();
    expect(user).toMatchSnapshot({
        id:expect.any(Number),
    });
});

function exfunction(){
    return{
        message:"hello,world",
        timestamp:new Date().toISOString(),
    };
};
test('exfunction snapshot',() => {
    const result = exfunction();
    result.timestamp = '2024-07-12T12:34:56.789Z';
    expect(result).toMatchSnapshot();
});



                                                  //MOCK CODE CONCEPT
//Simple mock function
test('simple mock function', () => { 
    const mockfn = jest.fn();
    mockfn();
    expect(mockfn).toHaveBeenCalled();
 });

 //Implementation mock
 test('mock function Implementation',() =>{
    const mockfn = jest.fn().mockImplementation((x) => x*2);
    expect(mockfn(2)).toBe(4);
    expect(mockfn(3)).toBe(6);
 });

 //return mock
 test('mock function return vlaue',()=>{
    const mockstr = jest.fn().mockReturnValue('hello james arthur');
    expect(mockstr()).toBe('hello james arthur');
 });

 //asynchronous mock
 test('mock async function',async ()=>{
    const mockasy = jest.fn().mockResolvedValue('Async Result');
    await expect(mockasy()).resolves.toBe('Async Result');
 });


 // argument Mock
test('mock function with arguments', () => {
    const mockFn = jest.fn((x, y) => x + y);
    mockFn(1, 2);
    expect(mockFn).toHaveBeenCalledWith(1, 2);
  });



// MyClass
  const MyClass = require('./sum');
  
  test('mock class method', () => {
    const instance = new MyClass();
    jest.spyOn(instance, 'myMethod').mockReturnValue('Mock Method');
    expect(instance.myMethod()).toBe('Mock Method');
  });



//                                                ASYNCORONICES CODE CONCEPT
//simple promuses
const fetchdatabase = require('./sum');
test('resolves the hello,world',()=>{
    return fetchdatabase().then(data => {
        expect(data).toBe('hello,world');
    })
})

//async/await
const asyncfunction = require('./sum');
test('return how are you',async () => {
   const data = await asyncfunction();
   expect(data).toBe('how are you');
}); 


//async/await with rejection
const asyncReject = require('./sum');
test('Throws new Error',async ()=>{
   await expect(asyncReject()).rejects.toThrow('Async Error');
})

//callback function 
const fetchDB = require('./sum');
test('calls callback with hello,welcome to javascript testing jest',done => {
    function callback(data){
        try{
            expect(data).toBe('hello,welcome to javascript testing jest');
            done();
    }catch(error){
        done(error);
    }
}
fetchDB(callback);
});


// asyncMockFunction
jest.mock('./sum');
const fetchData = require('./sum');

test('mock async function', async () => {
  fetchData.mockResolvedValue('Mock Data');
  const data = await fetchData();
  expect(data).toBe('Mock Data');
});

  // timeoutFunction
  const timeoutFunction = require('./sum');
  
  test('resolves to Timeout Data', async () => {
    jest.useFakeTimers();
    const promise = timeoutFunction();
    jest.runAllTimers();
    const data = await promise;
    expect(data).toBe('Timeout Data');
  });

// apiCall
const getData = require('./sum');

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ title: 'Mock Title' }),
  })
);

test('fetches data with Mock Title', async () => {
  const data = await getData();
  expect(data.title).toBe('Mock Title');
});

  // multiStepAsync
  const multiStepAsync = require('./sum');
  
  test('completes multiple steps', async () => {
    const result = await multiStepAsync();
    expect(result).toBe('Step 1, Step 2');
  });