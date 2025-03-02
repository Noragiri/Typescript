// const div = document.querySelector("#app");

// const p = document.createElement("p");

// p.textContent = "Welcome to our coffe shop!";

// div.append(p);

// const h1 = document.querySelector("h1");
// h1.textContent = "PluralSight";

const body = document.body;
body.style.backgroundColor = "black";
body.style.color = "white";

// walkNode(document);

// function walkNode(node: Node) {
//   if (node.nodeType == Node.ELEMENT_NODE) console.log(node.nodeName);
//   if (node.hasChildNodes) {
//     for (const childNode of node.childNodes) {
//       walkNode(childNode);
//     }
//   }
// }

// const treeWalker = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT);

// let node = treeWalker.nextNode();

// while (node) {
//     if (node instanceof HTMLParagraphElement) {
//         node.style.backgroundColor = "#CCC";
//     }
//     console.log(node.nodeName);
//     node = treeWalker.nextNode();
// }

// const element = document.createElement("button");

// document.getElementById("coffees").style.backgroundColor = "#CCC";

// const elements = document.getElementsByTagName("p");
// let count = 1;
// for (const element of elements) {
//     element.style.backgroundColor = "lightpink";
//     element.style.color = "cyan";
//     element.textContent = `${count++}. ${element.textContent}`;
// }

const listItems = document.getElementsByClassName("list-item");

let count = 1;
for (const element of listItems) {
    if (element instanceof HTMLElement) {
        element.style.backgroundColor = "lime";
        element.textContent = `${count++}. ${element.textContent}`;
    }
}

// const elements = document.querySelectorAll<HTMLElement>("#coffees .list-item");

// elements.forEach((element) => (element.style.backgroundColor = "#CCC"));
