import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';
import evaluate from './evaluator';
import {rword} from 'rword';

export type Guess = {
    candidate: string,
    correctLetters: number,
    presentLetters: number
}

type SliceState = {
    codeword: string,
    guesses: Guess[],
    gameOver: boolean
}

const initialState: SliceState = {
    codeword: '',
    guesses: [],
    gameOver: false
}

const slice = createSlice({
    name: 'masterword',
    initialState,
    reducers: {
        startNewGame: (state) => {
            state.codeword = rword.generate(1, {length: '5-8'}) as string;
            state.guesses = [];
            state.gameOver = false;
        },
        guessWord: (state, action: PayloadAction<string>) => {
            const guess = evaluate(action.payload, state.codeword);
            state.guesses.unshift(guess);
            state.gameOver = guess.correctLetters === state.codeword.length;
        }
    }
});

const store = configureStore({
    reducer: slice.reducer
});

export default store;
export type StoreState = ReturnType<typeof store.getState>;
export const actions = slice.actions;
