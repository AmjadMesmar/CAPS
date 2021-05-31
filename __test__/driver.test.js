'use strict';
const event =require('../src/events.js')
const vender =require('../src/model/vendor.js');
const driver =require('../src/model/driver.js');
console.log = jest.fn();
describe('Logger middleware', ()=> {
    let consoleSpy;
    let order = {
        storeName : "Speed Automobiles",
        orderId: "dsasd4125dfdsh",
        customerName:"John Doe", 
        address:"NY st, New York",
    } 
    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });
    afterEach(()=> {
        consoleSpy.mockRestore();
    });
    it('Pickup event',()=> {
       event.emit('pickup',order)
        consoleSpy();
    });
    it('In-transit event',()=> {
        console.log('**************',consoleSpy,'***************');
    });
    it('Delivered event',()=> {
       event.emit('delivered',order)
        consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });
});