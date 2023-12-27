// events.js

export const events = [
    {
      id: '10',
      title: 'Event 1',
      start: '2023-12-27',
      end: '2023-12-28',
      allDay: true,
      type: 'dayOff',
      color: 'green',
      description:'test desc',
    },
    {
      id: '20',
      title: 'Event 2',
      start: '2023-12-27',
      end: '2023-12-28',
      allDay: true
    },
    {
        id: '30',
        title: 'bEvent 3',
        start: '2024-01-03',
        end: '2024-01-04',
        allDay: true
      },
      {
        id: '40',
        title: 'aEvent 4',
        start: '2024-01-03',
        end: '2024-01-04',
        allDay: true
      },
      {
        id: '50',
        title: 'aEvent 5',
        start: '2024-01-03',
        end: '2024-01-04',
        allDay: true,
        color:'green',
        type: 'dayOff',
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
        type:'dayOff'
    },
    {
      id: '4',
      title: 'Unsc Event 2',
      color:'pink',
      description:'test desc',
    },
    // other unscheduled events
  ];