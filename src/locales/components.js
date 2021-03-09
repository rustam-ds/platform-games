import { arrowLeft, arrowRight, plugGamePic } from 'src/assets';

export const components = {
  main: {
    sort: {
      label: 'Сортировать по:',
      options: [
        { id: 1, name: 'Сначала высокий рейтинг' },
        { id: 2, name: 'Сначала низкий рейтинг' },
        { id: 3, name: 'Сначала новые игры' },
        { id: 4, name: 'Сначала старые игры' },
      ],
    },
    filter: {
      label: 'Фильтрация по платформам',
      elseOption: 'Все',
    },
    search: {
      label: 'Поиск по названию',
      placeholder: 'Введите название игры',
    },
    cards: {
      rateLabel: 'Рейтинг:',
      dateLabel: 'Дата релиза:',
      plugPhoto: {
        img: plugGamePic,
      },
      pagination: {
        prev: 'Предыдущая',
        next: 'Следующая',
      },
    },
  },
  game: {
    linkSiteLabel: 'Перейти на сайт игры:',
    slider: {
      arrows: {
        left: arrowLeft,
        right: arrowRight,
      },
    },
  },
  header: {
    title: 'Платформа игр',
  },
  footer: {
    lawInfo: 'Все права защищены',
  },
};
