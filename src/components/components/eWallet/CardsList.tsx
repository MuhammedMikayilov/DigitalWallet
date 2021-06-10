import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";
import ImageIcon from "@material-ui/icons/Image";
import { Avatar, ListItemAvatar } from "@material-ui/core";

import React from "react";
import { useSelector } from "react-redux";
import { ICards } from "../../redux/interfaces/cards";
import { useHistory } from "react-router";

interface IProp {
  classes: ClassNameMap<
    | "content"
    | "toolbar"
    | "root"
    | "drawer"
    | "appBar"
    | "menuButton"
    | "drawerPaper"
  >;
}
interface ICard {
  cards: { cards: ICards[] };
}
const CardsList: React.FC<IProp> = ({ classes }) => {
  const { cards } = useSelector((state: ICard) => state.cards);
  const { push } = useHistory();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
        <List className={classes.root}>
          <Grid container spacing={2}>
            {cards?.map((card) => (
              <Grid item md={4} style={{ background: "white" }}>
                <ListItem>
                  <ListItemText
                    onClick={() => push(`/cards/${card._id}`)}
                    primary={card.bank_name}
                    secondary={`Balance: ${card.currency_type.currency} ${card.currency_type.value} `}
                    style={{ cursor: "pointer" }}
                  />
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </List>
      </Typography>
    </main>
  );
};

export default CardsList;
