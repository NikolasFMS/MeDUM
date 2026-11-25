// Auto-synced complete dataset for Medium: Abandoned Mansion (Vanilla HTML5/JS)
window.MEDIUM_DATA = {
  "EXPANSIONS": [
    {
      "id": "mansion",
      "title": "Покинутый особняк",
      "subtitle": "Часть I",
      "description": "Мрачные коридоры заброшенного поместья скрывают древнюю тайну и зловещее существо.",
      "available": true
    },
    {
      "id": "secrets",
      "title": "Секреты Советов",
      "subtitle": "Часть II",
      "description": "Раскройте тайны культистов и империалистических шпионов в секретных бункерах.",
      "available": false
    },
    {
      "id": "ancients",
      "title": "Пробуждение Древних",
      "subtitle": "Часть III",
      "description": "Древние проклятия пробуждаются в забытых святилищах. Готовы ли вы встретить неизведанное?",
      "available": false
    },
    {
      "id": "space",
      "title": "Крик в космосе",
      "subtitle": "Часть I. Пустота",
      "description": "Выживайте на дрейфующем космическом корабле в глубоком вакууме.",
      "available": false
    }
  ],
  "THEMATIC_PACKS": [
    {
      "id": "pack-base",
      "packType": "full",
      "titleRu": "Базовый особняк (12 комнат)",
      "titleEn": "Base Mansion (12 Rooms)",
      "descRu": "Классические помещения Покинутого особняка и 18 базовых артефактов.",
      "descEn": "Classic rooms of the Abandoned Mansion and 18 base artifacts."
    },
    {
      "id": "pack-occult",
      "packType": "full",
      "titleRu": "Оккультное крыло",
      "titleEn": "Occult Wing",
      "descRu": "Ритуальный зал, Спиритическая, Башня астролога, Таро, доска Уиджи и мистические слова.",
      "descEn": "Ritual Hall, Seance Room, Astrologer Tower, Tarot, Ouija board and mystical words."
    },
    {
      "id": "pack-forgotten",
      "packType": "full",
      "titleRu": "Забытое крыло",
      "titleEn": "Forgotten Wing",
      "descRu": "Винный погреб, Котельная, Прачечная, Музыкальная шкатулка и жуткие шорохи.",
      "descEn": "Wine cellar, Boiler room, Laundry, Music box and eerie rustling sounds."
    },
    {
      "id": "pack-medical",
      "packType": "full",
      "titleRu": "Медицинское крыло",
      "titleEn": "Medical Wing",
      "descRu": "Морг, Операционная, Аптека, Скальпель, Шприц и больничные тайны.",
      "descEn": "Morgue, Operating room, Pharmacy, Scalpel, Syringe and medical secrets."
    },
    {
      "id": "pack-grounds",
      "packType": "full",
      "titleRu": "Территория поместья",
      "titleEn": "Manor Grounds",
      "descRu": "Склеп, Маяк, Беседка, Лодочный сарай, Лопата могильщика и туманные тропы.",
      "descEn": "Crypt, Lighthouse, Gazebo, Boathouse, Gravedigger shovel and foggy paths."
    },
    {
      "id": "pack-words-sensations",
      "packType": "words",
      "titleRu": "Шёпот ощущений",
      "titleEn": "Whispers & Sensations",
      "descRu": "40 абстрактных слов-ощущений, эмоций и звуков для тонких и неожиданных ассоциаций.",
      "descEn": "40 abstract sensations, emotions and sounds for subtle, creative associations."
    },
    {
      "id": "pack-words-era",
      "packType": "words",
      "titleRu": "Эпоха и винтажный быт",
      "titleEn": "Victorian Relics & Era",
      "descRu": "40 атмосферных слов старинного уклада: сургуч, корсет, монокль, бархат и манускрипт.",
      "descEn": "40 atmospheric period words: sealing wax, corset, monocle, velvet and manuscript."
    }
  ],
  "WING_CURSE_PACK_IDS": [
    "pack-occult",
    "pack-forgotten",
    "pack-medical",
    "pack-grounds"
  ],
  "DEFAULT_PACK_CONFIG": {
    "selectedPackIds": [
      "pack-base"
    ],
    "selectedWordPackIds": [
      "pack-base"
    ],
    "disabledRoomIds": [],
    "disabledArtifactIds": [],
    "guaranteedPackIds": []
  },
  "DEFAULT_MODIFIERS": {
    "enableWingCurses": false,
    "mixedDifficulty": false,
    "ghostIllusionEnabled": false,
    "mediumInsightEnabled": false,
    "blitzTimer": false,
    "enableArtifactCategories": false,
    "enableRoomProperties": false,
    "enableRiskActions": false,
    "enableCatchUp": false
  },
  "RULE_PRESETS": [
    {
      "id": "classic",
      "titleRu": "Классика",
      "titleEn": "Classic",
      "badgeRu": "База",
      "badgeEn": "Pure",
      "descRu": "Чистые правила без модификаторов — идеально для первого знакомства.",
      "descEn": "Pure core rules with no modifiers — ideal for your first game.",
      "modifiers": {
        "enableWingCurses": false,
        "mixedDifficulty": false,
        "ghostIllusionEnabled": false,
        "mediumInsightEnabled": false,
        "blitzTimer": false,
        "enableArtifactCategories": false,
        "enableRoomProperties": false,
        "enableRiskActions": false,
        "enableCatchUp": false
      }
    },
    {
      "id": "living_mansion",
      "titleRu": "Живой особняк",
      "titleEn": "Living Mansion",
      "badgeRu": "Баланс",
      "badgeEn": "Balanced",
      "descRu": "Категории артефактов, особенности комнат и «Второе дыхание» для глубокой атмосферной игры.",
      "descEn": "Artifact categories, room properties, and Second Wind for rich atmospheric play.",
      "modifiers": {
        "enableWingCurses": false,
        "mixedDifficulty": false,
        "ghostIllusionEnabled": false,
        "mediumInsightEnabled": false,
        "blitzTimer": false,
        "enableArtifactCategories": true,
        "enableRoomProperties": true,
        "enableRiskActions": false,
        "enableCatchUp": true
      }
    },
    {
      "id": "tactics_risk",
      "titleRu": "Тактика и риск",
      "titleEn": "Tactics & Risk",
      "badgeRu": "Контроль",
      "badgeEn": "Tactical",
      "descRu": "Озарение, Иллюзия, обмен карт на риск и «Второе дыхание» — максимум управления рукой.",
      "descEn": "Insight, Illusion, risk exchanges, and Second Wind — maximum hand control.",
      "modifiers": {
        "enableWingCurses": false,
        "mixedDifficulty": false,
        "ghostIllusionEnabled": true,
        "mediumInsightEnabled": true,
        "blitzTimer": false,
        "enableArtifactCategories": false,
        "enableRoomProperties": false,
        "enableRiskActions": true,
        "enableCatchUp": true
      }
    },
    {
      "id": "hardcore_clash",
      "titleRu": "Жёсткое взаимодействие",
      "titleEn": "Hardcore Clash",
      "badgeRu": "Хардкор",
      "badgeEn": "Hardcore",
      "descRu": "Все механики сразу: проклятия крыльев, артефакты, свойства комнат, обмен на риск, Иллюзия и Блиц!",
      "descEn": "Everything at once: wing curses, artifact powers, room traits, risk swaps, Illusion & Blitz!",
      "modifiers": {
        "enableWingCurses": true,
        "mixedDifficulty": true,
        "ghostIllusionEnabled": true,
        "mediumInsightEnabled": true,
        "blitzTimer": true,
        "enableArtifactCategories": true,
        "enableRoomProperties": true,
        "enableRiskActions": true,
        "enableCatchUp": true
      }
    },
    {
      "id": "speed_blitz",
      "titleRu": "Скоростной блиц",
      "titleEn": "Speed Blitz",
      "badgeRu": "Быстро",
      "badgeEn": "Fast",
      "descRu": "Смешанные стороны, Блиц-таймер, обмен на риск и «Второе дыхание» — динамичные раунды.",
      "descEn": "Mixed sides, Blitz timer, risk exchanges, and Second Wind — rapid tense rounds.",
      "modifiers": {
        "enableWingCurses": false,
        "mixedDifficulty": true,
        "ghostIllusionEnabled": false,
        "mediumInsightEnabled": false,
        "blitzTimer": true,
        "enableArtifactCategories": false,
        "enableRoomProperties": false,
        "enableRiskActions": true,
        "enableCatchUp": true
      }
    }
  ],
  "GAME_SCENARIOS": [
    {
      "id": "classic",
      "titleRu": "Классический сеанс",
      "titleEn": "Classic Seance",
      "descRu": "Базовый особняк и классические слова по оригинальным правилам без усложнений.",
      "descEn": "Base mansion and original clue deck following standard rules.",
      "difficulty": "silver",
      "packConfig": {
        "selectedPackIds": [
          "pack-base"
        ],
        "selectedWordPackIds": [
          "pack-base"
        ],
        "disabledRoomIds": [],
        "disabledArtifactIds": [],
        "guaranteedPackIds": []
      },
      "modifiers": {
        "enableArtifactCategories": false,
        "enableRoomProperties": false,
        "enableRiskActions": false,
        "enableCatchUp": false,
        "enableWingCurses": false,
        "mixedDifficulty": false,
        "ghostIllusionEnabled": false,
        "mediumInsightEnabled": false,
        "blitzTimer": false
      }
    },
    {
      "id": "clinic",
      "titleRu": "Лечебница доктора Блэка",
      "titleEn": "Dr. Black’s Clinic",
      "descRu": "Медицинское и Забытое крылья на столе, проклятия крыльев (Лихорадка и Полтергейст) и ощущения.",
      "descEn": "Medical & Forgotten wings guaranteed on table, Wing Curses active, plus Sensations deck.",
      "difficulty": "silver",
      "packConfig": {
        "selectedPackIds": [
          "pack-base",
          "pack-medical",
          "pack-forgotten"
        ],
        "selectedWordPackIds": [
          "pack-base",
          "pack-medical",
          "pack-forgotten",
          "pack-words-sensations"
        ],
        "disabledRoomIds": [],
        "disabledArtifactIds": [],
        "guaranteedPackIds": [
          "pack-medical",
          "pack-forgotten"
        ]
      },
      "modifiers": {
        "enableArtifactCategories": false,
        "enableRoomProperties": false,
        "enableRiskActions": false,
        "enableCatchUp": false,
        "enableWingCurses": true,
        "mixedDifficulty": true,
        "ghostIllusionEnabled": false,
        "mediumInsightEnabled": true,
        "blitzTimer": false
      }
    },
    {
      "id": "spiritism",
      "titleRu": "Ночь спиритизма",
      "titleEn": "Night of Spiritism",
      "descRu": "Оккультное крыло и винтажная лексика. Транс Медиума, Озарение и Морок Призрака.",
      "descEn": "Occult Wing & Victorian Relics vocabulary with Trance, Insight, and Ghost Illusion.",
      "difficulty": "gold",
      "packConfig": {
        "selectedPackIds": [
          "pack-base",
          "pack-occult"
        ],
        "selectedWordPackIds": [
          "pack-base",
          "pack-occult",
          "pack-words-era",
          "pack-words-sensations"
        ],
        "disabledRoomIds": [],
        "disabledArtifactIds": [],
        "guaranteedPackIds": [
          "pack-occult"
        ]
      },
      "modifiers": {
        "enableArtifactCategories": false,
        "enableRoomProperties": false,
        "enableRiskActions": false,
        "enableCatchUp": false,
        "enableWingCurses": true,
        "mixedDifficulty": false,
        "ghostIllusionEnabled": true,
        "mediumInsightEnabled": true,
        "blitzTimer": false
      }
    },
    {
      "id": "nightmare",
      "titleRu": "Кошмар особняка (Хардкор)",
      "titleEn": "Mansion Nightmare (Hardcore)",
      "descRu": "Все крылья, золотая сторона, проклятия крыльев, Морок Призрака и Блиц-таймер.",
      "descEn": "All wings, gold rooms, Wing Curses, Ghost Illusion, and Blitz countdown timer.",
      "difficulty": "gold",
      "packConfig": {
        "selectedPackIds": [
          "pack-base",
          "pack-occult",
          "pack-forgotten",
          "pack-medical",
          "pack-grounds"
        ],
        "selectedWordPackIds": [
          "pack-base",
          "pack-occult",
          "pack-forgotten",
          "pack-medical",
          "pack-grounds",
          "pack-words-sensations",
          "pack-words-era"
        ],
        "disabledRoomIds": [],
        "disabledArtifactIds": [],
        "guaranteedPackIds": [
          "pack-occult",
          "pack-medical",
          "pack-grounds"
        ]
      },
      "modifiers": {
        "enableArtifactCategories": false,
        "enableRoomProperties": false,
        "enableRiskActions": false,
        "enableCatchUp": false,
        "enableWingCurses": true,
        "mixedDifficulty": false,
        "ghostIllusionEnabled": true,
        "mediumInsightEnabled": false,
        "blitzTimer": true
      }
    }
  ],
  "ALL_ROOMS": [
    {
      "id": "room-1",
      "packId": "pack-base",
      "nameSilver": "ПОДВАЛ",
      "nameGold": "ТЕМНИЦА",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-2",
      "packId": "pack-base",
      "nameSilver": "СПАЛЬНЯ",
      "nameGold": "КЛАССНАЯ",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-3",
      "packId": "pack-base",
      "nameSilver": "КОРИДОР",
      "nameGold": "САД",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-4",
      "packId": "pack-base",
      "nameSilver": "ОРАНЖЕРЕЯ",
      "nameGold": "АЛЛЕЯ",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-5",
      "packId": "pack-base",
      "nameSilver": "ГОСТИНАЯ",
      "nameGold": "ПАРАДНАЯ",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-6",
      "packId": "pack-base",
      "nameSilver": "ЗАДНИЙ ДВОР",
      "nameGold": "ТАЙНАЯ КОМНАТА",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-7",
      "packId": "pack-base",
      "nameSilver": "МАСТЕРСКАЯ",
      "nameGold": "ЛАБОРАТОРИЯ",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-8",
      "packId": "pack-base",
      "nameSilver": "ЧАСОВНЯ",
      "nameGold": "БИБЛИОТЕКА",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-9",
      "packId": "pack-base",
      "nameSilver": "ЧЕРДАК",
      "nameGold": "КАБИНЕТ",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-10",
      "packId": "pack-base",
      "nameSilver": "БАССЕЙН",
      "nameGold": "ВАННАЯ",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-11",
      "packId": "pack-base",
      "nameSilver": "СТОЛОВАЯ",
      "nameGold": "КУХНЯ",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-12",
      "packId": "pack-base",
      "nameSilver": "КЕЛЬЯ",
      "nameGold": "ДЕТСКАЯ",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-occ-1",
      "packId": "pack-occult",
      "nameSilver": "РИТУАЛЬНЫЙ ЗАЛ",
      "nameGold": "КУНСТКАМЕРА",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-occ-2",
      "packId": "pack-occult",
      "nameSilver": "СПИРИТИЧЕСКАЯ",
      "nameGold": "АРХИВ",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-occ-3",
      "packId": "pack-occult",
      "nameSilver": "БАШНЯ АСТРОЛОГА",
      "nameGold": "КОЛОКОЛЬНЯ",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-occ-4",
      "packId": "pack-occult",
      "nameSilver": "ТАЙНОЕ СВЯТИЛИЩЕ",
      "nameGold": "КАТАКОМБЫ",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-for-1",
      "packId": "pack-forgotten",
      "nameSilver": "ВИННЫЙ ПОГРЕБ",
      "nameGold": "ОРУЖЕЙНАЯ",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-for-2",
      "packId": "pack-forgotten",
      "nameSilver": "КОТЕЛЬНАЯ",
      "nameGold": "ШАХТА ЛИФТА",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-for-3",
      "packId": "pack-forgotten",
      "nameSilver": "ПРАЧЕЧНАЯ",
      "nameGold": "ШВЕЙНАЯ",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-for-4",
      "packId": "pack-forgotten",
      "nameSilver": "КОМНАТА ПРИСЛУГИ",
      "nameGold": "ЧЕРНЫЙ ХОД",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-med-1",
      "packId": "pack-medical",
      "nameSilver": "МОРГ",
      "nameGold": "РЕГИСТРАТУРА",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-med-2",
      "packId": "pack-medical",
      "nameSilver": "ОПЕРАЦИОННАЯ",
      "nameGold": "РЕНТГЕН-КАБИНЕТ",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-med-3",
      "packId": "pack-medical",
      "nameSilver": "АПТЕКА",
      "nameGold": "АЛХИМИЧЕСКАЯ",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-med-4",
      "packId": "pack-medical",
      "nameSilver": "ИЗОЛЯТОР",
      "nameGold": "КАБИНЕТ ГЛАВВРАЧА",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-gr-1",
      "packId": "pack-grounds",
      "nameSilver": "СКЛЕП",
      "nameGold": "ЛАБИРИНТ",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-gr-2",
      "packId": "pack-grounds",
      "nameSilver": "МАЯК",
      "nameGold": "МЕЛЬНИЦА",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-gr-3",
      "packId": "pack-grounds",
      "nameSilver": "БЕСЕДКА",
      "nameGold": "СТАРЫЙ КОЛОДЕЦ",
      "status": "active",
      "artifactId": ""
    },
    {
      "id": "room-gr-4",
      "packId": "pack-grounds",
      "nameSilver": "ЛОДОЧНЫЙ САРАЙ",
      "nameGold": "КОНЮШНЯ",
      "status": "active",
      "artifactId": ""
    }
  ],
  "ALL_ARTIFACTS": [
    {
      "id": "art-1",
      "packId": "pack-base",
      "name": "Камин",
      "symbol": "КАМИН"
    },
    {
      "id": "art-2",
      "packId": "pack-base",
      "name": "Бензопила",
      "symbol": "БЕНЗОПИЛА"
    },
    {
      "id": "art-3",
      "packId": "pack-base",
      "name": "Кресло-качалка",
      "symbol": "КРЕСЛО-КАЧАЛКА"
    },
    {
      "id": "art-4",
      "packId": "pack-base",
      "name": "Зеркало",
      "symbol": "ЗЕРКАЛО"
    },
    {
      "id": "art-5",
      "packId": "pack-base",
      "name": "Фортепиано",
      "symbol": "ФОРТЕПИАНО"
    },
    {
      "id": "art-6",
      "packId": "pack-base",
      "name": "Игрушки",
      "symbol": "ИГРУШКИ"
    },
    {
      "id": "art-7",
      "packId": "pack-base",
      "name": "Полароид",
      "symbol": "ПОЛАРОИД"
    },
    {
      "id": "art-8",
      "packId": "pack-base",
      "name": "Гобелен",
      "symbol": "ГОБЕЛЕН"
    },
    {
      "id": "art-9",
      "packId": "pack-base",
      "name": "Доспехи",
      "symbol": "ДОСПЕХИ"
    },
    {
      "id": "art-10",
      "packId": "pack-base",
      "name": "Сундук",
      "symbol": "СУНДУК"
    },
    {
      "id": "art-11",
      "packId": "pack-base",
      "name": "Часы",
      "symbol": "ЧАСЫ"
    },
    {
      "id": "art-12",
      "packId": "pack-base",
      "name": "Патефон",
      "symbol": "ПАТЕФОН"
    },
    {
      "id": "art-13",
      "packId": "pack-base",
      "name": "Омела",
      "symbol": "ОМЕЛА"
    },
    {
      "id": "art-14",
      "packId": "pack-base",
      "name": "Фолиант",
      "symbol": "ФОЛИАНТ"
    },
    {
      "id": "art-15",
      "packId": "pack-base",
      "name": "Скелет",
      "symbol": "СКЕЛЕТ"
    },
    {
      "id": "art-16",
      "packId": "pack-base",
      "name": "Канделябр",
      "symbol": "КАНДЕЛЯБР"
    },
    {
      "id": "art-17",
      "packId": "pack-base",
      "name": "Тыква",
      "symbol": "ТЫКВА"
    },
    {
      "id": "art-18",
      "packId": "pack-base",
      "name": "Ружьё",
      "symbol": "РУЖЬЁ"
    },
    {
      "id": "art-occ-1",
      "packId": "pack-occult",
      "name": "Доска Уиджи",
      "symbol": "ДОСКА УИДЖИ"
    },
    {
      "id": "art-occ-2",
      "packId": "pack-occult",
      "name": "Колода Таро",
      "symbol": "КОЛОДА ТАРО"
    },
    {
      "id": "art-occ-3",
      "packId": "pack-occult",
      "name": "Хрустальный шар",
      "symbol": "ХРУСТАЛЬНЫЙ ШАР"
    },
    {
      "id": "art-occ-4",
      "packId": "pack-occult",
      "name": "Ритуальный кинжал",
      "symbol": "РИТУАЛЬНЫЙ КИНЖАЛ"
    },
    {
      "id": "art-occ-5",
      "packId": "pack-occult",
      "name": "Кукла вуду",
      "symbol": "КУКЛА ВУДУ"
    },
    {
      "id": "art-occ-6",
      "packId": "pack-occult",
      "name": "Черный гримуар",
      "symbol": "ЧЕРНЫЙ ГРИМУАР"
    },
    {
      "id": "art-for-1",
      "packId": "pack-forgotten",
      "name": "Музыкальная шкатулка",
      "symbol": "МУЗЫКАЛЬНАЯ ШКАТУЛКА"
    },
    {
      "id": "art-for-2",
      "packId": "pack-forgotten",
      "name": "Связка ржавых ключей",
      "symbol": "СВЯЗКА КЛЮЧЕЙ"
    },
    {
      "id": "art-for-3",
      "packId": "pack-forgotten",
      "name": "Керосиновая лампа",
      "symbol": "КЕРОСИНОВАЯ ЛАМПА"
    },
    {
      "id": "art-for-4",
      "packId": "pack-forgotten",
      "name": "Дубовая бочка",
      "symbol": "ДУБОВАЯ БОЧКА"
    },
    {
      "id": "art-for-5",
      "packId": "pack-forgotten",
      "name": "Старый манекен",
      "symbol": "СТАРЫЙ МАНЕКЕН"
    },
    {
      "id": "art-for-6",
      "packId": "pack-forgotten",
      "name": "Треснувшая кукла",
      "symbol": "ТРЕСНУВШАЯ КУКЛА"
    },
    {
      "id": "art-med-1",
      "packId": "pack-medical",
      "name": "Скальпель",
      "symbol": "СКАЛЬПЕЛЬ"
    },
    {
      "id": "art-med-2",
      "packId": "pack-medical",
      "name": "Шприц с сывороткой",
      "symbol": "ШПРИЦ"
    },
    {
      "id": "art-med-3",
      "packId": "pack-medical",
      "name": "Банка с образцом",
      "symbol": "БАНКА С ОБРАЗЦОМ"
    },
    {
      "id": "art-med-4",
      "packId": "pack-medical",
      "name": "Инвалидное кресло",
      "symbol": "ИНВАЛИДНОЕ КРЕСЛО"
    },
    {
      "id": "art-med-5",
      "packId": "pack-medical",
      "name": "Стетоскоп",
      "symbol": "СТЕТОСКОП"
    },
    {
      "id": "art-med-6",
      "packId": "pack-medical",
      "name": "Карта пациента",
      "symbol": "КАРТА ПАЦИЕНТА"
    },
    {
      "id": "art-gr-1",
      "packId": "pack-grounds",
      "name": "Лопата могильщика",
      "symbol": "ЛОПАТА"
    },
    {
      "id": "art-gr-2",
      "packId": "pack-grounds",
      "name": "Морской компас",
      "symbol": "МОРСКОЙ КОМПАС"
    },
    {
      "id": "art-gr-3",
      "packId": "pack-grounds",
      "name": "Клетка ворона",
      "symbol": "КЛЕТКА ВОРОНА"
    },
    {
      "id": "art-gr-4",
      "packId": "pack-grounds",
      "name": "Кованый фонарь",
      "symbol": "КОВАНЫЙ ФОНАРЬ"
    },
    {
      "id": "art-gr-5",
      "packId": "pack-grounds",
      "name": "Солнечные часы",
      "symbol": "СОЛНЕЧНЫЕ ЧАСЫ"
    },
    {
      "id": "art-gr-6",
      "packId": "pack-grounds",
      "name": "Старое весло",
      "symbol": "СТАРОЕ ВЕСЛО"
    }
  ],
  "ALL_HIDEOUTS": [
    {
      "id": "hideout-room-1",
      "roomId": "room-1"
    },
    {
      "id": "hideout-room-2",
      "roomId": "room-2"
    },
    {
      "id": "hideout-room-3",
      "roomId": "room-3"
    },
    {
      "id": "hideout-room-4",
      "roomId": "room-4"
    },
    {
      "id": "hideout-room-5",
      "roomId": "room-5"
    },
    {
      "id": "hideout-room-6",
      "roomId": "room-6"
    },
    {
      "id": "hideout-room-7",
      "roomId": "room-7"
    },
    {
      "id": "hideout-room-8",
      "roomId": "room-8"
    },
    {
      "id": "hideout-room-9",
      "roomId": "room-9"
    },
    {
      "id": "hideout-room-10",
      "roomId": "room-10"
    },
    {
      "id": "hideout-room-11",
      "roomId": "room-11"
    },
    {
      "id": "hideout-room-12",
      "roomId": "room-12"
    },
    {
      "id": "hideout-room-occ-1",
      "roomId": "room-occ-1"
    },
    {
      "id": "hideout-room-occ-2",
      "roomId": "room-occ-2"
    },
    {
      "id": "hideout-room-occ-3",
      "roomId": "room-occ-3"
    },
    {
      "id": "hideout-room-occ-4",
      "roomId": "room-occ-4"
    },
    {
      "id": "hideout-room-for-1",
      "roomId": "room-for-1"
    },
    {
      "id": "hideout-room-for-2",
      "roomId": "room-for-2"
    },
    {
      "id": "hideout-room-for-3",
      "roomId": "room-for-3"
    },
    {
      "id": "hideout-room-for-4",
      "roomId": "room-for-4"
    },
    {
      "id": "hideout-room-med-1",
      "roomId": "room-med-1"
    },
    {
      "id": "hideout-room-med-2",
      "roomId": "room-med-2"
    },
    {
      "id": "hideout-room-med-3",
      "roomId": "room-med-3"
    },
    {
      "id": "hideout-room-med-4",
      "roomId": "room-med-4"
    },
    {
      "id": "hideout-room-gr-1",
      "roomId": "room-gr-1"
    },
    {
      "id": "hideout-room-gr-2",
      "roomId": "room-gr-2"
    },
    {
      "id": "hideout-room-gr-3",
      "roomId": "room-gr-3"
    },
    {
      "id": "hideout-room-gr-4",
      "roomId": "room-gr-4"
    }
  ],
  "ALL_CLUES": [
    {
      "id": "c-1",
      "packId": "pack-base",
      "word": "Книга"
    },
    {
      "id": "c-2",
      "packId": "pack-base",
      "word": "Встреча"
    },
    {
      "id": "c-3",
      "packId": "pack-base",
      "word": "Спички"
    },
    {
      "id": "c-4",
      "packId": "pack-base",
      "word": "Дым"
    },
    {
      "id": "c-5",
      "packId": "pack-base",
      "word": "Перемещение"
    },
    {
      "id": "c-6",
      "packId": "pack-base",
      "word": "Эмоции"
    },
    {
      "id": "c-7",
      "packId": "pack-base",
      "word": "Чертёж"
    },
    {
      "id": "c-8",
      "packId": "pack-base",
      "word": "Свежесть"
    },
    {
      "id": "c-9",
      "packId": "pack-base",
      "word": "Цилиндр"
    },
    {
      "id": "c-10",
      "packId": "pack-base",
      "word": "Звуки"
    },
    {
      "id": "c-11",
      "packId": "pack-base",
      "word": "Разговор"
    },
    {
      "id": "c-12",
      "packId": "pack-base",
      "word": "Шланг"
    },
    {
      "id": "c-13",
      "packId": "pack-base",
      "word": "Халат"
    },
    {
      "id": "c-14",
      "packId": "pack-base",
      "word": "Свет"
    },
    {
      "id": "c-15",
      "packId": "pack-base",
      "word": "Бюст"
    },
    {
      "id": "c-16",
      "packId": "pack-base",
      "word": "Кости"
    },
    {
      "id": "c-17",
      "packId": "pack-base",
      "word": "Громкий"
    },
    {
      "id": "c-18",
      "packId": "pack-base",
      "word": "Монстр"
    },
    {
      "id": "c-19",
      "packId": "pack-base",
      "word": "Отопление"
    },
    {
      "id": "c-20",
      "packId": "pack-base",
      "word": "Усталость"
    },
    {
      "id": "c-21",
      "packId": "pack-base",
      "word": "Рождество"
    },
    {
      "id": "c-22",
      "packId": "pack-base",
      "word": "Вода"
    },
    {
      "id": "c-23",
      "packId": "pack-base",
      "word": "Фонарь"
    },
    {
      "id": "c-24",
      "packId": "pack-base",
      "word": "Серебро"
    },
    {
      "id": "c-25",
      "packId": "pack-base",
      "word": "Сырость"
    },
    {
      "id": "c-26",
      "packId": "pack-base",
      "word": "Крючок"
    },
    {
      "id": "c-27",
      "packId": "pack-base",
      "word": "Утка"
    },
    {
      "id": "c-28",
      "packId": "pack-base",
      "word": "Блеск"
    },
    {
      "id": "c-29",
      "packId": "pack-base",
      "word": "Щелчок"
    },
    {
      "id": "c-30",
      "packId": "pack-base",
      "word": "Тайна"
    },
    {
      "id": "c-31",
      "packId": "pack-base",
      "word": "Лестница"
    },
    {
      "id": "c-32",
      "packId": "pack-base",
      "word": "Знания"
    },
    {
      "id": "c-33",
      "packId": "pack-base",
      "word": "Отдых"
    },
    {
      "id": "c-34",
      "packId": "pack-base",
      "word": "Тишина"
    },
    {
      "id": "c-35",
      "packId": "pack-base",
      "word": "Предохранитель"
    },
    {
      "id": "c-36",
      "packId": "pack-base",
      "word": "Треск"
    },
    {
      "id": "c-37",
      "packId": "pack-base",
      "word": "Вечеринка"
    },
    {
      "id": "c-38",
      "packId": "pack-base",
      "word": "Утечка"
    },
    {
      "id": "c-39",
      "packId": "pack-base",
      "word": "Игла"
    },
    {
      "id": "c-40",
      "packId": "pack-base",
      "word": "Зелень"
    },
    {
      "id": "c-41",
      "packId": "pack-base",
      "word": "Перо"
    },
    {
      "id": "c-42",
      "packId": "pack-base",
      "word": "Чай"
    },
    {
      "id": "c-43",
      "packId": "pack-base",
      "word": "Ночь"
    },
    {
      "id": "c-44",
      "packId": "pack-base",
      "word": "Дневник"
    },
    {
      "id": "c-45",
      "packId": "pack-base",
      "word": "Тапочки"
    },
    {
      "id": "c-46",
      "packId": "pack-base",
      "word": "Дрова"
    },
    {
      "id": "c-47",
      "packId": "pack-base",
      "word": "Воспоминания"
    },
    {
      "id": "c-48",
      "packId": "pack-base",
      "word": "Течение"
    },
    {
      "id": "c-49",
      "packId": "pack-base",
      "word": "Тепло"
    },
    {
      "id": "c-50",
      "packId": "pack-base",
      "word": "Качели"
    },
    {
      "id": "c-51",
      "packId": "pack-base",
      "word": "Проход"
    },
    {
      "id": "c-52",
      "packId": "pack-base",
      "word": "Телескоп"
    },
    {
      "id": "c-53",
      "packId": "pack-base",
      "word": "Кофе"
    },
    {
      "id": "c-54",
      "packId": "pack-base",
      "word": "Ноты"
    },
    {
      "id": "c-55",
      "packId": "pack-base",
      "word": "Свеча"
    },
    {
      "id": "c-56",
      "packId": "pack-base",
      "word": "Цвет"
    },
    {
      "id": "c-57",
      "packId": "pack-base",
      "word": "Концентрация"
    },
    {
      "id": "c-58",
      "packId": "pack-base",
      "word": "Старость"
    },
    {
      "id": "c-59",
      "packId": "pack-base",
      "word": "Полотенце"
    },
    {
      "id": "c-60",
      "packId": "pack-base",
      "word": "Шкафчик"
    },
    {
      "id": "c-61",
      "packId": "pack-base",
      "word": "Дремота"
    },
    {
      "id": "c-62",
      "packId": "pack-base",
      "word": "Одежда"
    },
    {
      "id": "c-63",
      "packId": "pack-base",
      "word": "Безопасность"
    },
    {
      "id": "c-64",
      "packId": "pack-base",
      "word": "Лопатка"
    },
    {
      "id": "c-65",
      "packId": "pack-base",
      "word": "Лист"
    },
    {
      "id": "c-66",
      "packId": "pack-base",
      "word": "Смесь"
    },
    {
      "id": "c-67",
      "packId": "pack-base",
      "word": "Платье"
    },
    {
      "id": "c-68",
      "packId": "pack-base",
      "word": "Телефон"
    },
    {
      "id": "c-69",
      "packId": "pack-base",
      "word": "Грязь"
    },
    {
      "id": "c-70",
      "packId": "pack-base",
      "word": "Трубка"
    },
    {
      "id": "c-71",
      "packId": "pack-base",
      "word": "Ужин"
    },
    {
      "id": "c-72",
      "packId": "pack-base",
      "word": "Решётка"
    },
    {
      "id": "c-73",
      "packId": "pack-base",
      "word": "Узор"
    },
    {
      "id": "c-74",
      "packId": "pack-base",
      "word": "Клетка"
    },
    {
      "id": "c-75",
      "packId": "pack-base",
      "word": "Стеллаж"
    },
    {
      "id": "c-76",
      "packId": "pack-base",
      "word": "Беготня"
    },
    {
      "id": "c-77",
      "packId": "pack-base",
      "word": "Инструкция"
    },
    {
      "id": "c-78",
      "packId": "pack-base",
      "word": "Просветление"
    },
    {
      "id": "c-79",
      "packId": "pack-base",
      "word": "Сапоги"
    },
    {
      "id": "c-80",
      "packId": "pack-base",
      "word": "Рецепт"
    },
    {
      "id": "c-81",
      "packId": "pack-base",
      "word": "Припасы"
    },
    {
      "id": "c-82",
      "packId": "pack-base",
      "word": "Фарфор"
    },
    {
      "id": "c-83",
      "packId": "pack-base",
      "word": "Крышка"
    },
    {
      "id": "c-84",
      "packId": "pack-base",
      "word": "Сказки"
    },
    {
      "id": "c-85",
      "packId": "pack-base",
      "word": "Горшок"
    },
    {
      "id": "c-86",
      "packId": "pack-base",
      "word": "Карандаши"
    },
    {
      "id": "c-87",
      "packId": "pack-base",
      "word": "Плед"
    },
    {
      "id": "c-occ-1",
      "packId": "pack-occult",
      "word": "Ритуал"
    },
    {
      "id": "c-occ-2",
      "packId": "pack-occult",
      "word": "Предсказание"
    },
    {
      "id": "c-occ-3",
      "packId": "pack-occult",
      "word": "Астрал"
    },
    {
      "id": "c-occ-4",
      "packId": "pack-occult",
      "word": "Пентаграмма"
    },
    {
      "id": "c-occ-5",
      "packId": "pack-occult",
      "word": "Маятник"
    },
    {
      "id": "c-occ-6",
      "packId": "pack-occult",
      "word": "Заклинание"
    },
    {
      "id": "c-occ-7",
      "packId": "pack-occult",
      "word": "Проклятие"
    },
    {
      "id": "c-occ-8",
      "packId": "pack-occult",
      "word": "Руны"
    },
    {
      "id": "c-occ-9",
      "packId": "pack-occult",
      "word": "Затмение"
    },
    {
      "id": "c-occ-10",
      "packId": "pack-occult",
      "word": "Медитация"
    },
    {
      "id": "c-occ-11",
      "packId": "pack-occult",
      "word": "Транс"
    },
    {
      "id": "c-occ-12",
      "packId": "pack-occult",
      "word": "Судьба"
    },
    {
      "id": "c-occ-13",
      "packId": "pack-occult",
      "word": "Тень"
    },
    {
      "id": "c-occ-14",
      "packId": "pack-occult",
      "word": "Шёпот"
    },
    {
      "id": "c-occ-15",
      "packId": "pack-occult",
      "word": "Воск"
    },
    {
      "id": "c-occ-16",
      "packId": "pack-occult",
      "word": "Отражение"
    },
    {
      "id": "c-occ-17",
      "packId": "pack-occult",
      "word": "Колокол"
    },
    {
      "id": "c-occ-18",
      "packId": "pack-occult",
      "word": "Печать"
    },
    {
      "id": "c-occ-19",
      "packId": "pack-occult",
      "word": "Видение"
    },
    {
      "id": "c-occ-20",
      "packId": "pack-occult",
      "word": "Загадка"
    },
    {
      "id": "c-for-1",
      "packId": "pack-forgotten",
      "word": "Плесень"
    },
    {
      "id": "c-for-2",
      "packId": "pack-forgotten",
      "word": "Паутина"
    },
    {
      "id": "c-for-3",
      "packId": "pack-forgotten",
      "word": "Скрип"
    },
    {
      "id": "c-for-4",
      "packId": "pack-forgotten",
      "word": "Ржавчина"
    },
    {
      "id": "c-for-5",
      "packId": "pack-forgotten",
      "word": "Мелодия"
    },
    {
      "id": "c-for-6",
      "packId": "pack-forgotten",
      "word": "Пар"
    },
    {
      "id": "c-for-7",
      "packId": "pack-forgotten",
      "word": "Уголь"
    },
    {
      "id": "c-for-8",
      "packId": "pack-forgotten",
      "word": "Забытье"
    },
    {
      "id": "c-for-9",
      "packId": "pack-forgotten",
      "word": "Пыльца"
    },
    {
      "id": "c-for-10",
      "packId": "pack-forgotten",
      "word": "Сквозняк"
    },
    {
      "id": "c-for-11",
      "packId": "pack-forgotten",
      "word": "Шкатулка"
    },
    {
      "id": "c-for-12",
      "packId": "pack-forgotten",
      "word": "Электричество"
    },
    {
      "id": "c-for-13",
      "packId": "pack-forgotten",
      "word": "Пыль"
    },
    {
      "id": "c-for-14",
      "packId": "pack-forgotten",
      "word": "Ключ"
    },
    {
      "id": "c-for-15",
      "packId": "pack-forgotten",
      "word": "Металл"
    },
    {
      "id": "c-for-16",
      "packId": "pack-forgotten",
      "word": "Ткань"
    },
    {
      "id": "c-for-17",
      "packId": "pack-forgotten",
      "word": "Ступени"
    },
    {
      "id": "c-for-18",
      "packId": "pack-forgotten",
      "word": "Механизм"
    },
    {
      "id": "c-for-19",
      "packId": "pack-forgotten",
      "word": "Масло"
    },
    {
      "id": "c-for-20",
      "packId": "pack-forgotten",
      "word": "Замок"
    },
    {
      "id": "c-med-1",
      "packId": "pack-medical",
      "word": "Диагноз"
    },
    {
      "id": "c-med-2",
      "packId": "pack-medical",
      "word": "Пульс"
    },
    {
      "id": "c-med-3",
      "packId": "pack-medical",
      "word": "Бинт"
    },
    {
      "id": "c-med-4",
      "packId": "pack-medical",
      "word": "Лихорадка"
    },
    {
      "id": "c-med-5",
      "packId": "pack-medical",
      "word": "Шрам"
    },
    {
      "id": "c-med-6",
      "packId": "pack-medical",
      "word": "Наркоз"
    },
    {
      "id": "c-med-7",
      "packId": "pack-medical",
      "word": "Хлорка"
    },
    {
      "id": "c-med-8",
      "packId": "pack-medical",
      "word": "Безумие"
    },
    {
      "id": "c-med-9",
      "packId": "pack-medical",
      "word": "Прививка"
    },
    {
      "id": "c-med-10",
      "packId": "pack-medical",
      "word": "Рентген"
    },
    {
      "id": "c-med-11",
      "packId": "pack-medical",
      "word": "Микстура"
    },
    {
      "id": "c-med-12",
      "packId": "pack-medical",
      "word": "Пациент"
    },
    {
      "id": "c-med-13",
      "packId": "pack-medical",
      "word": "Стекло"
    },
    {
      "id": "c-med-14",
      "packId": "pack-medical",
      "word": "Спирт"
    },
    {
      "id": "c-med-15",
      "packId": "pack-medical",
      "word": "Холод"
    },
    {
      "id": "c-med-16",
      "packId": "pack-medical",
      "word": "Журнал"
    },
    {
      "id": "c-med-17",
      "packId": "pack-medical",
      "word": "Перчатки"
    },
    {
      "id": "c-med-18",
      "packId": "pack-medical",
      "word": "Лампа"
    },
    {
      "id": "c-med-19",
      "packId": "pack-medical",
      "word": "Яд"
    },
    {
      "id": "c-med-20",
      "packId": "pack-medical",
      "word": "Травы"
    },
    {
      "id": "c-gr-1",
      "packId": "pack-grounds",
      "word": "Надгробие"
    },
    {
      "id": "c-gr-2",
      "packId": "pack-grounds",
      "word": "Прилив"
    },
    {
      "id": "c-gr-3",
      "packId": "pack-grounds",
      "word": "Камень"
    },
    {
      "id": "c-gr-4",
      "packId": "pack-grounds",
      "word": "Болото"
    },
    {
      "id": "c-gr-5",
      "packId": "pack-grounds",
      "word": "Тростник"
    },
    {
      "id": "c-gr-6",
      "packId": "pack-grounds",
      "word": "Ограда"
    },
    {
      "id": "c-gr-7",
      "packId": "pack-grounds",
      "word": "Ворон"
    },
    {
      "id": "c-gr-8",
      "packId": "pack-grounds",
      "word": "Земля"
    },
    {
      "id": "c-gr-9",
      "packId": "pack-grounds",
      "word": "Тропа"
    },
    {
      "id": "c-gr-10",
      "packId": "pack-grounds",
      "word": "Мост"
    },
    {
      "id": "c-gr-11",
      "packId": "pack-grounds",
      "word": "Луч"
    },
    {
      "id": "c-gr-12",
      "packId": "pack-grounds",
      "word": "Буря"
    },
    {
      "id": "c-gr-13",
      "packId": "pack-grounds",
      "word": "Туман"
    },
    {
      "id": "c-gr-14",
      "packId": "pack-grounds",
      "word": "Ветер"
    },
    {
      "id": "c-gr-15",
      "packId": "pack-grounds",
      "word": "Колесо"
    },
    {
      "id": "c-gr-16",
      "packId": "pack-grounds",
      "word": "Подкова"
    },
    {
      "id": "c-gr-17",
      "packId": "pack-grounds",
      "word": "Мох"
    },
    {
      "id": "c-gr-18",
      "packId": "pack-grounds",
      "word": "Верёвка"
    },
    {
      "id": "c-gr-19",
      "packId": "pack-grounds",
      "word": "Плющ"
    },
    {
      "id": "c-gr-20",
      "packId": "pack-grounds",
      "word": "Волна"
    },
    {
      "id": "c-ws-1",
      "packId": "pack-words-sensations",
      "word": "Тревога"
    },
    {
      "id": "c-ws-2",
      "packId": "pack-words-sensations",
      "word": "Эхо"
    },
    {
      "id": "c-ws-3",
      "packId": "pack-words-sensations",
      "word": "Озноб"
    },
    {
      "id": "c-ws-4",
      "packId": "pack-words-sensations",
      "word": "Мерцание"
    },
    {
      "id": "c-ws-5",
      "packId": "pack-words-sensations",
      "word": "Тоска"
    },
    {
      "id": "c-ws-6",
      "packId": "pack-words-sensations",
      "word": "Удушье"
    },
    {
      "id": "c-ws-7",
      "packId": "pack-words-sensations",
      "word": "Вспышка"
    },
    {
      "id": "c-ws-8",
      "packId": "pack-words-sensations",
      "word": "Шок"
    },
    {
      "id": "c-ws-9",
      "packId": "pack-words-sensations",
      "word": "Предчувствие"
    },
    {
      "id": "c-ws-10",
      "packId": "pack-words-sensations",
      "word": "Дрожь"
    },
    {
      "id": "c-ws-11",
      "packId": "pack-words-sensations",
      "word": "Пустота"
    },
    {
      "id": "c-ws-12",
      "packId": "pack-words-sensations",
      "word": "Сумрак"
    },
    {
      "id": "c-ws-13",
      "packId": "pack-words-sensations",
      "word": "Напряжение"
    },
    {
      "id": "c-ws-14",
      "packId": "pack-words-sensations",
      "word": "Молчание"
    },
    {
      "id": "c-ws-15",
      "packId": "pack-words-sensations",
      "word": "Меланхолия"
    },
    {
      "id": "c-ws-16",
      "packId": "pack-words-sensations",
      "word": "Восторг"
    },
    {
      "id": "c-ws-17",
      "packId": "pack-words-sensations",
      "word": "Ужас"
    },
    {
      "id": "c-ws-18",
      "packId": "pack-words-sensations",
      "word": "Смущение"
    },
    {
      "id": "c-ws-19",
      "packId": "pack-words-sensations",
      "word": "Интрига"
    },
    {
      "id": "c-ws-20",
      "packId": "pack-words-sensations",
      "word": "Гармония"
    },
    {
      "id": "c-ws-21",
      "packId": "pack-words-sensations",
      "word": "Паника"
    },
    {
      "id": "c-ws-22",
      "packId": "pack-words-sensations",
      "word": "Спокойствие"
    },
    {
      "id": "c-ws-23",
      "packId": "pack-words-sensations",
      "word": "Головокружение"
    },
    {
      "id": "c-ws-24",
      "packId": "pack-words-sensations",
      "word": "Отчаяние"
    },
    {
      "id": "c-ws-25",
      "packId": "pack-words-sensations",
      "word": "Надежда"
    },
    {
      "id": "c-ws-26",
      "packId": "pack-words-sensations",
      "word": "Соблазн"
    },
    {
      "id": "c-ws-27",
      "packId": "pack-words-sensations",
      "word": "Гнев"
    },
    {
      "id": "c-ws-28",
      "packId": "pack-words-sensations",
      "word": "Блаженство"
    },
    {
      "id": "c-ws-29",
      "packId": "pack-words-sensations",
      "word": "Бред"
    },
    {
      "id": "c-ws-30",
      "packId": "pack-words-sensations",
      "word": "Озарение"
    },
    {
      "id": "c-ws-31",
      "packId": "pack-words-sensations",
      "word": "Предзнаменование"
    },
    {
      "id": "c-ws-32",
      "packId": "pack-words-sensations",
      "word": "Духота"
    },
    {
      "id": "c-ws-33",
      "packId": "pack-words-sensations",
      "word": "Прохлада"
    },
    {
      "id": "c-ws-34",
      "packId": "pack-words-sensations",
      "word": "Вибрация"
    },
    {
      "id": "c-ws-35",
      "packId": "pack-words-sensations",
      "word": "Гул"
    },
    {
      "id": "c-ws-36",
      "packId": "pack-words-sensations",
      "word": "Вздох"
    },
    {
      "id": "c-ws-37",
      "packId": "pack-words-sensations",
      "word": "Шорох"
    },
    {
      "id": "c-ws-38",
      "packId": "pack-words-sensations",
      "word": "Трепет"
    },
    {
      "id": "c-ws-39",
      "packId": "pack-words-sensations",
      "word": "Смятение"
    },
    {
      "id": "c-ws-40",
      "packId": "pack-words-sensations",
      "word": "Невесомость"
    },
    {
      "id": "c-we-1",
      "packId": "pack-words-era",
      "word": "Сургуч"
    },
    {
      "id": "c-we-2",
      "packId": "pack-words-era",
      "word": "Корсет"
    },
    {
      "id": "c-we-3",
      "packId": "pack-words-era",
      "word": "Монокль"
    },
    {
      "id": "c-we-4",
      "packId": "pack-words-era",
      "word": "Бархат"
    },
    {
      "id": "c-we-5",
      "packId": "pack-words-era",
      "word": "Пергамент"
    },
    {
      "id": "c-we-6",
      "packId": "pack-words-era",
      "word": "Порох"
    },
    {
      "id": "c-we-7",
      "packId": "pack-words-era",
      "word": "Хрусталь"
    },
    {
      "id": "c-we-8",
      "packId": "pack-words-era",
      "word": "Карета"
    },
    {
      "id": "c-we-9",
      "packId": "pack-words-era",
      "word": "Трость"
    },
    {
      "id": "c-we-10",
      "packId": "pack-words-era",
      "word": "Бронза"
    },
    {
      "id": "c-we-11",
      "packId": "pack-words-era",
      "word": "Плюш"
    },
    {
      "id": "c-we-12",
      "packId": "pack-words-era",
      "word": "Кружево"
    },
    {
      "id": "c-we-13",
      "packId": "pack-words-era",
      "word": "Письмо"
    },
    {
      "id": "c-we-14",
      "packId": "pack-words-era",
      "word": "Телеграмма"
    },
    {
      "id": "c-we-15",
      "packId": "pack-words-era",
      "word": "Чернила"
    },
    {
      "id": "c-we-16",
      "packId": "pack-words-era",
      "word": "Медальон"
    },
    {
      "id": "c-we-17",
      "packId": "pack-words-era",
      "word": "Гравюра"
    },
    {
      "id": "c-we-18",
      "packId": "pack-words-era",
      "word": "Вуаль"
    },
    {
      "id": "c-we-19",
      "packId": "pack-words-era",
      "word": "Пенсне"
    },
    {
      "id": "c-we-20",
      "packId": "pack-words-era",
      "word": "Шпилька"
    },
    {
      "id": "c-we-21",
      "packId": "pack-words-era",
      "word": "Фрак"
    },
    {
      "id": "c-we-22",
      "packId": "pack-words-era",
      "word": "Перстень"
    },
    {
      "id": "c-we-23",
      "packId": "pack-words-era",
      "word": "Маска"
    },
    {
      "id": "c-we-24",
      "packId": "pack-words-era",
      "word": "Сейф"
    },
    {
      "id": "c-we-25",
      "packId": "pack-words-era",
      "word": "Занавес"
    },
    {
      "id": "c-we-26",
      "packId": "pack-words-era",
      "word": "Свиток"
    },
    {
      "id": "c-we-27",
      "packId": "pack-words-era",
      "word": "Склянка"
    },
    {
      "id": "c-we-28",
      "packId": "pack-words-era",
      "word": "Эликсир"
    },
    {
      "id": "c-we-29",
      "packId": "pack-words-era",
      "word": "Короб"
    },
    {
      "id": "c-we-30",
      "packId": "pack-words-era",
      "word": "Подсвечник"
    },
    {
      "id": "c-we-31",
      "packId": "pack-words-era",
      "word": "Брошь"
    },
    {
      "id": "c-we-32",
      "packId": "pack-words-era",
      "word": "Багаж"
    },
    {
      "id": "c-we-33",
      "packId": "pack-words-era",
      "word": "Чемодан"
    },
    {
      "id": "c-we-34",
      "packId": "pack-words-era",
      "word": "Шляпа"
    },
    {
      "id": "c-we-35",
      "packId": "pack-words-era",
      "word": "Манускрипт"
    },
    {
      "id": "c-we-36",
      "packId": "pack-words-era",
      "word": "Флигель"
    },
    {
      "id": "c-we-37",
      "packId": "pack-words-era",
      "word": "Антиквариат"
    },
    {
      "id": "c-we-38",
      "packId": "pack-words-era",
      "word": "Фартук"
    },
    {
      "id": "c-we-39",
      "packId": "pack-words-era",
      "word": "Пуговица"
    },
    {
      "id": "c-we-40",
      "packId": "pack-words-era",
      "word": "Шпага"
    }
  ],
  "ARTIFACT_CATEGORIES": {
    "art-4": "occult",
    "art-13": "occult",
    "art-16": "occult",
    "art-occ-1": "occult",
    "art-occ-2": "occult",
    "art-occ-3": "occult",
    "art-occ-4": "occult",
    "art-occ-5": "occult",
    "art-occ-6": "occult",
    "art-5": "archive",
    "art-7": "archive",
    "art-8": "archive",
    "art-11": "archive",
    "art-12": "archive",
    "art-14": "archive",
    "art-for-1": "archive",
    "art-med-6": "archive",
    "art-gr-5": "archive",
    "art-1": "tool",
    "art-2": "tool",
    "art-9": "tool",
    "art-10": "tool",
    "art-18": "tool",
    "art-for-2": "tool",
    "art-for-3": "tool",
    "art-for-4": "tool",
    "art-med-1": "tool",
    "art-med-2": "tool",
    "art-gr-1": "tool",
    "art-gr-2": "tool",
    "art-gr-4": "tool",
    "art-gr-6": "tool",
    "art-3": "eerie",
    "art-6": "eerie",
    "art-15": "eerie",
    "art-17": "eerie",
    "art-for-5": "eerie",
    "art-for-6": "eerie",
    "art-med-3": "eerie",
    "art-med-4": "eerie",
    "art-med-5": "eerie",
    "art-gr-3": "eerie"
  },
  "ROOM_TRAITS": {
    "room-1": "pillar",
    "room-12": "pillar",
    "room-for-2": "pillar",
    "room-gr-2": "pillar",
    "room-2": "quiet",
    "room-4": "quiet",
    "room-8": "quiet",
    "room-occ-2": "quiet",
    "room-gr-3": "quiet",
    "room-3": "echo",
    "room-5": "echo",
    "room-10": "echo",
    "room-for-4": "echo",
    "room-gr-1": "echo",
    "room-7": "archive",
    "room-9": "archive",
    "room-11": "archive",
    "room-for-1": "archive",
    "room-med-1": "archive",
    "room-med-3": "archive"
  },
  "CLUE_TRANSLATIONS_EN": {
    "Книга": "Book",
    "Встреча": "Meeting",
    "Спички": "Matches",
    "Дым": "Smoke",
    "Перемещение": "Movement",
    "Эмоции": "Emotions",
    "Чертёж": "Blueprint",
    "Свежесть": "Freshness",
    "Цилиндр": "Cylinder",
    "Звуки": "Sounds",
    "Разговор": "Conversation",
    "Шланг": "Hose",
    "Халат": "Robe",
    "Свет": "Light",
    "Бюст": "Bust",
    "Кости": "Bones",
    "Громкий": "Loud",
    "Монстр": "Monster",
    "Отопление": "Heating",
    "Усталость": "Fatigue",
    "Рождество": "Christmas",
    "Вода": "Water",
    "Фонарь": "Lantern",
    "Серебро": "Silver",
    "Сырость": "Dampness",
    "Крючок": "Hook",
    "Утка": "Duck",
    "Блеск": "Shine",
    "Щелчок": "Click",
    "Тайна": "Secret",
    "Лестница": "Stairs",
    "Знания": "Knowledge",
    "Отдых": "Rest",
    "Тишина": "Silence",
    "Предохранитель": "Fuse",
    "Треск": "Crackle",
    "Вечеринка": "Party",
    "Утечка": "Leak",
    "Игла": "Needle",
    "Зелень": "Greenery",
    "Перо": "Feather",
    "Чай": "Tea",
    "Ночь": "Night",
    "Дневник": "Diary",
    "Тапочки": "Slippers",
    "Дрова": "Firewood",
    "Воспоминания": "Memories",
    "Течение": "Current",
    "Тепло": "Warmth",
    "Качели": "Swing",
    "Проход": "Passage",
    "Телескоп": "Telescope",
    "Кофе": "Coffee",
    "Ноты": "Sheet Music",
    "Свеча": "Candle",
    "Цвет": "Color",
    "Концентрация": "Focus",
    "Старость": "Old Age",
    "Полотенце": "Towel",
    "Шкафчик": "Locker",
    "Дремота": "Slumber",
    "Одежда": "Clothes",
    "Безопасность": "Safety",
    "Лопатка": "Trowel",
    "Лист": "Leaf",
    "Смесь": "Mixture",
    "Платье": "Dress",
    "Телефон": "Telephone",
    "Грязь": "Dirt",
    "Трубка": "Pipe",
    "Ужин": "Dinner",
    "Решётка": "Grate",
    "Узор": "Pattern",
    "Клетка": "Cage",
    "Стеллаж": "Shelf",
    "Беготня": "Running Around",
    "Инструкция": "Manual",
    "Просветление": "Enlightenment",
    "Сапоги": "Boots",
    "Рецепт": "Recipe",
    "Припасы": "Supplies",
    "Фарфор": "Porcelain",
    "Крышка": "Lid",
    "Сказки": "Fairy Tales",
    "Горшок": "Pot",
    "Карандаши": "Pencils",
    "Плед": "Blanket",
    "Ритуал": "Ritual",
    "Предсказание": "Prophecy",
    "Астрал": "Astral",
    "Пентаграмма": "Pentagram",
    "Маятник": "Pendulum",
    "Заклинание": "Spell",
    "Проклятие": "Curse",
    "Руны": "Runes",
    "Затмение": "Eclipse",
    "Медитация": "Meditation",
    "Транс": "Trance",
    "Судьба": "Destiny",
    "Тень": "Shadow",
    "Шёпот": "Whisper",
    "Воск": "Wax",
    "Отражение": "Reflection",
    "Колокол": "Bell",
    "Печать": "Seal",
    "Видение": "Vision",
    "Загадка": "Riddle",
    "Плесень": "Mold",
    "Паутина": "Cobweb",
    "Скрип": "Creak",
    "Ржавчина": "Rust",
    "Мелодия": "Melody",
    "Пар": "Steam",
    "Уголь": "Coal",
    "Забытье": "Oblivion",
    "Пыльца": "Pollen",
    "Сквозняк": "Draft",
    "Шкатулка": "Casket",
    "Электричество": "Electricity",
    "Пыль": "Dust",
    "Ключ": "Key",
    "Металл": "Metal",
    "Ткань": "Fabric",
    "Ступени": "Steps",
    "Механизм": "Mechanism",
    "Масло": "Oil",
    "Замок": "Lock",
    "Диагноз": "Diagnosis",
    "Пульс": "Pulse",
    "Бинт": "Bandage",
    "Лихорадка": "Fever",
    "Шрам": "Scar",
    "Наркоз": "Anesthesia",
    "Хлорка": "Bleach",
    "Безумие": "Madness",
    "Прививка": "Vaccine",
    "Рентген": "X-Ray",
    "Микстура": "Potion",
    "Пациент": "Patient",
    "Стекло": "Glass",
    "Спирт": "Alcohol",
    "Холод": "Cold",
    "Журнал": "Logbook",
    "Перчатки": "Gloves",
    "Лампа": "Lamp",
    "Яд": "Poison",
    "Травы": "Herbs",
    "Надгробие": "Tombstone",
    "Прилив": "Tide",
    "Камень": "Stone",
    "Болото": "Swamp",
    "Тростник": "Reeds",
    "Ограда": "Fence",
    "Ворон": "Raven",
    "Земля": "Earth",
    "Тропа": "Trail",
    "Мост": "Bridge",
    "Луч": "Ray",
    "Буря": "Storm",
    "Туман": "Fog",
    "Ветер": "Wind",
    "Колесо": "Wheel",
    "Подкова": "Horseshoe",
    "Мох": "Moss",
    "Верёвка": "Rope",
    "Плющ": "Ivy",
    "Волна": "Wave",
    "Тревога": "Anxiety",
    "Эхо": "Echo",
    "Озноб": "Chill",
    "Мерцание": "Flicker",
    "Тоска": "Yearning",
    "Удушье": "Suffocation",
    "Вспышка": "Flash",
    "Шок": "Shock",
    "Предчувствие": "Premonition",
    "Дрожь": "Shiver",
    "Пустота": "Emptiness",
    "Сумрак": "Twilight",
    "Напряжение": "Tension",
    "Молчание": "Hush",
    "Меланхолия": "Melancholy",
    "Восторг": "Rapture",
    "Ужас": "Horror",
    "Смущение": "Confusion",
    "Интрига": "Intrigue",
    "Гармония": "Harmony",
    "Паника": "Panic",
    "Спокойствие": "Calm",
    "Головокружение": "Vertigo",
    "Отчаяние": "Despair",
    "Надежда": "Hope",
    "Соблазн": "Temptation",
    "Гнев": "Wrath",
    "Блаженство": "Bliss",
    "Бред": "Delirium",
    "Озарение": "Epiphany",
    "Предзнаменование": "Omen",
    "Духота": "Stifling Heat",
    "Прохлада": "Coolness",
    "Вибрация": "Vibration",
    "Гул": "Drone",
    "Вздох": "Sigh",
    "Шорох": "Rustle",
    "Трепет": "Tremor",
    "Смятение": "Turmoil",
    "Невесомость": "Weightlessness",
    "Сургуч": "Sealing Wax",
    "Корсет": "Corset",
    "Монокль": "Monocle",
    "Бархат": "Velvet",
    "Пергамент": "Parchment",
    "Порох": "Gunpowder",
    "Хрусталь": "Crystal",
    "Карета": "Carriage",
    "Трость": "Cane",
    "Бронза": "Bronze",
    "Плюш": "Plush",
    "Кружево": "Lace",
    "Письмо": "Letter",
    "Телеграмма": "Telegram",
    "Чернила": "Ink",
    "Медальон": "Locket",
    "Гравюра": "Engraving",
    "Вуаль": "Veil",
    "Пенсне": "Pince-nez",
    "Шпилька": "Hairpin",
    "Фрак": "Tailcoat",
    "Перстень": "Signet Ring",
    "Маска": "Mask",
    "Сейф": "Safe",
    "Занавес": "Curtain",
    "Свиток": "Scroll",
    "Склянка": "Phial",
    "Эликсир": "Elixir",
    "Короб": "Hamper",
    "Подсвечник": "Candlestick",
    "Брошь": "Brooch",
    "Багаж": "Luggage",
    "Чемодан": "Suitcase",
    "Шляпа": "Hat",
    "Манускрипт": "Manuscript",
    "Флигель": "Annex",
    "Антиквариат": "Antiques",
    "Фартук": "Apron",
    "Пуговица": "Button",
    "Шпага": "Rapier"
  },
  "translations": {
    "ru": {
      "appName": "МЕДИУМ",
      "settings": "Настройки",
      "rules": "Правила игры",
      "newGame": "Новая игра",
      "clearCache": "Переустановить весь кеш и сбросить данные",
      "selectVersion": "Выберите версию игры",
      "versionSubtitle": "Серия настольных игр «Медиум»",
      "available": "Доступна",
      "comingSoon": "Скоро / В разработке",
      "active": "Активна",
      "close": "Закрыть",
      "back": "Назад",
      "startInvestigation": "Начать расследование",
      "setupPartyTitle": "Настройка партии",
      "setupPartySubtitle": "Выберите режим игры и сложность комнат",
      "selectSeriesPart": "Выберите часть серии для начала партии",
      "seriesBadge": "JetBox • Серия игр «Медиум»",
      "gameMode": "Режим игры",
      "standard": "Стандартный",
      "standardDesc": "Призрак, Медиум и Охотники",
      "duo": "Для двоих",
      "duoDesc": "Медиум и Охотник без призрака",
      "roomDifficulty": "Сторона комнат (Сложность)",
      "silver": "Серебряная",
      "silverDesc": "Базовая (рекомендуемая)",
      "gold": "Золотая",
      "goldDesc": "Усложненная сторона",
      "mansion": "Покинутый особняк",
      "secrets": "Секреты Советов",
      "ancients": "Пробуждение Древних",
      "space": "Крик в космосе",
      "round": "Раунд",
      "sealed": "Запечатана",
      "lost": "Потеряна",
      "mansionPlan": "План особняка",
      "roomsActive": "Комнаты особняка",
      "startVision": "Начать Фазу Видений",
      "visionPhase": "Видения",
      "visionStep1": "Ход Медиума",
      "mediumSecretTitle": "Убежище",
      "ghostSecretTitle": "Убежище",
      "mediumPrompt": "Выберите подсказки к этой комнате или артефакту.",
      "mediumSelectWarning": "Выберите хотя бы одну подсказку!",
      "ghostSelectWarning": "Выберите карту с руки!",
      "mediumHand": "Выберите подсказки",
      "passToGhost": "Передать Призраку",
      "revealInDuo": "Открыть подсказки",
      "ghostStep2": "Ход Призрака",
      "mediumSummary": "Медиум выбрал",
      "ghostHandPrompt": "Выберите 1 ложную карту",
      "shuffleAndReveal": "Перемешать и открыть",
      "mediumPrivacyDesc": "Убежище и карты Медиума.",
      "ghostPrivacyDesc": "Подсказки Медиума и рука Призрака.",
      "huntPhase": "Фаза II • Охота",
      "hunterDiscussion": "Обсуждение охотников",
      "discussionTimer": "Таймер дискуссии",
      "pause": "Пауза",
      "start": "Старт",
      "tableClues": "Карты подсказок на столе",
      "hunterPrompt": "Охотники обсуждают выложенные карты и совместно решают, на какую комнату указал медиум. Призрак и медиум хранят молчание!",
      "selectRoomPrompt": "Выберите комнату, на которую указывает медиум:",
      "confirmGuess": "Сделать выбор и открыть карту убежища",
      "checkHideoutBadge": "Проверка убежища призрака",
      "correctGuess": "Комната угадана правильно!",
      "wrongGuess": "Ошибка охотников!",
      "secretWas": "Секретное убежище было:",
      "hunterPicked": "Охотники выбрали:",
      "sealedResult": "Комната запечатана! Артефакт перевернут, а карта убежища отправлена в коробку.",
      "lostResult": "Комната на карте убежища потеряна! Карта убежища накрыла её, а артефакт убран в коробку.",
      "continue": "Продолжить",
      "respitePhase": "Фаза III • Передышка",
      "endRound": "Конец раунда",
      "respiteDesc": "Использованные в раунде карты подсказок убираются в коробку. Медиум добирает 2 верхние карты из колоды подсказок. Призрак добирает карты до 5 на руке.",
      "respiteDescDuo": "Использованные в раунде карты подсказок убираются в коробку. Медиум добирает 2 верхние карты из колоды подсказок.",
      "nextRound": "Перейти к раунду",
      "victoryHunters": "Победа охотников и медиума",
      "victoryGhost": "Победа призрака",
      "ghostBanished": "Призрак изгнан из особняка!",
      "huntersLost": "Охотники заблудились во времени!",
      "victoryDesc": "Вы успешно запечатали 5 комнат, очистив старинный особняк от древнего злобного существа.",
      "defeatDesc": "Было потеряно 5 комнат. Зловещая тень поглотила участников расследования.",
      "roundsPlayed": "Сыграно раундов:",
      "language": "Язык интерфейса",
      "ambientSound": "Зловещий эмбиент",
      "soundEffects": "Звуковые эффекты",
      "on": "Вкл",
      "off": "Выкл",
      "ghostRole": "Призрак",
      "mediumRole": "Медиум",
      "huntersRole": "Охотники",
      "homeConfirmTitle": "Возврат к выбору версии",
      "homeConfirmText": "Вы уверены, что хотите вернуться к выбору версии игры? Текущий прогресс партии будет сброшен.",
      "cancel": "Отмена",
      "confirm": "Подтвердить",
      "activeStatus": "Активна",
      "sealedStatus": "Запечатана",
      "lostStatus": "Потеряна",
      "roomLabel": "Комната",
      "clueLabel": "Подсказка",
      "ghostHandLabel": "Рука призрака",
      "privacyTitle": "Скрытый экран",
      "privacyScreenFor": "Передайте:",
      "privacyPlayer": "Игрок:",
      "privacyPass": "Передайте устройство нужному игроку.",
      "privacyIAm": "Я",
      "privacyButton": "открыть",
      "privacyLookAway": "Остальные — отвернитесь",
      "rulebookTitle": "Правила игры",
      "rulebookSubtitle": "Медиум: Покинутый особняк",
      "tabRules": "Ход игры и фазы",
      "tabComponents": "Компоненты",
      "tabDuo": "Игра для двоих",
      "tabTips": "Советы",
      "goalTitle": "Цель игры",
      "goalDesc": "Охотники и медиум побеждают, если смогли запечатать 5 комнат. Призрак побеждает, если смог 5 раз обмануть охотников (потеряно 5 комнат).",
      "phase1Title": "1. Фаза ВИДЕНИЙ",
      "phase1Desc": "В начале партии 10 карт убежищ, соответствующих комнатам на столе, перемешиваются в случайную стопку. Каждый раунд открывается верхняя случайная карта убежища (её видят только медиум и призрак). Медиум выбирает 1+ карт подсказок с руки, призрак добавляет 1 карту с руки, перемешивает и выкладывает перед охотниками.",
      "phase2Title": "2. Фаза ОХОТЫ",
      "phase2Desc": "Охотники обсуждают подсказки и указывают на комнату (призрак и медиум молчат). Если угадали — комната на карте убежища запечатывается. Если ошиблись — комната, на которую указывает текущая карта убежища призрака, становится потерянной!",
      "phase3Title": "3. Фаза ПЕРЕДЫШКИ",
      "phase3Desc": "Использованные карты убираются. Медиум добирает 2 карты (без лимита руки), призрак добирает до 5 карт на руке.",
      "componentsTitle": "Компоненты набора",
      "comp1Title": "Комнаты особняка и крыльев",
      "comp1Desc": "Двусторонние карты комнат (с серебряным и золотым названием) из выбранных тематических наборов.",
      "comp2Title": "Карты убежищ призрака",
      "comp2Desc": "Случайно перемешиваются (10 карт для выбранных комнат) и открываются по одной в раунд.",
      "comp3Title": "Карты артефактов",
      "comp3Desc": "Перемешиваются и раскладываются случайным образом по 1 на каждую комнату.",
      "comp4Title": "Карты подсказок",
      "comp4Desc": "Объединенный пул ассоциативных слов из всех активных наборов.",
      "duoTitle": "Режим для двоих игроков",
      "duoText": "При игре вдвоем порядок раунда не изменяется. Один из игроков становится медиумом, а второй — охотником. Роли призрака нет!",
      "duoBox": "В фазу видений к выбранным медиумом картам добавляется 1 случайная карта подсказок из колоды, имитируя вмешательство духа.",
      "tipsTitle": "Советы охотникам и ведущим",
      "tip1": "Ассоциации: ведущие должны опираться только на ассоциации. Любые другие отсылки запрещены.",
      "tip2": "Таймер: если обсуждение превышает 2–3 минуты, рекомендуется использовать встроенный таймер дискуссии.",
      "tip3": "Сложность: для усложнения игры можно перевернуть карты комнат на усложненную золотую сторону.",
      "versionSeriesTitle": "Серия игр «Медиум»",
      "versionSeriesDesc": "Выберите версию игры. Модульная архитектура приложения поддерживает все части серии.",
      "resetPrompt": "Сбросить текущую партию и начать заново?",
      "cachePrompt": "Внимание! Это полностью очистит весь кэш и локальные сохранения приложения. Продолжить?",
      "packsButton": "Сценарии, наборы и слова",
      "packsModalTitle": "Настройка наборов и компонентов",
      "packsModalSubtitle": "Выбирайте готовые сценарии, тематические крылья, колоды слов, комнаты и артефакты",
      "roomsCount": "Комнат",
      "artifactsCount": "Артефактов",
      "wordsCount": "Слов",
      "minRoomsWarning": "Внимание: для игры необходимо выбрать минимум 10 комнат и 10 артефактов!",
      "saveAndApply": "Сохранить и применить",
      "designSettings": "Настройки дизайна",
      "darkMode": "Темный",
      "lightMode": "Светлый",
      "uiStyle": "Стиль интерфейса",
      "styleAtmospheric": "Атмосферный",
      "styleMinimalist": "Минималистичный",
      "styleClassic": "Классический",
      "clueDeckLabel": "Колода подсказок",
      "discardPileLabel": "Сброс",
      "mediumHandCountLabel": "На руке у медиума",
      "deckReshuffleNotice": "Колода подсказок закончилась — сброс будет перемешан автоматически.",
      "emptyHandNotice": "На руке не осталось карт подсказок. Нажмите ниже, чтобы добрать карты.",
      "drawEmergencyCards": "Добрать карты подсказок",
      "ghostEmptyHandNotice": "У призрака не осталось карт на руке. Вы можете продолжить без добавления ложной карты.",
      "proceedWithoutDecoy": "Перемешать и выложить подсказки",
      "showMansionPlan": "План особняка",
      "activeRoomsCountLabel": "активных",
      "targetBadge": "Цель",
      "hideScreen": "Скрыть",
      "privacyHoldHint": "Удерживайте кнопку, чтобы случайно не открыть экран при передаче",
      "privacyHoldReleaseHint": "Удерживайте кнопку чуть дольше для открытия",
      "privacyHolding": "Открытие экрана...",
      "resetTimer": "Сброс",
      "timesUp": "Время вышло",
      "minutesShort": "м",
      "packsLabel": "Наборов:",
      "upcomingExpansions": "Скоро в серии",
      "installApp": "Установить приложение",
      "installOnIOS": "Установить на iPhone / iPad",
      "iosInstallTitle": "Установка на iPhone / iPad",
      "iosInstallStep1": "Нажмите кнопку «Поделиться» на панели Safari.",
      "iosInstallStep2": "Прокрутите вниз и выберите «На экран «Домой»».",
      "offlineMode": "Офлайн-режим • Кэш активен",
      "hapticFeedback": "Виброотклик",
      "silverShort": "Серебр.",
      "goldShort": "Золот.",
      "thematicPacksTab": "Тематические наборы",
      "artifactsTab": "Артефакты",
      "duoTargetTitle": "Цель для победы (комнат)",
      "duoTargetDesc": "По правилам вдвоём можно усложнить игру до 6 или 7 комнат",
      "duoTargetRooms": "комнат",
      "victoryDuo": "Победа дуэта",
      "defeatDuo": "Поражение дуэта",
      "duoWonTitle": "Особняк очищен вдвоём!",
      "duoLostTitle": "Особняк поглощён мраком!",
      "duoVictoryDesc": "Вы успешно запечатали нужное число комнат и рассеяли проклятие особняка.",
      "duoDefeatDesc": "Осталось слишком мало активных комнат, чтобы завершить ритуал запечатывания.",
      "duoSpiritCardLabel": "Случайная карта колоды (вмешательство духа)",
      "roundHistoryTitle": "Журнал раундов",
      "roundHistoryButton": "Журнал",
      "roundHistoryEmpty": "Пока нет завершённых раундов.",
      "cluesShownLabel": "Подсказки на столе",
      "mediumCardsTag": "Медиум",
      "ghostCardTag": "Призрак",
      "spiritCardTag": "Колода",
      "confirmHuntTitle": "Подтвердить выбор охотников?",
      "confirmHuntText": "Вы уверены, что хотите вскрыть карту убежища для этой комнаты? Действие нельзя отменить.",
      "confirmHuntProceed": "Открыть убежище",
      "selectedCountLabel": "Выбрано",
      "targetSealedLabel": "Цель",
      "wordsTab": "Колода слов",
      "wordsDeckLabel": "Слов:",
      "wordOnlyBadge": "Только слова",
      "guaranteedWingToggle": "Гарантировать на столе",
      "guaranteedWingShort": "На столе",
      "selectAllWords": "Все слова",
      "syncWordsWithRooms": "Как крылья",
      "minWordsWarning": "Необходимо выбрать минимум 10 комнат, 10 артефактов и 25 слов!",
      "scenariosTab": "Сценарии",
      "packsShortTab": "Наборы",
      "scenariosTitle": "Готовые сценарии",
      "scenariosSubtitle": "Быстрый выбор атмосферного набора и правил",
      "scenarioCustom": "Своя сборка",
      "modifiersTitle": "Свойства крыльев и модификаторы",
      "wingCursesLabel": "Свойства / Проклятия крыльев",
      "wingCursesDesc": "Активные крылья на столе добавляют особые правила: Транс, Лихорадка, Полтергейст и Туман",
      "mixedDifficultyLabel": "Смешанная сторона (Серебро + Золото)",
      "mixedDifficultyDesc": "Случайно раздаёт половину комнат серебряной, а половину — золотой стороной",
      "ghostIllusionLabel": "Морок Призрака (1× за игру)",
      "ghostIllusionDesc": "Призрак может 1 раз подложить 2 ложные карты подсказок вместо 1",
      "mediumInsightLabel": "Озарение Медиума (1× за игру)",
      "mediumInsightDesc": "Медиум может 1 раз добрать +2 дополнительные карты на руку в Фазу Видений",
      "blitzTimerLabel": "Блиц-таймер",
      "blitzTimerDesc": "Ускоренное обсуждение: 60с и −10с за каждую потерянную комнату (мин. 30с)",
      "mixedDifficultyShort": "Смешанная",
      "activateInsight": "Озарение (+2 карты)",
      "insightUsedLabel": "Озарение использовано",
      "activateTrance": "Транс: обмен",
      "trancePromptHint": "1–3 карты → обмен (Призрак +1)",
      "tranceUsedLabel": "Транс использован",
      "activateIllusion": "Морок (2 ложные)",
      "illusionActiveHint": "Выберите 2 ложные карты вместо 1",
      "illusionUsedLabel": "Морок использован",
      "ghostHandPromptIllusion": "Выберите 2 ложные (Морок)",
      "fogHiddenArtifact": "Скрыто туманом",
      "wingCurseOccultTitle": "Оккультный транс",
      "wingCurseMedicalTitle": "Лихорадка",
      "wingCurseForgottenTitle": "Полтергейст",
      "wingCurseGroundsTitle": "Густой туман",
      "poltergeistAlert": "Полтергейст поменял артефакты местами:",
      "feverAlert": "Лихорадка! Следующий таймер Охоты сокращён на 30с.",
      "fogClearedAlert": "Туман рассеялся — артефакты особняка снова видны!",
      "blitzBadge": "Блиц",
      "feverBadge": "Лихорадка −30с",
      "activeModifiersLabel": "Модификаторы",
      "wingRulesModalHint": "Активные эффекты крыльев на столе",
      "fontFamilyLabel": "Шрифт",
      "fontSans": "Чёткий (Inter)",
      "fontSystem": "Системный",
      "fontRounded": "Мягкий (Manrope)",
      "fontSerif": "Книжный (Lora)",
      "fontSizeLabel": "Размер шрифта",
      "fontSizeSm": "Мелкий",
      "fontSizeMd": "Обычный",
      "fontSizeLg": "Крупный",
      "fontSizeXl": "Очень крупный",
      "keepAwakeLabel": "Не выключать экран в игре",
      "keepAwakeUnsupported": "Не подд.",
      "appTitle": "МЕДИУМ",
      "appSubtitle": "Покинутый особняк",
      "home": "Домой",
      "ambientMusic": "Фоновая музыка",
      "languageLabel": "Язык",
      "themeLabel": "Тема",
      "themeDark": "Тёмная",
      "themeLight": "Светлая",
      "uiStyleLabel": "Стиль интерфейса",
      "hapticsLabel": "Виброотклик",
      "clearCacheButton": "Сбросить кеш и данные",
      "exitConfirmTitle": "Выйти в главное меню?",
      "exitConfirmText": "Текущая партия будет завершена и несохранённый прогресс сбросится.",
      "exit": "Выйти",
      "clearCacheTitle": "Сбросить кеш приложения?",
      "clearCacheText": "Будут очищены сохранённые настройки, текущая партия и локальный кеш этого приложения.",
      "clearCacheConfirm": "Сбросить",
      "hideScreenBtn": "Скрыть",
      "tabModifiers": "Крылья и моды",
      "wingCursesRulesTitle": "Проклятия крыльев",
      "modifiersRulesTitle": "Модификаторы партии",
      "curseRuleOccultDesc": "Оккультное крыло — Транс: раз за игру Медиум может сбросить 1–3 карты с руки и добрать столько же новых, но Призрак получает +1 карту в руку.",
      "curseRuleMedicalDesc": "Медицинское крыло — Лихорадка: если Охотники ошиблись в комнате этого крыла, таймер обсуждения в следующем раунде сокращается на 30 секунд (минимум до 30 сек).",
      "curseRuleForgottenDesc": "Забытые коридоры — Полтергейст: после каждой ошибки Охотников две случайные активные комнаты меняются артефактами.",
      "curseRuleGroundsDesc": "Окрестности особняка — Густой туман: в начале партии одна комната Окрестностей скрыта туманом (артефакт виден только Медиуму и Призраку). Туман рассеивается к 4-му раунду или когда остаётся 5 комнат.",
      "modRuleMixedTitle": "Смешанные стороны",
      "modRuleMixedDesc": "На столе одновременно раскладываются 5 комнат серебряной стороны и 5 комнат золотой стороны.",
      "modRuleInsightTitle": "Озарение Медиума",
      "modRuleInsightDesc": "Раз за партию Медиум может в любой ход Видения добрать 2 дополнительные карты улик в руку.",
      "modRuleIllusionTitle": "Иллюзия Призрака",
      "modRuleIllusionDesc": "В стандартном режиме раз за партию Призрак может подбросить 2 ложные улики вместо 1.",
      "modRuleBlitzTitle": "Блиц-таймер",
      "modRuleBlitzDesc": "На обсуждение даётся 60 секунд, и с каждой потерянной комнатой таймер уменьшается ещё на 10 секунд (минимум до 30 сек).",
      "switchLanguage": "Переключить язык (RU / EN)",
      "rulePresetsTitle": "Готовые наборы правил",
      "rulePresetsSubtitle": "Быстрый выбор баланса — любой параметр ниже можно изменить вручную",
      "customPresetBadge": "Своя настройка",
      "artifactCategoriesLabel": "Сила артефактов (4 категории)",
      "artifactCategoriesDesc": "Оккультные, Архив, Орудия и Жуткие — запечатывание или потеря комнаты даёт обмен, добор или обыск колоды.",
      "roomPropertiesLabel": "Особенности комнат особняка",
      "roomPropertiesDesc": "Опоры (обвал меняет руки обоих), Тихие покои (ясность Медиуму), Эхо (обмен Призраку), Кладовые (обыск).",
      "riskActionsLabel": "Обмен на риск (Медиум и Призрак)",
      "riskActionsDesc": "Медиум может расширить канал (до 3 карт, но Призрак тоже меняет), Призрак — обрушить стену (новая рука, но +30с Охотникам).",
      "catchUpLabel": "Второе дыхание (баланс отстающих)",
      "catchUpDesc": "При 3+ потерях Медиум получает +1 обмен каждый раунд; при 3+ печатях Призрак получает +2 обмена.",
      "artCatOccult": "Оккульт.",
      "artCatArchive": "Архив",
      "artCatTool": "Орудие",
      "artCatEerie": "Жуткий",
      "roomTraitPillar": "Опора",
      "roomTraitQuiet": "Тишина",
      "roomTraitEcho": "Эхо",
      "roomTraitArchive": "Кладовая",
      "swapCardsTitle": "Обмен карт с руки",
      "swapAvailableLabel": "Доступно замен",
      "swapSelectedBtn": "Заменить выбранные",
      "swapOneSelectedBtn": "Обменять выбранную",
      "swapHintMedium": "Отметьте ненужные слова и нажмите «Заменить» — доберёте свежие из колоды.",
      "swapHintGhost": "Выберите слабую карту и нажмите «Обменять», чтобы заменить её на новую перед подбросом.",
      "openCacheBtn": "Вскрыть тайник (3 карты)",
      "cacheBoxTitle": "Тайник колоды — выберите 1 карту из 3",
      "cacheBoxHint": "Отметьте 1 карту из тайника и 1 карту в руке для обмена.",
      "cacheSwapConfirm": "Забрать карту в руку",
      "cacheSkipBtn": "Отложить",
      "widenChannelBtn": "Расширить канал",
      "widenChannelLeft": "ост.",
      "widenChannelPriceStd": "Цена: Призрак получит +2 обмена карт в этот ход.",
      "widenChannelPriceDuo": "Цена: таймер Охоты сократится на 15с.",
      "widenChannelAlertGhost": "Медиум расширил канал — вам открылось +2 бесплатных обмена карт!",
      "wallCollapseBtn": "Крушение стен (сбросить всю руку)",
      "wallCollapsePrice": "Цена: Охотники услышат грохот и получат +30с к таймеру.",
      "wallCollapseAlertHunt": "В особняке рухнула стена! Охотники настороже (+30с к таймеру).",
      "timerBonusBadge": "Грохот +30с",
      "channelPenaltyBadge": "Канал −15с",
      "secondWindMediumTag": "Второе дыхание (+1)",
      "secondWindGhostTag": "Ярость духа (+2)",
      "quietRoomTag": "Тихие покои (+1)",
      "echoRoomTag": "Эхо (+2)",
      "eerieAuraTag": "Жуткая аура (+1)",
      "carriedSwapsTag": "От особняка",
      "pillarCollapseAlert": "Обвал опоры! Особняк содрогнулся — у Медиума и Призрака сменилось по 2 случайные карты.",
      "archiveDrawMediumAlert": "Архивный артефакт очищен: Медиум получил +1 карту в руку и +1 обмен на следующий раунд.",
      "archiveDrawGhostAlert": "Архивный артефакт потерян: Призрак получил +1 дополнительную карту в руку.",
      "occultSwapMediumAlert": "Оккультный артефакт запечатан: Медиум получит +3 обмена карт в следующем Видении.",
      "occultSwapGhostAlert": "Оккультный артефакт поглощён: Призрак получит +2 обмена карт в следующем Видении.",
      "toolScoutAlert": "Инструмент найден: в следующем Видении Медиум сможет вскрыть тайник (3 верхние карты колоды).",
      "toolSwapGhostAlert": "Орудие в руках Призрака: Призрак получит +3 обмена карт в следующем Видении.",
      "eerieSwapMediumAlert": "Жуткий артефакт обезврежен: Медиум получит +2 обмена карт в следующем Видении.",
      "roomArchiveSwapAlert": "Кладовая обыскана: Медиум получит +2 обмена карт в следующем Видении.",
      "artifactCatRulesTitle": "Категории артефактов (Сила артефактов)",
      "roomTraitsRulesTitle": "Особенности комнат особняка",
      "riskCatchUpRulesTitle": "Обмен на риск и Второе дыхание",
      "artCatOccultRule": "Оккультные (Уиджи, Таро, Зеркало, Гримуар и др.): запечатана — Медиум получает +3 обмена; потеряна — Призрак получает +2 обмена.",
      "artCatArchiveRule": "Архив и память (Фолиант, Полароид, Часы, Патефон и др.): запечатана — Медиум сразу берёт +1 карту и +1 обмен; потеряна — Призрак берёт +1 карту.",
      "artCatToolRule": "Орудия и механизмы (Фонарь, Ключи, Лопата, Бензопила и др.): запечатана — Медиум вскрывает тайник (3 карты колоды); потеряна — Призрак получает +3 обмена.",
      "artCatEerieRule": "Жуткие отголоски (Скелет, Кукла, Манекен, Игрушки и др.): пока комната — убежище, Призрак получает +1 обмен; при запечатывании Медиум получает +2 обмена.",
      "roomTraitPillarRule": "Опоры дома (Подвал, Чердак, Котельная, Маяк): при потере комнаты происходит обвал — и Медиум, и Призрак сбрасывают по 2 случайные карты и берут новые.",
      "roomTraitQuietRule": "Тихие покои (Библиотека, Часовня, Спальня, Оранжерея, Беседка): пока комната — убежище, Медиум получает +1 бесплатный обмен карты.",
      "roomTraitEchoRule": "Коридоры эха (Коридор, Гостиная, Столовая, Склеп, Прислуга): пока комната — убежище, Призрак получает +2 бесплатных обмена карт.",
      "roomTraitArchiveRule": "Кладовые (Мастерская, Кухня, Кабинет, Погреб, Морг, Аптека): при запечатывании Медиум получает +2 обмена карт на следующий раунд.",
      "riskRuleDesc": "Медиум может до 2 раз за игру «Расширить канал» (заменить 1–3 карты, но Призрак получает +2 обмена, а в Дуо −15с к таймеру). Призрак раз за игру может вызвать «Крушение стен» (новая рука из 5 карт, но Охотники получают +30с).",
      "catchUpRuleDesc": "Когда Охотники проигрывают (3+ потерянных комнат), Медиум получает +1 обмен каждый раунд. Когда Призрак загнан в угол (3+ запечатанных), Призрак получает +2 обмена."
    },
    "en": {
      "appName": "MEDIUM",
      "settings": "Settings",
      "rules": "Game Rules",
      "newGame": "New Game",
      "clearCache": "Clear All Cache & Reset Data",
      "selectVersion": "Select Game Version",
      "versionSubtitle": "Medium Board Game Series",
      "available": "Available",
      "comingSoon": "Coming Soon",
      "active": "Active",
      "close": "Close",
      "back": "Back",
      "startInvestigation": "Start Investigation",
      "setupPartyTitle": "Game Setup",
      "setupPartySubtitle": "Choose game mode and room difficulty",
      "selectSeriesPart": "Select a series installment to begin",
      "seriesBadge": "JetBox • Medium Game Series",
      "gameMode": "Game Mode",
      "standard": "Standard",
      "standardDesc": "Ghost, Medium and Hunters",
      "duo": "Duet (2 Players)",
      "duoDesc": "Medium and Hunter without Ghost",
      "roomDifficulty": "Room Side (Difficulty)",
      "silver": "Silver",
      "silverDesc": "Basic (Recommended)",
      "gold": "Gold",
      "goldDesc": "Advanced Side",
      "mansion": "The Abandoned Mansion",
      "secrets": "Secrets of the Soviets",
      "ancients": "Awakening of the Ancients",
      "space": "Space Scream",
      "round": "Round",
      "sealed": "Sealed",
      "lost": "Lost",
      "mansionPlan": "Mansion Plan",
      "roomsActive": "Mansion Rooms",
      "startVision": "Start Vision Phase",
      "visionPhase": "Vision",
      "visionStep1": "Medium’s Turn",
      "mediumSecretTitle": "Hideout",
      "ghostSecretTitle": "Hideout",
      "mediumPrompt": "Pick clues pointing to this room or artifact.",
      "mediumSelectWarning": "Select at least one clue card!",
      "ghostSelectWarning": "Select a card from your hand!",
      "mediumHand": "Pick clues",
      "passToGhost": "Pass to Ghost",
      "revealInDuo": "Reveal clues",
      "ghostStep2": "Ghost’s Turn",
      "mediumSummary": "Medium chose",
      "ghostHandPrompt": "Pick 1 decoy card",
      "shuffleAndReveal": "Shuffle & reveal",
      "mediumPrivacyDesc": "Hideout and Medium’s hand.",
      "ghostPrivacyDesc": "Medium’s clues and Ghost’s hand.",
      "huntPhase": "Phase II • Hunt",
      "hunterDiscussion": "Hunter Discussion",
      "discussionTimer": "Discussion Timer",
      "pause": "Pause",
      "start": "Start",
      "tableClues": "Clue Cards on Table",
      "hunterPrompt": "Hunters discuss the revealed cards and decide which room the medium indicated. Ghost and Medium must remain silent!",
      "selectRoomPrompt": "Select the room indicated by the Medium:",
      "confirmGuess": "Make Choice & Reveal Hideout Card",
      "checkHideoutBadge": "Hideout Card Check",
      "correctGuess": "Room Guessed Correctly!",
      "wrongGuess": "Hunters Made a Mistake!",
      "secretWas": "The secret hideout was:",
      "hunterPicked": "Hunters picked:",
      "sealedResult": "Room sealed! Artifact flipped and hideout card discarded.",
      "lostResult": "The hideout room is lost! Hideout card covered it and its artifact was discarded.",
      "continue": "Continue",
      "respitePhase": "Phase III • Respite",
      "endRound": "End of Round",
      "respiteDesc": "Used clue cards go to box. Medium draws 2 cards. Ghost draws cards up to 5 in hand.",
      "respiteDescDuo": "Used clue cards go to box. Medium draws 2 cards from the clue deck.",
      "nextRound": "Proceed to Round",
      "victoryHunters": "Victory of Hunters & Medium",
      "victoryGhost": "Victory of the Ghost",
      "ghostBanished": "The Ghost was Banished from the Mansion!",
      "huntersLost": "Hunters Got Lost in Time and Space!",
      "victoryDesc": "You successfully sealed 5 rooms, purging the ancient mansion of the evil entity.",
      "defeatDesc": "5 rooms were lost. The ominous shadow consumed the investigators.",
      "roundsPlayed": "Rounds Played:",
      "language": "Interface Language",
      "ambientSound": "Ominous Ambient",
      "soundEffects": "Sound Effects",
      "on": "On",
      "off": "Off",
      "ghostRole": "Ghost",
      "mediumRole": "Medium",
      "huntersRole": "Hunters",
      "homeConfirmTitle": "Return to Version Selection",
      "homeConfirmText": "Are you sure you want to return to game version selection? Current game progress will be reset.",
      "cancel": "Cancel",
      "confirm": "Confirm",
      "activeStatus": "Active",
      "sealedStatus": "Sealed",
      "lostStatus": "Lost",
      "roomLabel": "Room",
      "clueLabel": "Clue",
      "ghostHandLabel": "Ghost Hand",
      "privacyTitle": "Private Screen",
      "privacyScreenFor": "Pass to:",
      "privacyPlayer": "Player:",
      "privacyPass": "Pass the device to this player.",
      "privacyIAm": "I am",
      "privacyButton": "open",
      "privacyLookAway": "Others look away",
      "rulebookTitle": "Game Rules",
      "rulebookSubtitle": "Medium: The Abandoned Mansion",
      "tabRules": "Flow & Phases",
      "tabComponents": "Components",
      "tabDuo": "Two-Player Mode",
      "tabTips": "Tips",
      "goalTitle": "Goal of the Game",
      "goalDesc": "Hunters and Medium win if they successfully seal 5 rooms. The Ghost wins if they manage to trick the hunters 5 times (5 rooms lost).",
      "phase1Title": "1. Vision Phase",
      "phase1Desc": "At setup, the 10 hideout cards matching the rooms on the table are shuffled into a deck. Each round, the top random hideout card is revealed behind the screen (seen only by Medium & Ghost). Medium selects 1+ clues, Ghost adds 1 card, shuffles, and reveals them.",
      "phase2Title": "2. Hunt Phase",
      "phase2Desc": "Hunters discuss the clues and choose a room (Ghost & Medium stay silent). If correct, the hideout room is sealed. If wrong, the room shown on the current Ghost hideout card becomes lost!",
      "phase3Title": "3. Respite Phase",
      "phase3Desc": "Used clues are discarded. Medium draws 2 cards (no hand limit), Ghost draws back up to 5 cards.",
      "componentsTitle": "Game Components",
      "comp1Title": "Rooms of Mansion & Wings",
      "comp1Desc": "Double-sided room cards (silver and gold titles) from selected thematic packs.",
      "comp2Title": "Ghost Hideout Cards",
      "comp2Desc": "Shuffled (10 cards for selected rooms) and revealed one per round.",
      "comp3Title": "Artifact Cards",
      "comp3Desc": "Shuffled and randomly assigned 1 per room.",
      "comp4Title": "Clue Cards",
      "comp4Desc": "Combined pool of associative words from all active packs.",
      "duoTitle": "Two-Player Game Mode",
      "duoText": "In two-player mode, the round order does not change. One player is the medium, and the second is the hunter. There is no ghost role!",
      "duoBox": "During the vision phase, 1 random clue card from the deck is added to the medium’s chosen cards, simulating spirit intervention.",
      "tipsTitle": "Tips for Hunters and Leads",
      "tip1": "Associations: Leads must rely only on associations. Any other references (letter counts, word structure) are forbidden.",
      "tip2": "Timer: If discussion exceeds 2-3 minutes, using the built-in discussion timer is recommended.",
      "tip3": "Difficulty: To make the game harder, flip room cards to the advanced gold side.",
      "versionSeriesTitle": "Medium Board Game Series",
      "versionSeriesDesc": "Select game version. The modular architecture supports all parts of the series.",
      "resetPrompt": "Reset current game and start over?",
      "cachePrompt": "Warning! This will completely clear all cache and local saves. Continue?",
      "packsButton": "Scenarios, Packs & Words",
      "packsModalTitle": "Packs & Components Setup",
      "packsModalSubtitle": "Choose curated scenarios, thematic wings, word decks, rooms, and artifacts",
      "roomsCount": "Rooms",
      "artifactsCount": "Artifacts",
      "wordsCount": "Words",
      "minRoomsWarning": "Warning: You must select at least 10 rooms and 10 artifacts to play!",
      "saveAndApply": "Save and Apply",
      "designSettings": "Design Settings",
      "darkMode": "Dark",
      "lightMode": "Light",
      "uiStyle": "UI Style",
      "styleAtmospheric": "Atmospheric",
      "styleMinimalist": "Minimalist",
      "styleClassic": "Classic",
      "clueDeckLabel": "Clue Deck",
      "discardPileLabel": "Discard Pile",
      "mediumHandCountLabel": "Medium Hand",
      "deckReshuffleNotice": "Clue deck is empty — discard pile will be reshuffled automatically.",
      "emptyHandNotice": "No clue cards left in hand. Tap below to draw replacement cards.",
      "drawEmergencyCards": "Draw Clue Cards",
      "ghostEmptyHandNotice": "Ghost has no cards left in hand. You may proceed without adding a decoy card.",
      "proceedWithoutDecoy": "Shuffle and Reveal Clues",
      "showMansionPlan": "Mansion Plan",
      "activeRoomsCountLabel": "active",
      "targetBadge": "Target",
      "hideScreen": "Hide",
      "privacyHoldHint": "Press and hold to avoid accidental reveal when passing the device",
      "privacyHoldReleaseHint": "Keep holding a little longer to reveal",
      "privacyHolding": "Revealing...",
      "resetTimer": "Reset",
      "timesUp": "Time's up",
      "minutesShort": "m",
      "packsLabel": "Packs:",
      "upcomingExpansions": "Coming Soon to Series",
      "installApp": "Install App",
      "installOnIOS": "Install on iPhone / iPad",
      "iosInstallTitle": "Install on iPhone / iPad",
      "iosInstallStep1": "Tap the Share button in the Safari toolbar.",
      "iosInstallStep2": "Scroll down and tap Add to Home Screen.",
      "offlineMode": "Offline Mode • Cached",
      "hapticFeedback": "Haptic Feedback",
      "silverShort": "Silver",
      "goldShort": "Gold",
      "thematicPacksTab": "Thematic Packs",
      "artifactsTab": "Artifacts",
      "duoTargetTitle": "Win Target (Rooms)",
      "duoTargetDesc": "Per Duet rules, you can raise the target to 6 or 7 rooms",
      "duoTargetRooms": "rooms",
      "victoryDuo": "Duet Victory",
      "defeatDuo": "Duet Defeat",
      "duoWonTitle": "The Mansion Is Cleansed!",
      "duoLostTitle": "Swallowed by the Darkness!",
      "duoVictoryDesc": "You successfully sealed the required number of rooms and broke the curse.",
      "duoDefeatDesc": "Too few active rooms remain to complete the sealing ritual.",
      "duoSpiritCardLabel": "Random Deck Card (Spirit Intervention)",
      "roundHistoryTitle": "Round Log",
      "roundHistoryButton": "Log",
      "roundHistoryEmpty": "No completed rounds yet.",
      "cluesShownLabel": "Clues on Table",
      "mediumCardsTag": "Medium",
      "ghostCardTag": "Ghost",
      "spiritCardTag": "Deck",
      "confirmHuntTitle": "Confirm Hunters Choice?",
      "confirmHuntText": "Are you sure you want to reveal the hideout card for this room? This cannot be undone.",
      "confirmHuntProceed": "Reveal Hideout",
      "selectedCountLabel": "Selected",
      "targetSealedLabel": "Goal",
      "wordsTab": "Word Deck",
      "wordsDeckLabel": "Words:",
      "wordOnlyBadge": "Words Only",
      "guaranteedWingToggle": "Guarantee on table",
      "guaranteedWingShort": "On Table",
      "selectAllWords": "All Words",
      "syncWordsWithRooms": "Match Wings",
      "minWordsWarning": "You must select at least 10 rooms, 10 artifacts, and 25 clue words!",
      "scenariosTab": "Scenarios",
      "packsShortTab": "Packs",
      "scenariosTitle": "Curated Scenarios",
      "scenariosSubtitle": "Quick thematic presets for packs & rules",
      "scenarioCustom": "Custom Setup",
      "modifiersTitle": "Wing Curses & Modifiers",
      "wingCursesLabel": "Wing Curses & Properties",
      "wingCursesDesc": "Active wings on the table trigger special rules: Trance, Fever, Poltergeist & Dense Fog",
      "mixedDifficultyLabel": "Mixed Sides (Silver + Gold)",
      "mixedDifficultyDesc": "Deals 5 rooms on the Silver side and 5 on the Gold side randomly",
      "ghostIllusionLabel": "Ghost Illusion (1×/game)",
      "ghostIllusionDesc": "Once per game, Ghost may add 2 decoy clue cards instead of 1",
      "mediumInsightLabel": "Medium Insight (1×/game)",
      "mediumInsightDesc": "Once per game, Medium can draw +2 extra cards in hand during Vision",
      "blitzTimerLabel": "Blitz Timer",
      "blitzTimerDesc": "Fast rounds: starts at 60s, −10s per lost room (min 30s)",
      "mixedDifficultyShort": "Mixed",
      "activateInsight": "Insight (+2 Cards)",
      "insightUsedLabel": "Insight Used",
      "activateTrance": "Trance: Swap",
      "trancePromptHint": "1–3 cards → swap (Ghost +1)",
      "tranceUsedLabel": "Trance Used",
      "activateIllusion": "Illusion (2 decoys)",
      "illusionActiveHint": "Pick 2 decoy cards instead of 1",
      "illusionUsedLabel": "Illusion Used",
      "ghostHandPromptIllusion": "Pick 2 decoys (Illusion)",
      "fogHiddenArtifact": "Hidden in Fog",
      "wingCurseOccultTitle": "Occult Trance",
      "wingCurseMedicalTitle": "Fever",
      "wingCurseForgottenTitle": "Poltergeist",
      "wingCurseGroundsTitle": "Dense Fog",
      "poltergeistAlert": "Poltergeist swapped artifacts:",
      "feverAlert": "Fever! Next Hunt timer reduced by 30s.",
      "fogClearedAlert": "The dense fog lifted — all artifacts are visible again!",
      "blitzBadge": "Blitz",
      "feverBadge": "Fever −30s",
      "activeModifiersLabel": "Modifiers",
      "wingRulesModalHint": "Active Wing Effects on Board",
      "fontFamilyLabel": "Font Family",
      "fontSans": "Clean (Inter)",
      "fontSystem": "System",
      "fontRounded": "Soft (Manrope)",
      "fontSerif": "Book (Lora)",
      "fontSizeLabel": "Font Size",
      "fontSizeSm": "Small",
      "fontSizeMd": "Normal",
      "fontSizeLg": "Large",
      "fontSizeXl": "Extra Large",
      "keepAwakeLabel": "Keep Screen Awake",
      "keepAwakeUnsupported": "N/A",
      "appTitle": "MEDIUM",
      "appSubtitle": "The Abandoned Mansion",
      "home": "Home",
      "ambientMusic": "Ambient Music",
      "languageLabel": "Language",
      "themeLabel": "Theme",
      "themeDark": "Dark",
      "themeLight": "Light",
      "uiStyleLabel": "Interface Style",
      "hapticsLabel": "Haptic Feedback",
      "clearCacheButton": "Clear Cache & Data",
      "exitConfirmTitle": "Return to Main Menu?",
      "exitConfirmText": "The current match will end and active progress will be cleared.",
      "exit": "Exit",
      "clearCacheTitle": "Clear Application Cache?",
      "clearCacheText": "Saved preferences, active game progress, and local offline cache for this app will be cleared.",
      "clearCacheConfirm": "Clear",
      "hideScreenBtn": "Hide",
      "tabModifiers": "Wings & Mods",
      "wingCursesRulesTitle": "Wing Curses",
      "modifiersRulesTitle": "Game Modifiers",
      "curseRuleOccultDesc": "Occult Wing — Trance: once per game, the Medium may discard 1–3 cards and draw that many new ones, while the Ghost draws +1 extra card.",
      "curseRuleMedicalDesc": "Medical Wing — Fever: if Hunters fail a room from this wing, the next round discussion timer is reduced by 30 seconds (minimum 30s).",
      "curseRuleForgottenDesc": "Forgotten Corridors — Poltergeist: after every wrong Hunter guess, two random active rooms swap their artifacts.",
      "curseRuleGroundsDesc": "Mansion Grounds — Dense Fog: at game start, one Grounds room is shrouded in fog (only Medium & Ghost see its artifact). Fog clears by round 4 or when 5 rooms remain.",
      "modRuleMixedTitle": "Mixed Sides",
      "modRuleMixedDesc": "The board mixes 5 Silver-side rooms and 5 Gold-side rooms in a single match.",
      "modRuleInsightTitle": "Medium Insight",
      "modRuleInsightDesc": "Once per match during the Vision phase, the Medium can draw 2 extra clue cards into their hand.",
      "modRuleIllusionTitle": "Ghost Illusion",
      "modRuleIllusionDesc": "In Standard mode, once per match the Ghost can plant 2 decoy clues instead of 1.",
      "modRuleBlitzTitle": "Blitz Timer",
      "modRuleBlitzDesc": "Discussion starts at 60 seconds and shrinks by 10 seconds for each lost room (minimum 30s).",
      "switchLanguage": "Switch language (RU / EN)",
      "rulePresetsTitle": "Balanced Rule Presets",
      "rulePresetsSubtitle": "Pick a balanced preset — every modifier below remains freely customizable",
      "customPresetBadge": "Custom Setup",
      "artifactCategoriesLabel": "Artifact Powers (4 Categories)",
      "artifactCategoriesDesc": "Occult, Archive, Tool & Eerie — sealing or losing a room grants swaps, bonus draws, or deck scouting.",
      "roomPropertiesLabel": "Mansion Room Properties",
      "roomPropertiesDesc": "Pillars (collapse cycles both hands), Quiet (Medium clarity), Echo (Ghost swaps), Storage (search).",
      "riskActionsLabel": "Risk Exchanges (Medium & Ghost)",
      "riskActionsDesc": "Medium can Widen Channel (swap 1–3, Ghost gets swaps); Ghost can Collapse Wall (new 5-card hand, Hunters +30s).",
      "catchUpLabel": "Second Wind (Comeback Balance)",
      "catchUpDesc": "At 3+ lost rooms Medium gets +1 swap each round; at 3+ sealed rooms Ghost gets +2 swaps.",
      "artCatOccult": "Occult",
      "artCatArchive": "Archive",
      "artCatTool": "Tool",
      "artCatEerie": "Eerie",
      "roomTraitPillar": "Pillar",
      "roomTraitQuiet": "Quiet",
      "roomTraitEcho": "Echo",
      "roomTraitArchive": "Storage",
      "swapCardsTitle": "Swap Hand Cards",
      "swapAvailableLabel": "Swaps available",
      "swapSelectedBtn": "Swap Selected",
      "swapOneSelectedBtn": "Swap Selected Card",
      "swapHintMedium": "Select unwanted clues and tap Swap to replace them from the deck.",
      "swapHintGhost": "Tap a weak card and hit Swap to replace it before planting your decoy.",
      "openCacheBtn": "Open Deck Cache (Peek 3)",
      "cacheBoxTitle": "Deck Cache — Pick 1 of 3 Cards",
      "cacheBoxHint": "Select 1 cache card and 1 card from your hand to swap them.",
      "cacheSwapConfirm": "Take Card into Hand",
      "cacheSkipBtn": "Keep for Later",
      "widenChannelBtn": "Widen Channel",
      "widenChannelLeft": "left",
      "widenChannelPriceStd": "Cost: Ghost gains +2 free card swaps this turn.",
      "widenChannelPriceDuo": "Cost: Hunt timer reduced by 15s this round.",
      "widenChannelAlertGhost": "Medium widened the channel — you gained +2 free card swaps!",
      "wallCollapseBtn": "Wall Collapse (Redraw Full Hand)",
      "wallCollapsePrice": "Cost: Hunters hear the crash and gain +30s on the timer.",
      "wallCollapseAlertHunt": "A wall collapsed in the mansion! Hunters are alert (+30s timer).",
      "timerBonusBadge": "Crash +30s",
      "channelPenaltyBadge": "Channel −15s",
      "secondWindMediumTag": "Second Wind (+1)",
      "secondWindGhostTag": "Cornered Fury (+2)",
      "quietRoomTag": "Quiet Room (+1)",
      "echoRoomTag": "Echo (+2)",
      "eerieAuraTag": "Eerie Aura (+1)",
      "carriedSwapsTag": "Mansion bonus",
      "pillarCollapseAlert": "Pillar Collapse! The mansion shook — both Medium & Ghost replaced 2 random cards.",
      "archiveDrawMediumAlert": "Archive artifact cleared: Medium drew +1 card and gained +1 swap for next round.",
      "archiveDrawGhostAlert": "Archive artifact lost: Ghost drew +1 extra card into hand.",
      "occultSwapMediumAlert": "Occult artifact sealed: Medium gains +3 card swaps next Vision.",
      "occultSwapGhostAlert": "Occult artifact claimed: Ghost gains +2 card swaps next Vision.",
      "toolScoutAlert": "Tool recovered: next Vision the Medium can open a 3-card Deck Cache.",
      "toolSwapGhostAlert": "Tool claimed by Ghost: Ghost gains +3 card swaps next Vision.",
      "eerieSwapMediumAlert": "Eerie artifact dispelled: Medium gains +2 card swaps next Vision.",
      "roomArchiveSwapAlert": "Storage searched: Medium gains +2 card swaps next Vision.",
      "artifactCatRulesTitle": "Artifact Categories (Artifact Powers)",
      "roomTraitsRulesTitle": "Mansion Room Properties",
      "riskCatchUpRulesTitle": "Risk Exchanges & Second Wind",
      "artCatOccultRule": "Occult (Ouija, Tarot, Mirror, Grimoire, etc.): Sealed → Medium +3 swaps; Lost → Ghost +2 swaps.",
      "artCatArchiveRule": "Archive & Memory (Tome, Polaroid, Clock, Gramophone, etc.): Sealed → Medium draws +1 card & +1 swap; Lost → Ghost draws +1 card.",
      "artCatToolRule": "Tools & Gear (Lantern, Keys, Shovel, Chainsaw, etc.): Sealed → Medium unlocks 3-card Deck Cache; Lost → Ghost +3 swaps.",
      "artCatEerieRule": "Eerie Echoes (Skeleton, Doll, Mannequin, Toys, etc.): While active hideout → Ghost +1 swap; Sealed → Medium +2 swaps.",
      "roomTraitPillarRule": "Structural Pillars (Basement, Attic, Boiler Room, Lighthouse): When lost, the collapse forces both Medium & Ghost to swap 2 random cards.",
      "roomTraitQuietRule": "Quiet Sanctuaries (Library, Chapel, Bedroom, Greenhouse, Gazebo): While active hideout → Medium gets +1 free card swap.",
      "roomTraitEchoRule": "Echo Corridors (Corridor, Living Room, Dining Room, Crypt, Servants): While active hideout → Ghost gets +2 free card swaps.",
      "roomTraitArchiveRule": "Storage Rooms (Workshop, Kitchen, Study, Cellar, Morgue, Pharmacy): When sealed → Medium gets +2 card swaps next round.",
      "riskRuleDesc": "Up to twice per match, Medium can Widen Channel (swap 1–3 cards, giving Ghost +2 swaps, or −15s timer in Duo). Once per match, Ghost can trigger Wall Collapse (redraw full 5-card hand, giving Hunters +30s).",
      "catchUpRuleDesc": "When Hunters trail (3+ lost rooms), Medium gains +1 swap every round. When Ghost is cornered (3+ sealed), Ghost gains +2 swaps."
    }
  },
  "ROOM_TRANSLATIONS": {
    "room-1": {
      "ru": {
        "silver": "ПОДВАЛ",
        "gold": "ТЕМНИЦА"
      },
      "en": {
        "silver": "BASEMENT",
        "gold": "DUNGEON"
      }
    },
    "room-2": {
      "ru": {
        "silver": "СПАЛЬНЯ",
        "gold": "КЛАССНАЯ"
      },
      "en": {
        "silver": "BEDROOM",
        "gold": "CLASSROOM"
      }
    },
    "room-3": {
      "ru": {
        "silver": "КОРИДОР",
        "gold": "САД"
      },
      "en": {
        "silver": "CORRIDOR",
        "gold": "GARDEN"
      }
    },
    "room-4": {
      "ru": {
        "silver": "ОРАНЖЕРЕЯ",
        "gold": "АЛЛЕЯ"
      },
      "en": {
        "silver": "GREENHOUSE",
        "gold": "ALLEY"
      }
    },
    "room-5": {
      "ru": {
        "silver": "ГОСТИНАЯ",
        "gold": "ПАРАДНАЯ"
      },
      "en": {
        "silver": "LIVING ROOM",
        "gold": "FRONT HALL"
      }
    },
    "room-6": {
      "ru": {
        "silver": "ЗАДНИЙ ДВОР",
        "gold": "ТАЙНАЯ КОМНАТА"
      },
      "en": {
        "silver": "BACKYARD",
        "gold": "SECRET ROOM"
      }
    },
    "room-7": {
      "ru": {
        "silver": "МАСТЕРСКАЯ",
        "gold": "ЛАБОРАТОРИЯ"
      },
      "en": {
        "silver": "WORKSHOP",
        "gold": "LABORATORY"
      }
    },
    "room-8": {
      "ru": {
        "silver": "ЧАСОВНЯ",
        "gold": "БИБЛИОТЕКА"
      },
      "en": {
        "silver": "CHAPEL",
        "gold": "LIBRARY"
      }
    },
    "room-9": {
      "ru": {
        "silver": "ЧЕРДАК",
        "gold": "КАБИНЕТ"
      },
      "en": {
        "silver": "ATTIC",
        "gold": "STUDY"
      }
    },
    "room-10": {
      "ru": {
        "silver": "БАССЕЙН",
        "gold": "ВАННАЯ"
      },
      "en": {
        "silver": "SWIMMING POOL",
        "gold": "BATHROOM"
      }
    },
    "room-11": {
      "ru": {
        "silver": "СТОЛОВАЯ",
        "gold": "КУХНЯ"
      },
      "en": {
        "silver": "DINING ROOM",
        "gold": "KITCHEN"
      }
    },
    "room-12": {
      "ru": {
        "silver": "КЕЛЬЯ",
        "gold": "ДЕТСКАЯ"
      },
      "en": {
        "silver": "CELL",
        "gold": "NURSERY"
      }
    },
    "room-occ-1": {
      "ru": {
        "silver": "РИТУАЛЬНЫЙ ЗАЛ",
        "gold": "КУНСТКАМЕРА"
      },
      "en": {
        "silver": "RITUAL HALL",
        "gold": "CURIOSITY CABINET"
      }
    },
    "room-occ-2": {
      "ru": {
        "silver": "СПИРИТИЧЕСКАЯ",
        "gold": "АРХИВ"
      },
      "en": {
        "silver": "SEANCE ROOM",
        "gold": "ARCHIVE"
      }
    },
    "room-occ-3": {
      "ru": {
        "silver": "БАШНЯ АСТРОЛОГА",
        "gold": "КОЛОКОЛЬНЯ"
      },
      "en": {
        "silver": "ASTROLOGER TOWER",
        "gold": "BELL TOWER"
      }
    },
    "room-occ-4": {
      "ru": {
        "silver": "ТАЙНОЕ СВЯТИЛИЩЕ",
        "gold": "КАТАКОМБЫ"
      },
      "en": {
        "silver": "SECRET SANCTUARY",
        "gold": "CATACOMBS"
      }
    },
    "room-for-1": {
      "ru": {
        "silver": "ВИННЫЙ ПОГРЕБ",
        "gold": "ОРУЖЕЙНАЯ"
      },
      "en": {
        "silver": "WINE CELLAR",
        "gold": "ARMORY"
      }
    },
    "room-for-2": {
      "ru": {
        "silver": "КОТЕЛЬНАЯ",
        "gold": "ШАХТА ЛИФТА"
      },
      "en": {
        "silver": "BOILER ROOM",
        "gold": "ELEVATOR SHAFT"
      }
    },
    "room-for-3": {
      "ru": {
        "silver": "ПРАЧЕЧНАЯ",
        "gold": "ШВЕЙНАЯ"
      },
      "en": {
        "silver": "LAUNDRY",
        "gold": "SEWING ROOM"
      }
    },
    "room-for-4": {
      "ru": {
        "silver": "КОМНАТА ПРИСЛУГИ",
        "gold": "ЧЕРНЫЙ ХОД"
      },
      "en": {
        "silver": "SERVANTS QUARTERS",
        "gold": "BACK STAIRS"
      }
    },
    "room-med-1": {
      "ru": {
        "silver": "МОРГ",
        "gold": "РЕГИСТРАТУРА"
      },
      "en": {
        "silver": "MORGUE",
        "gold": "RECEPTION"
      }
    },
    "room-med-2": {
      "ru": {
        "silver": "ОПЕРАЦИОННАЯ",
        "gold": "РЕНТГЕН-КАБИНЕТ"
      },
      "en": {
        "silver": "OPERATING ROOM",
        "gold": "X-RAY ROOM"
      }
    },
    "room-med-3": {
      "ru": {
        "silver": "АПТЕКА",
        "gold": "АЛХИМИЧЕСКАЯ"
      },
      "en": {
        "silver": "PHARMACY",
        "gold": "ALCHEMY LAB"
      }
    },
    "room-med-4": {
      "ru": {
        "silver": "ИЗОЛЯТОР",
        "gold": "КАБИНЕТ ГЛАВВРАЧА"
      },
      "en": {
        "silver": "ISOLATION WARD",
        "gold": "DIRECTOR OFFICE"
      }
    },
    "room-gr-1": {
      "ru": {
        "silver": "СКЛЕП",
        "gold": "ЛАБИРИНТ"
      },
      "en": {
        "silver": "CRYPT",
        "gold": "HEDGE MAZE"
      }
    },
    "room-gr-2": {
      "ru": {
        "silver": "МАЯК",
        "gold": "МЕЛЬНИЦА"
      },
      "en": {
        "silver": "LIGHTHOUSE",
        "gold": "WINDMILL"
      }
    },
    "room-gr-3": {
      "ru": {
        "silver": "БЕСЕДКА",
        "gold": "СТАРЫЙ КОЛОДЕЦ"
      },
      "en": {
        "silver": "GAZEBO",
        "gold": "OLD WELL"
      }
    },
    "room-gr-4": {
      "ru": {
        "silver": "ЛОДОЧНЫЙ САРАЙ",
        "gold": "КОНЮШНЯ"
      },
      "en": {
        "silver": "BOATHOUSE",
        "gold": "STABLES"
      }
    }
  },
  "ARTIFACT_TRANSLATIONS": {
    "art-1": {
      "ru": "Камин",
      "en": "Fireplace"
    },
    "art-2": {
      "ru": "Бензопила",
      "en": "Chainsaw"
    },
    "art-3": {
      "ru": "Кресло-качалка",
      "en": "Rocking Chair"
    },
    "art-4": {
      "ru": "Зеркало",
      "en": "Mirror"
    },
    "art-5": {
      "ru": "Фортепиано",
      "en": "Piano"
    },
    "art-6": {
      "ru": "Игрушки",
      "en": "Toys"
    },
    "art-7": {
      "ru": "Полароид",
      "en": "Polaroid"
    },
    "art-8": {
      "ru": "Гобелен",
      "en": "Tapestry"
    },
    "art-9": {
      "ru": "Доспехи",
      "en": "Armor"
    },
    "art-10": {
      "ru": "Сундук",
      "en": "Chest"
    },
    "art-11": {
      "ru": "Часы",
      "en": "Clock"
    },
    "art-12": {
      "ru": "Патефон",
      "en": "Gramophone"
    },
    "art-13": {
      "ru": "Омела",
      "en": "Mistletoe"
    },
    "art-14": {
      "ru": "Фолиант",
      "en": "Tome"
    },
    "art-15": {
      "ru": "Скелет",
      "en": "Skeleton"
    },
    "art-16": {
      "ru": "Канделябр",
      "en": "Candelabrum"
    },
    "art-17": {
      "ru": "Тыква",
      "en": "Pumpkin"
    },
    "art-18": {
      "ru": "Ружьё",
      "en": "Rifle"
    },
    "art-occ-1": {
      "ru": "Доска Уиджи",
      "en": "Ouija Board"
    },
    "art-occ-2": {
      "ru": "Колода Таро",
      "en": "Tarot Deck"
    },
    "art-occ-3": {
      "ru": "Хрустальный шар",
      "en": "Crystal Ball"
    },
    "art-occ-4": {
      "ru": "Ритуальный кинжал",
      "en": "Ritual Dagger"
    },
    "art-occ-5": {
      "ru": "Кукла вуду",
      "en": "Voodoo Doll"
    },
    "art-occ-6": {
      "ru": "Черный гримуар",
      "en": "Black Grimoire"
    },
    "art-for-1": {
      "ru": "Музыкальная шкатулка",
      "en": "Music Box"
    },
    "art-for-2": {
      "ru": "Связка ржавых ключей",
      "en": "Rusty Keys"
    },
    "art-for-3": {
      "ru": "Керосиновая лампа",
      "en": "Kerosene Lamp"
    },
    "art-for-4": {
      "ru": "Дубовая бочка",
      "en": "Oak Barrel"
    },
    "art-for-5": {
      "ru": "Старый манекен",
      "en": "Old Mannequin"
    },
    "art-for-6": {
      "ru": "Треснувшая кукла",
      "en": "Cracked Doll"
    },
    "art-med-1": {
      "ru": "Скальпель",
      "en": "Scalpel"
    },
    "art-med-2": {
      "ru": "Шприц с сывороткой",
      "en": "Serum Syringe"
    },
    "art-med-3": {
      "ru": "Банка с образцом",
      "en": "Specimen Jar"
    },
    "art-med-4": {
      "ru": "Инвалидное кресло",
      "en": "Wheelchair"
    },
    "art-med-5": {
      "ru": "Стетоскоп",
      "en": "Stethoscope"
    },
    "art-med-6": {
      "ru": "Карта пациента",
      "en": "Patient Chart"
    },
    "art-gr-1": {
      "ru": "Лопата могильщика",
      "en": "Gravedigger Shovel"
    },
    "art-gr-2": {
      "ru": "Морской компас",
      "en": "Marine Compass"
    },
    "art-gr-3": {
      "ru": "Клетка ворона",
      "en": "Raven Cage"
    },
    "art-gr-4": {
      "ru": "Кованый фонарь",
      "en": "Wrought Lantern"
    },
    "art-gr-5": {
      "ru": "Солнечные часы",
      "en": "Sundial"
    },
    "art-gr-6": {
      "ru": "Старое весло",
      "en": "Old Oar"
    }
  },
  "EXPANSION_TRANSLATIONS": {
    "mansion": {
      "ru": {
        "title": "Покинутый особняк",
        "subtitle": "Часть I",
        "desc": "Мрачные коридоры заброшенного поместья скрывают древнюю тайну и зловещее существо."
      },
      "en": {
        "title": "The Abandoned Mansion",
        "subtitle": "Part I",
        "desc": "Gloomy corridors of an abandoned estate hide an ancient secret and a sinister entity."
      }
    },
    "secrets": {
      "ru": {
        "title": "Секреты Советов",
        "subtitle": "Часть III",
        "desc": "Раскройте тайны культистов и империалистических шпионов в секретных бункерах."
      },
      "en": {
        "title": "Secrets of the Soviets",
        "subtitle": "Part III",
        "desc": "Uncover cultist mysteries and imperialist spies in secret underground bunkers."
      }
    },
    "ancients": {
      "ru": {
        "title": "Пробуждение Древних",
        "subtitle": "Часть II",
        "desc": "Древние проклятия пробуждаются в забытых святилищах. Готовы ли вы встретить неизведанное?"
      },
      "en": {
        "title": "Awakening of the Ancients",
        "subtitle": "Part II",
        "desc": "Ancient curses awaken in forgotten sanctuaries. Are you ready to face the unknown?"
      }
    },
    "space": {
      "ru": {
        "title": "Крик в космосе",
        "subtitle": "Часть I. Пустота",
        "desc": "Выживайте на дрейфующем космическом корабле в глубоком вакууме."
      },
      "en": {
        "title": "Space Scream",
        "subtitle": "Part I. The Void",
        "desc": "Survive aboard a drifting spaceship in the deep vacuum of space."
      }
    }
  }
};
