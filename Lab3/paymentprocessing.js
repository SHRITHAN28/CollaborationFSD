// In a payment processing system, you need to:
// Authenticate the user, verify if the payment method is valid, Process the
// payment, Update the user’s account balance, and notify the user of the payment result via email.
// Design this payment processing system using callbacks to ensure each step happens in order?

let users = [{ user: 'abc', email: 'cvr@email.com', password: 'cvr123', balance: 150 }, { user: 'abc', email: 'cmr@email.com', password: 'cmr123', balance: 170 }];
function auth(e, p, callback) {
    let user = user.find(u => u.email === e && u.password === p && u.user === user);
    if (!user) {
        console.log('Authentication failed');
        return;
    }
    else
        callback();
    setTimeout(() => {
        console.log('completed');
    }, 1000);
}
function 