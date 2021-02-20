const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');

function calculateTargetPosition(targetPosition, boxToMove) {
    const boxToMoveTargetLeft = targetPosition.x - parseInt(boxToMove.style.left);
    const boxToMoveTargetTop = targetPosition.y - parseInt(boxToMove.style.top);
    return { x: boxToMoveTargetLeft, y: boxToMoveTargetTop };
}

function translateOneByOne() {
    moveElement(redBox, calculateTargetPosition({ x: 20, y: 300 }, redBox))
        .then(() => {
            console.log('red box moved to target position');
            moveElement(blueBox, calculateTargetPosition({ x: 400, y: 300 }, blueBox))
                .then(() => {
                    console.log('blue box moved to target position');
                    moveElement(greenBox, calculateTargetPosition({ x: 400, y: 20 }, greenBox))
                        .then(() => {
                            console.log('green box moved to target position')
                        })
                })
        })
}
translateOneByOne();

function translateAllAtOnce() {
    Promise.all([moveElement(redBox, calculateTargetPosition({ x: 20, y: 300 }, redBox)),
    moveElement(blueBox, calculateTargetPosition({ x: 400, y: 300 }, blueBox)),
    moveElement(greenBox, calculateTargetPosition({ x: 400, y: 20 }, greenBox))])
    .then(() => {
        console.log('All circles translated at once');
    })
}
translateAllAtOnce();