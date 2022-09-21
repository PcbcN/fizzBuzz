
function fizzBuzz() {
    
/* Envolvemos en parseInt un prompt, es decir, les pedimos al usuario un input y exigimos que sea un integer */
    let answer = parseInt(prompt("Escribe un número al que te gustaría que llegase con mi fizzBuzz"));

/* Escribimos el loop sobre el número answer y añadimos las condicions */

    for (let i = 1; i <= answer; i++) {
    
        if (i % 3 === 0 && i % 5 ===0){
            console.log("fizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }

}

