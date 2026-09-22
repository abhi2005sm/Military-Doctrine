import { ASSETS } from '../src/data/assets';

console.log(`Total canonical assets: ${ASSETS.length}`);

let crewCount = 0;
let weightCount = 0;
let speedCount = 0;
let rangeCount = 0;
let powerCount = 0;
let armamentCount = 0;
let sensorsCount = 0;

ASSETS.forEach(a => {
  const s = a.specs;
  if (s.crew && s.crew !== 'N/A' && s.crew !== 'Unknown') crewCount++;
  if (s.weightDisplacement && s.weightDisplacement !== 'Not publicly disclosed') weightCount++;
  if (s.maxSpeed && s.maxSpeed !== 'Not publicly disclosed') speedCount++;
  if (s.operationalRange && s.operationalRange !== 'Not publicly disclosed') rangeCount++;
  if (s.propulsionPower && s.propulsionPower !== 'Not publicly disclosed' && !s.propulsionPower.includes('Not specified')) powerCount++;
  if (s.mainArmament && s.mainArmament.length > 0) armamentCount++;
  if (s.sensorsAvionics && s.sensorsAvionics.length > 0) sensorsCount++;
});

console.log(`Specs extraction summary:`);
console.log(`- Crew Complement: ${crewCount} / ${ASSETS.length}`);
console.log(`- Weight / Displacement: ${weightCount} / ${ASSETS.length}`);
console.log(`- Max Speed: ${speedCount} / ${ASSETS.length}`);
console.log(`- Operational Range: ${rangeCount} / ${ASSETS.length}`);
console.log(`- Propulsion / Power: ${powerCount} / ${ASSETS.length}`);
console.log(`- Armament & Ordnance: ${armamentCount} / ${ASSETS.length}`);
console.log(`- Sensors & Avionics: ${sensorsCount} / ${ASSETS.length}`);
