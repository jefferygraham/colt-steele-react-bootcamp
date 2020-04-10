const choice = (arr) => {
    let randInx = Math.floor(Math.random() * arr.length);
    return arr[randInx]
}

export { choice };