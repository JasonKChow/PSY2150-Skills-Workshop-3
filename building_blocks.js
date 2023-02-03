// Basic HTML event that records a response from the keyboard
// https://www.jspsych.org/7.2/plugins/html-keyboard-response/ for more options and details
timeline.push({ // Assumes that you have a variable called timeline that is a list of events
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `html stimuli goes here!`, // Uses HTML to show things
    prompt: 'prompt goes here', // Example of a prompt, which is shown below the stimulus
    choices: ['f', 'j'], // Example of some keys being allowed to be pressed
    trial_duration: null, // Set this to a number (ms) to limit how long the trial can last before completely timing out and moving on
})

// Basic image event that records a response from the keyboard
// https://www.jspsych.org/7.2/plugins/image-keyboard-response/ for more options and details
timeline.push({ // Assumes that you have a variable called timeline that is a list of events
    type: jsPsychImageKeyboardResponse,
    stimulus: 'path/to/image.png', // Path to image
    prompt: 'prompt goes here', // Example of a prompt, which is shown below the stimulus
    choices: ['f', 'j'], // Example of some keys being allowed to be pressed
    trial_duration: null, // Set this to a number (ms) to limit how long the trial can last before completely timing out and moving on
})