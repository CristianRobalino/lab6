function factorial(n) {
    if (n < 0) {
        throw new Error('El factorial no está definido para números negativos');
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function fibonacci(n) {
    if (n < 0) {
        throw new Error('El fibonacci no está definido para números negativos');
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = { factorial, fibonacci };
