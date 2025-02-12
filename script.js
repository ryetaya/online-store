
const AInput = document.getElementById('A');
const HInput = document.getElementById('H');
const RInput = document.getElementById('R');
const MInput = document.getElementById('M');
const checkButton = document.getElementById('checkButton');
const resultInput = document.getElementById('result');


checkButton.addEventListener('click', () => {
    
    const A = parseFloat(AInput.value);
    const H = parseFloat(HInput.value);
    const R = parseFloat(RInput.value);
    const M = parseFloat(MInput.value);

    
    if (isNaN(A) || isNaN(H) || isNaN(R) || isNaN(M) || A <= 0 || H <= 0 || R <= 0 || M <= 0) {
        resultInput.value = 'Введите корректные положительные числа!';
        return;
    }

    
    const cubeVolume = Math.pow(A, 3); 
    const cylinderVolume = Math.PI * Math.pow(R, 2) * H; 

    
    let result = '';

    if (M <= cubeVolume && M <= cylinderVolume) {
        result = 'Жидкость может заполнить обе ёмкости.';
    } else if (M <= cubeVolume) {
        result = 'Жидкость может заполнить только кубическую ёмкость.';
    } else if (M <= cylinderVolume) {
        result = 'Жидкость может заполнить только цилиндрическую ёмкость.';
    } else {
        result = 'Жидкость не может заполнить ни одну из ёмкостей.';
    }

    // Отображаем результат
    resultInput.value = result;
});
