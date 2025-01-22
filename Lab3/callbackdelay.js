//Write a function delayedMessage(message, delay) that prints the
//message after the specified delay using setTimeout. Use a callback for when
//the message has been printed.
function delayed(msg, delay) {
    setTimeout(() => {
        console.log(msg);
    }, delay);
}
