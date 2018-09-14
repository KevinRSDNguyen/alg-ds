const { Graph } = require("./index");

test("Add Vertex works and does not overwrite", () => {
  let g = new Graph();
  g.addVertex("Tokyo");
  expect(g.adjacencyList["Tokyo"]).toEqual([]);
  g.adjacencyList["Tokyo"].push("SOMETHING");
  g.addVertex("Tokyo");
  expect(g.adjacencyList["Tokyo"][0]).toEqual("SOMETHING");
});

test("addEdge works", () => {
  let g = new Graph();
  g.addVertex("Tokyo");
  g.addVertex("San Francisco");
  g.addEdge("Tokyo", "San Francisco");
  expect(g.adjacencyList["Tokyo"][0]).toEqual("San Francisco");
  expect(g.adjacencyList["San Francisco"][0]).toEqual("Tokyo");
});

test("removeEdge works", () => {
  let g = new Graph();
  g.addVertex("Tokyo");
  g.addVertex("San Francisco");
  g.addEdge("Tokyo", "San Francisco");
  g.removeEdge("San Francisco", "Tokyo");
  expect(g.adjacencyList["Tokyo"][0]).toBeFalsy();
  expect(g.adjacencyList["San Francisco"].length).toEqual(0);
});

test("removeVertex deletes vertex AND removes corresponding edges", () => {
  let g = new Graph();
  g.addVertex("Tokyo");
  g.addVertex("San Francisco");
  g.addEdge("Tokyo", "San Francisco");
  g.removeVertex("San Francisco");
  expect(g.adjacencyList["Tokyo"][0]).toBeFalsy();
  expect(g.adjacencyList["San Francisco"]).toBeFalsy();
});

test.skip("depthFirst works", () => {
  let g = new Graph();

  g.addVertex("A");
  g.addVertex("B");
  g.addVertex("C");
  g.addVertex("D");
  g.addVertex("E");
  g.addVertex("F");

  g.addEdge("A", "B");
  g.addEdge("A", "C");
  g.addEdge("B", "D");
  g.addEdge("C", "E");
  g.addEdge("D", "E");
  g.addEdge("D", "F");
  g.addEdge("E", "F");
  //          A
  //        /   \
  //       B     C
  //       |     |
  //       D --- E
  //        \   /
  //          F
  expect(g.depthFirstIterative("A")).toEqual(["A", "C", "E", "F", "D", "B"]);
});

test.skip("breadthFirst works", () => {
  let g = new Graph();

  g.addVertex("A");
  g.addVertex("B");
  g.addVertex("C");
  g.addVertex("D");
  g.addVertex("E");
  g.addVertex("F");

  g.addEdge("A", "B");
  g.addEdge("A", "C");
  g.addEdge("B", "D");
  g.addEdge("C", "E");
  g.addEdge("D", "E");
  g.addEdge("D", "F");
  g.addEdge("E", "F");
  //          A
  //        /   \
  //       B     C
  //       |     |
  //       D --- E
  //        \   /
  //          F
  expect(g.breadthFirst("A")).toEqual(["A", "B", "C", "D", "E", "F"]);
});
