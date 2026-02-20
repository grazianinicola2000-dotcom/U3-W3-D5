import { ChevronRight } from "lucide-react";

const MoreToExplore = function () {
  return (
    <section className="pr-[30px]">
      <h2 className="mb-2 text-xl mt-8">Altro da esplorare</h2>
      <div className="grid grid-cols-1 auto-rows-[60px] text-info">
        <div className="bg-bg-secondary row-span-1 col-span-1 flex items-center px-3 rounded-lg flex justify-between mb-2">
          <p className="text-sm">Esplora per genere</p>
          <ChevronRight className="w-[20px]" />
        </div>
        <div className="bg-bg-secondary row-span-1 col-span-1 flex items-center px-3 rounded-lg flex justify-between mb-2">
          <p className="text-sm">Decenni</p>
          <ChevronRight className="w-[20px]" />
        </div>
        <div className="bg-bg-secondary row-span-1 col-span-1 flex items-center px-3 rounded-lg flex justify-between mb-2">
          <p className="text-sm">Attività e stati d'animo</p>
          <ChevronRight className="w-[20px]" />
        </div>
        <div className="bg-bg-secondary row-span-1 col-span-1 flex items-center px-3 rounded-lg flex justify-between mb-2">
          <p className="text-sm">Worldwide</p>
          <ChevronRight className="w-[20px]" />
        </div>
        <div className="bg-bg-secondary row-span-1 col-span-1 flex items-center px-3 rounded-lg flex justify-between mb-2">
          <p className="text-sm">Classifiche</p>
          <ChevronRight className="w-[20px]" />
        </div>
        <div className="bg-bg-secondary row-span-1 col-span-1 flex items-center px-3 rounded-lg flex justify-between mb-2">
          <p className="text-sm">Audio spaziale</p>
          <ChevronRight className="w-[20px]" />
        </div>
        <div className="bg-bg-secondary row-span-1 col-span-1 flex items-center px-3 rounded-lg flex justify-between mb-2">
          <p className="text-sm">Video musicali</p>
          <ChevronRight className="w-[20px]" />
        </div>
        <div className="bg-bg-secondary row-span-1 col-span-1 flex items-center px-3 rounded-lg flex justify-between mb-2">
          <p className="text-sm">Nuovi artisti</p>
          <ChevronRight className="w-[20px]" />
        </div>
        <div className="bg-bg-secondary row-span-1 col-span-1 flex items-center px-3 rounded-lg flex justify-between mb-2">
          <p className="text-sm">Hit del passato</p>
          <ChevronRight className="w-[20px]" />
        </div>
      </div>
    </section>
  );
};

export default MoreToExplore;
