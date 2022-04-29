function staircase(n = 6) {
    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(n - i - 1), "#".repeat(i + 1));
    }
    console.log("\n");
}

console.log("default case: \n");
staircase();

console.log("20 steps");
staircase(20);
