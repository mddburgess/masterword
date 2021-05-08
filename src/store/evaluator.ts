import {Guess} from './index';

const evaluate = (candidate: string, solution: string): Guess => {
    const candidateChars = candidate.toLowerCase().split('');
    const solutionChars = solution.toLowerCase().split('');
    const correctLetters = evaluateCorrect(candidateChars, solutionChars);
    const presentLetters = evaluatePresent(candidateChars, solutionChars) - correctLetters;

    return {
        candidate,
        correctLetters,
        presentLetters
    }
}

const evaluateCorrect = (candidate: string[], solution: string[]) =>
    candidate.filter((char, index) => solution[index] === char).length;

const evaluatePresent = (candidate: string[], solution: string[]) => {
    let presentLetters = 0;
    const count = new Map<string, number>();
    for (const char of candidate) {
        count.set(char, (count.get(char) ?? 0) + 1);
        if (solution.filter(c => c === char).length >= count.get(char)!) {
            presentLetters++;
        }
    }
    return presentLetters;
}

export default evaluate;
