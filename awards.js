// === Пример мероприятий (макетные данные) ===
const events = [
  {
    id: 1,
    title: "ПОЧЁТНЫЙ ЧЛЕН АССОЦИАЦИИ ВЕТЕРАНОВ СБ",
    body: `
      Нагрудный знак Почётного члена Общероссийской общественной организации Ассоциации ветеранов и сотрудников служб безопасности (СБ) представляет собой белой эмали с черным ободком крест с золотистой короной и двумя перекрещенными алебардами.
      На крест наложена эмблема Ассоциации ветеранов и сотрудников Служб Безопасности, с надписью на ленте старославянской вязью: «АССОЦИАЦИЯ ВЕТЕРАНОВ и СОТРУДНИКОВ СБ».
      Размер знака: по горизонтали — 44 мм.  
      Изготавливается из золотистого металла.
      Знак крепится винтом и носится на правой стороне груди.
    `,
    image: "img/award/1.png"
  },
  {
    id: 2,
    title: "ЗНАК ОРДЕНА ЧЕСТИ  I  СТЕПЕНИ",
    body: `
      Знак Ордена Чести 1 степени представляет собой белой эмали с черным ободком крест с  золотой короной, наложенной на него эмблемой Ассоциации ветеранов СБ    с девизом ордена и серебристым дубовым венком вокруг эмблемы.
     Размер (по горизонтали) – 44 мм. Знак Ордена Чести 1 степени носится на шейной ленте василькового цвета и полосками по краям: левая – белая, правая – серая, отступ от края – 2 мм. Ширина  ленты – 50 мм.
    `,
    image: "img/award/2.png"
  },
  {
    id: 3,
    title: "ЗВЕЗДА ОРДЕНА ЧЕСТИ  I  СТЕПЕНИ",
    body: `
      9-ти конечная звезда. Материал – латунь, томпак. Максимальный размер – 70 мм.
      На звезду наложен белой эмали с черным ободком крест с золотой короной.
    На крест наложена эмблема Ассоциации ветеранов СБ с  надписью,  выполненной старославянской вязью:
    а.  Ассоциация ветеранов и сотрудников СБ;
б.  верхнюю часть эмблемы – как продолжение триколора – опоясывает лента серой эмали с золотым ободком и надписью девиза ордена:
«ВЕРНОСТЬ. ЧЕСТЬ. СЛАВА»
На крест вокруг эмблемы Ассоциации  ветеранов СБ наложен серебристый оксидированный дубовый  венок.
Оборотная сторона звезды
Оборотная сторона звезды полированная с булавкой и клипсами для крепления.
Надпись: Ассоциация ветеранов и сотрудников Служб Безопасности.
Наименование награды:  ОРДЕН ЧЕСТИ
Номер награды:                     №  000
Звезда ордена Чести носится на правой стороне груди.
    `,
    image: "img/award/3.png"
  },
   {
    id: 4,
    title: "ЗНАК ОРДЕНА ЧЕСТИ  II  СТЕПЕНИ",
    body: `
      Знак Ордена Чести 2 степени представляет собой белой эмали с черным ободком крест с  золотой короной, наложенной на него эмблемой Ассоциации ветеранов СБ с девизом ордена и серебристым дубовым венком вокруг эмблемы, прикрепленный  кольцом  к  прямоугольной колодке с лентой василькового цвета и серыми полосками по краям с отступом 2 мм от края, причём правая – сдвоенная, а центральная — белая.
Размер (по горизонтали) – 35 мм.
Оборотная сторона знака
Оборотная сторона знака полированная с наименованием награды:  ОРДЕН ЧЕСТИ II ст. и  номером награды: №  000.
Знак ордена Чести носится на левой стороне груди.
    `,
    image: "img/award/4.png"
  },
     {
    id: 5,
    title: "ЗНАК ОРДЕНА ЧЕСТИ  III  СТЕПЕНИ",
    body: `
      Знак Ордена Чести 3 степени представляет собой белой эмали с черным ободком
крест с  золотой короной, наложенной на него эмблемой Ассоциации ветеранов СБ с девизом ордена, прикрепленный  кольцом  к  прямоугольной колодке с лентой василькового цвета и серыми полосками по краям с отступом 2 мм от края, причём правая – сдвоенная белой полоской  шириной 5 мм.
Размер (по горизонтали) – 35 мм.
Оборотная сторона знака
 Оборотная сторона знака полированная с наименованием награды:  ОРДЕН ЧЕСТИ III ст. и  номером награды: №  000.
Знак ордена Чести носится на левой стороне груди.
    `,
    image: "img/award/5.png"
  },
   {
    id: 6,
    title: " Медаль Ордена Чести",
    body: `
      Медаль Ордена Чести является наградой членов Ассоциации и состоит из двух степеней.
Медаль Ордена Чести I степени изготавливается из золотистого металла, имеет форму правильного круга диаметром 32 мм  с бортиком. На лицевой стороне медали белой эмали с черным ободком крест с  золотистой короной, в розетке которого эмблема Ассоциации с девизом ордена.
 Оборотная сторона знака:
На оборотной стороне медали надписи: по окружности — «АССОЦИАЦИЯ ВЕТЕРАНОВ И СОТРУДНИКОВ СБ», а в центре — девиз в три строки «ВЕРНОСТЬ. ЧЕСТЬ. СЛАВА», в нижней части — щиток с зубцом крепостной стены в обрамлении восходящих дубовой и лавровой ветвей.
Все надписи,  изображения  и бортик на медали выпуклые.
Медаль при помощи ушка и кольца соединяется с прямоугольной колодкой, обтянутой васильковой муаровой лентой шириной 24 мм. Края ленты окаймлены узкими (2 мм) белыми полосками и с промежутком в 2 мм к центру 2-х мм желтыми полосками.
    `,
    image: "img/award/6.png"
  },
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
    history.pushState({}, "", "awards.html");
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
