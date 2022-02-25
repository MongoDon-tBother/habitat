global.fetch = require('jest-fetch-mock');


describe('auth tests', () => {

    let app;

    beforeEach(() => {

        app = require('../auth')
    })

    afterEach(() => {
        fetch.resetMocks();
    })

    describe('request login', () => {
   
            test('POST /login', () => {
                const fakeSubmitEvent = {
                    preventDefault: jest.fn(),
                    target: {                     
                            email: { value: 'test4@gmail.com' },
                            password: { value: 'test4' }          
                    }
                }
                console.log(fakeSubmitEvent)
   
                app.requestLogin(fakeSubmitEvent);
                
                console.log(fetch.mock.calls);
                expect(fetch.mock.calls[0][0]).toString(
                  "https://habitat-trackerrr.herokuapp.com/auth/login"
                );
                expect(fetch.mock.calls[0][1]).toHaveProperty('method', 'POST');
                
            })
    
    })


        describe('requestRegistration', () => {
       
            test('POST /register', () => {

                const fakeSubmitEvent = {
                    preventDefault: jest.fn(),
                    target: {                     
                            username: { value: 'test4' },
                            email: { value: 'test4@gmail.com' },
                            password: { value: 'test4' },
                            passwordConfirmation: {value: 'test4'}
                    
            }
        }
        
        app.requestRegistration(fakeSubmitEvent)
        
        expect(fetch.mock.calls[0][0]).toString(
          "https://habitat-trackerrr.herokuapp.com/auth/register"
        );
        expect(fetch.mock.calls[0][1]).toHaveProperty('method', 'POST')
        expect(fetch.mock.calls[0].length).toBe(2)
        expect(fetch).toHaveBeenCalledTimes(1)

              
        });
    })
        



})

