public function test1() {
    string x = "Foo";

    function (int i) returns string fn = function (int i) returns string {
        string s = x;
        return s;
    };

    string a = fn(); // This compiles fine at the moment.
}

public function test2() {
    string x = "Foo";

    var fn = function (int i) returns string {
        string s = x;
        return s;
    };

    string a = fn(); // This compiles fine at the moment.
}

public function test3() {
    string x = "Foo";

    var fn = function (int i, int ss) returns string {
        string s = x;
        return s;
    };

    string a = fn(45, 323, "SIM"); // This compiles fine at the moment.
}

public function test4() {
    string x = "Foo";

    function (int i) returns string fn = function (int i) returns string {
        string s = x;
        return s;
    };

    string a = fn(45, "SIM"); // This compiles fine at the moment.
}
