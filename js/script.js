const arrayOfContent = [
    {
      id: "4 395",
      title: "Мотокоса 43",
      photo: "Content-a.png",
      rating: 4,
      type: "4 497"
    },
    {
      id: "3 396",
      title: "Електричний тример 110",
      photo: "Content-b.png",
      rating: 6,
      type: "3 498"
    },
    {
      id: "3 195",
      title: "Електрична газонокосарка 32",
      photo: "Content-c.png",
      rating: 3,
      type: "3 297"
    },
    {
      id: "1 596",
      title: "Акумуляторний обприскувач 12 N",
      photo: "Content-d.png",
      rating: 4,
      type: "1 698"
    }
  ];

  const ContentsContainer = document.getElementById("p-Contents");

  function renderAllContents() {
    ContentsContainer.innerHTML = "";
    arrayOfContent.forEach(item => {
      let divContent = document.createElement("div");
      divContent.classList.add("Content-container");
      divContent.innerHTML = `
        <div class="Content" id="Content-card">
          <h3>${item.title}</h3>
          <hr>
          <img src="img/Contents/${item.photo}" alt="">
          <div>
            <p>${item.rating}</p>
            <p> Ціна: ${item.type}</p>
            <p>Ціна за купоном: ${item.id}</p>
          </div>
        </div>
      `;
      ContentsContainer.appendChild(divContent);
    });
  }

  // Відображення всіх карток одразу після завантаження сторінки
  renderAllContents();