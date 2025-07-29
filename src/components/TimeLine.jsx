function TimeLine({ events = [] }) {
  return (
    <ul role="list" className="group m-8 max-w-screen-md m-auto">
      {events.map((event, eventIndex) => (
        <li
          key={eventIndex}
          className="group relative flex flex-col pb-8 pl-7 last:pb-0 transition-all duration-300 group-hover:opacity-50 hover:!opacity-100 hover:scale-[1.02]"
        >
          <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-white/10 transition-colors duration-300 group-first:top-3 group-hover:bg-sky-300"></div>
          <div className="absolute left-0 top-2 h-2 w-2 rounded-full border border-sky-300 bg-zinc-950 transition-all duration-300 group-hover:border-sky-400 group-hover:bg-sky-500 group-hover:shadow-lg group-hover:shadow-sky-400/50"></div>
          <h3 className="mt-2 text-sm/6 font-semibold text-white">
            <a
              href={event.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors"
            >
              {event.title}
            </a>
          </h3>
          <p className="text-sm/6 text-sky-200">{event.position}</p>
          <p className="font-display text-2xs/6 order-first tracking-[0.2em] text-sky-300">{event.period}</p>
          <p className="mt-2 text-sm/6 text-zinc-400">{event.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default TimeLine;
