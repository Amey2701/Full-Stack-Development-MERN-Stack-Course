// memoryLeak.js

let leaks = [];
let leakInterval = null;

// Function that simulates a memory leak
function createLeak() {
    leaks.push(new Array(1000).fill('leak'));
    console.log(`Leaks created: ${leaks.length}`);
}

// Start memory leak
document.getElementById('startLeak').addEventListener('click', () => {
    if (!leakInterval) {
        leakInterval = setInterval(createLeak, 1000);
        console.log('Memory leak simulation started...');
    }
});

// Stop memory leak and clear memory
document.getElementById('stopLeak').addEventListener('click', () => {
    if (leakInterval) {
        clearInterval(leakInterval);
        leakInterval = null;
        leaks = []; // release references
        console.log('Memory leak simulation stopped and memory cleared.');
    }
});
