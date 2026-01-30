// For All
fetch("../../api/products.json")
  .then((res) => res.json())
  .then((data) => {
    let bottle = "";
    data.forEach((element) => {
      bottle += `
            <a href="./product-detail.html?id=${element.id}">
            <div class="card">
                <div class="card-banner">
                    <img src="${element.img}" alt="">
                </div>
                <div class="card-text">
                <div>
                    <h3>${element.name}</h3>
                    <p>${element.capacity}</p>
                </div>
                <div>
                    <p>${element.category}</p>
                    <p>RS/- ${element.price}</p>
                </div>
                </div>
            </div>
            </a>
        `;

      document.getElementsByClassName("cards-container")[0].innerHTML = bottle;
    });
  });


// For Jars
fetch("../../api/products.json")
  .then((res) => res.json())
  .then((data) => {
    let bottle = "";
    data.filter(item => item.category === "Jar").forEach((element) => {
      bottle += `
             <a href="./product-detail.html?id=${element.id}">
            <div class="card">
                <div class="card-banner">
                    <img src="${element.img}" alt="">
                </div>
                <div class="card-text">
                <div>
                    <h3>${element.name}</h3>
                    <p>${element.capacity}</p>
                </div>
                <div>
                    <p>${element.category}</p>
                    <p>RS/- ${element.price}</p>
                </div>
                </div>
            </div>
            </a>
        `;

      document.getElementsByClassName("jars-cards-container")[0].innerHTML = bottle;
    });
  });

  // For Bottles
fetch("../../api/products.json")
  .then((res) => res.json())
  .then((data) => {
    let bottle = "";
    data.filter(item => item.category === "Bottle").forEach((element) => {
      bottle += `
            <a href="./product-detail.html?id=${element.id}">
            <div class="card">
                <div class="card-banner">
                    <img src="${element.img}" alt="">
                </div>
                <div class="card-text">
                <div>
                    <h3>${element.name}</h3>
                    <p>${element.capacity}</p>
                </div>
                <div>
                    <p>${element.category}</p>
                    <p>RS/- ${element.price}</p>
                </div>
                </div>
            </div>
            </a>
        `;

      document.getElementsByClassName("bottles-cards-container")[0].innerHTML = bottle;
    });
  });

  fetch("../../api/gallery.json")
  .then((res) => res.json())
  .then((data) => {
    let image = "";
    data.forEach((element) => {
      image += `
            <div class="gallery-img">
                <img src="${element.item}" alt="">
            </div>
        `;

      document.getElementsByClassName("gallery-container")[0].innerHTML = image;
    });
  });