document.getElementById('areaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const alasInput = document.getElementById('alas');
    const tinggiInput = document.getElementById('tinggi');
    const resultLuas = document.getElementById('resultLuas');
    const alasError = document.getElementById('alasError');
    const tinggiError = document.getElementById('tinggiError');

    alasError.textContent = ''; // Clear previous errors
    tinggiError.textContent = ''; // Clear previous errors
    resultLuas.textContent = 'Hasil Luas: -'; // Reset result text

    const alas = parseFloat(alasInput.value);
    const tinggi = parseFloat(tinggiInput.value);

    let isValid = true;

    if (isNaN(alas) || alas <= 0) {
        alasError.textContent = 'Masukkan nilai alas yang valid (angka positif).';
        isValid = false;
    }
    if (isNaN(tinggi) || tinggi <= 0) {
        tinggiError.textContent = 'Masukkan nilai tinggi yang valid (angka positif).';
        isValid = false;
    }

    if (isValid) {
        const luas = 0.5 * alas * tinggi;
        resultLuas.textContent = `Hasil Luas: ${luas}`;
    } else {
        resultLuas.textContent = 'Hasil Luas: Input tidak valid.';
    }
});

document.getElementById('perimeterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const sisi1Input = document.getElementById('sisi1');
    const sisi2Input = document.getElementById('sisi2');
    const sisi3Input = document.getElementById('sisi3');
    const resultKeliling = document.getElementById('resultKeliling');
    const sisi1Error = document.getElementById('sisi1Error');
    const sisi2Error = document.getElementById('sisi2Error');
    const sisi3Error = document.getElementById('sisi3Error');

    sisi1Error.textContent = ''; // Clear previous errors
    sisi2Error.textContent = ''; // Clear previous errors
    sisi3Error.textContent = ''; // Clear previous errors
    resultKeliling.textContent = 'Hasil Keliling: -'; // Reset result text

    const s1 = parseFloat(sisi1Input.value);
    const s2 = parseFloat(sisi2Input.value);
    const s3 = parseFloat(sisi3Input.value);

    let isValid = true;

    if (isNaN(s1) || s1 <= 0) {
        sisi1Error.textContent = 'Masukkan nilai sisi 1 yang valid (angka positif).';
        isValid = false;
    }
    if (isNaN(s2) || s2 <= 0) {
        sisi2Error.textContent = 'Masukkan nilai sisi 2 yang valid (angka positif).';
        isValid = false;
    }
    if (isNaN(s3) || s3 <= 0) {
        sisi3Error.textContent = 'Masukkan nilai sisi 3 yang valid (angka positif).';
        isValid = false;
    }

    // Triangle Inequality Theorem validation: Sum of any two sides must be greater than the third side
    if (isValid && (!((s1 + s2 > s3) && (s1 + s3 > s2) && (s2 + s3 > s1)))) {
        sisi1Error.textContent = 'Sisi-sisi tidak membentuk segitiga yang valid.';
        sisi2Error.textContent = 'Sisi-sisi tidak membentuk segitiga yang valid.';
        sisi3Error.textContent = 'Sisi-sisi tidak membentuk segitiga yang valid.';
        isValid = false;
    }

    if (isValid) {
        const keliling = s1 + s2 + s3;
        resultKeliling.textContent = `Hasil Keliling: ${keliling}`;
    } else {
        resultKeliling.textContent = 'Hasil Keliling: Input tidak valid.';
    }
});

function resetAreaForm() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('resultLuas').textContent = 'Hasil Luas: -';
    document.getElementById('alasError').textContent = '';
    document.getElementById('tinggiError').textContent = '';
}

function resetPerimeterForm() {
    document.getElementById('sisi1').value = '';
    document.getElementById('sisi2').value = '';
    document.getElementById('sisi3').value = '';
    document.getElementById('resultKeliling').textContent = 'Hasil Keliling: -';
    document.getElementById('sisi1Error').textContent = '';
    document.getElementById('sisi2Error').textContent = '';
    document.getElementById('sisi3Error').textContent = '';
}