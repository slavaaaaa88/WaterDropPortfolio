
WaterDropPortfolio

Готовый SPA-портфолио на React (glassmorphism, калькуляторы, AI-чат, аналитика, SEO).

**Публикация:**
1. Скопируйте все эти файлы в свой проект, удалите старые.
2. В cmd перейдите в папку и выполните по очереди:
   npm install
   npm start   # откроется http://localhost:3000
   npm run deploy
3. В репозитории GitHub: Settings → Pages → выберите ветку gh-pages (root).
4. Сайт – https://slavaaaaa88.github.io/WaterDropPortfolio

Структура:
WaterDropPortfolio
├── .gitignore
├── package.json
├── README.md
├── public
│   └── index.html
└── src
    ├── App.js
    ├── index.js
    ├── hooks
    │   └── usePageView.js
    ├── styles
    │   └── global.css
    └── components
        ├── Hero.js
        ├── ProjectGallery.js
        ├── CostCalculator.js
        ├── IdeaGenerator.js
        ├── ChatbotButton.js
        └── ContactForm.js
