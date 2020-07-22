const readline = require('readline')

function maje(m) {
    let n = 4 * m - 1
    if (n < 0) { alert("illegal maze dimensions"); return; }
    var arr = [];
    for (j = 0; j < m; j++) {
        arr[j] = [];
        for (i = 0; i < m; i++) {
            arr[j].push('@')
        }
        arr[j].join('')
    }
    for (j = 0; j < m; j++) {
        if (j == 0) {
            arr[j][1] = ' ';
        } else if (j == m - 1) {
            arr[j][j - 1] = ' ';
        } else if (j % 2 == 1) {
            arr[j].fill(' ');
            arr[j][0] = '@';
            arr[j][m - 1] = '@'
        } else if (j % 2 == 0) {
            if (arr[j - 2][m - 2] == '@') {
                arr[j][m - 2] = ' ';
            } else {
                arr[j][1] = ' ';
            }
        }
        console.log(arr[j].join(''))
    }
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Your input(number) ? ', (answer) => {
    var regex = /^[0-9]+$/;
    (answer.match(regex)) ? maje(answer) : console.log("Must input number!!");
    rl.close();
});
