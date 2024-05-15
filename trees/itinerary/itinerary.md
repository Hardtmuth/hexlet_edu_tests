# Построение маршрута

Реализуйте и экспортируйте по умолчанию функцию, которая выстраивает маршрут между городами.

Функция принимает 3 аргумента:

- дерево городов
- город старта
- город окончания маршрута

и возвращает массив городов, выстроенный в том же порядке, в котором они находятся на пути следования по маршруту.

Примеры:
```js
const tree = ['Moscow', [
  ['Smolensk'],
  ['Yaroslavl'],
  ['Voronezh', [
    ['Liski'],
    ['Boguchar'],
    ['Kursk', [
      ['Belgorod', [
        ['Borisovka'],
      ]],
      ['Kurchatov'],
    ]],
  ]],
  ['Ivanovo', [
    ['Kostroma'], ['Kineshma'],
  ]],
  ['Vladimir'],
  ['Tver', [
    ['Klin'], ['Dubna'], ['Rzhev'],
  ]],
]];

itinerary(tree, 'Dubna', 'Kostroma');
// ['Dubna', 'Tver', 'Moscow', 'Ivanovo', 'Kostroma']

itinerary(tree, 'Borisovka', 'Kurchatov');
// ['Borisovka', 'Belgorod', 'Kursk', 'Kurchatov']
```
https://ru.hexlet.io/challenges/js_trees_itinerary_exercise