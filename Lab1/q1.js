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
/*a: 20
b: 30
Error: Assignment to constant variable.
d: undefined
h: 130
Error: h is not defined
PS E:\Documents\GitHub\CollaborationFSD>  */