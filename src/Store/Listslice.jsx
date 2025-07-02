import { createSlice } from "@reduxjs/toolkit";

const Listslice = createSlice({
  name: "listslice",
  initialState: {
    List: [],
  },
  reducers: {
    addList: (state, action) => {
      state.List.push(action.payload);
    },
    addCard: (state, action) => {
      state.List.forEach((item) => {
        if (item.id === action.payload.parId) {
          if (item.Children) {
            item.Children.push(action.payload);
          } else {
            item.Children = [action.payload];
          }
        }
      });
    },
    reorderList: (state, action) => {
      const { sourceIndex, destIndex } = action.payload;
      const [removed] = state.List.splice(sourceIndex, 1);
      state.List.splice(destIndex, 0, removed);
    },
    reorderCard: (state, action) => {
      const { sourceListId, destListId, sourceIndex, destIndex } = action.payload;

      // Get the source and destination lists
      const sourceList = state.List.find((list) => list.id === sourceListId);
      const destList = state.List.find((list) => list.id === destListId);

      // Remove the card from the source list
      const [movedCard] = sourceList.Children.splice(sourceIndex, 1);

      // Add the card to the destination list
      if (sourceListId === destListId) {
        sourceList.Children.splice(destIndex, 0, movedCard);
      } else {
        if (!destList.Children) destList.Children = [];
        destList.Children.splice(destIndex, 0, movedCard);
      }
    },
  },
});

export const { addList, addCard, reorderList, reorderCard } = Listslice.actions;
export default Listslice.reducer;
