// app/Calendar.tsx
import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

const Calendar = ({ events, handleDateClick, addEvent, handleDeleteModal }) => {
    const [dayMaxEvents, setDayMaxEvents] = useState(3); // default value

    
  return (
    <FullCalendar
              plugins={[
                dayGridPlugin,
                interactionPlugin,
                timeGridPlugin
              ]}
              headerToolbar={{
                // left: 'prev,next today',
                // center: 'title',
                right: 'oneWeek twoWeeks threeWeeks dayGridMonth'
                // left: '',
                // center: '',
                // right: ''
              }}
            // headerToolbar={false}
              events={events}
              nowIndicator={true}
              editable={true}
              droppable={true}
              selectable={true}
              selectMirror={true}
              dateClick={handleDateClick}
              drop={(data) => addEvent(data)}
              eventClick={(data) => handleDeleteModal(data)}
              dayCellContent={(args) => {
                const date = args.date;
                const isOtherMonth = date.getMonth() !== new Date().getMonth();
                if (isOtherMonth) {
                  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                  const monthName = monthNames[date.getMonth()].toUpperCase();
                  return `${monthName} ${date.getDate()}`;
                } else {
                  return date.getDate();
                }
              }}
              dayMaxEventRows={ true}
              viewDidMount={(viewInfo) => {
                switch (viewInfo.view.type) {
                  case 'oneWeek':
                    setDayMaxEvents(2);
                    break;
                  case 'twoWeeks':
                    setDayMaxEvents(8);
                    break;
                  case 'threeWeeks':
                    setDayMaxEvents(4);
                    break;
                  default:
                    setDayMaxEvents(8);
                }
              }}
              views={{
                oneWeek: {
                  type: 'dayGrid',
                  duration: { weeks: 1 },
                  dayMaxEventRows: 12,
                  buttonText: '1 week'
                },
                twoWeeks: {
                  type: 'dayGrid',
                  duration: { weeks: 2 },
                  dayMaxEventRows: 8,
                  buttonText: '2 weeks'
                },
                threeWeeks: {
                  type: 'dayGrid',
                  duration: { weeks: 3 },
                  dayMaxEventRows: dayMaxEvents,
                  buttonText: '3 weeks'
                }
              }}
            />
  );
};

export default Calendar;