// app/LeftColumn.tsx
import { unscheduledEvents } from './events'; 

const LeftColumn = () => {
    const truncate = (str, num) => {
      if (str.length <= num) {
        return str;
      }
      return str.slice(0, num) + '';
    };
  
    return (
      <div id="draggable-el" className="col-span-2 w-full p-2 lg:h-1/2 ">
        <h1 className="font-bold text-lg text-center">Unscheduled Tasks</h1>
        {unscheduledEvents.map(event => (
          <div
            className="fc-event border-2 w-full text-center bg-white"
            title={event.title}
            key={event.id}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '5px',
              padding: '0px',
              borderRadius: '0', // square corners
            }}
          >
            <div 
              style={{
                backgroundColor: event.color, // background color from the event
                width: '100%',
                textAlign: 'center',
              }}
            >
              <div style={{fontSize: '12px', color: 'white', padding: '2px', textAlign:'left'}}
                title={event.title} // tooltip
              >
                {truncate(event.title, 15)}
              </div>
            </div>
            <div style={{fontSize: '10px', width:'100%', padding: '2px', textAlign:'left'}}>
            {event.description}<br/>
            {event.salesman}<br/>
            {event.estHours}<br/>
            {event.finishBy}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default LeftColumn;