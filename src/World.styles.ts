import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  RootCard: {
    flex: 1,
    display: "flex",
    width: "70px",
    height: "70px",
    textAlign: "center",
    border: "1px solid black",
    borderRadius: "0"
  },
  bonusCard: {
    width: "100%",
    padding: "10px",
    marginTop: "20px"
  },
  land: {
    backgroundSize: "120px",
    backgroundImage:
      "url(https://slm-assets.secondlife.com/assets/21299620/lightbox/seamless_beach_sand_texture.jpg?1534003732)"
  },
  water: {
    backgroundSize: "120px",
    backgroundImage:
      "url(https://media.freestocktextures.com/cache/7d/66/7d66ae58b2966a05ccadce0ed94723a9.jpg)"
  },
  islandCounter: {
    fontFamily: "Monaco, Monospace",
    fontSize: "40px"
  }
}));
