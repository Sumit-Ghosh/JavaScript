// cretae a graph class
class Graph {

    // defining vertex array and 
    // adjaccent list
    constructor() {
        this.vertices = [];
        this.AdjList = new Dictionaries();
    }

    // add vertex to the graph
    addVertex(v) {
        // Push the vertex v to the array
        this.vertices.push(v);

        // initialize the adjacent list with a 
        // nnull array
        this.AdjList.set(v, []);
    }

    // add edge to the graph
    addEdge(v, w) {
        // get the list for vertex v and put the 
        // vertex w denoting edge betweeen v and w
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }

    // concatenate all the vertex and adjacent vertex
    // into a string and print it.
    printGraph() {
        var s = "";
        for (var i = 0; i < this.vertices.length; i++) {

            s += this.vertices[i] + " -> ";
            var get_list = this.AdjList.get(this.vertices[i]);
            var add = "";
            for (var j = 0; j < get_list.length; j++)
                add += get_list[j] + " ";
            s += add + "\n";
            add = "";
        }
        return s;
    }


    // An helper method used to initialize color array
    initializerColor() {
        // declare an color array
        var color = [];

        // Initialize the entire array with white
        // denoting none of the nodes are visited 
        for (var i = 0; i < this.vertices.length; i++) {
            color[this.vertices[i]] = "white";
        }
        return color;
    }

    // Passed as callback function to print vertex
    printVertices(vert) {
        console.log(vert);
    }

    // An helper bfs function which calls the 
    // main bfs function by passing the callback 
    bfsHelper(startingNode) {
        this.bfs(startingNode, this.printVertices);
    }


    // Main function which performs BFS
    bfs(startingNode, callback) {
        // Get the color array
        var color = this.initializerColor();

        // Create an object for queue
        var q = new Queue();

        // add the starting node to the queue
        q.enqueue(startingNode);

        // loop until queue is element
        while (!q.isEmpty()) {
            // get the element from the queue
            var getQueueElement = q.dequeue();

            // mark as processed but not explored
            color[getQueueElement] = "grey";

            // get the adjacent list for current vertex
            var get_List = this.AdjList.get(getQueueElement);

            // loop through the list and add the elemnet to the 
            // queue if it is not processed yet
            for (var i in get_List) {

                var neigh = get_List[i];

                if (color[neigh] === "white") {
                    color[neigh] = "grey";
                    q.enqueue(neigh);

                }
            }

            // mark the current vertex as explored and processed
            color[getQueueElement] = "black";

            // passing the current vertex to callback funtion
            if (callback)
                callback(getQueueElement);
        }
    }

    // dfs helper method which dfs method by 
    // passing call back function
    dfsHelper() {
        this.dfs(this.printVertices);
    }

    // main dfs method
    dfs(callback) {
        // get the color array
        var color = this.initializerColor();

        // itereate through the vertices 
        // and call dfsVisit if a vertex is not processed
        for (var i = 0; i < this.vertices.length; i++) {
            if (color[this.vertices[i]] === "white") {
                this.dfsVisit(this.vertices[i], color, callback);
            }
        }

    }

    // Recursive function which process and explore 
    // all the adjacent vertex of the vertex with which it is called
    dfsVisit(vert, color, callback) {
        color[vert] = "grey";
        if (callback)
            callback(vert);

        var get_neighbours = this.AdjList.get(vert);

        for (var i = 0; i < get_neighbours.length; i++) {
            var get_elem = get_neighbours[i];
            if (color[get_elem] === "white") {
                this.dfsVisit(get_elem, color, callback);
            }
        }
        color[vert] = "black";
    }
}

// Using the above implemented graph class
var g = new Graph();
var vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

g.addEdge('A', 'E');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('A', 'D');
g.addEdge('E', 'F');
g.addEdge('F', 'C');
g.addEdge('B', 'E');
g.addEdge('A', 'F');
g.addEdge('B', 'F');
g.addEdge('E', 'C');
g.addEdge('D', 'B');
g.addEdge('C', 'B');


console.log(g.printGraph());
console.log("BFS");
g.bfsHelper('A');

console.log("DFS");
g.dfsHelper();