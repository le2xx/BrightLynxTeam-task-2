const content = () => {
	const form = document.getElementById('form');
	const input = form.querySelector('.content__input');
	const button = form.querySelector('.content__btn');

	const horizontSteps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
	const verticalSteps = ['1', '2', '3', '4', '5', '6', '7', '8'];

	const checkInput = str => { // проверка корретности вве
		const inPosition = str.split('');

		const lenCheck = (str.length === 2);
		const hCheck = horizontSteps.includes(inPosition[0]) || false;
		const vCheck = verticalSteps.includes(inPosition[1]) || false;

		return lenCheck && hCheck && vCheck;
	};

	const horseSteps = () => {
		const startPoint = input.value.toUpperCase();
		if (!checkInput(startPoint)) {
			alert('На шахматной доске нет ячейки: ' + startPoint + ', введите правильное значение');
			return;
		}
		alert('Возможные варианты хода: ' + checkInput(startPoint));
	};

	button.addEventListener('click', horseSteps);
};
export { content };
