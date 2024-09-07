import { ReservationPlace } from '../type/reservation';

const reservationPlaces: ReservationPlace[] = [
  {
    'id': '9d593d31-abcf-4a5b-a9aa-62d68ff73a22',
    'location': {
      'address': 'Полюстровский пр.,84, м. Лесная',
      'coords': [
        59.987803542201036,
        30.352889458736357
      ]
    },
    'slots': {
      'today': [
        {
          'time': '14:00',
          'isAvailable': false
        },
        {
          'time': '15:00',
          'isAvailable': true
        },
        {
          'time': '16:00',
          'isAvailable': true
        },
        {
          'time': '17:00',
          'isAvailable': true
        },
        {
          'time': '18:00',
          'isAvailable': true
        },
        {
          'time': '19:00',
          'isAvailable': true
        },
        {
          'time': '20:00',
          'isAvailable': true
        }
      ],
      'tomorrow': [
        {
          'time': '14:00',
          'isAvailable': true
        },
        {
          'time': '15:00',
          'isAvailable': false
        },
        {
          'time': '16:00',
          'isAvailable': true
        },
        {
          'time': '17:00',
          'isAvailable': true
        },
        {
          'time': '18:00',
          'isAvailable': false
        },
        {
          'time': '19:00',
          'isAvailable': false
        },
        {
          'time': '20:00',
          'isAvailable': false
        }
      ]
    }
  },
  {
    'id': '2aed03d8-49a5-4e2d-9be8-86dff030c0f8',
    'location': {
      'address': 'Автозаводский пр-д, 1, м. Шушары',
      'coords': [
        59.82179701478202,
        30.42098372734333
      ]
    },
    'slots': {
      'today': [
        {
          'time': '14:00',
          'isAvailable': true
        },
        {
          'time': '15:00',
          'isAvailable': true
        },
        {
          'time': '16:00',
          'isAvailable': true
        },
        {
          'time': '17:00',
          'isAvailable': false
        },
        {
          'time': '18:00',
          'isAvailable': true
        },
        {
          'time': '19:00',
          'isAvailable': false
        },
        {
          'time': '20:00',
          'isAvailable': false
        }
      ],
      'tomorrow': [
        {
          'time': '14:00',
          'isAvailable': true
        },
        {
          'time': '15:00',
          'isAvailable': true
        },
        {
          'time': '16:00',
          'isAvailable': true
        },
        {
          'time': '17:00',
          'isAvailable': true
        },
        {
          'time': '18:00',
          'isAvailable': true
        },
        {
          'time': '19:00',
          'isAvailable': true
        },
        {
          'time': '20:00',
          'isAvailable': false
        }
      ]
    }
  }
];

export const getReservationPlaces = () => reservationPlaces;
