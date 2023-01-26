const Engineer = require('../lib/Engineer');

test('Generate Engineer', () => {
    const engineer = new Engineer('Milena', 33, 'milenacsilveira@gmail.com', 'https://github.com/MilenaSilveira/Team-Profile-Generator');
    
    expect(engineer.getName()) .toEqual('Milena');
});

test('Access Engineer Id', () => {
    const engineer = new Engineer('Milena', 33, 'milenacsilveira@gmail.com', 'https://github.com/MilenaSilveira/Team-Profile-Generator');
    
    expect(engineer.getId()) .toEqual('33');
});

test('Access Engineer Email', () => {
    const engineer = new Engineer('Milena', 33, 'milenacsilveira@gmail.com', 'https://github.com/MilenaSilveira/Team-Profile-Generator');
    
    expect(engineer.getEmail()).toEqual('milenacsilveira@gmail.com');
});

test('Access Engineer Github', () => {
    const engineer = new Engineer('Milena', 33, 'milenacsilveira@gmail.com', 'https://github.com/MilenaSilveira/Team-Profile-Generator');
    
    expect(engineer.getGithub()).toEqual('https://github.com/MilenaSilveira/Team-Profile-Generator');
});


test('Access Engineer role', () => {
    const engineer = new Engineer('Milena', 33, 'milenacsilveira@gmail.com', 'https://github.com/MilenaSilveira/Team-Profile-Generator');

    expect(engineer.getRole()).toEqual("Engineer");
}); 