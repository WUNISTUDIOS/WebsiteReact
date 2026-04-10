const MachineButton = ({ className = "" }) => (
  <div
    className={`font-thin text-[clamp(10px,2.5vw,30px)] border border-black text-black flex items-center justify-center rounded-lg tracking-widest whitespace-nowrap px-8 py-4 hover:scale-105 transition-transform cursor-pointer ${className}`}
  >
    MACHINE
  </div>
);

const LoveButton = ({ className = "" }) => (
  <div
    className={`font-thin text-[clamp(10px,2.5vw,30px)] border border-black text-black flex items-center justify-center rounded-lg tracking-widest whitespace-nowrap px-8 py-4 hover:scale-105 transition-transform cursor-pointer ${className}`}
  >
    LOV3
  </div>
);

const OBButton = ({ className = "" }) => (
  <div
    className={`font-thin text-[clamp(10px,2.5vw,30px)] border border-black text-black flex items-center justify-center rounded-lg tracking-widest whitespace-nowrap px-8 py-4 hover:scale-105 transition-transform cursor-pointer ${className}`}
  >
    OPEN BORDERS
  </div>
);

export { LoveButton, MachineButton, OBButton };