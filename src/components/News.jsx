const News = function () {
  return (
    <section className="mt-[20px]">
      <div className="border-b border-bg-secondary mr-[20px]">
        <h1 className="text-4xl pb-[10px]">Novità</h1>
      </div>
      <div className="overflow-hidden flex gap-4 ">
        <div className="mt-2 w-[320px] md:w-[500px] flex-shrink-0">
          <h6 className="text-icons text-xs font-bold">NUOVA STAZIONE RADIO</h6>
          <p className="text-sm mb-2">Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill</p>
          <img className="rounded-lg mt-auto" src="/1a.png" alt="chill" />
        </div>
        <div className="mt-2 w-[320px] md:w-[500px] flex-shrink-0 flex flex-col">
          <h6 className="text-icons text-xs font-bold">NUOVA STAZIONE RADIO</h6>
          <p className="text-sm mb-2">Ecco la nuova casa della musica latina</p>
          <img className="rounded-lg mt-auto" src="/1b.png" alt="latina" />
        </div>
      </div>
    </section>
  );
};

export default News;
