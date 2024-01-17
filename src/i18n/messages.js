import { LOCALES } from './locales'

export const messages = {
  [LOCALES.ENGLISH]: {
    learn_to: `Hello, let's learn how to use React-Intl`,
    price_display:
      'How {n, number, ::currency/USD} is displayed in your selected language',
    number_display:
      'This is how {n, number} is formatted in the selected locale',
    start_today: 'Start Today: {d, date}',
    // меню
    about_project: 'About the project',
    contact_us: 'Contact us',
    text: 'Text on English'
  },
  [LOCALES.RUSSIAN]: {
    learn_to: 'Привет, научимся использовать React-Intl',
    price_display:
      'Как {n, number, ::currency/RUB} отображается на выбранном языке',
    number_display:
      'Вот как {n, number} форматируется на основе выбранной локации',
    start_today: 'Начни сегодня: {d, date}',
    // меню
    about_project: 'О проекте',
    contact_us: 'Свяжитесь с нами',
    text: 'Текст на русском'
  },
}