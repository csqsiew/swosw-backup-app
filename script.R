library(jaysire)

source('question_text2.R')

# cover page + instructions 

instructions <- trial_instructions(
  pages = c(
    "Welcome to this research study on word associations in Singapore English.
    <br><br>Singaporeans have a unique vocabulary, consisting of Singlish words and phrases that originate from various local languages, on top of the Standard English vocabulary. As researchers studying language and memory we are interested in the nature and organization of this unique mental dictionary of Singapore English.
    <br><br>You can help us capture this knowledge by playing a simple game of word associations. This game takes no more than 20 to 30 minutes of your time. All you have to do is to respond with the first three words that come to your mind for a list of Singapore English words.
    <br><br>If you proceed, you consent to your demographic and linguistic data to be collected for research purposes. Your research data could be shared with other researchers for the purpose of scientific exploration.
    <br><br>Your participation in this research study is voluntary and you can stop participating by simply closing your web browser. However, you would not be eligible for reimbursement as the completion code for verifying your participation is only displayed on the final page. 
    <br><br>To receive your reimbursement of SGD$5 via PayNow, please send a screenshot of the final screen containing the completion code to the recruiter/experimenter who sent you this study link. 
    <br><br>If you have any questions, please direct them to the Principal Investigator, Dr. Cynthia Siew (Department of Psychology, National University of Singapore) and the rest of the project team at singlishwords@nus.edu.sg or (65) 9144 3470.",
    "You will first complete a short survey. Press the 'Next' button to begin!"
  ),
  show_clickable_nav = TRUE,
  post_trial_gap = 500
)

# instructions for the word association task
instructions2 <- trial_instructions(
  pages = c("On the top of the screen a Singapore English word or concept will appear. Enter the first word that comes to mind when reading this word.
    <br><br>Press Enter to add a second and third word or proceed to the next word if you can't think of any.
    <br><br>If you don't know the word/concept at all, please write 'dk' in the first box and proceed to the next word/concept.",
  "Only give associations to the word on top of the screen (not to your previous responses)! Try to avoid full sentences or long phrases as responses."),
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
    ),
    question_multi(
      prompt = 'Were you born in Singapore?',
      options = c('Yes', 'No', 'Not sure'),
      name = 'sg_birth',
      required = TRUE
    ),
    question_multi(
      prompt = 'Are you currently residing in Singapore?',
      options = c('Yes', 'No', 'Not sure'),
      name = 'sg_resident',
      required = TRUE
    )
  )
)

# list of demographics from website 
## age
## gender 
# education: PSLE,  
## country of birth 
## ethnicity
## current country of residence 
## How many years have you lived in Singapore? 
## Are you a native English speaker? 
## What other languages do you speak? 

page2 <- trial_survey_text(
  questions = list(
    question_text(
      prompt = "What is your age? (in years, whole numbers only)",
      rows = 1,
      columns = 10,
      name = 'age', 
      required = TRUE
    ),
    question_text(
      prompt = "How many years have you lived in Singapore? (in years, whole numbers only)",
      rows = 1,
      columns = 10,
      name = 'sg_yrs', 
      required = TRUE
    ),
      question_text(
        prompt = "List all the other languages that you speak (except English). Please separate each language with a comma.",
        placeholder = "Type 'none' if English is the only language you speak",
        rows = 2,
        columns = 60,
        name = 'other_languages',
        required = FALSE
    )
  )
)

# word associations 

# master list - main list 
# cues1 <- c('<h2>shiok</h2>', '<h2>makan</h2>', '<h2>sian</h2>', '<h2>see me no up</h2>', '<h2>lagi</h2>')
cues1 <- read.csv('final-lists/swosw-jaysire-list.csv')

# high prevalence list 
# cues2 <- c('mafan', 'wah lau', 'dapao', 'kilat', 'agak agak')
cues2 <- read.csv('final-lists/prevalence-list_20250207.csv') 

### manually edit the sampling with replacement in the javascript itself 

trial_template <- trial_survey_text(
  preamble = 'Enter the words that come to your mind:<br><br>(Remember, if you do not know the word, write "dk" in the first box)',
  questions = list(
    question_text2(
    prompt = insert_variable(name = 'my_stimulus'),
    rows = 1, columns = 20, required = T
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

# main cues 
trials <- build_timeline(trial_template) %>%
  set_variables(my_stimulus = cues1$stimulus) %>%
  set_parameters(randomize_order = TRUE)

# high prevalence cues for data quality checks
trials2 <- build_timeline(trial_template) %>%
  set_variables(my_stimulus = cues2$stimulus) %>%
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

build_experiment(
  timeline = build_timeline(instructions, page1, page2, instructions2, trials, trials2, thank_you),
  path = 'demo/',
  on_finish = save_locally()
)

# run locally 

# run_locally(path = 'demo/')

# web deployment 

# prepare for jatos implementation ----

# build_experiment(
#   timeline = build_timeline(instructions, page1, page2, instructions2, trials, trials2, thank_you),
#   path = 'jatos-demo',
#   on_finish = insert_javascript('() => jatos.endStudy(jsPsych.data.get().json())'),
#   on_close = insert_javascript('() => jatos.endStudy(jsPsych.data.get().json())'),
#   show_progress_bar = TRUE
# )
