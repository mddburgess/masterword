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
    guesses: Guess[]
}

const initialState: SliceState = {
    codeword: '',
    guesses: []
}

const slice = createSlice({
    name: 'masterword',
    initialState,
    reducers: {
        startNewGame: (state => {
            state.codeword = rword.generate(1, {length: "5-8"}) as string;
        }),
        guessWord: ((state, action: PayloadAction<string>) => {
            state.guesses.unshift(evaluate(action.payload, state.codeword));
        })
    }
});

const store = configureStore({
    reducer: slice.reducer
});

export default store;
export type StoreState = ReturnType<typeof store.getState>;
export const actions = slice.actions;
