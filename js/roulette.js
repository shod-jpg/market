function spinWheel() {
    const wheel = document.getElementById('wheel');
    const result = document.getElementById('result');
    const arrow = document.querySelector('.arrow');
  
    const prizes = [
      "20$", "40$", "60$", "80$",
      "100$", "120$", "140$", "1 000 000 000$"
    ];
  
    // Визначаємо випадкове число обертів (від 5 до 8 обертів)
    const randomTurns = 5 + Math.random() * 3;
  
    // Визначаємо, який саме сегмент виграє (випадкова позиція)
    const randomSegment = Math.floor(Math.random() * prizes.length);
    const anglePerSegment = 360 / prizes.length;
  
    // Обчислюємо загальний кут обертання
    const degrees = (randomTurns * 360) + (randomSegment * anglePerSegment) + (anglePerSegment / 2);
  
    // Крутимо колесо
    wheel.style.transition = "transform 5s cubic-bezier(0.33, 1, 0.68, 1)"; // Додаємо плавний перехід для обертання
    wheel.style.transform = `rotate(${degrees}deg)`;
  
    // Після завершення обертання відображаємо виграш
    setTimeout(() => {
      // Позиція сегмента під стрілкою
      const finalAngle = (degrees % 360 + 360) % 360;  // Беремо кут в діапазоні від 0 до 360 градусів
      const segmentIndex = Math.floor(finalAngle / anglePerSegment); // Визначаємо сегмент, що під стрілкою
  
      // Виводимо результат
      const winPrize = prizes[segmentIndex];
      result.textContent = `🎉 Вітаємо! Ви виграли: ${winPrize} 🎁`;
    }, 5000); // Відображення результату після завершення обертання
  }
  