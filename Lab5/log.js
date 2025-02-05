// Program to log the system uptime in a user-friendly format (days,hours, minutes).
const os = require('os');
setInterval(() => {
    const up = os.uptime();
    // const day= Math.floor(up/(60 * 60 * 24));
    // const hr= Math.floor((up%(60 * 60 * 24))/(60*60));
    // const minutes = Math.floor((uptime % (60*60))/60);
    console.log(Math.round(up/60) + ' seconds');
    console.log(Math.round(up/3600)+'hrs');
    console.log(Math.round(up/86400)+'minutes');

},5000)