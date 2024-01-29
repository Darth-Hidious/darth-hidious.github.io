
function copyToClipboard() {
    var code = document.getElementById('code').innerText;
    var textarea = document.createElement('textarea');
    textarea.textContent = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

document.getElementById('input-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var z = document.getElementById('input-field').value;
    z_value(z);
});

var outputCount = 0;

function z_value(input) {
    var z = parseInt(input);
    var outputDisplay = document.getElementById('output-display');
    if (isNaN(z)) {
        var error = document.createElement('p');
        error.textContent = 'Error: Input muss eine Zahl sein.';
        outputDisplay.appendChild(error);
    } else {
        if (z < 0) {
            z = z * -1;
        }
        console.log(z);
        var output = document.createElement('p');
        output.textContent = 'Output: ' + z;
        outputDisplay.appendChild(output);
    }

    outputCount++;
    if (outputCount >= 10) {
        outputDisplay.innerHTML = '';
        outputCount = 0;
    }
}
