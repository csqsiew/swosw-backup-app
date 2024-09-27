var timeline = {
  "timeline": [
    {
      "type": ["instructions"],
      "pages": ["Welcome! Use the arrow buttons to browse these instructions", "On the top of the screen a Singapore English word will appear. Enter the first word that comes to mind when reading this word.\n    <br>Press Enter to add a second and third word or proceed to the next word if you can't think of any.\n    <br>If you don't know the word at all, you can just proceed to the next word.", "Only give associations to the word on top of the screen (not to your previous responses!)\n    <br>Try to avoid full sentences or long phrases as responses.", "You will first complete a short survey. Press the 'Next' button to begin!"],
      "key_forward": [39],
      "key_backward": [37],
      "allow_backward": true,
      "allow_keys": true,
      "show_clickable_nav": true,
      "button_label_previous": ["Previous"],
      "button_label_next": ["Next"],
      "post_trial_gap": [500]
    },
    {
      "type": ["survey-multi-choice"],
      "questions": [
        {
          "prompt": ["Please select the option that best matches your gender"],
          "options": ["Male", "Female", "Nonbinary", "Other", "Prefer not to say"],
          "horizontal": false,
          "required": true,
          "name": ["gender"]
        },
        {
          "prompt": ["Please select the option that best matches your ethnicity"],
          "options": ["Chinese", "Malay", "Indian", "Other", "Prefer not to say"],
          "horizontal": false,
          "required": true,
          "name": ["ethnicity"]
        },
        {
          "prompt": ["Do you consider yourself a native speaker of Singapore English?"],
          "options": ["Yes", "No", "Not sure"],
          "horizontal": false,
          "required": true,
          "name": ["sge_speaker"]
        }
      ],
      "randomize_question_order": false,
      "preamble": ["We'd like to first ask some demographic questions"],
      "button_label": ["Continue"],
      "required_message": ["You must choose at least one response for this question"],
      "post_trial_gap": [0]
    },
    {
      "type": ["survey-text"],
      "questions": [
        {
          "prompt": ["List your age in years:"],
          "placeholder": [""],
          "rows": [1],
          "columns": [10],
          "required": [true],
          "name": ["age"]
        },
        {
          "prompt": ["List all other languages that you speak (except English):"],
          "placeholder": ["Type 'none' if English is the only language you speak"],
          "rows": [2],
          "columns": [60],
          "required": [false],
          "name": ["other_languages"]
        }
      ],
      "randomize_question_order": false,
      "preamble": [""],
      "button_label": ["Continue"],
      "post_trial_gap": [0]
    },
    {
      "timeline": [
        {
          "type": ["survey-text"],
          "questions": [
            {
              "prompt": jsPsych.timelineVariable('my_stimulus'),
              "placeholder": [""],
              "rows": [1],
              "columns": [20],
              "required": false
            },
            {
              "prompt": [""],
              "placeholder": [""],
              "rows": [1],
              "columns": [20],
              "required": false
            },
            {
              "prompt": [""],
              "placeholder": [""],
              "rows": [1],
              "columns": [20],
              "required": false
            }
          ],
          "randomize_question_order": false,
          "preamble": ["Enter the words that come to your mind:"],
          "button_label": ["Continue"],
          "post_trial_gap": [0],
          "data": {
            "cue": jsPsych.timelineVariable('my_stimulus')
          }
        }
      ],
      "timeline_variables": [
        {
          "my_stimulus": ["shiok"]
        },
        {
          "my_stimulus": ["sian"]
        },
        {
          "my_stimulus": ["dapao"]
        },
        {
          "my_stimulus": ["lagi"]
        },
        {
          "my_stimulus": ["see me no up"]
        }
      ],
      "randomize_order": true
    },
    {
      "type": ["instructions"],
      "pages": ["In this study, you were asked to respond with words that came to your mind upon the presentation of Singapore English words. These responses are called free associations, and we and other language researchers plan to use these free associations across thousands of words in Singapore English to study the structure of the Singaporean mental lexicon. Thank you for your help with this research!"],
      "key_forward": [39],
      "key_backward": [37],
      "allow_backward": true,
      "allow_keys": true,
      "show_clickable_nav": true,
      "button_label_previous": ["Previous"],
      "button_label_next": ["Submit your data"],
      "post_trial_gap": [500]
    }
  ]
};

jsPsych.init(
{
  "timeline": [timeline],
  "on_finish": () => jatos.endStudy(jsPsych.data.get().json()),
  "on_close": () => jatos.endStudy(jsPsych.data.get().json()),
  "show_progress_bar": [true]
}
);

jatos.onLoad(() => {
  jsPsych.run(timeline);
});
