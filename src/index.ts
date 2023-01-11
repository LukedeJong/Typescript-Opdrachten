import { RunOpdracht1 } from "./Opdracht_1.js"
import { RunOpdracht10 } from "./Opdracht_10.js"
import { RunOpdracht2 } from "./Opdracht_2.js"
import { RunOpdracht3 } from "./Opdracht_3.js"
import { RunOpdracht4 } from "./Opdracht_4.js"
import { RunOpdracht5 } from "./Opdracht_5.js"
import { RunOpdracht6 } from "./Opdracht_6.js"
import { RunOpdracht7 } from "./Opdracht_7.js"
import { RunOpdracht8 } from "./Opdracht_8.js"
import { RunOpdracht9 } from "./Opdracht_9.js"

const opdrachten: Record<string, () => void> = {
    "opdracht1": RunOpdracht1,
    "opdracht2": RunOpdracht2,
    "opdracht3": RunOpdracht3,
    "opdracht4": RunOpdracht4,
    "opdracht5": RunOpdracht5,
    "opdracht6": RunOpdracht6,
    "opdracht7": RunOpdracht7,
    "opdracht8": RunOpdracht8,
    "opdracht9": RunOpdracht9,
    "opdracht10": RunOpdracht10
}
const opdracht = process.argv[2]

opdrachten[opdracht]?.()