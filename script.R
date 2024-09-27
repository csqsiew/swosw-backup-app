library(jaysire)

source('question_text2.R')

# cover page + instructions 

instructions <- trial_instructions(
  pages = c(
    "Welcome! Use the arrow buttons to browse these instructions",
    "On the top of the screen a Singapore English word will appear. Enter the first word that comes to mind when reading this word.
    <br>Press Enter to add a second and third word or proceed to the next word if you can't think of any.
    <br>If you don't know the word at all, you can just proceed to the next word.",
    "Only give associations to the word on top of the screen (not to your previous responses!)
    <br>Try to avoid full sentences or long phrases as responses.",
    "You will first complete a short survey. Press the 'Next' button to begin!"
  ),
  show_clickable_nav = TRUE,
  post_trial_gap = 500
)

# survey 

# a limitation is that only questions of the same type are permitted on the same page
page1 <- trial_survey_multi_choice(
  preamble = "We'd like to first ask some demographic questions",
  questions = list(
    question_multi(
      prompt = "Please select the option that best matches your gender",
      options = c("Male", "Female", "Nonbinary", "Other", "Prefer not to say"),
      name = "gender",
      required = TRUE
    ),
    question_multi(
      prompt = "Please select the option that best matches your ethnicity",
      options = c("Chinese", "Malay", "Indian", "Other", 'Prefer not to say'),
      name = 'ethnicity',
      required = TRUE
    ),
    question_multi(
      prompt = 'Do you consider yourself a native speaker of Singapore English?',
      options = c('Yes', 'No', 'Not sure'),
      name = 'sge_speaker',
      required = TRUE
    )
  )
)

# other demographics to add:
# years of education? vs educational levels
# years in sg, etc. 

page2 <- trial_survey_text(
  questions = list(
    question_text(
      prompt = "List your age in years:",
      rows = 1,
      columns = 10,
      name = 'age', 
      required = TRUE
    ),
      question_text(
        prompt = "List all other languages that you speak (except English):",
        placeholder = "Type 'none' if English is the only language you speak",
        rows = 2,
        columns = 60,
        name = 'other_languages',
        required = FALSE
    )
  )
)

# word associations 

# master list 
cues <- c('shiok', 'makan', 'sian', 'see me no up', 'lagi',
          'mafan', 'wah lau', 'dapao', 'kilat', 'agak agak')

# choose 5 from master list
sampled_cues <- cues[sample(1:length(cues), 5, replace = F)]

trial_template <- trial_survey_text(
  preamble = 'Enter the words that come to your mind:',
  questions = list(
    question_text2(
    prompt = insert_variable(name = 'my_stimulus'),
    rows = 1, columns = 20, required = F
    ),
    question_text2(
      prompt = '',
      rows = 1, columns = 20, required = F
    ),
    question_text2(
      prompt = '',
      rows = 1, columns = 20, required = F
    )
  ),
  data = insert_property(
      cue = insert_variable(name = 'my_stimulus')
    )
)

trials <- build_timeline(trial_template) %>%
  set_variables(my_stimulus = sampled_cues) %>%
  set_parameters(randomize_order = TRUE)

# end 

thank_you <- trial_instructions(
  pages = c(
    "In this study, you were asked to respond with words that came to your mind upon the presentation of Singapore English words. These responses are called free associations, and we and other language researchers plan to use these free associations across thousands of words in Singapore English to study the structure of the Singaporean mental lexicon. Thank you for your help with this research!"
  ),
  show_clickable_nav = TRUE,
  post_trial_gap = 500,
  button_label_next = 'Submit your data'
)

# putting it all together 

# local deployment ----

# build_experiment(
#   timeline = build_timeline(instructions, page1, page2, trials, thank_you),
#   path = 'demo/',
#   on_finish = save_locally()
# )

# run locally 

# run_locally(path = 'demo/')

# web deployment 

# prepare for jatos implementation ----

build_experiment(
  timeline = build_timeline(instructions, page1, page2, trials, thank_you),
  path = 'jatos-demo',
  on_finish = insert_javascript('() => jatos.endStudy(jsPsych.data.get().json())'),
  on_close = insert_javascript('() => jatos.endStudy(jsPsych.data.get().json())'),
  show_progress_bar = TRUE
)
