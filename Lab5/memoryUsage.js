const os = require('os');
setInterval(() => {
    const tot = os.totalmem();
    const free = os.freemem();
    const usage = (free / tot) * 100;
    // const percent = Math.round(u);
    console.log(`percentage=${usage}%`);
}, 5000);