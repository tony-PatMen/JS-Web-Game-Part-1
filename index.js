function addNewImage(image, position) {
    let obj = document.createElement('img');
    obj.src = image;
    obj.style.position = 'fixed';
    obj.style.left = position[0];
    obj.style.bottom = position[1];
    document.body.append(obj);

    return obj;
}


function addNewItem(image, position) {
    let newObject = addNewImage(image, position);
    newObject.addEventListener('dblclick', function(){
        newObject.remove();
    });
}


const TEXTURE_SIZE = 100; 
const ROWS_SKY = 4; 

for (let y = 0; y < ROWS_SKY; y++)
    for (let x = 0; x < window.innerWidth / TEXTURE_SIZE; x++)
        addNewImage('assets/sky.png', [`${x * TEXTURE_SIZE}px`, `${window.innerHeight - TEXTURE_SIZE * y}px`]);

for (let y = ROWS_SKY; y < (window.innerHeight + TEXTURE_SIZE) / TEXTURE_SIZE; y++)
    for (let x = 0; x < window.innerWidth / TEXTURE_SIZE; x++)
        addNewImage('assets/grass.png', [`${x * TEXTURE_SIZE}px`, `${window.innerHeight - TEXTURE_SIZE * y}px`]);


addNewImage('assets/green-character.gif', ['100px', '100px']);
addNewImage('assets/pine-tree.png', ['450px', '200px']);
addNewImage('assets/tree.png', ['200px', '300px']);
addNewImage('assets/pillar.png', ['350px', '100px']);
addNewImage('assets/crate.png', ['150px', '200px']);
addNewImage('assets/well.png', ['500px', '425px']);

addNewItem('assets/sword.png', ['500px', '405px']);
addNewItem('assets/sheild.png', ['165px', '185px']);
addNewItem('assets/staff.png', ['600px', '100px']);