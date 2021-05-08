import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';
import evaluate from './evaluator';

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
    codeword: 'react',
    guesses: []
}

const slice = createSlice({
    name: 'masterword',
    initialState,
    reducers: {
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
