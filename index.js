let hours=document.querySelector('.Hours')
let minutes=document.querySelector('.Minutes')
let seconds=document.querySelector('.seconds')
let hrs=12
let mints=10
let scnds=10
hours.innerHTML=hrs
minutes.innerHTML=mints
seconds.innerHTML=scnds

setInterval(()=>
{
    scnds--
    if(scnds<1)
    {
        scnds=59
    }
},10)