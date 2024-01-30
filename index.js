
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
var globalInputValue, globalOutputValue;
var originalText = document.getElementById('new-container').innerHTML;

function updateText() {
    var text = originalText;

    text = text.replaceAll('{input}', globalInputValue || '');
    text = text.replaceAll('{output}', globalOutputValue || '');

    document.getElementById('new-container').innerHTML = text;
}

document.getElementById('input-field').addEventListener('input', function(event) {
    globalInputValue = event.target.value;
    updateText();
});

var observer = new MutationObserver(function() {
    globalOutputValue = document.getElementById('output-display').textContent.replace('output: ', '');
    updateText();
});

observer.observe(document.getElementById('output-display'), { childList: true });