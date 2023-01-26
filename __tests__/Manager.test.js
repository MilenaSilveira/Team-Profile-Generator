const Manager = require('../lib/Manager');

test('Generate Manager', () => {
    const manager = new Manager('Milena', '33', 'milenacsilveira@gmail.com', '123');
    
    expect(manager.getName()) .toEqual('Milena');
});

test('Access Manager Id', () => {
    const manager = new Manager('Milena','33', 'milenacsilveira@gmail.com', '123');
    
    expect(manager.getId()) .toEqual('33');
});

test('Access Manager Email', () => {
    const manager = new Manager('Milena', '33', 'milenacsilveira@gmail.com', '123');
    
    expect(manager.getEmail()).toEqual('milenacsilveira@gmail.com');
});

test('Access Manager Office', () => {
    const manager = new Manager('Milena', '33', 'milenacsilveira@gmail.com', '123');
    
    expect(manager.getOffice()).toEqual('123');
});


test('Access Manager role', () => {
    const manager = new Manager('Milena', '33', 'milenacsilveira@gmail.com', '123');

    expect(manager.getRole()).toEqual("Manager");
}); 