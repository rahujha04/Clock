setInterval(()=>{
    d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let htime = 30*h+m/2;
    let mtime = 6*m;
    let stime = 6*s;
    hour.style.transform = `rotate(${htime}deg)`;
    minute.style.transform = `rotate(${mtime}deg)`;
    second.style.transform = `rotate(${stime}deg)`;
    
}, 1000);