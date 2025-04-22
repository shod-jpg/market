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
            <p>🐾${item.rating} <img src="img/Contents/privat.png" width="40" height="40"  alt="privat">${item.rating}  </p>
            <p> Ціна: ${item.type} грн</p>
            <p>Ціна за купоном: ${item.id} грн</p>
          </div>
        </div>
      `;
      ContentsContainer.appendChild(divContent);
    });
  }

  // Відображення всіх карток одразу після завантаження сторінки
  renderAllContents();

  function spinSlots(id) {
    const symbols = ["🍒", "🍋", "🍊", "🍉", "🍇", "🔔", "💎"];
    const slotEl = document.getElementById(id);
  
    let spins = 15;
    let interval = setInterval(() => {
      let roll = [];
      for (let i = 0; i < 3; i++) {
        roll.push(symbols[Math.floor(Math.random() * symbols.length)]);
      }
      slotEl.textContent = roll.join(' ');
      spins--;
  
      if (spins === 0) {
        clearInterval(interval);
  
        // Виграш — 3 однакових
        if (roll[0] === roll[1] && roll[1] === roll[2]) {
          document.getElementById("win-overlay").style.display = "flex";
          setTimeout(() => {
            document.getElementById("win-overlay").style.display = "none";
          }, 5000);
        }
  
        // 2 однакових — реклама Slots King
        else if (roll[0] === roll[1] || roll[1] === roll[2] || roll[0] === roll[2]) {
          document.getElementById("promo-overlay").style.display = "flex";
        }
      }
    }, 100);
  }
  function closePromo() {
    window.location.href = "roulette.html"; // Перехід на іншу сторінку
  }