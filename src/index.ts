import { RunOpdracht1 } from "./Opdracht_1.js"

const opdrachten: Record<string, () => void> = {
    "opdracht1": RunOpdracht1
}
const opdracht = process.argv[2]

opdrachten[opdracht]?.()