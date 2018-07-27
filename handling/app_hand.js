function order(idOrder,timeout)
{
  console.log("ID Order"+idOrder);
  process_order(idOrder,timeout);
}

function process_order(idOrder,timeout)
{
  setTimeout(function(){
    console.log("ID Order : "+idOrder+" Process");
  },timeout);
}

order(100,6000);
order(101,4000);
order(102,2000);
