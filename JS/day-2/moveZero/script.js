
const submitButton = document.querySelector('.submit')
const result = document.querySelector('.result');

submitButton.addEventListener('click', buttonFunction)


async function buttonFunction() {
    //Take input from user
    const rawInput = document.querySelector('#input-number').value

    //conver string into array
    const nums = rawInput
        .split(',')              // Split by the comma
        .map(item => item.trim()) // Remove any extra spaces (like " 2")
        .filter(item => item !== "") // Remove empty strings if user types "1,,2"
        .map(Number);

    // 1. Utility function for pausing
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // 2. Function to render the array to the screen
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


    // remove duplicate function 
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

    renderArray(nums, -1, -1);
    alert(`Done! Unique count (k) is: ${insertIndex}`);

}


