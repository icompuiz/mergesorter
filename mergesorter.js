'use strict';

// Linear time merge. Levels in a binary tree equals lgn + 1, n := number of elements

function merge(array, head, midpoint, tail) {

    let lowHalf = [];
    let highHalf = [];

    // copy halves into temp arrays
    let lowCsr,
        highCsr,
        arrCsr = head;

    for (lowCsr = 0; arrCsr <= midpoint; lowCsr++, arrCsr++) {
        lowHalf[lowCsr] = array[arrCsr];
    }

    for (highCsr = 0; arrCsr <= tail; highCsr++, arrCsr++) {
    	highHalf[highCsr] = array[arrCsr];
    }


    arrCsr = head;
    lowCsr = 0;
    highCsr = 0;

    // Make it repeatedly compare the lowest untaken element in lowHalf with the 
    // lowest untaken element in highHalf and copy the lower of the two back into 
    // array, starting at array[p].

    while (lowCsr < lowHalf.length && highCsr < highHalf.length) {

        if (lowHalf[lowCsr] < highHalf[highCsr]) {
            array[arrCsr] = lowHalf[lowCsr];
            lowCsr++;
        } else {
            array[arrCsr] = highHalf[highCsr];
            highCsr++;
        }

        arrCsr++;

    }

    // copy the remaining items back the the array

    while (lowCsr < lowHalf.length) {
        array[arrCsr] = lowHalf[lowCsr];
        lowCsr++;
        arrCsr++;
    }

    while (highCsr < highHalf.length) {
        array[arrCsr] = highHalf[highCsr];
        highCsr++;
        arrCsr++;
    }

}


function mergeSort(array, p, r) {

    p = p === undefined ? 0 : p;
    r = r === undefined ? array.length - 1 : r;

    // compute

    if (p < r) {

        var q = Math.floor((p + r) / 2);
        mergeSort(array, p, q);
        mergeSort(array, q + 1, r);
        merge(array, p, q, r);

    }

}

module.exports = mergeSort;
