// Auto-synced dataset for Medium: Secrets of the Soviets (Vanilla HTML5/JS)
(function () {
  "use strict";
  const S = {
  "SECRETS_PACK_ID": "pack-secrets",
  "SECRETS_WORDS_PACK_ID": "pack-secrets-words",
  "DEFAULT_SECRETS_CONFIG": {
    "hookSide": "object",
    "locationSide": "A",
    "includeAdvancedLocations": false,
    "maxAdvancedLocations": 5,
    "enableTelegrams": true,
    "selectedWordPackIds": [
      "pack-secrets-words"
    ]
  },
  "SECRETS_ROOM_SPECS": [
    {
      "id": "sec-room-01",
      "number": 1,
      "level": "basic",
      "nameA": "Столовая",
      "nameB": "Рюмочная",
      "nameAEn": "Canteen",
      "nameBEn": "Shot Bar"
    },
    {
      "id": "sec-room-02",
      "number": 2,
      "level": "basic",
      "nameA": "Памятник",
      "nameB": "Художественная галерея",
      "nameAEn": "Monument",
      "nameBEn": "Art Gallery"
    },
    {
      "id": "sec-room-03",
      "number": 3,
      "level": "basic",
      "nameA": "Атомная станция",
      "nameB": "Спиртзавод",
      "nameAEn": "Nuclear Plant",
      "nameBEn": "Distillery"
    },
    {
      "id": "sec-room-04",
      "number": 4,
      "level": "basic",
      "nameA": "Детский сад",
      "nameB": "Пионерлагерь",
      "nameAEn": "Kindergarten",
      "nameBEn": "Pioneer Camp"
    },
    {
      "id": "sec-room-05",
      "number": 5,
      "level": "basic",
      "nameA": "Телецентр",
      "nameB": "Танковое училище",
      "nameAEn": "TV Center",
      "nameBEn": "Tank Academy"
    },
    {
      "id": "sec-room-06",
      "number": 6,
      "level": "basic",
      "nameA": "Политехнический институт",
      "nameB": "Планетарий",
      "nameAEn": "Polytechnic Institute",
      "nameBEn": "Planetarium"
    },
    {
      "id": "sec-room-07",
      "number": 7,
      "level": "basic",
      "nameA": "Санаторий",
      "nameB": "Психбольница",
      "nameAEn": "Sanatorium",
      "nameBEn": "Asylum"
    },
    {
      "id": "sec-room-08",
      "number": 8,
      "level": "basic",
      "nameA": "Пляж",
      "nameB": "Теплоход",
      "nameAEn": "Beach",
      "nameBEn": "River Steamer"
    },
    {
      "id": "sec-room-09",
      "number": 9,
      "level": "basic",
      "nameA": "Стройплощадка",
      "nameB": "Песчаный карьер",
      "nameAEn": "Construction Site",
      "nameBEn": "Sand Quarry"
    },
    {
      "id": "sec-room-10",
      "number": 10,
      "level": "basic",
      "nameA": "Отдел КГБ",
      "nameB": "Вытрезвитель",
      "nameAEn": "KGB Office",
      "nameBEn": "Sobering Station"
    },
    {
      "id": "sec-room-11",
      "number": 11,
      "level": "basic",
      "nameA": "Дом быта",
      "nameB": "Гастроном",
      "nameAEn": "Service House",
      "nameBEn": "Grocery Store"
    },
    {
      "id": "sec-room-12",
      "number": 12,
      "level": "basic",
      "nameA": "Дом Советов",
      "nameB": "Цирк",
      "nameAEn": "House of Soviets",
      "nameBEn": "Circus"
    },
    {
      "id": "sec-room-13",
      "number": 13,
      "level": "advanced",
      "nameA": "Избушка",
      "nameB": "Институт волшебства",
      "nameAEn": "Hut on Chicken Legs",
      "nameBEn": "Institute of Magic"
    },
    {
      "id": "sec-room-14",
      "number": 14,
      "level": "advanced",
      "nameA": "Военкомат",
      "nameB": "Институт времени",
      "nameAEn": "Draft Office",
      "nameBEn": "Institute of Time"
    },
    {
      "id": "sec-room-15",
      "number": 15,
      "level": "advanced",
      "nameA": "Дирижабль",
      "nameB": "Космодром",
      "nameAEn": "Airship",
      "nameBEn": "Cosmodrome"
    },
    {
      "id": "sec-room-16",
      "number": 16,
      "level": "advanced",
      "nameA": "Канатная дорога",
      "nameB": "Космический лифт",
      "nameAEn": "Cable Car",
      "nameBEn": "Space Elevator"
    },
    {
      "id": "sec-room-17",
      "number": 17,
      "level": "advanced",
      "nameA": "Пожарное депо",
      "nameB": "Генератор погоды",
      "nameAEn": "Fire Station",
      "nameBEn": "Weather Generator"
    },
    {
      "id": "sec-room-18",
      "number": 18,
      "level": "advanced",
      "nameA": "Химический комбинат",
      "nameB": "Фабрика игрушек",
      "nameAEn": "Chemical Plant",
      "nameBEn": "Toy Factory"
    },
    {
      "id": "sec-room-19",
      "number": 19,
      "level": "advanced",
      "nameA": "Рынок",
      "nameB": "Киберколхоз",
      "nameAEn": "Market",
      "nameBEn": "Cyber-Kolkhoz"
    },
    {
      "id": "sec-room-20",
      "number": 20,
      "level": "advanced",
      "nameA": "Батискаф",
      "nameB": "Прогулочный шагоход",
      "nameAEn": "Bathyscaphe",
      "nameBEn": "Promenade Walker"
    },
    {
      "id": "sec-room-21",
      "number": 21,
      "level": "advanced",
      "nameA": "Аттракционы",
      "nameB": "Зоопарк",
      "nameAEn": "Amusement Park",
      "nameBEn": "Zoo"
    },
    {
      "id": "sec-room-22",
      "number": 22,
      "level": "advanced",
      "nameA": "Травмпункт",
      "nameB": "Баня",
      "nameAEn": "Trauma Center",
      "nameBEn": "Bathhouse"
    },
    {
      "id": "sec-room-23",
      "number": 23,
      "level": "advanced",
      "nameA": "Музыкальная школа",
      "nameB": "Радиотелескоп",
      "nameAEn": "Music School",
      "nameBEn": "Radio Telescope"
    },
    {
      "id": "sec-room-24",
      "number": 24,
      "level": "advanced",
      "nameA": "Пневматическая почта",
      "nameB": "Супер ЭВМ",
      "nameAEn": "Pneumatic Post",
      "nameBEn": "Supercomputer"
    }
  ],
  "SECRETS_HOOK_SPECS": [
    {
      "id": "sec-hook-01",
      "number": 1,
      "objectRu": "Лошадь с крыльями",
      "objectEn": "Winged Horse",
      "informantRu": "Малый Ух",
      "informantEn": "Maly Ukh"
    },
    {
      "id": "sec-hook-02",
      "number": 2,
      "objectRu": "Открывашка",
      "objectEn": "Bottle Opener",
      "informantRu": "Кусаки",
      "informantEn": "Kusaki"
    },
    {
      "id": "sec-hook-03",
      "number": 3,
      "objectRu": "Утюг",
      "objectEn": "Flatiron",
      "informantRu": "Сковорода",
      "informantEn": "Skovoroda"
    },
    {
      "id": "sec-hook-04",
      "number": 4,
      "objectRu": "Портал",
      "objectEn": "Portal",
      "informantRu": "Водятлов",
      "informantEn": "Vodyatlov"
    },
    {
      "id": "sec-hook-05",
      "number": 5,
      "objectRu": "Мышеловка",
      "objectEn": "Mousetrap",
      "informantRu": "Тараканчиков",
      "informantEn": "Tarakanchikov"
    },
    {
      "id": "sec-hook-06",
      "number": 6,
      "objectRu": "Сфинкс",
      "objectEn": "Sphinx",
      "informantRu": "Пятница",
      "informantEn": "Pyatnitsa"
    },
    {
      "id": "sec-hook-07",
      "number": 7,
      "objectRu": "Швейная машинка",
      "objectEn": "Sewing Machine",
      "informantRu": "Шамаханская",
      "informantEn": "Shamakhanskaya"
    },
    {
      "id": "sec-hook-08",
      "number": 8,
      "objectRu": "Телевизор",
      "objectEn": "Television Set",
      "informantRu": "Гангстерито",
      "informantEn": "Gangsterito"
    },
    {
      "id": "sec-hook-09",
      "number": 9,
      "objectRu": "Крипто-анализатор",
      "objectEn": "Crypto-Analyzer",
      "informantRu": "Допрыгяйкин",
      "informantEn": "Doprygyaikin"
    },
    {
      "id": "sec-hook-10",
      "number": 10,
      "objectRu": "Карандаш",
      "objectEn": "Pencil",
      "informantRu": "Таблик",
      "informantEn": "Tablik"
    },
    {
      "id": "sec-hook-11",
      "number": 11,
      "objectRu": "Примус",
      "objectEn": "Primus Stove",
      "informantRu": "Бегемот",
      "informantEn": "Begemot"
    },
    {
      "id": "sec-hook-12",
      "number": 12,
      "objectRu": "Самовар",
      "objectEn": "Samovar",
      "informantRu": "Бендер",
      "informantEn": "Bender"
    },
    {
      "id": "sec-hook-13",
      "number": 13,
      "objectRu": "Скафандр",
      "objectEn": "Spacesuit",
      "informantRu": "Селезнёва",
      "informantEn": "Seleznyova"
    },
    {
      "id": "sec-hook-14",
      "number": 14,
      "objectRu": "Чертёж",
      "objectEn": "Blueprint",
      "informantRu": "Кулибин",
      "informantEn": "Kulibin"
    },
    {
      "id": "sec-hook-15",
      "number": 15,
      "objectRu": "Лукошко",
      "objectEn": "Wicker Basket",
      "informantRu": "Зверев",
      "informantEn": "Zverev"
    },
    {
      "id": "sec-hook-16",
      "number": 16,
      "objectRu": "Касторка",
      "objectEn": "Castor Oil",
      "informantRu": "Рыбов",
      "informantEn": "Rybov"
    },
    {
      "id": "sec-hook-17",
      "number": 17,
      "objectRu": "Щебетарь",
      "objectEn": "Chatterbox",
      "informantRu": "Сеченов",
      "informantEn": "Sechenov"
    },
    {
      "id": "sec-hook-18",
      "number": 18,
      "objectRu": "Глобус",
      "objectEn": "Globe",
      "informantRu": "Ковальски",
      "informantEn": "Kowalski"
    },
    {
      "id": "sec-hook-19",
      "number": 19,
      "objectRu": "Грелка",
      "objectEn": "Hot-Water Bottle",
      "informantRu": "Муромец",
      "informantEn": "Muromets"
    },
    {
      "id": "sec-hook-20",
      "number": 20,
      "objectRu": "Капитал",
      "objectEn": "Das Kapital",
      "informantRu": "Буржуй",
      "informantEn": "Burzhuy"
    },
    {
      "id": "sec-hook-21",
      "number": 21,
      "objectRu": "Рупор",
      "objectEn": "Megaphone",
      "informantRu": "Орэйро",
      "informantEn": "Oreiro"
    },
    {
      "id": "sec-hook-22",
      "number": 22,
      "objectRu": "Автомат",
      "objectEn": "Rifle / Vending",
      "informantRu": "Чапаев",
      "informantEn": "Chapaev"
    },
    {
      "id": "sec-hook-23",
      "number": 23,
      "objectRu": "Портфель",
      "objectEn": "Briefcase",
      "informantRu": "Начальников",
      "informantEn": "Nachalnikov"
    },
    {
      "id": "sec-hook-24",
      "number": 24,
      "objectRu": "Скатерть-самобранка",
      "objectEn": "Magic Tablecloth",
      "informantRu": "Горбунч",
      "informantEn": "Gorbunch"
    },
    {
      "id": "sec-hook-25",
      "number": 25,
      "objectRu": "Трибуна",
      "objectEn": "Podium",
      "informantRu": "Ульянов",
      "informantEn": "Ulyanov"
    },
    {
      "id": "sec-hook-26",
      "number": 26,
      "objectRu": "Рентген",
      "objectEn": "X-Ray",
      "informantRu": "Ломайного",
      "informantEn": "Lomainogo"
    },
    {
      "id": "sec-hook-27",
      "number": 27,
      "objectRu": "Афиша",
      "objectEn": "Playbill",
      "informantRu": "Кисуня",
      "informantEn": "Kisunya"
    },
    {
      "id": "sec-hook-28",
      "number": 28,
      "objectRu": "Бензопила",
      "objectEn": "Chainsaw",
      "informantRu": "Лектор",
      "informantEn": "Lektor"
    },
    {
      "id": "sec-hook-29",
      "number": 29,
      "objectRu": "Летающая тарелка",
      "objectEn": "Flying Saucer",
      "informantRu": "Иноземцев",
      "informantEn": "Inozemtsev"
    },
    {
      "id": "sec-hook-30",
      "number": 30,
      "objectRu": "Скелет",
      "objectEn": "Skeleton",
      "informantRu": "Бессмертный",
      "informantEn": "Bessmertny"
    },
    {
      "id": "sec-hook-31",
      "number": 31,
      "objectRu": "Ватник",
      "objectEn": "Quilted Jacket",
      "informantRu": "Мороз",
      "informantEn": "Moroz"
    },
    {
      "id": "sec-hook-32",
      "number": 32,
      "objectRu": "Пропись",
      "objectEn": "Copybook",
      "informantRu": "Балда",
      "informantEn": "Balda"
    }
  ],
  "SECRETS_CLUES": [
    {
      "id": "sec-w-001",
      "packId": "pack-secrets-words",
      "word": "Экспонат"
    },
    {
      "id": "sec-w-002",
      "packId": "pack-secrets-words",
      "word": "Монтаж"
    },
    {
      "id": "sec-w-003",
      "packId": "pack-secrets-words",
      "word": "Председатель"
    },
    {
      "id": "sec-w-004",
      "packId": "pack-secrets-words",
      "word": "Сопромат"
    },
    {
      "id": "sec-w-005",
      "packId": "pack-secrets-words",
      "word": "Билет"
    },
    {
      "id": "sec-w-006",
      "packId": "pack-secrets-words",
      "word": "Вурдалак"
    },
    {
      "id": "sec-w-007",
      "packId": "pack-secrets-words",
      "word": "Титан"
    },
    {
      "id": "sec-w-008",
      "packId": "pack-secrets-words",
      "word": "Крендель"
    },
    {
      "id": "sec-w-009",
      "packId": "pack-secrets-words",
      "word": "Шлягер"
    },
    {
      "id": "sec-w-010",
      "packId": "pack-secrets-words",
      "word": "Гелий"
    },
    {
      "id": "sec-w-011",
      "packId": "pack-secrets-words",
      "word": "Труба"
    },
    {
      "id": "sec-w-012",
      "packId": "pack-secrets-words",
      "word": "Галька"
    },
    {
      "id": "sec-w-013",
      "packId": "pack-secrets-words",
      "word": "Макет"
    },
    {
      "id": "sec-w-014",
      "packId": "pack-secrets-words",
      "word": "Носилки"
    },
    {
      "id": "sec-w-015",
      "packId": "pack-secrets-words",
      "word": "Плита"
    },
    {
      "id": "sec-w-016",
      "packId": "pack-secrets-words",
      "word": "Крем"
    },
    {
      "id": "sec-w-017",
      "packId": "pack-secrets-words",
      "word": "Смена"
    },
    {
      "id": "sec-w-018",
      "packId": "pack-secrets-words",
      "word": "Гриф"
    },
    {
      "id": "sec-w-019",
      "packId": "pack-secrets-words",
      "word": "Синяк"
    },
    {
      "id": "sec-w-020",
      "packId": "pack-secrets-words",
      "word": "Осмотр"
    },
    {
      "id": "sec-w-021",
      "packId": "pack-secrets-words",
      "word": "Халат"
    },
    {
      "id": "sec-w-022",
      "packId": "pack-secrets-words",
      "word": "Колпак"
    },
    {
      "id": "sec-w-023",
      "packId": "pack-secrets-words",
      "word": "Бинокль"
    },
    {
      "id": "sec-w-024",
      "packId": "pack-secrets-words",
      "word": "Головастик"
    },
    {
      "id": "sec-w-025",
      "packId": "pack-secrets-words",
      "word": "Кадр"
    },
    {
      "id": "sec-w-026",
      "packId": "pack-secrets-words",
      "word": "Костюм"
    },
    {
      "id": "sec-w-027",
      "packId": "pack-secrets-words",
      "word": "Вертолёт"
    },
    {
      "id": "sec-w-028",
      "packId": "pack-secrets-words",
      "word": "Экскурсия"
    },
    {
      "id": "sec-w-029",
      "packId": "pack-secrets-words",
      "word": "Сплав"
    },
    {
      "id": "sec-w-030",
      "packId": "pack-secrets-words",
      "word": "Шарнир"
    },
    {
      "id": "sec-w-031",
      "packId": "pack-secrets-words",
      "word": "Палочка"
    },
    {
      "id": "sec-w-032",
      "packId": "pack-secrets-words",
      "word": "Докторская"
    },
    {
      "id": "sec-w-033",
      "packId": "pack-secrets-words",
      "word": "Леонардо"
    },
    {
      "id": "sec-w-034",
      "packId": "pack-secrets-words",
      "word": "Кислород"
    },
    {
      "id": "sec-w-035",
      "packId": "pack-secrets-words",
      "word": "Прогноз"
    },
    {
      "id": "sec-w-036",
      "packId": "pack-secrets-words",
      "word": "Мяч"
    },
    {
      "id": "sec-w-037",
      "packId": "pack-secrets-words",
      "word": "Стёклышко"
    },
    {
      "id": "sec-w-038",
      "packId": "pack-secrets-words",
      "word": "Плазма"
    },
    {
      "id": "sec-w-039",
      "packId": "pack-secrets-words",
      "word": "Волна"
    },
    {
      "id": "sec-w-040",
      "packId": "pack-secrets-words",
      "word": "Магнитофон"
    },
    {
      "id": "sec-w-041",
      "packId": "pack-secrets-words",
      "word": "Котёл"
    },
    {
      "id": "sec-w-042",
      "packId": "pack-secrets-words",
      "word": "Аполлон"
    },
    {
      "id": "sec-w-043",
      "packId": "pack-secrets-words",
      "word": "Вождь"
    },
    {
      "id": "sec-w-044",
      "packId": "pack-secrets-words",
      "word": "Сирена"
    },
    {
      "id": "sec-w-045",
      "packId": "pack-secrets-words",
      "word": "Чугунный"
    },
    {
      "id": "sec-w-046",
      "packId": "pack-secrets-words",
      "word": "Давление"
    },
    {
      "id": "sec-w-047",
      "packId": "pack-secrets-words",
      "word": "Подтяжки"
    },
    {
      "id": "sec-w-048",
      "packId": "pack-secrets-words",
      "word": "Тормозок"
    },
    {
      "id": "sec-w-049",
      "packId": "pack-secrets-words",
      "word": "Отряд"
    },
    {
      "id": "sec-w-050",
      "packId": "pack-secrets-words",
      "word": "Молния"
    },
    {
      "id": "sec-w-051",
      "packId": "pack-secrets-words",
      "word": "Ходули"
    },
    {
      "id": "sec-w-052",
      "packId": "pack-secrets-words",
      "word": "Зона"
    },
    {
      "id": "sec-w-053",
      "packId": "pack-secrets-words",
      "word": "Лазурь"
    },
    {
      "id": "sec-w-054",
      "packId": "pack-secrets-words",
      "word": "Лапа"
    },
    {
      "id": "sec-w-055",
      "packId": "pack-secrets-words",
      "word": "Баранка"
    },
    {
      "id": "sec-w-056",
      "packId": "pack-secrets-words",
      "word": "Гусеница"
    },
    {
      "id": "sec-w-057",
      "packId": "pack-secrets-words",
      "word": "Игла"
    },
    {
      "id": "sec-w-058",
      "packId": "pack-secrets-words",
      "word": "Касса"
    },
    {
      "id": "sec-w-059",
      "packId": "pack-secrets-words",
      "word": "Подиум"
    },
    {
      "id": "sec-w-060",
      "packId": "pack-secrets-words",
      "word": "Конструктор"
    },
    {
      "id": "sec-w-061",
      "packId": "pack-secrets-words",
      "word": "Баклан"
    },
    {
      "id": "sec-w-062",
      "packId": "pack-secrets-words",
      "word": "Подмостки"
    },
    {
      "id": "sec-w-063",
      "packId": "pack-secrets-words",
      "word": "Свинья"
    },
    {
      "id": "sec-w-064",
      "packId": "pack-secrets-words",
      "word": "Атлас"
    },
    {
      "id": "sec-w-065",
      "packId": "pack-secrets-words",
      "word": "Учебник"
    },
    {
      "id": "sec-w-066",
      "packId": "pack-secrets-words",
      "word": "Авария"
    },
    {
      "id": "sec-w-067",
      "packId": "pack-secrets-words",
      "word": "Коленка"
    },
    {
      "id": "sec-w-068",
      "packId": "pack-secrets-words",
      "word": "Звёздочка"
    },
    {
      "id": "sec-w-069",
      "packId": "pack-secrets-words",
      "word": "Монумент"
    },
    {
      "id": "sec-w-070",
      "packId": "pack-secrets-words",
      "word": "Иллюминатор"
    },
    {
      "id": "sec-w-071",
      "packId": "pack-secrets-words",
      "word": "Пепелац"
    },
    {
      "id": "sec-w-072",
      "packId": "pack-secrets-words",
      "word": "Передача"
    },
    {
      "id": "sec-w-073",
      "packId": "pack-secrets-words",
      "word": "Шлем"
    },
    {
      "id": "sec-w-074",
      "packId": "pack-secrets-words",
      "word": "Пропаганда"
    },
    {
      "id": "sec-w-075",
      "packId": "pack-secrets-words",
      "word": "Койка"
    },
    {
      "id": "sec-w-076",
      "packId": "pack-secrets-words",
      "word": "Наряд"
    },
    {
      "id": "sec-w-077",
      "packId": "pack-secrets-words",
      "word": "Новичок"
    },
    {
      "id": "sec-w-078",
      "packId": "pack-secrets-words",
      "word": "Пиявка"
    },
    {
      "id": "sec-w-079",
      "packId": "pack-secrets-words",
      "word": "Тунеядец"
    },
    {
      "id": "sec-w-080",
      "packId": "pack-secrets-words",
      "word": "Сетка"
    },
    {
      "id": "sec-w-081",
      "packId": "pack-secrets-words",
      "word": "Дипломат"
    },
    {
      "id": "sec-w-082",
      "packId": "pack-secrets-words",
      "word": "Змий"
    },
    {
      "id": "sec-w-083",
      "packId": "pack-secrets-words",
      "word": "Линза"
    },
    {
      "id": "sec-w-084",
      "packId": "pack-secrets-words",
      "word": "Язык"
    },
    {
      "id": "sec-w-085",
      "packId": "pack-secrets-words",
      "word": "Кулак"
    },
    {
      "id": "sec-w-086",
      "packId": "pack-secrets-words",
      "word": "Петушок"
    },
    {
      "id": "sec-w-087",
      "packId": "pack-secrets-words",
      "word": "Каска"
    },
    {
      "id": "sec-w-088",
      "packId": "pack-secrets-words",
      "word": "Усики"
    },
    {
      "id": "sec-w-089",
      "packId": "pack-secrets-words",
      "word": "Уголь"
    },
    {
      "id": "sec-w-090",
      "packId": "pack-secrets-words",
      "word": "Перестройка"
    },
    {
      "id": "sec-w-091",
      "packId": "pack-secrets-words",
      "word": "Пар"
    },
    {
      "id": "sec-w-092",
      "packId": "pack-secrets-words",
      "word": "Конёк"
    },
    {
      "id": "sec-w-093",
      "packId": "pack-secrets-words",
      "word": "Лак"
    },
    {
      "id": "sec-w-094",
      "packId": "pack-secrets-words",
      "word": "Колонна"
    },
    {
      "id": "sec-w-095",
      "packId": "pack-secrets-words",
      "word": "Бор"
    },
    {
      "id": "sec-w-096",
      "packId": "pack-secrets-words",
      "word": "Витрина"
    },
    {
      "id": "sec-w-097",
      "packId": "pack-secrets-words",
      "word": "Масло"
    },
    {
      "id": "sec-w-098",
      "packId": "pack-secrets-words",
      "word": "Посадка"
    },
    {
      "id": "sec-w-099",
      "packId": "pack-secrets-words",
      "word": "Дуболом"
    },
    {
      "id": "sec-w-100",
      "packId": "pack-secrets-words",
      "word": "Саркофаг"
    },
    {
      "id": "sec-w-101",
      "packId": "pack-secrets-words",
      "word": "Вредитель"
    },
    {
      "id": "sec-w-102",
      "packId": "pack-secrets-words",
      "word": "Молоко"
    },
    {
      "id": "sec-w-103",
      "packId": "pack-secrets-words",
      "word": "Огонёк"
    },
    {
      "id": "sec-w-104",
      "packId": "pack-secrets-words",
      "word": "Буран"
    },
    {
      "id": "sec-w-105",
      "packId": "pack-secrets-words",
      "word": "Антенна"
    },
    {
      "id": "sec-w-106",
      "packId": "pack-secrets-words",
      "word": "Сланцы"
    },
    {
      "id": "sec-w-107",
      "packId": "pack-secrets-words",
      "word": "Нос"
    },
    {
      "id": "sec-w-108",
      "packId": "pack-secrets-words",
      "word": "Турист"
    },
    {
      "id": "sec-w-109",
      "packId": "pack-secrets-words",
      "word": "Паяльник"
    },
    {
      "id": "sec-w-110",
      "packId": "pack-secrets-words",
      "word": "Запрет"
    },
    {
      "id": "sec-w-111",
      "packId": "pack-secrets-words",
      "word": "Статья"
    },
    {
      "id": "sec-w-112",
      "packId": "pack-secrets-words",
      "word": "Достижение"
    },
    {
      "id": "sec-w-113",
      "packId": "pack-secrets-words",
      "word": "Привод"
    },
    {
      "id": "sec-w-114",
      "packId": "pack-secrets-words",
      "word": "Говорун"
    },
    {
      "id": "sec-w-115",
      "packId": "pack-secrets-words",
      "word": "Облик"
    },
    {
      "id": "sec-w-116",
      "packId": "pack-secrets-words",
      "word": "Кипятильник"
    },
    {
      "id": "sec-w-117",
      "packId": "pack-secrets-words",
      "word": "Кабина"
    },
    {
      "id": "sec-w-118",
      "packId": "pack-secrets-words",
      "word": "Ракета"
    },
    {
      "id": "sec-w-119",
      "packId": "pack-secrets-words",
      "word": "Бабуся"
    },
    {
      "id": "sec-w-120",
      "packId": "pack-secrets-words",
      "word": "Аномалия"
    },
    {
      "id": "sec-w-121",
      "packId": "pack-secrets-words",
      "word": "Трос"
    },
    {
      "id": "sec-w-122",
      "packId": "pack-secrets-words",
      "word": "Заговор"
    },
    {
      "id": "sec-w-123",
      "packId": "pack-secrets-words",
      "word": "Контрабанда"
    },
    {
      "id": "sec-w-124",
      "packId": "pack-secrets-words",
      "word": "Выпуск"
    },
    {
      "id": "sec-w-125",
      "packId": "pack-secrets-words",
      "word": "Хвост"
    },
    {
      "id": "sec-w-126",
      "packId": "pack-secrets-words",
      "word": "Зонтик"
    },
    {
      "id": "sec-w-127",
      "packId": "pack-secrets-words",
      "word": "Косичка"
    },
    {
      "id": "sec-w-128",
      "packId": "pack-secrets-words",
      "word": "Уран"
    },
    {
      "id": "sec-w-129",
      "packId": "pack-secrets-words",
      "word": "Калька"
    },
    {
      "id": "sec-w-130",
      "packId": "pack-secrets-words",
      "word": "Дискотека"
    },
    {
      "id": "sec-w-131",
      "packId": "pack-secrets-words",
      "word": "Лопатка"
    },
    {
      "id": "sec-w-132",
      "packId": "pack-secrets-words",
      "word": "Полимер"
    },
    {
      "id": "sec-w-133",
      "packId": "pack-secrets-words",
      "word": "Градус"
    },
    {
      "id": "sec-w-134",
      "packId": "pack-secrets-words",
      "word": "Шина"
    },
    {
      "id": "sec-w-135",
      "packId": "pack-secrets-words",
      "word": "Вышка"
    },
    {
      "id": "sec-w-136",
      "packId": "pack-secrets-words",
      "word": "Колготки"
    },
    {
      "id": "sec-w-137",
      "packId": "pack-secrets-words",
      "word": "Эксцентрик"
    },
    {
      "id": "sec-w-138",
      "packId": "pack-secrets-words",
      "word": "Ёрш"
    },
    {
      "id": "sec-w-139",
      "packId": "pack-secrets-words",
      "word": "Режим"
    },
    {
      "id": "sec-w-140",
      "packId": "pack-secrets-words",
      "word": "Турбина"
    },
    {
      "id": "sec-w-141",
      "packId": "pack-secrets-words",
      "word": "Графит"
    },
    {
      "id": "sec-w-142",
      "packId": "pack-secrets-words",
      "word": "Транзистор"
    },
    {
      "id": "sec-w-143",
      "packId": "pack-secrets-words",
      "word": "Справка"
    },
    {
      "id": "sec-w-144",
      "packId": "pack-secrets-words",
      "word": "Рог"
    },
    {
      "id": "sec-w-145",
      "packId": "pack-secrets-words",
      "word": "Хулиган"
    },
    {
      "id": "sec-w-146",
      "packId": "pack-secrets-words",
      "word": "Икра"
    },
    {
      "id": "sec-w-147",
      "packId": "pack-secrets-words",
      "word": "Зарядка"
    },
    {
      "id": "sec-w-148",
      "packId": "pack-secrets-words",
      "word": "Пузырь"
    },
    {
      "id": "sec-w-149",
      "packId": "pack-secrets-words",
      "word": "Паровозик"
    },
    {
      "id": "sec-w-150",
      "packId": "pack-secrets-words",
      "word": "Гипс"
    },
    {
      "id": "sec-w-151",
      "packId": "pack-secrets-words",
      "word": "Белочка"
    },
    {
      "id": "sec-w-152",
      "packId": "pack-secrets-words",
      "word": "Съезд"
    },
    {
      "id": "sec-w-153",
      "packId": "pack-secrets-words",
      "word": "Мыло"
    },
    {
      "id": "sec-w-154",
      "packId": "pack-secrets-words",
      "word": "Раритет"
    },
    {
      "id": "sec-w-155",
      "packId": "pack-secrets-words",
      "word": "Камера"
    },
    {
      "id": "sec-w-156",
      "packId": "pack-secrets-words",
      "word": "Барашек"
    },
    {
      "id": "sec-w-157",
      "packId": "pack-secrets-words",
      "word": "Анализ"
    },
    {
      "id": "sec-w-158",
      "packId": "pack-secrets-words",
      "word": "Декрет"
    },
    {
      "id": "sec-w-159",
      "packId": "pack-secrets-words",
      "word": "Жара"
    },
    {
      "id": "sec-w-160",
      "packId": "pack-secrets-words",
      "word": "Оптика"
    },
    {
      "id": "sec-w-161",
      "packId": "pack-secrets-words",
      "word": "Наполеон"
    },
    {
      "id": "sec-w-162",
      "packId": "pack-secrets-words",
      "word": "Корочка"
    },
    {
      "id": "sec-w-163",
      "packId": "pack-secrets-words",
      "word": "Профилактика"
    },
    {
      "id": "sec-w-164",
      "packId": "pack-secrets-words",
      "word": "Галилей"
    }
  ],
  "SECRETS_CLUE_EN": {
    "Экспонат": "Exhibit",
    "Монтаж": "Assembly",
    "Председатель": "Chairman",
    "Сопромат": "Materials Science",
    "Билет": "Ticket",
    "Вурдалак": "Ghoul",
    "Титан": "Titanium",
    "Крендель": "Pretzel",
    "Шлягер": "Hit Song",
    "Гелий": "Helium",
    "Труба": "Pipe",
    "Галька": "Pebble",
    "Макет": "Scale Model",
    "Носилки": "Stretcher",
    "Плита": "Stove",
    "Крем": "Cream",
    "Смена": "Shift",
    "Гриф": "Classification Stamp",
    "Синяк": "Bruise",
    "Осмотр": "Inspection",
    "Халат": "Lab Coat",
    "Колпак": "Cap",
    "Бинокль": "Binoculars",
    "Головастик": "Tadpole",
    "Кадр": "Frame",
    "Костюм": "Suit",
    "Вертолёт": "Helicopter",
    "Экскурсия": "Excursion",
    "Сплав": "Alloy",
    "Шарнир": "Hinge",
    "Палочка": "Wand",
    "Докторская": "Bologna Sausage",
    "Леонардо": "Leonardo",
    "Кислород": "Oxygen",
    "Прогноз": "Forecast",
    "Мяч": "Ball",
    "Стёклышко": "Glass Shard",
    "Плазма": "Plasma",
    "Волна": "Wave",
    "Магнитофон": "Tape Recorder",
    "Котёл": "Boiler",
    "Аполлон": "Apollo",
    "Вождь": "Leader",
    "Сирена": "Siren",
    "Чугунный": "Cast-Iron",
    "Давление": "Pressure",
    "Подтяжки": "Suspenders",
    "Тормозок": "Lunchbox",
    "Отряд": "Squad",
    "Молния": "Lightning",
    "Ходули": "Stilts",
    "Зона": "Zone",
    "Лазурь": "Azure",
    "Лапа": "Paw",
    "Баранка": "Steering Ring",
    "Гусеница": "Caterpillar",
    "Игла": "Needle",
    "Касса": "Cash Register",
    "Подиум": "Runway",
    "Конструктор": "Designer",
    "Баклан": "Cormorant",
    "Подмостки": "Stage Boards",
    "Свинья": "Pig",
    "Атлас": "Atlas",
    "Учебник": "Textbook",
    "Авария": "Accident",
    "Коленка": "Knee",
    "Звёздочка": "Little Star",
    "Монумент": "Monument",
    "Иллюминатор": "Porthole",
    "Пепелац": "Pepelats",
    "Передача": "Broadcast",
    "Шлем": "Helmet",
    "Пропаганда": "Propaganda",
    "Койка": "Bunk",
    "Наряд": "Duty Order",
    "Новичок": "Rookie",
    "Пиявка": "Leech",
    "Тунеядец": "Parasite",
    "Сетка": "Mesh Bag",
    "Дипломат": "Attaché Case",
    "Змий": "Serpent",
    "Линза": "Lens",
    "Язык": "Tongue",
    "Кулак": "Fist",
    "Петушок": "Rooster Lollipop",
    "Каска": "Hard Hat",
    "Усики": "Antennae",
    "Уголь": "Coal",
    "Перестройка": "Perestroika",
    "Пар": "Steam",
    "Конёк": "Skate",
    "Лак": "Varnish",
    "Колонна": "Column",
    "Бор": "Pine Forest",
    "Витрина": "Shop Window",
    "Масло": "Oil",
    "Посадка": "Landing",
    "Дуболом": "Blockhead",
    "Саркофаг": "Sarcophagus",
    "Вредитель": "Saboteur",
    "Молоко": "Milk",
    "Огонёк": "Spark",
    "Буран": "Blizzard",
    "Антенна": "Antenna",
    "Сланцы": "Flip-Flops",
    "Нос": "Nose",
    "Турист": "Tourist",
    "Паяльник": "Soldering Iron",
    "Запрет": "Ban",
    "Статья": "Article",
    "Достижение": "Achievement",
    "Привод": "Drive",
    "Говорун": "Chatterer",
    "Облик": "Appearance",
    "Кипятильник": "Immersion Heater",
    "Кабина": "Cabin",
    "Ракета": "Rocket",
    "Бабуся": "Granny",
    "Аномалия": "Anomaly",
    "Трос": "Cable",
    "Заговор": "Conspiracy",
    "Контрабанда": "Contraband",
    "Выпуск": "Release",
    "Хвост": "Tail",
    "Зонтик": "Umbrella",
    "Косичка": "Braid",
    "Уран": "Uranium",
    "Калька": "Tracing Paper",
    "Дискотека": "Disco",
    "Лопатка": "Spade",
    "Полимер": "Polymer",
    "Градус": "Degree",
    "Шина": "Tire",
    "Вышка": "Watchtower",
    "Колготки": "Tights",
    "Эксцентрик": "Eccentric",
    "Ёрш": "Ruffe",
    "Режим": "Regime",
    "Турбина": "Turbine",
    "Графит": "Graphite",
    "Транзистор": "Transistor",
    "Справка": "Certificate",
    "Рог": "Horn",
    "Хулиган": "Hooligan",
    "Икра": "Caviar",
    "Зарядка": "Morning Exercise",
    "Пузырь": "Bubble",
    "Паровозик": "Little Train",
    "Гипс": "Plaster Cast",
    "Белочка": "Squirrel",
    "Съезд": "Congress",
    "Мыло": "Soap",
    "Раритет": "Rarity",
    "Камера": "Chamber",
    "Барашек": "Lamb",
    "Анализ": "Analysis",
    "Декрет": "Decree",
    "Жара": "Heatwave",
    "Оптика": "Optics",
    "Наполеон": "Napoleon",
    "Корочка": "ID Booklet",
    "Профилактика": "Prevention",
    "Галилей": "Galileo"
  },
  "SECRETS_TELEGRAMS": [
    {
      "id": "tg-01",
      "number": 1,
      "nameRu": "Пятилетка за 4 года",
      "nameEn": "Five-Year Plan in 4 Years",
      "textRu": "Майор должен дать ровно 4 подсказки.",
      "textEn": "The Major must give exactly 4 clues.",
      "noteRu": "Если на руке меньше 4 карт, майор отдаёт все оставшиеся.",
      "noteEn": "If fewer than 4 cards remain in hand, the Major gives all remaining cards.",
      "timing": "vision"
    },
    {
      "id": "tg-02",
      "number": 2,
      "nameRu": "Краткость — сестра таланта",
      "nameEn": "Brevity Is the Soul of Wit",
      "textRu": "Майор должен дать столько подсказок, сколько слов в названии текущей локации.",
      "textEn": "The Major must give as many clues as there are words in the target location name.",
      "noteRu": "Аббревиатуры и сложные слова (КГБ, ЭВМ, Радиотелескоп) считаются за 1 слово.",
      "noteEn": "Abbreviations and compound words count as 1 word.",
      "timing": "vision"
    },
    {
      "id": "tg-03",
      "number": 3,
      "nameRu": "Ловкость рук",
      "nameEn": "Sleight of Hand",
      "textRu": "Шпион забирает себе в руку любую из подсказок от майора и не замешивает свою.",
      "textEn": "The Spy steals any one of the Major’s clues into their hand and does not add a decoy.",
      "noteRu": "Майор обязан дать минимум 2 подсказки.",
      "noteEn": "The Major must give at least 2 clues.",
      "timing": "vision"
    },
    {
      "id": "tg-04",
      "number": 4,
      "nameRu": "Уравниловка",
      "nameEn": "Equalization",
      "textRu": "Шпион может замешать более одной подсказки с руки, но не больше, чем дал майор.",
      "textEn": "The Spy may shuffle in more than one decoy from hand, up to the number of Major clues.",
      "timing": "vision"
    },
    {
      "id": "tg-05",
      "number": 5,
      "nameRu": "Госпожа удача",
      "nameEn": "Lady Luck",
      "textRu": "Шпион замешивает 2 случайные подсказки из колоды вместо своей.",
      "textEn": "The Spy shuffles in 2 random clues from the deck instead of one from hand.",
      "timing": "vision"
    },
    {
      "id": "tg-06",
      "number": 6,
      "nameRu": "Не в ресурсе",
      "nameEn": "Out of Resources",
      "textRu": "Шпион замешивает 1 случайную подсказку из колоды вместо своей. Если раунд проигран, шпион возвращает в игру одну из обесшпионенных локаций.",
      "textEn": "The Spy shuffles in 1 random clue from the deck instead of one from hand. If Pioneers fail the round, the Spy returns one De-spied location back into play.",
      "timing": "both"
    },
    {
      "id": "tg-07",
      "number": 7,
      "nameRu": "Один за всех",
      "nameEn": "One for All",
      "textRu": "Пионеры немедленно выбирают 1 представителя — только он будет угадывать следующую локацию. Остальные молчат и не подсказывают.",
      "textEn": "Pioneers immediately pick 1 representative — only they may deduce and choose the location. Everyone else stays silent.",
      "timing": "hunt"
    },
    {
      "id": "tg-08",
      "number": 8,
      "nameRu": "Культ личности",
      "nameEn": "Cult of Personality",
      "textRu": "Подсказки майора должны относиться к зацепке (предмету или личному делу), а не к самой локации.",
      "textEn": "The Major’s clues must refer to the Hook (Object or Informant Dossier) rather than the location itself.",
      "timing": "both"
    },
    {
      "id": "tg-09",
      "number": 9,
      "nameRu": "С пристрастием",
      "nameEn": "Under Interrogation",
      "textRu": "Пионеры должны угадать не только локацию, но и какая из открытых подсказок принадлежит шпиону.",
      "textEn": "Pioneers must correctly guess both the location AND which revealed clue came from the Spy.",
      "timing": "hunt"
    },
    {
      "id": "tg-10",
      "number": 10,
      "nameRu": "Минута на размышление",
      "nameEn": "One Minute to Think",
      "textRu": "Время на обсуждение пионеров строго ограничено — 60 секунд.",
      "textEn": "Pioneer discussion time is strictly limited to 60 seconds.",
      "timing": "hunt"
    },
    {
      "id": "tg-11",
      "number": 11,
      "nameRu": "Темнота — друг молодёжи",
      "nameEn": "Darkness Is Youth’s Friend",
      "textRu": "Пионеры играют с закрытыми глазами и не смотрят на локации. Выложенные карты подсказок озвучивает шпион.",
      "textEn": "Pioneers keep their eyes closed and do not look at the board. The Spy reads the revealed clues aloud.",
      "timing": "hunt"
    },
    {
      "id": "tg-12",
      "number": 12,
      "nameRu": "Конспирация",
      "nameEn": "Conspiracy",
      "textRu": "Если пионеры во время обсуждения произнесли название правильной локации или зацепки на ней — раунд мгновенно проигран.",
      "textEn": "If Pioneers say the name of the target location or its Hook aloud during discussion, the round is immediately lost.",
      "timing": "hunt"
    },
    {
      "id": "tg-13",
      "number": 13,
      "nameRu": "Партия считает",
      "nameEn": "The Party Believes",
      "textRu": "Каждую свою фразу во время обсуждения пионеры должны начинать со слов «Партия считает, что…».",
      "textEn": "Pioneers must begin every sentence during discussion with “The Party believes that…”",
      "timing": "hunt"
    },
    {
      "id": "tg-14",
      "number": 14,
      "nameRu": "Отвечая, руку подними!",
      "nameEn": "Raise Your Hand!",
      "textRu": "Выбрав локацию, один из пионеров сбрасывает жетон выбора с высоты 30–40 см — локация считается выбранной по месту падения.",
      "textEn": "After deciding, one Pioneer drops the selection token from 30–40 cm above the table to lock in their choice.",
      "timing": "hunt"
    },
    {
      "id": "tg-15",
      "number": 15,
      "nameRu": "Чужой среди своих",
      "nameEn": "Stranger Among Us",
      "textRu": "Шпион принимает участие в обсуждении наряду с пионерами, стараясь запутать их.",
      "textEn": "The Spy joins the Pioneers’ open discussion, trying to subtly mislead them.",
      "timing": "hunt"
    }
  ],
  "EXPANSIONS": [
    {
      "id": "mansion",
      "title": "Покинутый особняк",
      "subtitle": "2024 • Базовая коробка",
      "description": "Классическая мистическая охота на призрака в заброшенном поместье с крыльями и артефактами.",
      "available": true,
      "releaseYear": "2024"
    },
    {
      "id": "secrets",
      "title": "Секреты Советов",
      "subtitle": "2025–2026 • Самостоятельный выпуск",
      "description": "Советская мистика и конспирология в городе Маяковский-404: 24 локации, 32 зацепки, 164 слова и 15 телеграмм.",
      "available": true,
      "releaseYear": "2025–2026"
    },
    {
      "id": "ancients",
      "title": "Пробуждение Древних",
      "subtitle": "2025–2026 • По мотивам Лавкрафта",
      "description": "Самостоятельный выпуск с колодой древних локаций, запретных артефактов и мистических подсказок.",
      "available": false,
      "releaseYear": "2025–2026"
    },
    {
      "id": "treasure",
      "title": "Остров сокровищ",
      "subtitle": "Ноябрь 2026",
      "description": "Пиратские бухты, клады и загадочные маяки в приключенческом выпуске серии.",
      "available": false,
      "releaseYear": "2026"
    },
    {
      "id": "wildwest",
      "title": "Дикий Запад",
      "subtitle": "Ноябрь 2026",
      "description": "Пыльные салуны, золотые прииски и тайны фронтира в вестерн-выпуске серии.",
      "available": false,
      "releaseYear": "2026"
    },
    {
      "id": "darkages",
      "title": "Тёмные века",
      "subtitle": "Ноябрь 2026",
      "description": "Средневековые замки, алхимики и древние легенды в готическом выпуске серии.",
      "available": false,
      "releaseYear": "2026"
    },
    {
      "id": "space",
      "title": "Крик в космосе",
      "subtitle": "2027 • Научная фантастика",
      "description": "Научно-фантастический выпуск на дрейфующей станции в глубоком вакууме.",
      "available": false,
      "releaseYear": "2027"
    }
  ],
  "EXPANSION_TRANSLATIONS": {
    "mansion": {
      "ru": {
        "title": "Покинутый особняк",
        "subtitle": "2024 • Базовая коробка",
        "desc": "Классическая мистическая охота на призрака в старом доме с крыльями и артефактами."
      },
      "en": {
        "title": "The Abandoned Mansion",
        "subtitle": "2024 • Core Box",
        "desc": "Classic mystical ghost hunt inside an old estate with wings and artifacts."
      }
    },
    "secrets": {
      "ru": {
        "title": "Секреты Советов",
        "subtitle": "2025–2026 • Самостоятельная коробка",
        "desc": "Советская мистика и конспирология в городе Маяковский-404: 24 локации, 32 зацепки, 164 слова и 15 телеграмм."
      },
      "en": {
        "title": "Secrets of the Soviets",
        "subtitle": "2025–2026 • Standalone Box",
        "desc": "Soviet mystery & conspiracy in Mayakovsky-404: 24 locations, 32 hooks, 164 words, and 15 telegrams."
      }
    },
    "ancients": {
      "ru": {
        "title": "Пробуждение Древних",
        "subtitle": "2025–2026 • По Лавкрафту",
        "desc": "Самостоятельный выпуск с новой колодой локаций, артефактов и тематических подсказок."
      },
      "en": {
        "title": "Awakening of the Ancients",
        "subtitle": "2025–2026 • Lovecraftian",
        "desc": "Standalone release with new locations, forbidden artifacts, and thematic clues."
      }
    },
    "treasure": {
      "ru": {
        "title": "Остров сокровищ",
        "subtitle": "Ноябрь 2026",
        "desc": "Пиратские бухты, клады и загадочные маяки в приключенческом выпуске серии."
      },
      "en": {
        "title": "Treasure Island",
        "subtitle": "November 2026",
        "desc": "Pirate coves, buried treasure, and mysterious lighthouses."
      }
    },
    "wildwest": {
      "ru": {
        "title": "Дикий Запад",
        "subtitle": "Ноябрь 2026",
        "desc": "Пыльные салуны, золотые прииски и тайны фронтира."
      },
      "en": {
        "title": "Wild West",
        "subtitle": "November 2026",
        "desc": "Dusty saloons, gold mines, and frontier mysteries."
      }
    },
    "darkages": {
      "ru": {
        "title": "Тёмные века",
        "subtitle": "Ноябрь 2026",
        "desc": "Средневековые замки, алхимики и древние легенды."
      },
      "en": {
        "title": "Dark Ages",
        "subtitle": "November 2026",
        "desc": "Medieval castles, alchemists, and ancient legends."
      }
    },
    "space": {
      "ru": {
        "title": "Крик в космосе",
        "subtitle": "2027 • Научная фантастика",
        "desc": "Научно-фантастический выпуск на дрейфующем корабле в глубоком вакууме."
      },
      "en": {
        "title": "Space Scream",
        "subtitle": "2027 • Sci-Fi",
        "desc": "Sci-fi standalone set aboard a drifting vessel in deep space."
      }
    }
  },
  "SECRETS_WORDS_PACK": {
    "id": "pack-secrets-words",
    "packType": "words",
    "titleRu": "Секреты Советов (164 слова)",
    "titleEn": "Secrets of the Soviets (164 Words)",
    "descRu": "Полная колода из 164 слов-подсказок советской эпохи. Можно смешивать с Покинутым особняком.",
    "descEn": "Complete 164-word Soviet-era clue deck. Can be mixed freely with the Abandoned Mansion."
  },
  "EXTRA_TRANSLATIONS": {
    "ru": {
      "secrets": "Секреты Советов",
      "secretsTownTitle": "Маяковский-404",
      "secretsSetupSubtitle": "Настройте локации города Маяковский-404, зацепки и телеграммы",
      "secretsLocationsSideLabel": "Сторона локаций",
      "secretsSideA": "Сторона А (Красные)",
      "secretsSideADesc": "Базовые советские локации (1–12А)",
      "secretsSideB": "Сторона Б (Синие)",
      "secretsSideBDesc": "Усложнённые локации (1–12Б)",
      "secretsSideMixed": "Смешанные (А + Б)",
      "secretsSideMixedDesc": "Половина красных, половина синих",
      "secretsAdvancedToggle": "Сложные зелёные локации (13–24)",
      "secretsAdvancedDesc": "Добавляет фантастические объекты: Космодром, Супер ЭВМ, Институт времени (до 5 на столе)",
      "secretsHookSideLabel": "Сторона карт зацепок (32 карты)",
      "secretsHookObjects": "Предметы",
      "secretsHookObjectsDesc": "Самовар, Скафандр, Примус, Крипто-анализатор",
      "secretsHookInformants": "Личные дела",
      "secretsHookInformantsDesc": "Информаторы: Бендер, Селезнёва, Кулибин, Бегемот",
      "secretsTelegramsLabel": "Карты телеграмм (15 особых правил)",
      "secretsTelegramsDesc": "Шпион разыгрывает телеграммы после побед пионеров; Майор может обменять карты за срочную телеграмму",
      "secretsWordMixTitle": "Колоды слов-подсказок (можно смешивать коробки)",
      "secretsWordMixHint": "Секреты Советов содержат 164 своих слова. При желании отметьте колоды из «Покинутого особняка» для смешивания.",
      "secretsStandardDesc": "Шпион, Майор и Пионеры",
      "secretsDuoDesc": "Майор и Пионер без шпиона",
      "secretsSealedStamp": "Обесшпионенная среда",
      "secretsLostStamp": "Закрыто на учёт",
      "activeTelegramsTitle": "Активные телеграммы раунда",
      "urgentTelegramBadge": "Срочная телеграмма",
      "spyTelegramBadge": "Телеграмма шпиона",
      "majorSwapForTelegramBtn": "Обменять выбранные за срочную телеграмму",
      "majorSwapForTelegramHint": "1× за раунд: обменяйте любые выбранные карты с руки — в игру немедленно вступит верхняя телеграмма из колоды.",
      "majorSwapTelegramUsed": "Срочный обмен уже использован в этом раунде",
      "telegramConflictTitle": "Две телеграммы одновременно!",
      "telegramConflictHint": "По правилам, если две телеграммы противоречат друг другу, Шпион может сбросить одну из них:",
      "dismissTelegramBtn": "Сбросить эту",
      "spyTelegramHandTitle": "Телеграммы на руке шпиона (2)",
      "spyTelegramHandHint": "Вы разыграете одну из них в Фазе разбора полётов, если пионеры угадают локацию.",
      "spyPickTelegramTitle": "Разыграйте телеграмму на следующий раунд",
      "spyPickTelegramDesc": "Пионеры угадали локацию! Выберите 1 из 2 телеграмм — она вступит в силу в следующем раунде.",
      "spyDiscardSecondLabel": "Также сбросить вторую телеграмму и добрать 2 новые",
      "spyKeepSecondLabel": "Оставить вторую телеграмму на руке (добрать 1 новую)",
      "spyConfirmTelegramBtn": "Отправить телеграмму и продолжить",
      "tg01Requirement": "Телеграмма №1: нужно ровно 4 подсказки",
      "tg02Requirement": "Телеграмма №2: нужно ровно",
      "tg02WordsSuffix": "подск. (по числу слов в локации)",
      "tg03Requirement": "Телеграмма №3: дайте минимум 2 подсказки (Шпион заберёт 1)",
      "tg03SpyPrompt": "Телеграмма №3 «Ловкость рук»: заберите 1 подсказку Майора себе в руку (свою не добавляете)",
      "tg03StealBtn": "Забрать подсказку в руку и открыть остальные",
      "tg04SpyPrompt": "Телеграмма №4 «Уравниловка»: выберите от 1 до",
      "tg04SpyPromptSuffix": "ложных карт",
      "tg05SpyNotice": "Телеграмма №5 «Госпожа удача»: вместо карты с руки автоматически замешаются 2 случайные карты из колоды.",
      "tg06SpyNotice": "Телеграмма №6 «Не в ресурсе»: автоматически замешается 1 случайная карта из колоды. При провале пионеров вы вернёте в игру 1 обесшпионенную локацию.",
      "tg09PickDecoyTitle": "Телеграмма №9 «С пристрастием»: укажите подсказку Шпиона",
      "tg09PickDecoyHint": "Выберите одновременно и локацию, и карту-подсадку Шпиона среди выложенных слов.",
      "tg09DecoySuccess": "Подсказка Шпиона разоблачена!",
      "tg09DecoyFail": "Локация верна, но подсказка Шпиона не угадана — раунд проигран!",
      "tgViolationBtn": "Нарушение телеграммы (Шпион)",
      "tgViolationConfirmTitle": "Зафиксировать нарушение телеграммы?",
      "tgViolationConfirmText": "По правилам (стр. 11), если пионеры или майор нарушили условие активной телеграммы, Шпион немедленно закрывает текущую локацию «на учёт».",
      "tgViolationConfirmProceed": "Закрыть локацию на учёт",
      "tgViolationResult": "Зафиксировано нарушение телеграммы! Текущая локация немедленно закрыта на учёт.",
      "tg06UnsealTitle": "Телеграмма №6 «Не в ресурсе» — ход Шпиона",
      "tg06UnsealDesc": "Пионеры ошиблись! Выберите 1 обесшпионенную локацию, чтобы вернуть её обратно в игру:",
      "tg06UnsealDone": "Локация возвращена в игру и её направление снова в стопке.",
      "tabSecretsRules": "Секреты Советов",
      "tabTelegramsList": "15 телеграмм",
      "secretsGoalTitle": "Сюжет и цель («Маяковский-404»)",
      "secretsGoalDesc": "В секретном советском городе Маяковский-404 завёлся империалистический шпион, охотящийся за чертежами гравицаппы. Товарищ Майор Тихонов С. Н. и Пионеры побеждают, обеспечив 5 «Обесшпионенных сред». Шпион побеждает, если 5 локаций «Закрыты на учёт».",
      "secretsPhasesTitle": "Три фазы раунда",
      "secretsPhase1Rule": "1. Фаза наблюдения: Майор и Шпион смотрят верхнюю карту направления. Майор выкладывает 1+ подсказок (и может 1× за раунд обменять любые карты с руки, вскрыв срочную телеграмму). Шпион замешивает 1 ложную карту.",
      "secretsPhase2Rule": "2. Фаза перехвата: Пионеры обсуждают подсказки и выбирают локацию. При успехе локация становится «Обесшпионенной средой», при ошибке — текущая целевая локация «Закрывается на учёт».",
      "secretsPhase3Rule": "3. Фаза разбора полётов: если пионеры победили в раунде, Шпион разыгрывает 1 из 2 своих телеграмм на следующий раунд. Майор добирает 2 карты подсказок; Шпион добирает до 5 (или +1 карту при игре с телеграммами).",
      "secretsHooksRuleTitle": "Зацепки и сложные локации",
      "secretsHooksRuleDesc": "На каждой из 10 локаций лежит зацепка: либо сторона «Предметы», либо сторона «Личные дела» информаторов (стороны в одной партии не смешиваются). Рекомендуется добавлять на стол не более 5 сложных зелёных локаций (13–24).",
      "secretsCrossBoxRule": "Смешивание коробок: карты подсказок из «Секретов Советов» (164 слова) и «Покинутого особняка» можно свободно смешивать в любой из коробок.",
      "modEnableTelegrams": "Карты телеграмм (15 особых правил)",
      "modEnableTelegramsDesc": "Добавляет механику телеграмм из «Секретов Советов» в любую коробку: Призрак/Шпион получает 2 телеграммы, а Медиум/Майор может 1× за раунд обменять карты за срочную телеграмму.",
      "modMixCrossBoxArtifacts": "Кросс-микс артефактов и зацепок (5 + 5)",
      "modMixCrossBoxArtifactsDesc": "Смешивает на столе 5 артефактов «Покинутого особняка» и 5 зацепок «Секретов Советов» — работает с категориями и свойствами в обеих коробках.",
      "dictFilterAll": "Все",
      "dictFilterMedium": "Медиум",
      "dictFilterGames": "Другие игры",
      "dictFilterAdult": "18+",
      "dictSearchPlaceholder": "Поиск словаря по названию...",
      "dictQuickBoxOnly": "Только коробка",
      "dictQuickSafeAll": "Все без 18+",
      "dictAdultBadge": "18+",
      "dictNoResults": "Словари по запросу не найдены",
      "dictDecksSelectedCount": "колод",
      "crossBoxMechanicsTitle": "Кросс-коробка: правила и способности карт",
      "crossBoxMechanicsDesc": "Готовые наборы правил, категории зацепок, свойства локаций и телеграммы работают в обеих коробках.",
      "scrollListHint": "Прокрутите список",
      "locationsCount": "Локации",
      "hooksCount": "Зацепки",
      "boxFilterAll": "Все коробки",
      "boxFilterActive": "Выбранные",
      "boxFilterMansion": "Особняк",
      "boxFilterSecrets": "Советы",
      "boxGroupMansion": "Покинутый особняк",
      "boxGroupSecrets": "Секреты Советов (Маяковский-404)",
      "sideAShort": "А",
      "sideBShort": "Б"
    },
    "en": {
      "secrets": "Secrets of the Soviets",
      "secretsTownTitle": "Mayakovsky-404",
      "secretsSetupSubtitle": "Configure Mayakovsky-404 locations, hooks, and official telegrams",
      "secretsLocationsSideLabel": "Location Side",
      "secretsSideA": "Side A (Red)",
      "secretsSideADesc": "Basic Soviet locations (1–12A)",
      "secretsSideB": "Side B (Blue)",
      "secretsSideBDesc": "Trickier locations (1–12B)",
      "secretsSideMixed": "Mixed (A + B)",
      "secretsSideMixedDesc": "Half red, half blue locations",
      "secretsAdvancedToggle": "Advanced Green Locations (13–24)",
      "secretsAdvancedDesc": "Adds sci-fi/retro locations: Cosmodrome, Supercomputer, Institute of Time (up to 5 on board)",
      "secretsHookSideLabel": "Hook Cards Side (32 cards)",
      "secretsHookObjects": "Objects",
      "secretsHookObjectsDesc": "Samovar, Spacesuit, Primus Stove, Crypto-Analyzer",
      "secretsHookInformants": "Informant Dossiers",
      "secretsHookInformantsDesc": "Informants: Bender, Seleznyova, Kulibin, Begemot",
      "secretsTelegramsLabel": "Telegram Cards (15 special rules)",
      "secretsTelegramsDesc": "Spy plays telegrams after Pioneer round wins; Major may swap hand cards for an urgent telegram",
      "secretsWordMixTitle": "Clue Word Decks (Cross-Box Mixing)",
      "secretsWordMixHint": "Secrets of the Soviets includes 164 Soviet words. Check any Mansion or board-game dictionaries below to mix them in.",
      "secretsStandardDesc": "Spy, Major and Pioneers",
      "secretsDuoDesc": "Major and Pioneer without Spy",
      "secretsSealedStamp": "De-Spied Zone",
      "secretsLostStamp": "Closed for Audit",
      "activeTelegramsTitle": "Active Round Telegrams",
      "urgentTelegramBadge": "Urgent Telegram",
      "spyTelegramBadge": "Spy Telegram",
      "majorSwapForTelegramBtn": "Swap Selected for Urgent Telegram",
      "majorSwapForTelegramHint": "1×/round: swap any selected hand cards — the top Telegram card activates immediately this round.",
      "majorSwapTelegramUsed": "Urgent swap already used this round",
      "telegramConflictTitle": "Two Telegrams Active Simultaneously!",
      "telegramConflictHint": "Per official rules, if two telegrams conflict, the Spy may discard one of them:",
      "dismissTelegramBtn": "Discard This",
      "spyTelegramHandTitle": "Spy’s Telegram Hand (2)",
      "spyTelegramHandHint": "You will play one of these in Debrief if the Pioneers guess correctly.",
      "spyPickTelegramTitle": "Play a Telegram for Next Round",
      "spyPickTelegramDesc": "Pioneers guessed correctly! Choose 1 of your 2 telegrams to activate next round.",
      "spyDiscardSecondLabel": "Also discard the second telegram and draw 2 new ones",
      "spyKeepSecondLabel": "Keep the second telegram in hand (draw 1 new)",
      "spyConfirmTelegramBtn": "Dispatch Telegram & Continue",
      "tg01Requirement": "Telegram #1: must select exactly 4 clues",
      "tg02Requirement": "Telegram #2: must select exactly",
      "tg02WordsSuffix": "clue(s) (matching location word count)",
      "tg03Requirement": "Telegram #3: give at least 2 clues (Spy will steal 1)",
      "tg03SpyPrompt": "Telegram #3 “Sleight of Hand”: steal 1 of the Major’s clues into your hand (do not add a decoy)",
      "tg03StealBtn": "Steal Selected Clue & Reveal Rest",
      "tg04SpyPrompt": "Telegram #4 “Equalization”: select 1 to",
      "tg04SpyPromptSuffix": "decoy cards",
      "tg05SpyNotice": "Telegram #5 “Lady Luck”: 2 random deck clues will be shuffled in automatically instead of a hand card.",
      "tg06SpyNotice": "Telegram #6 “Out of Resources”: 1 random deck clue will be shuffled in. If Pioneers fail, you unseal 1 De-Spied location.",
      "tg09PickDecoyTitle": "Telegram #9 “Under Interrogation”: Spot the Spy’s Clue",
      "tg09PickDecoyHint": "Select both the target location AND which revealed clue belongs to the Spy.",
      "tg09DecoySuccess": "Spy’s decoy clue exposed!",
      "tg09DecoyFail": "Location matched, but wrong decoy guessed — round lost!",
      "tgViolationBtn": "Telegram Violation (Spy)",
      "tgViolationConfirmTitle": "Enforce Telegram Violation?",
      "tgViolationConfirmText": "Per official rules, if Pioneers or the Major broke an active telegram rule, the Spy immediately closes the current location for audit.",
      "tgViolationConfirmProceed": "Close Location for Audit",
      "tgViolationResult": "Telegram violation enforced! The target location is immediately closed for audit.",
      "tg06UnsealTitle": "Telegram #6 “Out of Resources” — Spy Action",
      "tg06UnsealDesc": "Pioneers missed! Choose 1 De-Spied location to return back into play:",
      "tg06UnsealDone": "Location returned to active play and its direction card reshuffled.",
      "tabSecretsRules": "Secrets of Soviets",
      "tabTelegramsList": "15 Telegrams",
      "secretsGoalTitle": "Story & Objective (Mayakovsky-404)",
      "secretsGoalDesc": "An imperialist Spy has infiltrated the closed Soviet town of Mayakovsky-404 for the gravitsappa blueprints. Major Tikhonov and the Pioneers win with 5 De-Spied Zones; the Spy wins if 5 locations are Closed for Audit.",
      "secretsPhasesTitle": "Three Round Phases",
      "secretsPhase1Rule": "1. Observation: Major & Spy view the top direction card. Major picks 1+ clues (and may once/round swap any hand cards by triggering an urgent Telegram). Spy shuffles in 1 decoy.",
      "secretsPhase2Rule": "2. Interception: Pioneers discuss the clues and choose a location. Correct guess marks it De-Spied; wrong guess closes the target location for audit.",
      "secretsPhase3Rule": "3. Debrief: If Pioneers won the round, Spy plays 1 of 2 telegrams for next round. Major draws 2 clues; Spy refills to 5 (or draws +1 when Telegrams are active).",
      "secretsHooksRuleTitle": "Hooks & Advanced Locations",
      "secretsHooksRuleDesc": "Each of the 10 locations holds a Hook card: either Objects or Informant Dossiers (never mixed in one match). Official rules recommend at most 5 green advanced locations (13–24) on the board.",
      "secretsCrossBoxRule": "Cross-Box Mixing: Clue word decks from Secrets of the Soviets (164 words) and The Abandoned Mansion can be mixed freely in either box.",
      "modEnableTelegrams": "Telegram Cards (15 Special Rules)",
      "modEnableTelegramsDesc": "Brings the 15 Telegram cards from Secrets of the Soviets into any box: Ghost/Spy holds 2 Telegrams, and Medium/Major may once/round swap hand cards for an urgent Telegram.",
      "modMixCrossBoxArtifacts": "Cross-Box Artifacts & Hooks Mix (5 + 5)",
      "modMixCrossBoxArtifactsDesc": "Places 5 Abandoned Mansion artifacts alongside 5 Secrets of the Soviets hooks on the board — works with categories & traits in both boxes.",
      "dictFilterAll": "All",
      "dictFilterMedium": "Medium",
      "dictFilterGames": "Other Games",
      "dictFilterAdult": "18+",
      "dictSearchPlaceholder": "Search dictionaries by name...",
      "dictQuickBoxOnly": "Box Only",
      "dictQuickSafeAll": "All (No 18+)",
      "dictAdultBadge": "18+",
      "dictNoResults": "No dictionaries match your search",
      "dictDecksSelectedCount": "decks",
      "crossBoxMechanicsTitle": "Cross-Box Rules & Card Abilities",
      "crossBoxMechanicsDesc": "Rule presets, hook categories, location traits, and Telegram cards work across both boxes.",
      "scrollListHint": "Scroll list",
      "locationsCount": "Locations",
      "hooksCount": "Hooks",
      "boxFilterAll": "All Boxes",
      "boxFilterActive": "Selected",
      "boxFilterMansion": "Mansion",
      "boxFilterSecrets": "Soviets",
      "boxGroupMansion": "The Abandoned Mansion",
      "boxGroupSecrets": "Secrets of the Soviets (Mayakovsky-404)",
      "sideAShort": "A",
      "sideBShort": "B"
    }
  }
};
  window.SECRETS_DATA = S;

  const D = window.MEDIUM_DATA;
  if (!D) return;

  S.SECRETS_BASIC_PACK_ID = "pack-secrets-basic";
  S.SECRETS_ADVANCED_PACK_ID = "pack-secrets-advanced";
  S.SECRETS_OBJECTS_PACK_ID = "pack-secrets-objects";
  S.SECRETS_INFORMANTS_PACK_ID = "pack-secrets-informants";

  // Update series chronology
  D.EXPANSIONS = S.EXPANSIONS;
  D.EXPANSION_TRANSLATIONS = S.EXPANSION_TRANSLATIONS;

  // Register 4 modular Soviet component packs (locations + hooks) & word pack
  const SOVIET_COMPONENT_PACKS = [
    {
      id: S.SECRETS_BASIC_PACK_ID,
      packType: "full",
      box: "secrets",
      titleRu: "Маяковский-404: Базовые локации (1–12)",
      titleEn: "Mayakovsky-404: Basic Locations (1–12)",
      descRu: "12 базовых советских локаций города (сторона А — красная, сторона Б — синяя).",
      descEn: "12 core Soviet town locations (Side A red, Side B blue).",
    },
    {
      id: S.SECRETS_ADVANCED_PACK_ID,
      packType: "full",
      box: "secrets",
      titleRu: "Маяковский-404: Сложные локации (13–24)",
      titleEn: "Mayakovsky-404: Advanced Locations (13–24)",
      descRu: "12 зелёных ретро-фантастических локаций: Космодром, Супер ЭВМ, Институт времени (до 5 на столе при смешивании).",
      descEn: "12 green retro sci-fi locations: Cosmodrome, Supercomputer, Institute of Time (up to 5 on board when mixed).",
    },
    {
      id: S.SECRETS_OBJECTS_PACK_ID,
      packType: "full",
      box: "secrets",
      titleRu: "Зацепки: Предметы (32)",
      titleEn: "Hooks: Objects (32)",
      descRu: "32 советских предмета-зацепки: Самовар, Скафандр, Примус, Крипто-анализатор.",
      descEn: "32 Soviet object hooks: Samovar, Spacesuit, Primus Stove, Crypto-Analyzer.",
    },
    {
      id: S.SECRETS_INFORMANTS_PACK_ID,
      packType: "full",
      box: "secrets",
      titleRu: "Зацепки: Личные дела (32)",
      titleEn: "Hooks: Informant Dossiers (32)",
      descRu: "32 досье информаторов: Бендер, Селезнёва, Кулибин, Бегемот (оборотная сторона карт зацепок).",
      descEn: "32 informant dossiers: Bender, Seleznyova, Kulibin, Begemot (reverse side of hook cards).",
    },
  ];
  SOVIET_COMPONENT_PACKS.forEach((p) => {
    if (!D.THEMATIC_PACKS.some((x) => x.id === p.id)) {
      D.THEMATIC_PACKS.push(p);
    }
  });
  if (S.SECRETS_WORDS_PACK && !D.THEMATIC_PACKS.some((p) => p.id === S.SECRETS_WORDS_PACK.id)) {
    D.THEMATIC_PACKS.push(S.SECRETS_WORDS_PACK);
  }
  const existingClueIds = new Set(D.ALL_CLUES.map((c) => c.id));
  S.SECRETS_CLUES.forEach((c) => {
    if (!existingClueIds.has(c.id)) D.ALL_CLUES.push(c);
  });

  // Register clue EN translations (by word and by id)
  D.CLUE_TRANSLATIONS_BY_ID = D.CLUE_TRANSLATIONS_BY_ID || {};
  S.SECRETS_CLUES.forEach((c) => {
    const enWord = S.SECRETS_CLUE_EN[c.word];
    if (enWord) {
      D.CLUE_TRANSLATIONS_BY_ID[c.id] = enWord;
      if (!D.CLUE_TRANSLATIONS_EN[c.word]) {
        D.CLUE_TRANSLATIONS_EN[c.word] = enWord;
      }
    }
  });

  // Register 24 Secrets locations into unified ALL_ROOMS, ALL_HIDEOUTS & ROOM_TRANSLATIONS
  const existingRoomIds = new Set((D.ALL_ROOMS || []).map((r) => r.id));
  const existingHideoutRoomIds = new Set((D.ALL_HIDEOUTS || []).map((h) => h.roomId));
  S.SECRETS_ROOM_SPECS.forEach((spec) => {
    D.ROOM_TRANSLATIONS[spec.id] = {
      ru: { silver: spec.nameA, gold: spec.nameB },
      en: { silver: spec.nameAEn, gold: spec.nameBEn },
    };
    if (Array.isArray(D.ALL_ROOMS) && !existingRoomIds.has(spec.id)) {
      D.ALL_ROOMS.push({
        id: spec.id,
        nameSilver: spec.nameA,
        nameGold: spec.nameB,
        artifactId: "",
        status: "active",
        packId: spec.level === "advanced" ? S.SECRETS_ADVANCED_PACK_ID : S.SECRETS_BASIC_PACK_ID,
        number: spec.number,
        level: spec.level,
      });
    }
    if (Array.isArray(D.ALL_HIDEOUTS) && !existingHideoutRoomIds.has(spec.id)) {
      D.ALL_HIDEOUTS.push({ id: "hideout-" + spec.id, roomId: spec.id });
    }
  });

  // Register 32 Objects (sec-hook-*) & 32 Informant Dossiers (sec-inf-*) into unified ALL_ARTIFACTS & ARTIFACT_TRANSLATIONS
  const existingArtifactIds = new Set((D.ALL_ARTIFACTS || []).map((a) => a.id));
  S.SECRETS_HOOK_SPECS.forEach((h) => {
    const infId = h.id.replace("sec-hook-", "sec-inf-");
    D.ARTIFACT_TRANSLATIONS[h.id] = { ru: h.objectRu, en: h.objectEn };
    D.ARTIFACT_TRANSLATIONS[h.id + "::informant"] = { ru: h.informantRu, en: h.informantEn };
    D.ARTIFACT_TRANSLATIONS[infId] = { ru: h.informantRu, en: h.informantEn };

    if (Array.isArray(D.ALL_ARTIFACTS) && !existingArtifactIds.has(h.id)) {
      D.ALL_ARTIFACTS.push({
        id: h.id,
        name: h.objectRu,
        symbol: "object",
        packId: S.SECRETS_OBJECTS_PACK_ID,
      });
    }
    if (Array.isArray(D.ALL_ARTIFACTS) && !existingArtifactIds.has(infId)) {
      D.ALL_ARTIFACTS.push({
        id: infId,
        name: h.informantRu,
        symbol: "dossier",
        packId: S.SECRETS_INFORMANTS_PACK_ID,
      });
    }
  });

  // Default modular pack config for Secrets of the Soviets
  D.DEFAULT_SECRETS_PACK_CONFIG = {
    selectedPackIds: [S.SECRETS_BASIC_PACK_ID, S.SECRETS_OBJECTS_PACK_ID],
    selectedWordPackIds: [S.SECRETS_WORDS_PACK_ID],
    disabledRoomIds: [],
    disabledArtifactIds: [],
    guaranteedPackIds: [],
  };
  D.getDefaultPackConfigForVersion = function (version) {
    return version === "secrets" ? D.DEFAULT_SECRETS_PACK_CONFIG : D.DEFAULT_PACK_CONFIG;
  };

  // Cross-box mechanics: extend DEFAULT_MODIFIERS
  if (D.DEFAULT_MODIFIERS) {
    D.DEFAULT_MODIFIERS.enableTelegrams = false;
    D.DEFAULT_MODIFIERS.mixCrossBoxArtifacts = false;
  }

  // Map Secrets hooks (sec-hook-01..32 and sec-inf-01..32) into the 4 artifact categories
  D.ARTIFACT_CATEGORIES = D.ARTIFACT_CATEGORIES || {};
  const SECRETS_HOOK_CATEGORIES = {
    'sec-hook-01': 'tool',
    'sec-hook-02': 'eerie',
    'sec-hook-03': 'tool',
    'sec-hook-04': 'archive',
    'sec-hook-05': 'eerie',
    'sec-hook-06': 'archive',
    'sec-hook-07': 'eerie',
    'sec-hook-08': 'occult',
    'sec-hook-09': 'occult',
    'sec-hook-10': 'archive',
    'sec-hook-11': 'tool',
    'sec-hook-12': 'eerie',
    'sec-hook-13': 'archive',
    'sec-hook-14': 'eerie',
    'sec-hook-15': 'tool',
    'sec-hook-16': 'archive',
    'sec-hook-17': 'tool',
    'sec-hook-18': 'occult',
    'sec-hook-19': 'tool',
    'sec-hook-20': 'eerie',
    'sec-hook-21': 'archive',
    'sec-hook-22': 'occult',
    'sec-hook-23': 'occult',
    'sec-hook-24': 'occult',
    'sec-hook-25': 'archive',
    'sec-hook-26': 'tool',
    'sec-hook-27': 'occult',
    'sec-hook-28': 'eerie',
    'sec-hook-29': 'archive',
    'sec-hook-30': 'eerie',
    'sec-hook-31': 'occult',
    'sec-hook-32': 'tool',
  };
  Object.assign(D.ARTIFACT_CATEGORIES, SECRETS_HOOK_CATEGORIES);
  Object.keys(SECRETS_HOOK_CATEGORIES).forEach((hookId) => {
    D.ARTIFACT_CATEGORIES[hookId.replace('sec-hook-', 'sec-inf-')] = SECRETS_HOOK_CATEGORIES[hookId];
  });

  // Map Secrets locations (sec-room-01..24) into the 4 room traits
  D.ROOM_TRAITS = D.ROOM_TRAITS || {};
  Object.assign(D.ROOM_TRAITS, {
    'sec-room-01': 'pillar',
    'sec-room-02': 'quiet',
    'sec-room-03': 'echo',
    'sec-room-04': 'archive',
    'sec-room-05': 'quiet',
    'sec-room-06': 'pillar',
    'sec-room-07': 'echo',
    'sec-room-08': 'archive',
    'sec-room-09': 'archive',
    'sec-room-10': 'echo',
    'sec-room-11': 'quiet',
    'sec-room-12': 'pillar',
    'sec-room-13': 'pillar',
    'sec-room-14': 'archive',
    'sec-room-15': 'echo',
    'sec-room-16': 'quiet',
    'sec-room-17': 'archive',
    'sec-room-18': 'echo',
    'sec-room-19': 'pillar',
    'sec-room-20': 'quiet',
    'sec-room-21': 'archive',
    'sec-room-22': 'echo',
    'sec-room-23': 'pillar',
    'sec-room-24': 'quiet',
  });

  // Extend GAME_SCENARIOS with modular Secrets & Cross-Box scenarios
  if (Array.isArray(D.GAME_SCENARIOS)) {
    D.GAME_SCENARIOS.forEach((sc) => {
      if (sc.modifiers) {
        if (typeof sc.modifiers.enableTelegrams !== 'boolean') sc.modifiers.enableTelegrams = false;
        if (typeof sc.modifiers.mixCrossBoxArtifacts !== 'boolean') sc.modifiers.mixCrossBoxArtifacts = false;
      }
    });
    const MODULAR_SCENARIOS = [
      {
        id: 'secrets_classic',
        titleRu: 'Маяковский-404: Классика',
        titleEn: 'Mayakovsky-404: Classic',
        descRu: 'Базовые локации (1–12А), предметы-зацепки, 164 советских слова и 15 официальных телеграмм.',
        descEn: 'Basic locations (1–12A), object hooks, 164 Soviet clues, and 15 official Telegram cards.',
        difficulty: 'silver',
        packConfig: {
          selectedPackIds: [S.SECRETS_BASIC_PACK_ID, S.SECRETS_OBJECTS_PACK_ID],
          selectedWordPackIds: [S.SECRETS_WORDS_PACK_ID],
          disabledRoomIds: [],
          disabledArtifactIds: [],
          guaranteedPackIds: [],
        },
        modifiers: {
          enableWingCurses: false,
          mixedDifficulty: false,
          ghostIllusionEnabled: false,
          mediumInsightEnabled: false,
          blitzTimer: false,
          enableArtifactCategories: false,
          enableRoomProperties: false,
          enableRiskActions: false,
          enableCatchUp: false,
          enableTelegrams: true,
          mixCrossBoxArtifacts: false,
        },
      },
      {
        id: 'secrets_informants',
        titleRu: 'Маяковский-404: Агентура и спецобъекты',
        titleEn: 'Mayakovsky-404: Informants & Sci-Fi',
        descRu: 'Сложные зелёные локации (13–24, до 5 на столе), личные дела информаторов, смешанные стороны А+Б и телеграммы.',
        descEn: 'Advanced green locations (13–24, up to 5 on board), informant dossiers, mixed A+B sides, and Telegrams.',
        difficulty: 'silver',
        packConfig: {
          selectedPackIds: [S.SECRETS_BASIC_PACK_ID, S.SECRETS_ADVANCED_PACK_ID, S.SECRETS_INFORMANTS_PACK_ID],
          selectedWordPackIds: [S.SECRETS_WORDS_PACK_ID],
          disabledRoomIds: [],
          disabledArtifactIds: [],
          guaranteedPackIds: [S.SECRETS_ADVANCED_PACK_ID],
        },
        modifiers: {
          enableWingCurses: false,
          mixedDifficulty: true,
          ghostIllusionEnabled: false,
          mediumInsightEnabled: false,
          blitzTimer: false,
          enableArtifactCategories: true,
          enableRoomProperties: true,
          enableRiskActions: false,
          enableCatchUp: true,
          enableTelegrams: true,
          mixCrossBoxArtifacts: false,
        },
      },
      {
        id: 'crossbox_mashup',
        titleRu: 'Кросс-микс: Особняк × Маяковский-404',
        titleEn: 'Cross-Box: Mansion × Mayakovsky-404',
        descRu: 'Локации, артефакты, зацепки и слова из обеих коробок на одном столе + телеграммы, категории и свойства комнат.',
        descEn: 'Locations, artifacts, hooks, and clues from both boxes on one board + Telegrams, card categories, and room traits.',
        difficulty: 'silver',
        packConfig: {
          selectedPackIds: ['pack-base', S.SECRETS_BASIC_PACK_ID, S.SECRETS_OBJECTS_PACK_ID],
          selectedWordPackIds: ['pack-base', S.SECRETS_WORDS_PACK_ID],
          disabledRoomIds: [],
          disabledArtifactIds: [],
          guaranteedPackIds: [S.SECRETS_BASIC_PACK_ID],
        },
        modifiers: {
          enableWingCurses: false,
          mixedDifficulty: true,
          ghostIllusionEnabled: false,
          mediumInsightEnabled: true,
          blitzTimer: false,
          enableArtifactCategories: true,
          enableRoomProperties: true,
          enableRiskActions: true,
          enableCatchUp: true,
          enableTelegrams: true,
          mixCrossBoxArtifacts: true,
        },
      },
    ];
    MODULAR_SCENARIOS.forEach((sc) => {
      if (!D.GAME_SCENARIOS.some((x) => x.id === sc.id)) {
        D.GAME_SCENARIOS.push(sc);
      }
    });
  }

  // Extend RULE_PRESETS with cross-box presets (Telegram Cards + Cross-Box Mix)
  if (Array.isArray(D.RULE_PRESETS)) {
    D.RULE_PRESETS.forEach((p) => {
      if (p.modifiers) {
        if (typeof p.modifiers.enableTelegrams !== 'boolean') {
          p.modifiers.enableTelegrams = p.id === 'hardcore_clash';
        }
        if (typeof p.modifiers.mixCrossBoxArtifacts !== 'boolean') {
          p.modifiers.mixCrossBoxArtifacts = false;
        }
      }
    });

    if (!D.RULE_PRESETS.some((p) => p.id === 'telegram_cards')) {
      D.RULE_PRESETS.push({
        id: 'telegram_cards',
        titleRu: 'Карты телеграмм',
        titleEn: 'Telegram Cards',
        badgeRu: 'Кросс-коробка',
        badgeEn: 'Cross-Box',
        descRu: 'Добавляет 15 карт телеграмм из «Секретов Советов» в любую коробку + категории артефактов.',
        descEn: 'Brings the 15 Telegram cards from Secrets of the Soviets into any box + artifact categories.',
        modifiers: {
          mixedDifficulty: false,
          enableWingCurses: false,
          ghostIllusionEnabled: false,
          mediumInsightEnabled: false,
          blitzTimer: false,
          enableArtifactCategories: true,
          enableRoomProperties: false,
          enableRiskActions: false,
          enableCatchUp: false,
          enableTelegrams: true,
          mixCrossBoxArtifacts: false,
        },
      });
    }

    if (!D.RULE_PRESETS.some((p) => p.id === 'crossbox_mix')) {
      D.RULE_PRESETS.push({
        id: 'crossbox_mix',
        titleRu: 'Кросс-микс коробок',
        titleEn: 'Cross-Box Mashup',
        badgeRu: 'Особняк × Советы',
        badgeEn: 'Mansion × Soviets',
        descRu: 'Телеграммы, смешанные артефакты/зацепки (5+5), категории, свойства комнат и Второе дыхание.',
        descEn: 'Telegrams, 5+5 mixed artifacts & hooks, card categories, room traits, and Second Wind.',
        modifiers: {
          mixedDifficulty: true,
          enableWingCurses: false,
          ghostIllusionEnabled: false,
          mediumInsightEnabled: true,
          blitzTimer: false,
          enableArtifactCategories: true,
          enableRoomProperties: true,
          enableRiskActions: true,
          enableCatchUp: true,
          enableTelegrams: true,
          mixCrossBoxArtifacts: true,
        },
      });
    }
  }

  // Merge Secrets i18n strings
  if (D.translations) {
    Object.assign(D.translations.ru, S.EXTRA_TRANSLATIONS.ru);
    Object.assign(D.translations.en, S.EXTRA_TRANSLATIONS.en);
  }
})();
