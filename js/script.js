let pizzaContainer = [];
let pastaContainer = [];
let saladContainer = [];
function getPizza() {
    let req = new XMLHttpRequest(); 
    req.open("GET", `https://forkify-api.herokuapp.com/api/search?q=pizza`);
    req.send();
    req.addEventListener("readystatechange", function () {
      if (req.readyState == 4 && req.status == 200) {
        pizzaContainer = JSON.parse(req.response).recipes; 
        console.log(pizzaContainer);     
        console.log("pizza");     
      }
    });
  };

  function getPasta() {
    let req = new XMLHttpRequest(); 
    req.open("GET", `https://forkify-api.herokuapp.com/api/search?q=pasta`);
    req.send();
    req.addEventListener("readystatechange", function () {
      if (req.readyState == 4 && req.status == 200) {
        pastaContainer = JSON.parse(req.response).recipes; 
        console.log(pastaContainer);  
        console.log("pasta");  
      }
    });
  };
  
  function getSalad() {
    let req = new XMLHttpRequest(); 
    req.open("GET", `https://forkify-api.herokuapp.com/api/search?q=salad`);
    req.send();
    req.addEventListener("readystatechange", function () {
      if (req.readyState == 4 && req.status == 200) {
        saladContainer = JSON.parse(req.response).recipes; 
        console.log(saladContainer);
        console.log("salad");
      }
    });
  };
  getSalad(); //Async code //Non-Blocking
  getPasta(); //Async code //Non-Blocking
  getPizza(); //Async code //Non-Blocking
