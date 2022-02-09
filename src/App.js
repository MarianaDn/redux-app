import { Grid } from "@mui/material";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { SongDetails } from "./components/SongDetails/SongDetails";
import { SongList } from "./components/SongList/SongList";
import reducers from "./redux/reducers";

export const App = () => (
  <Provider store={createStore(reducers)}>
    <Grid display="flex" justifyContent="space-between">
      <SongList />
      <SongDetails />
    </Grid>
  </Provider>
);
