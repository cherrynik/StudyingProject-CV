[Cмотреть пример](https://ighosta9.github.io/Summary/)

Содержание
===

1. [Начало работы](#Начало-работы)
2. [Режимы разработки](#Режимы-разработки)
3. [Знакомство с файлами](#Знакомство-с-файлами)
  * [Корень](#Корень)
  * [src/](#src/)
  * [webpack/](#webpack/)


Начало работы
===

1. Установить [Node.JS](https://nodejs.org/en/)
2. Ввести в консоль: 
   
   а) `git clone git://github.com/ighosta9/summary.git` - загружаем репозиторий локально

   б) `cd ~/summary` - заходим в папку с данным репозиторием

   в) `npm install` - устанавливаем зависимости, прописанные в файле **package.json**

Теперь Вы можете использовать:
1. `npm run start`
2. `npm run build`
3. `npm run server`

> `npm run server` воспроизводит сайт из dist, создаваемой с помощью `npm run build`

Об этих режимах - [подробнее...](#Режимы-разработки)

Режимы разработки
===

Как Вы уже, наверняка, знаете в проекте существует несколько режимов. О них мы сейчас и поговорим.

> За **эти 2 режима** ответственнен файл package.json, благодаря которому мы задаём исполняемым командам настройки. А точнее: с какими именно параметрами будет запускаться та или иная задача.

В данном проекте есть **2 режима:**
1. Development (`--mode=development`)
2. Production (`--mode=production`)

У нас существует переменная **common**, в которой используются следующие плагины:

- [Webpack](https://webpack.js.org)
  - [Webpack Merge](https://webpack.js.org/guides/production/)
  - [Webpack.LoaderOptionsPlugin](https://webpack.js.org/plugins/loader-options-plugin)
  - [Webpack.ProvidePlugin](https://webpack.js.org/plugins/provide-plugin/)
- [babel-loader](https://babeljs.io/docs/en/)
  - [@babel/core](https://babeljs.io/docs/en/babel-core)
  - [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
- [HTML Webpack](https://webpack.js.org/plugins/html-webpack-plugin)
- [Clean Webpack](https://github.com/johnagan/clean-webpack-plugin)
- [Pug](https://pugjs.org)
  - [Pug Loader](https://github.com/pugjs/pug-loader)
- [Mini CSS Extract](https://webpack.js.org/plugins/mini-css-extract-plugin/)
  - [Optimize CSS Assets](https://webpack.js.org/plugins/mini-css-extract-plugin/)
  - [UglifyJS](https://github.com/webpack-contrib/uglifyjs-webpack-plugin)
- [File Loader](https://webpack.js.org/loaders/file-loader)


Тогда данные режимы содержат в себе следующие плагины:

| --mode=development | --mode=production |
| -- | -- |
| **common** | **common** |
| [Webpack DevServer](https://webpack.js.org/configuration/dev-server) | [Webpack Favicons](https://github.com/jantimon/favicons-webpack-plugin) |
| [Style Loader](https://webpack.js.org/loaders/style-loader) | [Mini CSS Extract](https://webpack.js.org/plugins/mini-css-extract-plugin/) |
| [CSS Loader](https://webpack.js.org/loaders/css-loader) | |
| [SASS Loader](https://webpack.js.org/loaders/sass-loader) | |

Знакомство с файлами
===

Корень
---

| Файл/Папка | Описание |
| - | - |
| [src/](https://github.com/ighosta9/Summary/tree/master/src) | Здесь хранятся исходные файлы сайта |
| [webpack/](https://github.com/ighosta9/Summary/tree/master/webpack) | Здесь хранятся файлы плагинов вебпака, их настройки |
| [.babelrc](https://github.com/ighosta9/Summary/blob/master/.babelrc) | Конфигурационный файл babel'а |
| [.gitignore](https://github.com/ighosta9/Summary/blob/master/.gitignore) | Файл, указывающий на файлы и папки, которые будут игнорироваться гитом, при передаче их в репозиторий |
| [package.json](https://github.com/ighosta9/Summary/blob/master/package.json) | Вся информация о проекте |
| [postcss.config.js](https://github.com/ighosta9/Summary/blob/master/postcss.config.js) | Конфигурационный файл плагина PostCSS |
| [webpack.config.js](https://github.com/ighosta9/Summary/blob/master/webpack.config.js) | Конфигурационный файл сборщика Webpack |

src/
---

| Файл/Папка | Описание |
| - | - |
| [block/](https://github.com/ighosta9/Summary/tree/master/src) | Здесь хранятся блоки сайта и их компоненты отдельно по папкам. По типу: *[главный уровень](https://github.com/ighosta9/Summary/tree/master/src/block/common), [проектный уровень](https://github.com/ighosta9/Summary/tree/master/src/block/project), [адаптивный уровень](https://github.com/ighosta9/Summary/tree/master/src/block/breakpoint)* (респонсив) |
| [fonts/](https://github.com/ighosta9/Summary/tree/master/src/fonts) | Здесь хранятся все шрифты. Каждое семейство шрифта в отдельной папке. |
| [img/](https://github.com/ighosta9/Summary/tree/master/src/img) | Здесь хранятся все изображения сайта. |
| [sass/](https://github.com/ighosta9/Summary/tree/master/src/sass) | Здесь собраны все стили блоков, а так же переменные цветов, шрифтов и т.д. |
| [index.js](https://github.com/ighosta9/Summary/blob/master/src/index.js) | Здесь подключен главный файл стилей и JS файлы блоков |
| [index.pug](https://github.com/ighosta9/Summary/blob/master/src/index.pug) | Здесь подключаются все блоки, хранящиеся в block/common, а в конце обёртка страницы, в которой - структура всего сайта |

webpack/
---

| Файл | Описание |
| - | - |
| [devserver.js](https://github.com/ighosta9/Summary/blob/master/webpack/devserver.js) | Конфигурационный файл плагина [Webpack DevServer](https://webpack.js.org/configuration/dev-server) |
| [favicon.js](https://github.com/ighosta9/Summary/blob/master/webpack/favicon.js) | Конфигурационный файл плагина [Webpack Favicons](https://github.com/jantimon/favicons-webpack-plugin) |
| [file-loader.js](https://github.com/ighosta9/Summary/blob/master/webpack/file-loader.js) | Конфигурационный файл плагина [File Loader](https://webpack.js.org/loaders/file-loader) |
| [html.js](https://github.com/ighosta9/Summary/blob/master/webpack/html.js) | Конфигурационный файл плагина [HTML Webpack](https://webpack.js.org/plugins/html-webpack-plugin) |
| [minicss.js](https://github.com/ighosta9/Summary/blob/master/webpack/minicss.js) | Конфигурационный файл плагина [Mini CSS Extract](https://webpack.js.org/plugins/mini-css-extract-plugin/) |
| [pug.js](https://github.com/ighosta9/Summary/blob/master/webpack/pug.js) | Конфигурационный файл плагина [Pug](https://pugjs.org) |
| [sass.js](https://github.com/ighosta9/Summary/blob/master/webpack/sass.js) | Конфигурационный файл плагина [SASS Loader](https://webpack.js.org/loaders/sass-loader) |
