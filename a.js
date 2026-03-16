const users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" }
]

const check = users.filter(item => item.id >= 2)
console.log(check)