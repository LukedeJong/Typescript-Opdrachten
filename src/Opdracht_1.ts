export function RunOpdracht1() {
    
    let antwoord = 0;

    function cijfers(cijfer1: number, cijfer2: number) {

        antwoord = cijfer1 + cijfer2;

        console.log(cijfer1, "+" ,cijfer2, "=", antwoord)
        return antwoord;
    }
    
    cijfers(15,11);
}