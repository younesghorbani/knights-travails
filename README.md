# Knights Travails

## About

This project is about showing the shortest possible path from the starting square to the destination square on the chessboard by showing all the squares where the knight stopped along the way.

## Goals

- What is a [**Graph**](https://en.wikipedia.org/wiki/Graph_(abstract_data_type)) and how does it help to solve a problem.
- How to find the shortest path using [**Breadth-first search (BFS)**](https://en.wikipedia.org/wiki/Breadth-first_search) algorithm.

## How to run

```shell
$ git clone https://github.com/younesghorbani/knights-travails.git
$ cd knights-travails
$ node script.js
```

## Other concepts used

- JavaScript Classes
- JavaScript Spread Operator

## Challenges

If we consider the chessboard as a graph, all the squares are the vertices of that graph, and finding the shortest path between two vertices is a very common problem. This problem can be solved with different search algorithms, but one of the most common ones is BFS, which can be implemented using a [**Queue**](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) data structure.  
In each square where the knight stops, it must first be checked whether that square is the destination or not. If it is, the path traveled to that square will be displayed, but if not, first that square must be considered as visited, then it must be added to the array that holds the path traveled, and finally all adjacent squares that the knight has not encountered before and may encounter later must be added to the end of the queue. This action should continue until the destination is reached or the queue is empty.  
In fact, there is no easy part in the project because solving the problem mentioned above means finishing the project. Therefore, solving this problem was the most difficult and challenging part of the project for me.