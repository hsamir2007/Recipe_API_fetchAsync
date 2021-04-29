let DataContainer = [];

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
async function getRecipes(rec) {
  let req = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${rec}`);
  let pizaaData = await req.json();
  DataContainer = pizaaData.recipes;
  displayData();
  // console.log(DataContainer);
}

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



(async function getAll() {
  await getRecipes('pizza');
})();
