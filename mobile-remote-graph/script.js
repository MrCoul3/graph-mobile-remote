const graph = {
    1: ["2abc", "4ghi", "*", "3def"],
    "2abc": ["1", "3def", "5jkl", "0"],
    "3def": ["2abc", "6mno", "1", "#"],
    "4ghi": ["1", "5jkl", "7pqrs", "6mno"],
    "5jkl": ["2abc", "4ghi", "6mno", "8tuv"],
    "6mno": ["3def", "5jkl", "9wxyz", "4ghi"],
    "7pqrs": ["4ghi", "*", "8tuv", "9wxyz"],
    "8tuv": ["5jkl", "7pqrs", "0", "9wxyz"],
    "9wxyz": ["6mno", "#", "8tuv", "7pqrs"],
    "*": ["7pqrs", "0", "1", "#"],
    0: ["8tuv", "*", "#", "2abc"],
    "#": ["0", "9wxyz", "*", "3def"],
};


/**

 1     2abc  3def
 4ghi  5jkl  6mno
 7pqrs 8tuv  9wxyz
 *     0     #

 **/

function mobileRemote(text) {
    function bfs(adj, s, t) {
        let queue = []
        let visitedPeaks = [];
        queue.push(s)
        let vArr = [];
        visitedPeaks.push(s);

        while(queue.length > 0) {
            let v = queue.shift()
            if (v !== s) {
                vArr.push(v);
            }
            for(let neighbor of adj[v]) {

                if(!visitedPeaks.find((peak) => peak === neighbor)) {
                    queue.push(neighbor)
                    visitedPeaks.push(neighbor)
                    if(neighbor === t) {
                        // console.log(neighbor)
                        if (!vArr.length) {
                            console.log('-> ', 1)
                            return 1;
                        }
                        if (vArr.length  > 0 && vArr.length < 4) {
                            console.log('-> ', 2)
                            return 2;

                        }
                        if (vArr.length >= 4) {
                            console.log('-> ', 3)
                            return 3;
                        }
                    }
                }
            }
        }
        return false
    }

    let startBtn = "1";
    let count = 0;
    function enter() {
        count++;
    }
   for (let i = 0; i < text.length; i++) {
       const sym = text[i];
       let target = Object.keys(graph).find((key) => key.includes(sym));
       let index = target.indexOf(sym) + 1;
       count += bfs(graph, startBtn, target)
       console.log('sym : ', sym, 'index: ', index + 1, 'result: ', bfs(graph, startBtn, target) + index + 1)
       count += index;
       enter()
       startBtn = target
   }
   console.log(count)
   return count;
}
mobileRemote('mobileremote')




