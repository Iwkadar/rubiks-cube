var configuration = {
    cubeSize: 3,
    spacing: 0.1,
    rotationSpeed: 0.2,
    colours: [0x0051BA, 0x1b9250, 0xC41E3A, 0xFF5800, 0xFFD500, 0xFFFFFF],
    transitions: {
        x: {z: 'y', y: 'z'},
        y: {z: 'x', x: 'z'},
        z: {x: 'y', y: 'x'}
    },
    cubeColour: {
        color: 0x242323,
        emissive: 0x242323
    },
    backgroundColor: 0x514e4e
};