// events.js

export const events = [
    {
      id: '10',
      title: 'Event 1',
      start: '2023-12-27',
      end: '2023-12-28',
      allDay: true,
      type: 'dayOff',
      description:'test desc',
    },
    {
      id: '20',
      title: 'Event 2',
      start: '2023-12-27',
      end: '2023-12-28',
      allDay: true
    },
    // other events with start and end dates
  ];
  
  export const unscheduledEvents = [
    {
      id: '3',
      title: 'Unsc Event 1',
      color: 'tan',
        description:'test desc',
        salesman: 'test salesman',
        estHours: 'test hours',
        finishBy: 'test date',
    },
    {
      id: '4',
      title: 'Unsc Event 2',
      color:'pink',
      description:'test desc',
    },
    // other unscheduled events
  ];