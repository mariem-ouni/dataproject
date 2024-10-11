function sumDistinctElements(set1, set2) {
    // Create a set to store distinct elements
    let distinctElements = new Set();
    
    // Add elements from set1
    for (let elem of set1) {
        distinctElements.add(elem);
    }
    
    // Add elements from set2
    for (let elem of set2) {
        if (distinctElements.has(elem)) {
            // If the element is already present, remove it
            distinctElements.delete(elem);
        } else {
            // If not present, add it
            distinctElements.add(elem);
        }
    }
    
    // Sum the distinct elements
    let sum = 0;
    for (let elem of distinctElements) {
        sum += elem;
    }

    return sum;
}

let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];
console.log(sumDistinctElements(set1, set2)); // Output: 13


function dotProduct(v1, v2) {
    let productSum = 0;
    for (let i = 0; i < v1.length; i++) {
        productSum += v1[i] * v2[i];
    }
    return productSum;
}


function checkOrthogonality(vectors) {
    for (let [v1, v2] of vectors) {
        let result = dotProduct(v1, v2);
        if (result === 0) {
            console.log('The vectors are orthogonal.');
        } else {
            console.log('The vectors are not orthogonal.');
        }
    }
}

let vectors = [
    [[1, 2], [2, -1]], // Orthogonal
    [[1, 0], [0, 1]],  // Orthogonal
    [[1, 2], [2, 3]]   // Not orthogonal
];
checkOrthogonality(vectors);

