// Setup jsPsych experiment with timeline
const timestamp = new Date().toISOString()
const jsPsych = initJsPsych({
    on_finish: function () {
        jsPsych.data.get().localSave('csv', `experiment-${timestamp}.csv`)
    }
})
let timeline = []

// **** Flexible components ****
// Instructions
timeline.push({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
        Welcome to the experiment!<br>
        Press any key to continue.
    `, // Uses HTML to show things, note how new line is done with <br>
    choices: 'ALL_KEYS' // Example of allowing any keys to be pressed
})

// More instructions
timeline.push({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
        You might have to do things!<br>
        The experiment will begin in 3 seconds.
    `,
    choices: 'NO_KEYS', // Example of allowing no keys to be pressed
    trial_duration: 3000 // Example of setting a time limit, normally things last until response
})

// ######## You could add more events to the timeline here ########


// End of experiment
timeline.push({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
        The experiment is over!<br>
        Press space or escape to finish.
    `,
    choices: [' ', 'escape'], // Example of some keys being allowed to be pressed
})

// **** End of flexible components ****

// Run experiment timeline
jsPsych.run(timeline)