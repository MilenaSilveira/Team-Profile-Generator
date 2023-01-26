module.exports = createTeam = team => {
    console.log(team)
    return ` <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Team-Profile-Generator</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>

    <main class="d-flex flex-wrap flex-row justify-content-center">

        <div class="card" style="min-width: 20rem; min-height: 21rem;">
            <div class="card-body">
              <h3 class="card-title">Milena Silveira</h3>
              <h5 class="card-text">Manager</h5>
            </div>
            <ul class="list-group list-group-flush border border-gray rounded shadow bg-white">
              <li class="list-group-item id">ID: </li>
              <li class="list-group-item email">Email: </li>
              <li class="list-group-item office ">Office: </li>
            </ul>
        </div>

    </main>
    
</body>
</html>
`



}