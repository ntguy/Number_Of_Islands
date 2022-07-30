import * as React from "react";
import { useStyles } from "./World.styles";
import { Card, Button, Typography } from "@material-ui/core";
import classNames from "classnames";

type Props = {
  gridSize: number;
};

export const World: React.FC<Props> = ({ gridSize }) => {
  const initialWorldMap: boolean[][] = new Array(gridSize)
    .fill(false)
    .map(() => new Array(gridSize).fill(false));

  const [worldMap, setWorldMap] = React.useState(initialWorldMap);
  const [count, setCount] = React.useState(0);
  const [numIslands, setNumIslands] = React.useState(0);

  //recursively search for islands using DFS
  var depthFirstSearch = (map: boolean[][], x: number, y: number) => {
    //early return for if starting position is water or out of bounds
    if (x < 0 || x > gridSize - 1 || y < 0 || y > gridSize - 1 || !map[x][y]) {
      return 0;
    }

    map[x][y] = false;
    depthFirstSearch(map, x + 1, y); //down
    depthFirstSearch(map, x - 1, y); //up
    depthFirstSearch(map, x, y + 1); //right
    depthFirstSearch(map, x, y - 1); //left

    //at this point a complete island has been set to water, so return 1 to increment islandCount and continue
    return 1;
  };

  var computeNumIslands = (map: boolean[][]) => {
    let islandCount = 0;

    for (let i = 0; i < gridSize; i++) {
      //if we want to support arbitrary grid sizes, use map.length instead of gridSize
      for (let j = 0; j < gridSize; j++) {
        if (map[i][j]) {
          islandCount += depthFirstSearch(map, i, j);
        }
      }
    }

    return islandCount;
  };

  var createLand = (x: number, y: number) => {
    const newWorldMap = worldMap;
    newWorldMap[x][y] = true;
    setWorldMap(newWorldMap);
    setCount(count + 1);
    var worldMapCopy = worldMap.map((arr) => arr.slice());
    setNumIslands(computeNumIslands(worldMapCopy));
  };

  var resetWorld = () => {
    setWorldMap(initialWorldMap);
    setNumIslands(0);
  };

  const classes = useStyles();
  return (
    <>
      {worldMap.map((column, x) => (
        <div>
          {column.map((row, y) => (
            <Card
              onClick={() => createLand(x, y)}
              key={x.toString() + "," + y.toString()}
              className={classNames(
                classes.RootCard,
                worldMap[x][y] ? classes.land : classes.water
              )}
            ></Card>
          ))}
        </div>
      ))}
      <Card className={classes.bonusCard}>
        <Typography>Number of Islands</Typography>
        <Typography className={classes.islandCounter}>{numIslands}</Typography>
        <Button variant="contained" onClick={() => resetWorld()}>
          Reset World
        </Button>
      </Card>
    </>
  );
};
