import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";

type Guess = {
    candidate: string,
    correctLetters: number,
    presentLetters: number
}

type SliceState = {
    codeword: string,
    guesses: Guess[]
}

const initialState: SliceState = {
    codeword: "react",
    guesses: []
}

const slice = createSlice({
    name: "masterword",
    initialState,
    reducers: {
        guessWord: ((state, action: PayloadAction<string>) => {
            state.guesses.unshift({
                candidate: action.payload,
                correctLetters: 0,
                presentLetters: 0
            })
        })
    }
});

const store = configureStore({
    reducer: slice.reducer
});

export default store;
export type StoreState = ReturnType<typeof store.getState>;
export const actions = slice.actions;
