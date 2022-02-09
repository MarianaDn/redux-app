import { combineReducers } from "redux";

export const songsReducer = () => [
  {
    title: "Bad Habits",
    duration: "3:50",
  },
  {
    title: "Easy On Me",
    duration: "3:44",
  },
  {
    title: "Woman",
    duration: "2:52",
  },
  {
    title: "Happier Than Ever",
    duration: "4:58",
  },
  {
    title: "Kiss Me More",
    duration: "3:28",
  },
  {
    title: "Don't Be Shy",
    duration: "2:20",
  },
];

export const selectedSongReducer = (
  selectedSong = { title: "Bad Habits", duration: "3:50" },
  action
) => (action.type === "SELECTED_SONG" ? action.payload : selectedSong);

export default combineReducers({
  song: songsReducer,
  selected: selectedSongReducer,
});
