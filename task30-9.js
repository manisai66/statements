
// 1.write a program to print 10 numbers using for loop and write same program suing while and do-while loop?
for (i = 1; i <= 10; i++) {
    console.log(i);
}

var a = 1;
while (a <= 10) {
    console.log(a);
    a++;
}

var b = 1;
do {
    console.log(b);
    b++;
} while (b <= 10)


// 2.write a program to print even numbers using for loop and write same program suing while and do-while loop?

// finding even numbers by using for loop
for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
// finding even numbers by using  while loop
var num = 1;
while (num <= 10) {
    if (num % 2 == 0) {
        console.log(num);
    }
    num++;
}
// finding even numbers by using do while loop
var evenum = 1;
do {
    if (evenum % 2 == 0) {
        console.log(evenum)
    }
    evenum++;
} while (evenum <= 10)

// 3.write a program to print odd numbers using for loop and write same program suing while and do-while loop

// finding odd numbers by using for loop
for (i = 1; i <= 10; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}
// finding odd numbers by using  while loop
var num = 1;
while (num <= 10) {
    if (num % 2 == 1) {
        console.log(num);
    }
    num++;
}
// finding odd numbers by using do while loop
var evenum = 1;
do {
    if (evenum % 2 == 1) {
        console.log(evenum)
    }
    evenum++;
} while (evenum <= 10)

// 4.write a program to console the marks grade D using conditional statements and the marks for D grade is b/w the 35 and 45 ?
var marks = 35;
if (marks >= 90 && 80) {
    console.log("you got A grade")
} if (marks >= 60 && 70) {
    console.log("you got B grade")
} if (marks >= 50) {
    console.log("you got C grade")
} if (marks >= 35 && 45) {
    console.log("you got D grade")
}
else {
    console.log("fail")
}
