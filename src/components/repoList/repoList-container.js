const divide = (list, left, right, pivot) => {
    let i = left;
    [ list[pivot], list[right] ] = [ list[right], list[pivot] ];

    
    for (let j = left; j < right; j++) {
        if (list[j].stargazers_count > list[right].stargazers_count) {
            [list[i] , list[j]] = [ list[j], list[i]];
            i++;
        }
    }
    [ list[i], list[right] ] = [ list[right], list[i] ];
    return i;
}

const limited_quicksort = (list, left, right) => {
    if (right >= left) {
        let pivot = left,
            new_pivot = divide(list, left, right, pivot);

        limited_quicksort(list, left, new_pivot - 1);
        limited_quicksort(list, new_pivot + 1, right);
    }
}

export const quicksort = (list) => {
    limited_quicksort(list, 0, list.length - 1);
    return list;
}