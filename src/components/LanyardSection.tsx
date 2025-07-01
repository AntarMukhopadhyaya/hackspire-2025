import Lanyard from "./blocks/Components/Lanyard/Lanyard";

const LanyardSection = () => (
  <section className="w-full flex flex-col items-center justify-center py-16">
    <h2 className="text-3xl font-bold text-white mb-8 text-center">
      Want to see ID card?
    </h2>
    <div className="w-full max-w-4xl h-[60vh] flex items-center justify-center">
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </div>
  </section>
);

export default LanyardSection;
