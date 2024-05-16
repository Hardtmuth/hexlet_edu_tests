import itinerary from '../itinerary.js';
import tree from '../__fixtures__/itinerary_tree.js';

test('itinerary', () => {
  expect(itinerary(tree, 'Dubna', 'Kostroma'))
    .toEqual(['Dubna', 'Tver', 'Moscow', 'Ivanovo', 'Kostroma']);
  expect(itinerary(tree, 'Borisovka', 'Kurchatov'))
    .toEqual(['Borisovka', 'Belgorod', 'Kursk', 'Kurchatov']);
});
