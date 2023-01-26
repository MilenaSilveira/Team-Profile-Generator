const Intern = require('../lib/Intern');


test('Generate Intern', () => {
    const intern = new Intern('Milena', 33, 'milenacsilveira@gmail.com', 'UCF');
    
    expect(intern.getName()) .toEqual('Milena');
});

test('Access Intern ID', () => {
    const intern = new Intern('Milena', 33, 'milenacsilveira@gmail.com', 'UCF');
    
    expect(intern.getId()).toEqual('33');
});

test('Access Intern Email', () => {
    const intern = new Intern('Milena', 33, 'milenacsilveira@gmail.com', 'UCF');
    
    expect(intern.getEmail()).toEqual('milenacsilveira@gmail.com');
});

test('Access Intern school', () => {
    const intern = new Intern('Milena', 33, 'milenacsilveira@gmail.com', 'UCF');
    
    expect(intern.getSchool()).toEqual('UCF');
});


test('Access Intern role', () => {
    const intern = new Intern('Milena', 33, 'milenacsilveira@gmail.com', 'UCF');

    expect(intern.getRole()).toEqual("Intern");
}); 