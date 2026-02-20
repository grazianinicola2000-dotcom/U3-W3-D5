import { ChevronRight } from "lucide-react";

const NewEpisodes = function () {
  return (
    <section>
      <div className="flex align-text-bottom mt-10 mb-2 relative">
        <h2 className="text-xl">Nuovi episodi radio</h2>
        <ChevronRight className="w-[20px] absolute left-44 top-0.5 text-icons" />
      </div>
      <div className="overflow-hidden flex gap-4 ">
        <div className="w-[150px] flex-shrink-0">
          <img className="rounded-lg" src="/2a.png" alt="prologo_con_Abuelo" />
          <div className="flex justify-between items-center mt-1">
            <p className="text-xs">Prólogo con Abuelo</p>
            <i className="bi bi-explicit-fill text-xs text-icons"></i>
          </div>
        </div>
        <div className="w-[150px] flex-shrink-0">
          <img className="rounded-lg" src="/2b.png" alt="prologo_con_Abuelo" />
          <div className="flex justify-between items-center mt-1">
            <p className="text-xs">The Wanderer</p>
          </div>
        </div>
        <div className="w-[150px] flex-shrink-0">
          <img className="rounded-lg" src="/2c.png" alt="prologo_con_Abuelo" />
          <div className="flex justify-between items-center mt-1">
            <p className="text-xs">Michael Bublé & Carly Pearce</p>
          </div>
        </div>
        <div className="w-[150px] flex-shrink-0">
          <img className="rounded-lg" src="/2d.png" alt="prologo_con_Abuelo" />
          <div className="flex justify-between items-center mt-1">
            <p className="text-xs">Stephan Moccio: The Zane Lowe Interview</p>
          </div>
        </div>
        <div className="w-[150px] flex-shrink-0">
          <img className="rounded-lg" src="/2e.png" alt="prologo_con_Abuelo" />
          <div className="flex justify-between items-center mt-1">
            <p className="text-xs">Chart Spotlight: Julia Michaels</p>
          </div>
        </div>
        <div className="w-[150px] flex-shrink-0">
          <img className="rounded-lg" src="/2f.png" alt="prologo_con_Abuelo" />
          <div className="flex justify-between items-center mt-1">
            <p className="text-xs">Karri & Travis</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewEpisodes;
