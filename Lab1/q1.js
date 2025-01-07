var a=20;
let b=30
const c=40;
console.log('a:',a); 
console.log('b:',b); 

//reassignment
try
{
    c= 60;
}
catch(e)
{
    console.log('error:',e.message);
}

//hoisting
console.log('d:',d);
var d = 70;

//scope
try
{
    function fun() 
    {
        let h=130;
        console.log('h:',h);
    }
    fun();
    console.log('h:',h);
}
catch(e)
{
    console.log('error:',e.message);
}