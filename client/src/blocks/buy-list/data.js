export default {
  buylist: {
    showName: 'Продажи',
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
        name: 'date',
        showName: 'Дата',
        type: 'string',
      },
      {
        name: 'sum',
        showName: 'Сумма',
        type: 'string',
      },
      {
        name: 'client',
        showName: 'Контрагент',
        type: 'string',
      },
      {
        name: 'empl',
        showName: 'Сотрудник',
        type: 'string',
      },
    ],
    items: [
      {
        id: 1,
        name: 'Квартира 35кв м',
        sum: '1443333',
        date: '04-06-19',
        client: 'Иванов Пётр Васильевич',
        empl: 'Евгений'
      },
      {
        id: 2,
        name: 'Квартира 55кв м',
        sum: '53222221',
        date: '04-06-19',
        client: 'Сергеев Василий Игоревич',
        empl: 'Евгений'
      },
  
    ]
  },
}