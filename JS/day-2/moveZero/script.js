
const submitButton = document.querySelector('.submit')
const result = document.querySelector('.result');
const algoOptions = document.querySelector('#algo-select');

submitButton.addEventListener('click', buttonFunction)

//  Function to render the array to the screen
function renderArray(arr, explorerIdx, targetIdx) {
    result.innerHTML = ''; // Clear current view
    arr.forEach((num, index) => {
        const div = document.createElement('div');
        div.classList.add('box');
        div.textContent = num;

        // Apply visual highlights
        if (index === explorerIdx) div.classList.add('explorer');
        if (index === targetIdx) div.classList.add('unique-target');

        result.appendChild(div);
    });
}

//  Utility function for pausing
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// remove duplicate function 
async function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    // We start at 1 because the first element is always unique
    let insertIndex = 1;

    for (let i = 1; i < nums.length; i++) {

        renderArray(nums, i, insertIndex - 1);
        await sleep(800);

        // If current element is different from the previous unique one
        if (nums[i] !== nums[insertIndex - 1]) {
            nums[insertIndex] = nums[i];

            renderArray(nums, i, insertIndex);
            document.querySelectorAll('.box')[insertIndex].classList.add('modified');

            await sleep(800);
            insertIndex++;
        }
    }

    alert(`Done! Unique count (k) is: ${insertIndex}`);
}

//move zeroes function
const moveZeroes = async (arr) => {
    // return if array is empty or has only one element
    if (arr.length == 0 || arr.length == 1) {
        return
    }

    let lastNonZeroFoundAt = 0;

    // Phase 1: Move all non-zero elements to the front
    for (let i = 0; i < arr.length; i++) {
        renderArray(arr, i, lastNonZeroFoundAt);
        await sleep(800);
        if (arr[i] !== 0) {
            arr[lastNonZeroFoundAt] = arr[i];
            renderArray(arr, i, lastNonZeroFoundAt);
            document.querySelectorAll('.box')[lastNonZeroFoundAt].classList.add('modified');
            await sleep(800);
            lastNonZeroFoundAt++;
        }
    }

    // Phase 2: Fill the rest with zeroes
    for (let i = lastNonZeroFoundAt; i < arr.length; i++) {
        renderArray(arr, i, -1);
        await sleep(800);
        arr[i] = 0;
    }

    alert(`All zeroes moved to the end!`);
};

// Button click handler
async function buttonFunction() {
    //Take input from user
    const rawInput = document.querySelector('#input-number').value

    //conver string into array
    const nums = rawInput
        .split(',')              // Split by the comma
        .map(item => item.trim()) // Remove any extra spaces (like " 2")
        .filter(item => item !== "") // Remove empty strings if user types "1,,2"
        .map(Number);


    if (algoOptions.value === 'remove-duplicates') {
        await removeDuplicates(nums);
    } else if (algoOptions.value === 'move-zeroes') {
        await moveZeroes(nums);
    }

    renderArray(nums, -1, -1);

}


