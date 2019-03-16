const = objects = [ 
		{ x: 1, y: 1 },
 		{ x: 2, y: 3 },
  		{ x: 3, y: 3 },
 		{ x: 3, y: 4 },
 		{ x: 4, y: 5 }
		 ]


function getCount(objects) {
    return objects.filter(object => object.x === object.y).length
}

getCount(objects); 