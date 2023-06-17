const modal = document.getElementById("myModal");
const btnOpenModal = document.getElementById("openModal");
const btnCloseModal = document.getElementsByClassName("close")[0];
const matrixForm = document.getElementById("matrixForm");
const resultDiv = document.getElementById("result");

btnOpenModal.onclick = function() {
    modal.style.display = "block";
}

btnCloseModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

matrixForm.onsubmit = function(event) {
    event.preventDefault();

    const a11 = parseFloat(document.getElementById("a11").value);
    const a12 = parseFloat(document.getElementById("a12").value);
    const a21 = parseFloat(document.getElementById("a21").value);
    const a22 = parseFloat(document.getElementById("a22").value);
    const b11 = parseFloat(document.getElementById("b11").value);
    const b12 = parseFloat(document.getElementById("b12").value);
    const b21 = parseFloat(document.getElementById("b21").value);
    const b22 = parseFloat(document.getElementById("b22").value);

    const result = multiplyComplexMatrices([[a11, a12], [a21, a22]], [[b11, b12], [b21, b22]]);
    resultDiv.innerHTML = `Resultado: ${result}`;
}

function multiplyComplexMatrices(matrixA, matrixB) {
    const result = [];
    
    const a11 = matrixA[0][0];
    const a12 = matrixA[0][1];
    const a21 = matrixA[1][0];
    const a22 = matrixA[1][1];
    const b11 = matrixB[0][0];
    const b12 = matrixB[0][1];
    const b21 = matrixB[1][0];
    const b22 = matrixB[1][1];

    const realPart = a11 * b11 - a12 * b12 + a11 * b22 + a22 * b11;
    const imaginaryPart = a11 * b12 + a12 * b11 + a21 * b22 - a22 * b21;

    result.push([realPart, imaginaryPart]);

    return result;
}
