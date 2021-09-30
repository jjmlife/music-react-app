import { combineReducers } from "redux-immutable";

import { reducer as recommandReducer } from './module/recommand'

const reducer = combineReducers({
  recommand: recommandReducer
})

export default reducer;
