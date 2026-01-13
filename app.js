const st = [3, 34, 5, 5, 5]
function getMax(arr) {
    let maxx = st[0]

    for (const item of arr) {
        if (item > maxx) {
            maxx = item
        }
    }

    return maxx
}

const check = getMax(st)
console.log(check)