import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draftState => {
        const prodIndex = draftState.findIndex(p => p.id === action.product.id);
        if (prodIndex >= 0) {
          draftState[prodIndex].amount += 1;
        } else {
          draftState.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    case '@cart/REMOVE':
      console.tron.log(action);
      return produce(state, draftState => {
        const prodIndex = draftState.findIndex(p => p.id === action.id);

        if (prodIndex >= 0) {
          draftState.splice(prodIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state;
      }

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
