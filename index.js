const generatequote= async()=>
{
  
    const setheader={
        //use headers as it is not user name

        headers:
    {
        Accept:"application/json"
    }}
   // use fecth method to call api
   // 1st argument:which api (url )
   // if i get response or result use fat arrow 
    // function and convert in json format




    //using Fetch method return promise and have to wait
    // No need of async keyword
      fetch('http://quotable.io/random').then((result)=>
      {
       return result.json();
      }).then((data)=>
      {
       quotes.innerHTML=data.content;
      })
      .catch((error)=>
      {
        quotes.innerHTML="Loadings ";
      })





   
}

const quotes=document.getElementById('quotes');
const quotesbtn=document.getElementById('quotesbtn');
// fire an event using jokesbtn
quotesbtn.addEventListener('click', generatequote);



