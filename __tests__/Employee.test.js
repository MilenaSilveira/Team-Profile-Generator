const Employee = require('../lib/Employee');


test('Generate Employee', () => {
    const employee = new Employee('Milena', 33, 'milenasilveira@gmail.com');

    expect(employee.name).toEqual('Milena');
    expect(employee.id).toEqual(33);
    expect(employee.email).toEqual('milenasilveira@gmail.com');
});


test('Access Employee name', () => {
    const employee = new Employee('Milena', 33, 'milenasilveira@gmail.com');
    expect(employee.getName()).toEqual('Milena');
});


test('Access Employee ID', () => {
    const employee = new Employee('Milena', 33, 'milenasilveira@gmail.com');

    expect(employee.getId()).toEqual('33');
});


test('Access Employee email', () => {
    const employee = new Employee('Milena', 33, 'milenasilveira@gmail.com');

    expect(employee.getEmail()).toEqual('milenasilveira@gmail.com');
});


test('Access Employee role', () => {
    const employee = new Employee('Milena', 33, 'milenasilveira@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 