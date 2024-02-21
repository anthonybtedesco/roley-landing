export function Video(props: { src: string }) {
  return (
    <div className="aspect-h-9 aspect-w-16">
      <iframe
        className="rounded-lg md:h-[405px] md:w-[720px] h-[281.25px] w-[500px] lg:h-[506.25px] lg:w-[900px]"
        src={props.src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}
