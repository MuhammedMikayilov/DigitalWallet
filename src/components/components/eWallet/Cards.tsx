import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import { useSelector } from "react-redux";
import { ICards } from "../../redux/interfaces/cards/index";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

interface ICard {
  cards: { cards: ICards[] };
}
export default function Cards() {
  const classes = useStyles();
  const { cards } = useSelector((state: ICard) => state.cards);

  return (
    <List className={classes.root}>
      {cards &&
        cards.map((item) => (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.bank_name}
              secondary={`Balance: ${item.currency_type.key}`}
              style={{ cursor: "pointer" }}
              onClick={() => console.log(cards)}
            />
          </ListItem>
        ))}
      {/* <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="PaşaBank"
          secondary={`Balance: 0.00 AZN`}
          style={{ cursor: "pointer" }}
          onClick={() => console.log(cards)}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="KapitalBank"
          secondary={`Balance: -12.00 AZN`}
          style={{ cursor: "pointer" }}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="ExpressBank"
          secondary={`Balance: 1.20 AZN`}
          style={{ cursor: "pointer" }}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="MiriBank"
          secondary={`Balance: 12346.00 AZN`}
          style={{ cursor: "pointer" }}
        />
      </ListItem> */}
    </List>
  );
}
