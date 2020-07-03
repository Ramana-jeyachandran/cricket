var distance = 0;
var distance1 = 0;
var secondsy;
var clicks = 1;
var clicks1 = 1;
var val = 0;
var i = 0, j = 0, i1 = 0, j1 = 0;
var val1;
var total = 0;
var total1 = 0;
var newx, newB;
var newBY, newxY;
var runcount1 = 0;
var runcount2 = 0;
var Player1 = /** @class */ (function () {
    function Player1() {
    }
    Player1.prototype.direct1 = function () {
        var countDownDate = new Date().getTime() + 12000;
        if (i == 10) {
            document.getElementById('p1button').disabled = true;
            document.getElementById('p2button').disabled = false;
        }
        if (clicks < 2) {
            var x_1 = setInterval(function () {
                var now = new Date().getTime();
                distance = countDownDate - now;
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
                document.getElementById("timer").innerHTML = this.seconds + "s ";
                if (distance < 1) {
                    clearInterval(x_1);
                    //(document.getElementById('r') as HTMLInputElement).disabled = true;
                    document.getElementById('p1button').disabled = true;
                    document.getElementById('p2button').disabled = false;
                    document.getElementById(balls[i][6]).innerHTML = total.toString();
                }
            }, 1000);
            clicks++;
        }
        var balls = [["p1b1", "p1b2", "p1b3", "p1b4", "p1b5", "p1b6", "total1"], ["p2b1", "p2b2", "p2b3", "p2b4", "p2b5", "p2b6", "total2"],
            ["p3b1", "p3b2", "p3b3", "p3b4", "p3b5", "p3b6", "total3"], ["p4b1", "p4b2", "p4b3", "p4b4", "p4b5", "p4b6", "total4"], ["p5b1", "p5b2", "p5b3", "p5b4", "p5b5", "p5b6", "total5"],
            ["p6b1", "p6b2", "p6b3", "p6b4", "p6b5", "p6b6", "total6"], ["p7b1", "p7b2", "p7b3", "p7b4", "p7b5", "p7b6", "total7"], ["p8b1", "p8b2", "p8b3", "p8b4", "p8b5", "p8b6", "total8"],
            ["p9b1", "p9b2", "p9b3", "p9b4", "p9b5", "p9b6", "total9"], ["p10b1", "p10b2", "p10b3", "p10b4", "p10b5", "p10b6", "total10"]];
        val = (Math.floor(Math.random() * 6));
        if (j == 6 || val == 0) {
            document.getElementById(balls[i][6]).innerHTML = total.toString();
            runcount1 = runcount1 + total;
            i++;
            j = 0;
            total = 0;
        }
        else {
            document.getElementById(balls[i][j]).innerHTML = val.toString();
            total = total + val;
            j++;
        }
    };
    return Player1;
}());
function play1() {
    p1.direct1();
}
var Player2 = /** @class */ (function () {
    function Player2() {
    }
    Player2.prototype.direct1 = function () {
        var countDownDate = new Date().getTime() + 12000;
        if (i1 == 10) {
            //(document.getElementById('p1button') as HTMLInputElement).disabled = true;
            document.getElementById('p2button').disabled = true;
        }
        if (clicks1 < 2) {
            var y_1 = setInterval(function () {
                var now = new Date().getTime();
                distance1 = countDownDate - now;
                var days = Math.floor(distance1 / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
                this.seconds = Math.floor((distance1 % (1000 * 60)) / 1000);
                document.getElementById("timer1").innerHTML = this.seconds + "s ";
                if (distance1 < 1) {
                    clearInterval(y_1);
                    //(document.getElementById('r') as HTMLInputElement).disabled = true;
                    document.getElementById('p2button').disabled = true;
                    document.getElementById(balls1[i1][6]).innerHTML = total1.toString();
                }
            }, 1000);
            clicks1++;
        }
        var balls1 = [["t2p1b1", "t2p1b2", "t2p1b3", "t2p1b4", "t2p1b5", "t2p1b6", "t2total1"], ["t2p2b1", "t2p2b2", "t2p2b3", "t2p2b4", "t2p2b5", "t2p2b6", "t2total2"],
            ["t2p3b1", "t2p3b2", "t2p3b3", "t2p3b4", "t2p3b5", "p3b6", "t2total3"], ["t2p4b1", "t2p4b2", "t2p4b3", "t2p4b4", "t2p4b5", "t2p4b6", "t2total4"], ["t2p5b1", "t2p5b2", "t2p5b3", "t2p5b4", "t2p5b5", "t2p5b6", "t2total5"],
            ["t2p6b1", "t2p6b2", "t2p6b3", "t2p6b4", "t2p6b5", "t2p6b6", "t2total6"], ["t2p7b1", "t2p7b2", "t2p7b3", "t2p7b4", "t2p7b5", "t2p7b6", "t2total7"], ["t2p8b1", "t2p8b2", "t2p8b3", "t2p8b4", "t2p8b5", "t2p8b6", "t2total8"],
            ["t2p9b1", "t2p9b2", "t2p9b3", "t2p9b4", "t2p9b5", "t2p9b6", "t2total9"], ["t2p10b1", "t2p10b2", "t2p10b3", "t2p10b4", "t2p10b5", "t2p10b6", "t2total10"]];
        val1 = (Math.floor(Math.random() * 6));
        if (j1 == 6 || val1 == 0) {
            document.getElementById(balls1[i1][6]).innerHTML = total1.toString();
            runcount2 = runcount2 + total1;
            i1++;
            j1 = 0;
            total1 = 0;
        }
        else {
            document.getElementById(balls1[i1][j1]).innerHTML = val1.toString();
            total1 = total1 + val1;
            j1++;
        }
    };
    return Player2;
}());
function play2() {
    p2.direct1();
}
var p1 = new Player1();
var p2 = new Player2();
function generate() {
    if (runcount1 > runcount2) {
        alert("team2 is winner");
    }
    else {
        alert("team 1 is winner");
    }
}
