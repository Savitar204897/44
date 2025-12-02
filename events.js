// === Пример мероприятий (макетные данные) ===
const events = [
  {
    id: 1,
    title: "Торжественное вручение благодарственного письма Швыркову Юрию Викторовичу",
    body: `
      От имени председателя Брянского регионального отделения 
      Сёмкина А.А. и секретаря председателя регионального отделения 
      Казакова Н.П. было организовано и проведено торжественное мероприятие, 
      посвящённое вручению благодарственного письма Швыркову Юрию Викторовичу.

      Мы искренне выражаем Юрию Викторовичу глубокую признательность за его 
      активную гражданскую позицию, поддержку деятельности нашего отделения 
      и заинтересованность в совместной работе. Особая благодарность 
      выражается за решение стать нашим партнёром. Ознакомиться с полной 
      информацией о партнёрах Ассоциации можно во вкладке «Партнёры».

      Мы также выражаем благодарность всем присутствующим на мероприятии 
      за их участие, поддержку и внимание к работе нашей организации. 
      Проведение подобных встреч усиливает взаимодействие, объединяет 
      профессиональное сообщество и способствует дальнейшему развитию 
      деятельности Брянского регионального отделения Ассоциации.
    `,
    image: [
      "img/events/1/2.png",
      "img/events/1/1.png",
      "img/events/1/3.png",
      "img/events/1/4.png",
      "img/events/1/5.png"
    ]
  }
];


// DOM элементы
const eventList = document.getElementById("eventList");
const singleEvent = document.getElementById("singleEvent");
const eventsContainer = document.getElementById("eventsContainer");
const pagination = document.getElementById("pagination");
const backButton = document.getElementById("backButton");

const eventImage = document.getElementById("eventImage");
const eventTitle = document.getElementById("eventTitle");
const eventBody = document.getElementById("eventBody");

const eventSearch = document.getElementById("eventSearch");
const searchSuggestions = document.getElementById("searchSuggestions");

// Стрелки слайдера
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");

let currentPage = 1;
const eventsPerPage = 3;

let currentImages = [];
let currentImageIndex = 0;

// === Слайдер — смена картинки ===
function changeImage(src) {
  eventImage.style.opacity = "0";
  setTimeout(() => {
    eventImage.src = src;
    eventImage.style.opacity = "1";
  }, 200);
}

// === Настройка стрелок ===
function setupSlider(images) {
  currentImages = images;
  currentImageIndex = 0;

  // Если картинка одна — скрываем стрелки
  if (images.length <= 1) {
    prevBtn.classList.add("hidden");
    nextBtn.classList.add("hidden");
  } else {
    prevBtn.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
  }

  // Навигация
  prevBtn.onclick = () => {
    currentImageIndex =
      (currentImageIndex - 1 + images.length) % images.length;
    changeImage(images[currentImageIndex]);
  };

  nextBtn.onclick = () => {
    currentImageIndex =
      (currentImageIndex + 1) % images.length;
    changeImage(images[currentImageIndex]);
  };
}

// === Отображение мероприятий ===
function renderEvents() {
  eventList.innerHTML = "";
  pagination.innerHTML = "";

  const start = (currentPage - 1) * eventsPerPage;
  const end = start + eventsPerPage;
  const pageEvents = events.slice(start, end);

  pageEvents.forEach(e => {
    const imgSrc = Array.isArray(e.image) ? e.image[0] : e.image;

    const card = document.createElement("div");
    card.className = "news-card";
    card.innerHTML = `
      <img src="${imgSrc}" alt="${e.title}">
      <div class="news-info">
        <h3>${e.title}</h3>
        <p>${e.body.slice(0, 100)}...</p>
      </div>
    `;
    card.onclick = () => openEvent(e.id);
    eventList.appendChild(card);
  });

  const pageCount = Math.ceil(events.length / eventsPerPage);
  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.onclick = () => {
      currentPage = i;
      renderEvents();
    };
    pagination.appendChild(btn);
  }
}

// === Открытие одного мероприятия с анимацией ===
function openEvent(id) {
  const item = events.find(e => e.id === id);
  if (!item) return;

  // Обрабатываем если image = "..." вместо ["..."]
  const images = Array.isArray(item.image) ? item.image : [item.image];

  eventsContainer.classList.add("hidden");
  singleEvent.classList.add("active", "slide-in");

  eventImage.src = images[0];
  eventTitle.textContent = item.title;
  eventBody.textContent = item.body;

  setupSlider(images);

  eventSearch.value = "";
  searchSuggestions.innerHTML = "";

  // Поднимаем подвал вниз
  document.querySelector("footer").style.marginTop = "auto";

  history.pushState({ id }, "", `?id=${id}`);
}

// === Вернуться назад с анимацией ===
backButton.addEventListener("click", () => {
  singleEvent.classList.add("slide-out");
  singleEvent.classList.remove("slide-in");

  setTimeout(() => {
    singleEvent.classList.remove("active", "slide-out");
    eventsContainer.classList.remove("hidden");
    document.querySelector("footer").style.marginTop = "0"; 
    history.pushState({}, "", "events.html");
  }, 500);
});

// === Поиск мероприятий ===
eventSearch.addEventListener("input", () => {
  const query = eventSearch.value.trim().toLowerCase();
  searchSuggestions.innerHTML = "";

  if (!query) return;

  const filtered = events.filter(e =>
    e.title.toLowerCase().startsWith(query)
  );

  filtered.forEach(e => {
    const li = document.createElement("li");
    li.textContent = e.title;
    li.onclick = () => openEvent(e.id);
    searchSuggestions.appendChild(li);
  });
});

// === При загрузке страницы ===
window.addEventListener("load", () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  if (id) {
    openEvent(id);
  } else {
    renderEvents();
  }
});
