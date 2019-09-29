import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draftState => {
        draftState.push(action.product);
      });
    case '@cart/REMOVE':
      return produce(state, draftState => {
        const prodIndex = draftState.findIndex(p => p.id === action.id);

        if (prodIndex >= 0) {
          draftState.splice(prodIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draftState => {
        const prodIndex = draftState.findIndex(p => p.id === action.id);

        if (prodIndex >= 0) {
          draftState[prodIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
