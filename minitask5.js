let account = {
    id: 12,
    username:"rafi75",
    password:"123"
}

let passwordBaru = "1234"

if(passwordBaru.length > 5) {
    let accountUpdate = {...account, passwordBaru};
    console.log(`id:${accountUpdate.id} username: ${accountUpdate.username} Password baru: ${accountUpdate.passwordBaru}`);
} else {
    console.log("Password minimum 5 karakter");
}
