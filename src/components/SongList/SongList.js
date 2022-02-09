import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Divider, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { selectSong } from "../../redux/action";

export const SongList = () => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState({
    title: "Bad Habits",
    duration: "3:50",
  });
  const songs = useSelector((state) => state.song);

  useEffect(() => {
    dispatch(selectSong(select));
  }, [select]);

  return (
    <List sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}>
      {songs.map((item) => (
        <>
          <ListItem alignItems="center" key={item.title}>
            <ListItemText primary={item.title} />
            <Button
              variant="contained"
              size="medium"
              onClick={() => setSelect(item)}
            >
              Select
            </Button>
          </ListItem>
          <Divider variant="inset" component="li" sx={{ m: 0 }} />
        </>
      ))}
    </List>
  );
};
