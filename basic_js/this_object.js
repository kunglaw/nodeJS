var obj = {
  name:"Aries Dimas Yudhistira",
  profesi:"Web Developer",
  print:function()
  {
    console.log(this.name+" is a "+this.profesi);
  }
}

function myFunction()
{
  console.log(" Iam a Function \n ");
}

obj.print();
console.log(" ======== ");
myFunction();
