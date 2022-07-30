Given an empty NxN grid where each square is either water or land, write a component that
can model and display this grid and enables the user to:

1. View the grid and whether each type is land or water
2. Provides interface that enables the user to
   add land to the grid
3. addLand v1.0 Behavior:

- If tile is water, converts to land
- If tile is land, does nothing

4. [Bonus] Display number of islands:

- Add some visual way to display the current number of islands in the grid
- Method for computing the number of islands should be as efficient as posible

Example: 3x3 Grid
W W W
W W W
W W W

addLand(1, 0)
Number of Islands = 1
W W W
L W W
W W W

addLand(1, 2)
Number of Islands = 2
W W W
L W L
W W W

addLand(1, 1)
Number of Islands = ??
W W W
L W L
W W W

Notes & Helpful Docs:

- Implementation should go in World.tsx
- Implementation should leverage React Material-UI. Feel free to refer to any and all documentation here: https://material-ui.com/
- Requirements on visual display are intentionally vague. Come up with a simple, intuitive way to render the World as outlined
