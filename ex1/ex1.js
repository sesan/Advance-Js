/* Note to prevent a global variable ensure you put your code in an IIFE statement */

(function() {


    function C() {
        console.log("OOPS!");
    }

    function E(f) {
        console.log("E");
        f();
        var f = F;
    }

    //var A = function () { for A() to work based on hoisting in line: 5 ensure to change it to a function declaration
	function A (){
        console.log("A");
        B();
    };

    var C;

    function G() {
        console.log("G");
        H();

        function H () {
            console.log("H");
            I();
        };
    }

    var D = d;

    function d() {
        console.log("D");
        E(F);
    }

    function I() {
        console.log("I");
        J();
        J();
    }

  //  B = function () { // samething goes for the B variable change it to a function declaration
	function B() {
        console.log("B");
        C();
    };

    var F = function () {
        console.log("F");
        G();
    };

    var rest = "KLMNOPQRSTUVWXYZ".split("");
    for (var i = 0; i < rest.length; i++) {
        (function (i) {
            // define the current function
            window[rest[i]] = function () {
                console.log(rest[i]);
                if (i < (rest.length - 1)) {
                    // TODO: call the next function
                    window[rest[i + 1]]();
                }
            };
        })(i);
    }

    var J = function () {
        J = function () {
            console.log("J");
            K();
        };
    };

    function C () {
        console.log("C");
        D();
    };
    return A;
})() ();
