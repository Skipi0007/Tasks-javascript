const initialMass = [-5, 0, 1, 3, 8, 12]
let increasedMass = []

let massIncreaser = (mass, increasedMass) => {
    mass.forEach(el => {
        increasedMass.push(el*el)
    })
    return(increasedMass.sort((a, b) => a - b))
}

console.log(massIncreaser(initialMass, increasedMass))