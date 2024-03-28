let hours=document.querySelector('.Hours')
let minutes=document.querySelector('.Minutes')
let seconds=document.querySelector('.seconds')
let hrs=12
let mints=59
let scnds=59
hours.innerHTML=hrs
minutes.innerHTML=mints
seconds.innerHTML=scnds

setInterval(()=>
{
    scnds --
    if(scnds<10)
    {
        scnds=`0${scnds}`
    }
   
    if(scnds<1)
    {
        scnds=59
        mints--
        if(mints<10)
        {
            mints=`0${mints}`
        }
        if(mints<1)
        {
           
            mints=59
            hrs--
            
            if(hrs <0)
            {
                hrs=12
            }
            hours.innerHTML=hrs
        }
        minutes.innerHTML=mints
    }
    seconds.innerHTML=scnds
},1000)