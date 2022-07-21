var s = gets().split(" ");
let A = parseInt(s[0]);
let B = parseInt(s[1]);
let C;

    if (A > B) {
        C = A;
    }else if (A < B) {
        C = B;
    }else {
      C = A;
    }
    print(C);