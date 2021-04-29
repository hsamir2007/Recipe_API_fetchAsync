// let pizzaContainer = [];
// let pastaContainer = [];
// let saladContainer = [];
// function getPizza() {
//     let req = new XMLHttpRequest();
//     req.open("GET", `https://forkify-api.herokuapp.com/api/search?q=pizza`);
//     req.send();
//     req.addEventListener("readystatechange", function () {
//       if (req.readyState == 4 && req.status == 200) {
//         pizzaContainer = JSON.parse(req.response).recipes;
//         console.log(pizzaContainer);
//         console.log("pizza");
//       }
//     });
//   };

//   function getPasta() {
//     let req = new XMLHttpRequest();
//     req.open("GET", `https://forkify-api.herokuapp.com/api/search?q=pasta`);
//     req.send();
//     req.addEventListener("readystatechange", function () {
//       if (req.readyState == 4 && req.status == 200) {
//         pastaContainer = JSON.parse(req.response).recipes;
//         console.log(pastaContainer);
//         console.log("pasta");
//       }
//     });
//   };

//   function getSalad() {
//     let req = new XMLHttpRequest();
//     req.open("GET", `https://forkify-api.herokuapp.com/api/search?q=salad`);
//     req.send();
//     req.addEventListener("readystatechange", function () {
//       if (req.readyState == 4 && req.status == 200) {
//         saladContainer = JSON.parse(req.response).recipes;
//         console.log(saladContainer);
//         console.log("salad");
//       }
//     });
//   };
//   getSalad(); //Async code //Non-Blocking
//   getPasta(); //Async code //Non-Blocking
//   getPizza(); //Async code //Non-Blocking

// Async await

// let req = await (
//   await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`, {
//     method: "GET",
//   })
// ).json();
// console.log(req.recipes);

async function getPizza() {
  let req = await fetch(
    `https://forkify-api.herokuapp.com/api/search?q=pizza`,
    {
      method: "GET",
    }
  );
  let pizaaData = await req.json();
  console.log(pizaaData.recipes);
}

async function getPasta() {
  let req = await fetch(
    `https://forkify-api.herokuapp.com/api/search?q=pasta`,
    {
      method: "GET",
    }
  );
  let pastaData = await req.json(); //bulid in method
  console.log(pastaData.recipes);
}

(async function getAll() {
  await getPizza();
  await getPasta();
})();
// getAll();
