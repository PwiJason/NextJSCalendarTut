// app/LeftColumn.tsx

const LeftColumn = ({ events }) => {
    return (
      <div id="draggable-el" className="col-span-2 w-full border-2 p-2 rounded-md lg:h-1/2 bg-violet-50">
        <h1 className="font-bold text-lg text-center">Unscheduled Tasks</h1>
        {events.map(event => (
          <div
            className="fc-event border-2 p-1 m-2 w-full rounded-md ml-auto text-center bg-white"
            title={event.title}
            key={event.id}
          >
            {event.title}
          </div>
        ))}
      </div>
    );
  };
  
  export default LeftColumn;