const Footer = function () {
  return (
    <section className="text-footer bg-bg-footer px-10 pt-5 mt-5">
      <div className="flex pb-5">
        <p className="pr-4 border-r border-text-footer">Italia</p>
        <p className="pl-4 text-text-footer">English(UK)</p>
      </div>
      <p className="text-text-footer pb-2">
        Copyright © 2024 <span className="text-main-text">Apple Inc.</span> Tutti i diritti riservati.
      </p>
      <div className="flex flex-wrap pb-10 mb-10">
        <p className="pr-4 mr-4 border-r border-text-footer">Condizioni dei servizi internet</p>
        <p className="pr-4 mr-4 border-r border-text-footer">Apple Music e privacy</p>
        <p className="pr-4 mr-4 border-r border-text-footer">Avviso sui cookie</p>
        <p className="pr-4 mr-4 border-r border-text-footer">Supporto</p>
        <p className=" ">Feedback</p>
      </div>
    </section>
  );
};

export default Footer;
