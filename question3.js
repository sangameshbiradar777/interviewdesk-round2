let cube = {
  x: 0,
  y: 0,
  z: 0,
};

function XAxisRotation(degrees) {
  let radians = (degrees * Math.PI) / 180;

  let matrix = [
    [1, 0, 0],
    [0, Math.cos(radians), -Math.sin(radians)],
    [0, Math.sin(radians), Math.cos(radians)],
  ];

  let x = cube.x;
  let y = matrix[1][1] * cube.y + matrix[1][2] * cube.z;
  let z = matrix[2][1] * cube.y + matrix[2][2] * cube.z;
  cube.x = x;
  cube.y = y;
  cube.z = z;
}

function YAxisRotation(degrees) {
  let radians = (degrees * Math.PI) / 180;

  let matrix = [
    [Math.cos(radians), 0, Math.sin(radians)],
    [0, 1, 0],
    [-Math.sin(radians), 0, Math.cos(radians)],
  ];

  let x = matrix[0][0] * cube.x + matrix[0][2] * cube.z;
  let y = cube.y;
  let z = matrix[2][0] * cube.x + matrix[2][2] * cube.z;
  cube.x = x;
  cube.y = y;
  cube.z = z;
}

function ZAxisRotation(degrees) {
  let radians = (degrees * Math.PI) / 180;

  let matrix = [
    [Math.cos(radians), -Math.sin(radians), 0],
    [Math.sin(radians), Math.cos(radians), 0],
    [0, 0, 1],
  ];

  let x = matrix[0][0] * cube.x + matrix[0][1] * cube.y;
  let y = matrix[1][0] * cube.x + matrix[1][1] * cube.y;
  let z = cube.z;
  cube.x = x;
  cube.y = y;
  cube.z = z;
}
