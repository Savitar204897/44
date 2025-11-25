// === Пример мероприятий (макетные данные) ===
const events = [
  {
    id: 1,
    title: "Гуманитарная помощь на СВО",
    body: `
      Под руководством члена нашей Ассоциации Сергея Качанова передали очередную партию гуманитарной помощи артиллеристам и десантникам в зону проведения специальной военной операции.

Наши военнослужащие получили  мотоцикл, генераторы, медикаменты, маскировочные сетки, продукты , средства гигиены и другие необходимые им вещи.
    `,
    image: "img/news/1.png"
  },
  {
    id: 2,
    title: "ВНИМАНИЕ! Новые номера телефонов Ассоциации",
    body: `
      В нашей Ассоциации новые номера телефонов для связи.
    `,
    image: "img/news/2.png"
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

let currentPage = 1;
const eventsPerPage = 3;

// === Отображение мероприятий ===
function renderEvents() {
  eventList.innerHTML = "";
  pagination.innerHTML = "";

  const start = (currentPage - 1) * eventsPerPage;
  const end = start + eventsPerPage;
  const pageEvents = events.slice(start, end);

  pageEvents.forEach(e => {
    const card = document.createElement("div");
    card.className = "news-card";
    card.innerHTML = `
      <img src="${e.image}" alt="${e.title}">
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

  eventsContainer.classList.add("hidden");
  singleEvent.classList.add("active", "slide-in");

  eventImage.src = item.image;
  eventTitle.textContent = item.title;
  eventBody.textContent = item.body;

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
    document.querySelector("footer").style.marginTop = "0"; // возвращаем футер
    history.pushState({}, "", "news.html");
  }, 500);
});

// === Поиск мероприятий ===
eventSearch.addEventListener("input", () => {
  const query = eventSearch.value.trim().toLowerCase();
  searchSuggestions.innerHTML = "";

  if (!query) return;

  const filtered = events.filter(e => e.title.toLowerCase().startsWith(query));
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
