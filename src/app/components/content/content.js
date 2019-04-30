const content = () => {
  const form = document.getElementById('form');
  const input = form.querySelector('.content__input');
  const button = form.querySelector('.content__btn');

  const hSteps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; // множество горизонтальных координат
  const vSteps = ['1', '2', '3', '4', '5', '6', '7', '8']; // множество вертикальных координат

  const horseSteps = [ // множество смещений лошади
    {h: 1, v: 2},
    {h: 2, v: 1},
    {h: 2, v: -1},
    {h: 1, v: -2},
    {h: -1, v: -2},
    {h: -2, v: -1},
    {h: -2, v: 1},
    {h: -1, v: 2}
  ];

  const chessToArray = str => { // конвертирует шахматные координаты в индексы массива
    const point = str.split('');
    return {
      h: hSteps.indexOf(point[0]),
      v: vSteps.indexOf(point[1])
    };
  };

  const arrayToChess = chessPoint => { // конвертирует индексы массива в шахматные координаты
    const hPoint = hSteps[chessPoint.h];
    const vPoint = vSteps[chessPoint.v];
    return hPoint + vPoint;
  };

  const cutWrongVal = steps => { // отсекаем все элементы за игровым полем
    const minIndex = 0;
    const maxIndex = 7;
    return steps.filter(el => el.h >= minIndex && el.v >= minIndex)
      .filter(el => el.h <= maxIndex && el.v <= maxIndex);
  };

  const calcOfSteps = (stepsList, startPoint) => { // вычисляем шаги для фигуры (массив объектов)
    const startIndex = chessToArray(startPoint);
    const steps = Array.prototype.map.call(horseSteps, el =>
      new Object({
        h: el.h + startIndex.h,
        v: el.v + startIndex.v
      })
    );
    const filteredSteps = cutWrongVal(steps); // отсекаем координаты за полем
    return filteredSteps.map(arrayToChess) // конвертируем индексы в шахматные координаты
      .join(' '); // конвертируем массив шахматных координат в строку разделенную пробелом
  };

  const checkInput = str => { // проверка корретности введенной точки
    const inPosition = str.split('');

    const lenCheck = (str.length === 2);
    const hCheck = hSteps.includes(inPosition[0]) || false;
    const vCheck = vSteps.includes(inPosition[1]) || false;

    return lenCheck && hCheck && vCheck;
  };

  const onclickBtn = () => {
    const startPoint = input.value.toUpperCase();
    if (!checkInput(startPoint)) {
      alert('На шахматной доске нет такой ячейки: ' + startPoint + ', введите правильное значение');
      return;
    }
    alert('Возможные варианты хода: ' + calcOfSteps(horseSteps, startPoint));
  };

  button.addEventListener('click', onclickBtn);
};
export {content};
