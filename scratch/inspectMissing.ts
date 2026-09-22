import { ASSETS } from '../src/data/assets';

const sampleMissingWeight = ASSETS.filter(a => a.specs.weightDisplacement === 'Not publicly disclosed').slice(0, 5);
console.log('--- Sample Assets Missing Weight ---');
sampleMissingWeight.forEach(a => {
  console.log(`[${a.branchId} / ${a.categoryId}] ${a.name}: keys in object: ${Object.keys(a).join(', ')}`);
  console.log('raw specs:', JSON.stringify(a.specs, null, 2));
});
