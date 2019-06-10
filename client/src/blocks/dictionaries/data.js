export default {
  banks: {
    showName: 'Банки',
    schema: [
      {
        name: 'id',
        type: 'number',
      },
      {
        name: 'name',
        showName: 'Название',
        type: 'string',
      },
      {
        name: 'bik',
        showName: 'БИК',
        type: 'string',
      }
    ],
    items: [
      {
        id: 1,
        name: 'ВТБ',
        bik: '12312412412424',
      },
      {
        id: 2,
        name: 'Сбербанк',
        bik: '12312412412424',
      },
      {
        id: 3,
        name: 'Росбанк',
        bik: '12312412412424',
      },
      {
        id: 4,
        name: 'Тинькоф',
        bik: '12312412412424',
      },
    ]
  },
  empls: {
    showName: 'Должности',
    schema: [
      {
        name: 'id',
        type: 'number',
      },
      {
        name: 'name',
        showName: 'Наименование должности',
        type: 'string',
      },
      {
        name: 's_name',
        showName: 'Краткое название',
        type: 'string',
      },

    ],
    items: [
      {
        id: 1,
        name: 'Продавец',
        s_name: 'Продавец',
      },
      {
        id: 2,
        name: 'Коммерческий директор',
        s_name: 'Ком.директор',
      },

    ]
  },
  measurements: {
    showName: 'Еденицы измерения',
    schema: [
      {
        name: 'id',
        type: 'number',
      },
      {
        name: 'name',
        showName: 'Наименование единицы',
        type: 'string',
      },
      {
        name: 's_name',
        showName: 'Краткое название',
        type: 'string',
      },

    ],
    items: [
      {
        id: 1,
        name: 'Штуки',
        s_name: 'шт',
      },
      {
        id: 2,
        name: 'Часы',
        s_name: 'ч',
      },

    ]
  },
  apps: {
    showName: 'Квартиры',
    schema: [
      {
        name: 'id',
        type: 'number'
      },
      {
        name: 'name',
        showName: 'Название',
        type: 'string'
      },
      {
        name: 'area',
        showName: 'Площадь',
        type: 'float',
      },
      {
        name: 'address',
        showName: 'Адрес',
        type: 'adress',
      },
      {
        name: 'measure_type',
        showName: 'Измерение',
        type: 'link',
        link: 'measurements',
      }
    ],
    items: [
      {
        id: 1,
        name: 'Двухкомнатная',
        area: 43.5,
        measure_type: 2,
        address: 'Терешковой 111',
      },
      {
        id: 2,
        name: 'Однокомнатная',
        area: 434.5,
        measure_type: 2,
        address: 'Брестская 23',
      },
      {
        id: 3,
        name: 'Однокомнатная',
        area: 13.5,
        measure_type: 2,
        address: 'Родимцева 92',
      },
      {
        id: 4,
        name: 'Место в общежитии',
        area: 423.5,
        measure_type: 2,
        address: 'Чкалова 3',
      },


    ]
  },
  services: {
    schema: [
      {
        name: 'id',
        type: 'number',
      },
      {
        name: 'name',
        showName: 'Название',
        type: 'string',
      }
    ],
    showName: 'Услуги',
    items: [
    ]
  },
}