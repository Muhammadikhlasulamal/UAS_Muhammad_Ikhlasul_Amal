function calculate() {
    var shape = document.getElementById('shape').value;
    var resultArea = document.getElementById('result-area');
    var resultPerimeter = document.getElementById('result-perimeter');

    var length = 0;
    var width = 0;
    var side = 0;
    var radius = 0;

    if (shape === 'rectangle') {
        length = parseFloat(document.getElementById('length').value);
        width = parseFloat(document.getElementById('width').value);

        resultArea.textContent = length * width;
        resultPerimeter.textContent = 2 * (length + width);
    } else if (shape === 'square') {
        side = parseFloat(document.getElementById('side').value);

        resultArea.textContent = side * side;
        resultPerimeter.textContent = 4 * side;
    } else if (shape === 'circle') {
        radius = parseFloat(document.getElementById('radius').value);

        resultArea.textContent = Math.PI * Math.pow(radius, 2);
        resultPerimeter.textContent = 2 * Math.PI * radius;
    }
}

function reset() {
    document.getElementById('length').value = '';
    document.getElementById('width').value = '';
    document.getElementById('side').value = '';
    document.getElementById('radius').value = '';

    document.getElementById('result-area').textContent = '0';
    document.getElementById('result-perimeter').textContent = '0';
}

document.getElementById('shape').addEventListener('change', function () {
    var shapeInputs = document.getElementsByClassName('shape-inputs');
    
    for (var i = 0; i < shapeInputs.length; i++) {
        shapeInputs[i].style.display = 'none';
    }

    var selectedShape = document.getElementById(this.value + '-inputs');
    if (selectedShape) {
        selectedShape.style.display = 'block';
    }
});
