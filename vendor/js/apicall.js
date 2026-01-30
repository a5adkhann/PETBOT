fetch("../../api/bottles.json")
  .then((res) => res.json())
  .then((data) => {
    let bottle = "";
    data.forEach((element) => {
      bottle += `
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
        `;

      document.getElementsByClassName("cards-container")[0].innerHTML = bottle;
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