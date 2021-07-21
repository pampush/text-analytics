## Второе задание 
    Подробно прокомментировал код функций, без входных данных довольно непросто работать.
## Первое задание
  ### Описание
    Чтобы по-честному решить задачу без хардкода гласных букв была следующая идея: переводить все тексты
    в формат IPA (International Phonetic Alphabet), однако API для такой задачи в открытом доступе нет.
    Есть такой сервис https://easypronunciation.com/ (таджикского здесь очевидно нет), но он платный.  
    Затем я бы попробовал выделить закономерности/соотношения между транскрипцией и гласными в разных языках.
    
    Поэтому я просто определяю язык текста с помощью Google Cloud Translation API и итерируюсь по всему тексту,
    сверяя символ с гласными в файле languagesMap.json.  
    
    Единственный момент непонятный в ТЗ - как должны подсвечиваться неккоректные подстроки. 
    Я сделал динамический блок с ошибками под полем ввода.
  ### React
    Все элементы, в которых используется styled-components я постарался сделать независимыми и 
    реюзабельными, чтобы их можно было использовать в других компонентах или приложениях.
    Постарался обеспечить удобную структуру файлов и директорий проекта.
  ### Redux
  В redux хранятся:
  - texts  
    - items - содержащий текст и его метаинформация
    - loading - для UX функциональности, информирования пользователя
    - errors - для вывода ошибок в виде всплывающего уведомления
   

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
