import { createContext, useReducer } from "react";
import { PHRASES } from "../data/data";

export const PhraseContext = createContext({
  phrases: [],
  addPhrase: ({ description, phrasePt, phraseEn, audio }) => {},
  deletePhrase: (id) => {},
  updatePhrase: (id, { description, phrasePt, phraseEn, audio }) => {}
});

function phrasesReducer(state, action){
  switch (action.type){
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.newData, id: id }, ...state];

    case 'UPDATE':
      const updatablePhraseIndex = state.findIndex(
        (phrase) => phrase.id === action.newData.id
      );
      const updatablePhrase = state[updatablePhraseIndex];
      const updatedItem = {...updatablePhrase, ...action.newData.data}
      const updatedPhrases = [...state];
      updatedPhrases[updatablePhrase] = updatedItem;
      return updatedPhrases;

    case 'DELETE':
      return state.filter((phrase) => phrase.id !== action.newData);

    default:
      return state;
  }
}

function PhrasesContextProvider({ children }){
  const[phraseState, dispatch] = useReducer(phrasesReducer, PHRASES);

  function addPhrase(phraseData){
    dispatch({ type: 'ADD', newData: phraseData });
  }

  function deletePhrase(id){
    dispatch({ type: 'DELETE', newData: id });
  }

  function updatePhrase(id, phraseData){
    dispatch({ type: 'UPDATE', newData: { id: id, newData: phraseData }});
  }  

const value = {
  phrases: phraseState,
  addPhrase: addPhrase,
  deletePhrase: deletePhrase,
  updatePhrase: updatePhrase
}

  return (
    <PhraseContext.Provider value={value}>
      { children }
    </PhraseContext.Provider>
  );
}

export default PhrasesContextProvider;