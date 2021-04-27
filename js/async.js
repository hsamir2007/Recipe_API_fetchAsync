let DataContainer = [];
let detailsDataContainer = [];

let row = document.getElementById("rowData");

/**______To Get Recipes __________ */
let links = document.querySelectorAll(".dropdown-item");
for (let index = 0; index < links.length; index++) {
  links[index].addEventListener("click", function (event) {
    // console.log(event.target);
    let hLink = event.target.innerHTML;
    getRecipes(hLink);
  });
}

/**______To Get Recipes Details Data__________ */
let mealsLinks = document.querySelectorAll(".mealsLinks");
for (let index = 0; index < mealsLinks.length; index++) {
  mealsLinks[index].addEventListener("click", function (event) {
    console.log(event.target);
    let mLink = event.target.innerHTML;
    getDetailsData(mLink);
  });
}

function getRecipes() {
  return new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest(); //instant => opp  localStorage.
    //        method     , Api url
    req.open("GET", `https://forkify-api.herokuapp.com/api/search?q=pizaa`);
    req.send();
    // req.response;
    req.addEventListener("readystatechange", function () {
      if (req.readyState == 4 && req.status == 200) {
        // console.log(req.response);
        // DataContainer = req.response; //string
        DataContainer = JSON.parse(req.response).recipes; //object
        // console.log(DataContainer);
        displayData();
        resolve(); //callback();
      } else if (req.status != 200) {
        reject();
      }
    });
  });
  getRecipes();

  // getRecipes().then(()=>{console.log('good')}).catch(()=>{console.log('bad')});

  function displayData() {
    let div = ``;

    for (let index = 0; index < DataContainer.length; index++) {
      div += ` <div  class="col-md-4 my-2"><div class="card position-relative d-flex flex-column text-center">
    <a href="${DataContainer[index].source_url}" target="_blank">
             <img  class="img-fluid w-100" src="${DataContainer[index].image_url}" alt="" srcset="">
             </a>
      <div class="card-info my-2">
        <a 
        data-toggle="modal"
              data-target="#exampleModal"
        class="mealsLinks text-decoration-none font-weight-bold">
          See more ideas about Meales
        </a>
         <h5 class="card-text">${DataContainer[index].title}</h5>
       
      </div>
    </div>

    <div class="card-footer">
      <div class="post-img d-inline-block">
        <img src="images/testimonial-2.jpg" class="rounded-circle" alt="" />
        <span>${DataContainer[index].publisher}</span>
      </div>
      <div class="post-info">
        <span>
          <i class="far fa-clock fa-1x"></i>
        </span>
        <small class="text-muted">10 min</small>
      </div>
    </div> </div>
  </div>`;
    }
    row.innerHTML = div;
  }
}

function getDetailsData(drec) {
  let req = new XMLHttpRequest(); //instant => opp  localStorage.
  //        method     , Api url
  req.open("GET", `https://forkify-api.herokuapp.com/api/get?rId=${drec}`);
  req.send();
  req.addEventListener("readystatechange", function () {
    if (req.readyState == 4 && req.status == 200) {
      detailsDataContainer = JSON.parse(req.response).recipes; //object
      detailsData();
    }
  });
}
