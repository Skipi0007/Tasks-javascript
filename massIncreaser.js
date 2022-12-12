const initialMass = [-5, 0, 1, 3, 8, 12]
let increasedMass = []

const massIncreaser = (mass, increasedMass) => {
    mass.forEach(el => {
        increasedMass.push(el*el)
        console.log('element ' , el)
        console.log('mass ' , increasedMass)
    })
    console.log('unsrt mass ' , increasedMass)
    return(increasedMass.sort((a, b) => a - b))
}

console.log(massIncreaser(initialMass, increasedMass))