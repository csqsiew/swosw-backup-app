var timeline = {
  "timeline": [
    {
      "type": ["instructions"],
      "pages": ["Welcome to this research study on word associations in Singapore English.\n    <br><br>Singaporeans have a unique vocabulary, consisting of Singlish words and phrases that originate from various local languages, on top of the Standard English vocabulary. As researchers studying language and memory we are interested in the nature and organization of this unique mental dictionary of Singapore English.\n    <br><br>You can help us capture this knowledge by playing a simple game of word associations. This game takes no more than 20 to 30 minutes of your time. All you have to do is to respond with the first three words that come to your mind for a list of Singapore English words.\n    <br><br>If you proceed, you consent to your demographic and linguistic data to be collected for research purposes. Your research data could be shared with other researchers for the purpose of scientific exploration.\n    <br><br>Your participation in this research study is voluntary and you can stop participating by simply closing your web browser. However, you would not be eligible for reimbursement as the completion code for verifying your participation is only displayed on the final page. \n    <br><br>To receive your reimbursement of SGD$5 via PayNow, please send a screenshot of the final screen containing the completion code to the recruiter/experimenter who sent you this study link. \n    <br><br>If you have any questions, please direct them to the Principal Investigator, Dr. Cynthia Siew (Department of Psychology, National University of Singapore) and the rest of the project team at singlishwords@nus.edu.sg or (65) 9144 3470.", "You will first complete a short survey. Press the 'Next' button to begin!"],
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
        },
        {
          "prompt": ["Were you born in Singapore?"],
          "options": ["Yes", "No", "Not sure"],
          "horizontal": false,
          "required": true,
          "name": ["sg_birth"]
        },
        {
          "prompt": ["Are you currently residing in Singapore?"],
          "options": ["Yes", "No", "Not sure"],
          "horizontal": false,
          "required": true,
          "name": ["sg_resident"]
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
          "prompt": ["What is your age? (in years, whole numbers only)"],
          "placeholder": [""],
          "rows": [1],
          "columns": [10],
          "required": [true],
          "name": ["age"]
        },
        {
          "prompt": ["How many years have you lived in Singapore? (in years, whole numbers only)"],
          "placeholder": [""],
          "rows": [1],
          "columns": [10],
          "required": [true],
          "name": ["sg_yrs"]
        },
        {
          "prompt": ["List all the other languages that you speak (except English). Please separate each language with a comma."],
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
      "type": ["instructions"],
      "pages": ["On the top of the screen a Singapore English word or concept will appear. Enter the first word that comes to mind when reading this word.\n    <br><br>Press Enter to add a second and third word or proceed to the next word if you can't think of any.\n    <br><br>If you don't know the word/concept at all, please write 'dk' in the first box and proceed to the next word/concept.", "Only give associations to the word on top of the screen (not to your previous responses)! Try to avoid full sentences or long phrases as responses."],
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
      "timeline": [
        {
          "type": ["survey-text"],
          "questions": [
            {
              "prompt": jsPsych.timelineVariable('my_stimulus'),
              "placeholder": [""],
              "rows": [1],
              "columns": [20],
              "required": true
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
          "preamble": ["Enter the words that come to your mind:<br><br>(Remember, if you do not know the word, write \"dk\" in the first box)"],
          "button_label": ["Continue"],
          "post_trial_gap": [0],
          "data": {
            "cue": jsPsych.timelineVariable('my_stimulus')
          }
        }
      ],
      "timeline_variables": [
        {
          "my_stimulus": ["<h2>5c's<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>6c's<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Attend B<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Attend C<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>BMT<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>CMIO<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>COE<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>GRC<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>IPPT<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ISD<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>NFFFFN<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>NS<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Nippon<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>OCBC<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>OCS<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>PAP<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>PES A<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>POP<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>PSLE<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ROD<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>SAFTI<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>SBO<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>SOC<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>a jay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>aa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>aapu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>aathaa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>abalone<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>abang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>abang berg<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>abang bod<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>abang body<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>abang sapau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>abc<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>aberden<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>abit the<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>achar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>aci<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act baik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act beng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act besar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act big<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act bijak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act bodoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act cantik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act chio<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act classy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act comel<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act cool<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act dao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act fierce<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act funny<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act garang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act gerek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act good<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act handsome<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act hot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act jamb<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act jambu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act kaya<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act kelakar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act kesian<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act kiut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act kuai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act lawa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act lomantic<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act macho<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act marah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act mat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act minah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act muda<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act nice<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act pandai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act pelat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act sachok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act sad<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act sedih<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act sek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act seksi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act sexy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act shuai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act sibuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act silly<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act slim<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act smart<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act stupid<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act sweet<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act tall<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act terror<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act tough<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act yige<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act young<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>action bedek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>adik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>adoi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>afbf<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>again<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>agak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>agak tarik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>agakration<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>agar agar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>agaration<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah balling<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah bengfied<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah bu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah chek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah chew<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah dou<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah gong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah kah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah kow<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah kua<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah kun<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah loong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah ma<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah meng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah mm<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah nia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah pa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah pek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah pui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah soh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah then<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ahbh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ai bin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ai swee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ai zai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>air jarang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>air kendi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>air suam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>air-level<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>aiseh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>aiseh bedah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>aiseh dude<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>aiseh man<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>aiskrim uncle<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>aiyoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>aiyu jelly<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>akal kolot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>akasai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>akka<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>aksi borak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ali baba<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>alrdy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>also boleh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>also can<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>amin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>amma<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>amoi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>an zhua<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>aneh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ang geh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ang kong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ang pai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>angan angan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>angau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>anger issue<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>angkat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>angkat bola<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>anglophone singaporean<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>angwee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>anjack<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>anjing<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>anneh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>anoneh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>anot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>anpai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>anyhow<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>anyhow anyhow<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>anyhow bedal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>anyhow cakap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>anyhow hentam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>anyhow rembat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>anyhow whack<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>anyhowly<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>apa ini<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>apam balik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>apam manja<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>appa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>arbo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>arbr<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>arbuden<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ard<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ardeh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>argable<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>argly<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>arm chio<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>armed forces<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>armored regiment<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>army enlistment<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>army mate<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>army personnel<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>army regular<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>army specialist<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>army unit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>arnoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>aromatic rice<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>arrow<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>asam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>asam masam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>asbs<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ask favour<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>atas ppl<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>atbt<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>attap chee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>aunty<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>auta<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>autobot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>awek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>awol<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ayah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ayam kampung<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ayya<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ba zhang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>baba malay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>baba nyonya<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>babi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>babi poyo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>babu singh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bacin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>backside itchy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>badan berg<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>baduvaa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>baghal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bahlul<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bai wulong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>baik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>baik hati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bakero<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>balik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>balik kampung<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ball game<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>balls drop<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>balls shrink<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>balu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>balukoo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bamboo leaf<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>banana child<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>banana leaf<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>banana money<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bang ball<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bangang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bangap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bangga<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bangga hati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bangkai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bangla<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bangsat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bantai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bantal busuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>banyak cakap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>banyak colok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>banyak mulut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>baobei<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bapak lu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bapok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>barang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>baru<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>basic information<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>basketball court<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bat po<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>batu api<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bazir<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bbm<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bcac<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bcc<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bcf<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beancurd skin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beancurd strip<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bedal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bedek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bedek kacang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bedek kings<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bedok bedok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bee hoon<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bee koh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bee see<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beef ball<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beef floss<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beef rendang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beef serunding<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beethoven<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beh gum<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beh hiao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beh hoo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beh hoon<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beh kan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beh pai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beh paiseh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beh piao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beh song<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beh steady<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beh steali<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beh tank<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beh tong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>belah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>belakang mari<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>belasah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>belcube<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bellygood<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bend<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bengang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bengap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bengfied<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bengkok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>benglish<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bengong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>berambus<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>berangan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>berat hati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>berat mulut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>berat sebelah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>berat tulang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>berbelah bagi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>berbual slang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>berfoya foya<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>berhutang budi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bermuka dua<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bermuka muka<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>berterima kasih<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>beruk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>besar hati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>besar kepala<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>best<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bestest<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>betawi laksa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>betina<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bgr<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bhai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bhai toncet<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bhb<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>biadap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bian tai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bianhae<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>biar betik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>biar betul<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>big mulut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bijak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bika ambon<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bin bin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>binget<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bingka ambon<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>biol<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bird bird<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>biscuit piring<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bising<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>biskut dahlia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>biskut piring<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>biskut semperit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bismillah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bisu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bitter lesson<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>black face<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>black spider<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>blame oneself<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>blanco<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>blanjah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>blank face<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>blank file<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>blanket party<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>blarder<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>blindly copy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>block catching<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>blue black<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>blue tick<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>blur blur<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>blur cock<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>blur king<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>blur queen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>blur sotong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>blur toad<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bmw<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bo bin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bo chee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bo chup<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bo hew<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bo hood<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bo hua<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bo idea<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bo lang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bo lat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bo lui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bo min<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bo pakai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bo pakay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bo pi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bo say<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bo sim<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bo song<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bo sui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bo yong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bobo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bobo king<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bobo shooter<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bodek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bodek membodek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bogay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bogoshipda<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>boh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bohong sunat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bok gwai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>boleh belah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>boleh berambus<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>boleh tahan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bombz<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bomoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>boncet<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bongkak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bongok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>booby prize<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>boombastic<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>boomz<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>borak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>borong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>borrow<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>boss<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>botak head<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>botch up<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>boy boy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>braised dish<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>brengsek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bs<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bth<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>btss<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bu guan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buah cheri<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buah duku<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buah kana<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buah susu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bual slang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buang saliva<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buang tebiat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buang time<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buat bodoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buat dek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buat malu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buay gum<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buay kan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buay kantang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buay paiseh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buay sai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buay si<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buay swee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buay tank<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buay tong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buay zai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buayalogy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>budak kental<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>budak payung<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buddhist festival<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>budget hotel<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buffed body<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bujang terlajak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bukit timah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bulat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bully king<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bully queen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bun knife<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bunk mate<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buntu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bunuh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>burn hand<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buruk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buruk siku<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>busok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>busuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buta<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buta hati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buta huruf<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>butoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>butt itchy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>butter cookie<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>butter filling<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>butter topping<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>butterface<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>butterfly biscuit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buwee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cab<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cabul<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cabul maruah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cabut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cacat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cacat akal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cacat otak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cai niao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cair hati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cakap besar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cakap slang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cake lapis<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>calefare<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>call backup<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>call girl<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>camel toe<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>campur tangan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>campurs<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>can<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>can die<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cannon fairy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cannot wait<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cantik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cap merah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cari hal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cari makan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cari pasal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cari point<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cari trouble<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>carry ball<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>carry balls<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>carry kavadi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>catch feel<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cats cradle<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cb mouth<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cekik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cekik darah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cekodok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>celebpreneur<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cemburu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cemburu buta<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cempedak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cepat cepat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cepat lari<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cereal prawn<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cerewet<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cerita dongeng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cewah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chalk drawing<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>challen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cham<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cham siong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>champion<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>change parade<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>changi prison<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chao da<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chao kah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chao kang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chao keng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chao kuan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chao lao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chao private<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chao recruit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chap cheng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chapalang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chapteh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>char bor<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>char tau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chase rank<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chau peng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chay meh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chaydebah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheapo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheapo pek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheat duit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheat feeling<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheat money<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheaterbug<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chee bye<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chee hong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chee ko<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chee sin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chee toad<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheebilised<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheeminology<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheemology<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheena beng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheena gherk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheena pek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheena piang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheena pok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheenapok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheese cracker<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheese mexico<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheese pie<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheesy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chellam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheong hei<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cher<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chey<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheybah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheydebah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chi cham<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chi kek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chiak chow<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chiak hong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chiak kantang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chiak lang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chiak lui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chiak tsua<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chibaboom<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chibaboom ppl<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chibot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chickabong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chickadees<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chicken<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chicken backside<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chicken feed<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chicken feet<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chicken floss<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chicken ppl<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chicken rendang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chicken rice<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chicken serunding<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chik ak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chiku<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chillax<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chilli crab<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chilli padi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chin chye<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>china man<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>china woman<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chinapore<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chinaporean<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chindian<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chinese almanac<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chinese helicopter<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ching chong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chio<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chiu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chochok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>choi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>choki<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>choki choki<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chong kong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>choobi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>choon boh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>choot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chootable<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chor<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chor lang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chor lor<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chou chou<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chu pattern<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chuay si<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chums-chums<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chun boh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chuppie<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chut pattern<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cik pon<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cina babi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cina poyo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cinapore<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cinaporean<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cinibong laksa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cissy cracker<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>civil servant<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>civil service<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cklps<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>claypot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>climbing plant<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>close eye<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>clown around<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cm<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cnc<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cny<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cock fella<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cock up<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cockanathan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>coconut milk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>coffee money<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>coklat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>colorful jelly<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>combat engineers<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>combat vocation<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>comel<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>comeuppance<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>complain king<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>complain queen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>confirm<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>confuzzled<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>consperm<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>constertation<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>construction worker<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>contra<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>controlive<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>corn puff<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>corntos<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cover backside<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cover line<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cover lubang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cover pantat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cover shit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cow touncil<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cowdung<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>crispy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>critisai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>crone<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cronyism<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>csb<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>csi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>css<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cuckoo bird<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cucuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cucur<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cultural theft<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>curi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>curi ayam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>curry favor<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>curry laksa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>curse enemy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>custard flour<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>custard powder<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cut queue<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cyber cafe<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dadah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>daebak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dahlia biscuit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dai ji<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dai lou<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>daisy biscuit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dak payung<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>darah naik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>darah up<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>datuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dd<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>deeparaya<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>deepavali<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>degil<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>despo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>detention barracks<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dhevadiyaa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dhilla<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>di di<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>diam diam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>diao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>diao ppl<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>diao zui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>diaoz<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>die die<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dieded<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>digger<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ding dang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ding dong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dinner&dance<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dip dip<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dirty business<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dirty work<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>diu lei<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>do wan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dodge task<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dodol durian<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dodol nangka<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dodol sirsak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dol<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>donch<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>donch shy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dong zhi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dont hew<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>doraemon<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dosa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>double decker<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dowan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dowan done<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dragon dance<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>drain hole<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>drama<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>drama mama<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dried fig<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dried fish<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dried fruit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dried olive<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dried prawn<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>drink stall<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dta<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dua pai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>duanwu festival<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dubdew<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>duit raya<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>duku<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>duku langsat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dukun<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dumpling festival<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dun<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dungu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dunno<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>duo gao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>durex<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dutty yeah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ear biscuit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>eat air<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>eat dirt<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>eat grass<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>eat salt<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>eat shit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>eat snake<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>eat taik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>eclectic mix<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>economic rice<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>edible wrapper<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>edmw<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>edmwer<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>eee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>egg ball<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>egg wafer<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>eh hello<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>eh hiao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>eh sai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>eksi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>eksi borak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>elbow neck<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>electro mat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>electro minah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>eleven b<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>elumbukoodu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>emo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>empty headed<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>eng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>england<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>engrand<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>engrish<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>enthu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>eppadi irukkinga<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>errand boy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>eruma maadu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>erxin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>erxin dabian<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>eskew me<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>exersai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>extra<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>eye red<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>eyeglass candy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>eyeglass chocolate<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fa dai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>face pecah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fakester<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fall in<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fall out<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>familee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fancy gems<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fang pi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fang xin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>farker<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fast game<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fatsy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>feathered toy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>feeling feeling<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>feeweet<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>feng shui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fetch<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fevret<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fiak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>field camp<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>field report<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>find pasal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>finger itchy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>first-come first-serve<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fish gravy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fish muruku<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fish seller<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fist fight<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fitspo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>five stone<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fizzy cola<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>flashy fashion<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>flesy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>flim<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>flip eraser<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>flip prata<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fly aeroplane<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fly kite<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>food truck<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>food wrapper<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fool around<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>forazumper<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>foreign devil<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>foreign talent<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>foreign worker<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>forget it<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fox spirit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>foya foya<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fraudster<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>freaktard<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>free flow<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>free-range<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fricktard<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fried egg<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>friend friend<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fruit rojak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>frus<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fuck spider<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fugly<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fuh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fulamak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>full tank<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>full time<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fuyoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fwah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>fwuh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gadoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gagah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gain face<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gaji buta<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gam sia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gan bei<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gan dong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gan qing<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gandos<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gandos ubi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ganja<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ganjaa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gao cuo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gao ding<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gaowei<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>garam masala<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gasak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gasak buta<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gasak lah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gasing<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gatal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gd<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gedempol<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gei lou<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gei yan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gek sim<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gembeng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gempal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gemuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gemuk gedempol<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gendut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>geng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>geng bang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ger<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>geragok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>geram<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gerek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>getai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>getuk getuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>getuk ubi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gg<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ggdd<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ggwp<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ggxx<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ghee cookie<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gi mampoi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gi mampus<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gi mati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gian png<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila arak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila bab<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila babi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila betina<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila bodek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila botol<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila dadah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila duit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila gossip<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila hutang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila jantan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila judi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila kuasa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila lelaki<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila money<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila monster<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila pangkat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila perempuan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila pompuan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila rank<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila rasuah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila talak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila wang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ginna kuan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ginna pi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>girl girl<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>give chance<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>give face<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>give offering<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gl<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>glam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>glgt<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>glhf<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gnay gnay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>go die<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>go head<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>go mampoi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>go mampus<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>go mati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>go where<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>goblok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>goli<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gone case<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gong gong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gong kia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gong koay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gong lang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gong simi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gong tao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gong xi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gongfu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gongxi raya<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>goot pocoyo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gorblok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>goreng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>got<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>got license<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gotong royong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>government job<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>government mouthpiece<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>government scholarship<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>goyang kaki<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>grandfathers army<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>grandfathers road<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>grated coconut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>green packet<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gu niang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gua<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>guai guai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>guangdong province<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>guangzhou immigrant<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>guanyin ma<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gudek putih<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>guessbag<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gula melaka<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gummy candy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gungho<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>guo fen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gvgt<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gwai lou<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gx<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>h81<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ha<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>habis<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>haf<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hailat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>haish<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>haiyah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>haiyoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>haiyoyo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hakka cuisine<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>halal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>half ball<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>half-baked<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ham bin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hami melon<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hamz<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>han na<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>han tse<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hancai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hand itchy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>handsomelicious<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hansum<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hantu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hao chi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hao ren<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hapak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>haprak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hapz<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>haram<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hard up<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hardcore<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hari raya<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>harnoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hasut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hate sunlight<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hati batu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hati berat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hati busuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hati cair<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hati panas<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>haw flakes<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hawker centre<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hay bee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hay wiring<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hdb flat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hean toh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>heart cair<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>heart pain<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>heartlander<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>heaty<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>helicopter<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>heliucated<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hell money<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hen hao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>heng chu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>heng suay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>henpecked husband<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hensem<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hentak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hentak kaki<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hentak leg<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hentam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hentam bola<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>heong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>heong siu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hero<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hey sho<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hiam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hiao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hiao mi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hiau lok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hide face<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hide muka<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hidung tinggi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>high level<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>high roller<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>high-class<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hijabista<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hilang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hilang akal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>himbo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hindu festival<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hindu pariah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hip siong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hiro<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hisap dadah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hisap ganja<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hit aeroplane<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hit target<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hitto<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hmmm zai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ho jiak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ho kua<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ho say<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ho thia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hock kee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hodoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hojjiber<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hokkien cuisine<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hokkien peng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>holy day<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>holy month<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hong kan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hongster<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hoong kee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hoot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hopeless case<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hor<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hor fun<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hor liao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hor mia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hor miah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hormat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hormat senjata<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>horrigible<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hosay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hosehbo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hosei liao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hotdog prata<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hotel 81<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hou sek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hougang chalet<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>house visitation<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>housing project<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>how can<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>how liddat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>how now<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>how seow<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hua hee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>huai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>huan a<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>huat ah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>huat kueh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>huat sio<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>huatderful<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hudsons<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>huha<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hui sei<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>huli jing<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hum chi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hum sup<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hutang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hypokrit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ibu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ice jelly<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ice kacang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ice lolly<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ice soursop<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>iceball<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>iced gem<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>identity card<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>idle king<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>idle queen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ikan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ikan bilis<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ikan satay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ikat perut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ilichavaayee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ill-wish<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>im thread<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>imba<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>immeelly<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>in-camp<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>indian cuisine<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>indian festival<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>indonesian cuisine<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>innards<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>inshallah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>insult grandfather<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>insult mother<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ipoh laksa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>iri hati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>iron rings<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>irrit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>is it<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>itchy backside<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>itchy finger<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>itchy hand<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>itchy mouth<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>itchy pantat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jade emperor<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jaga<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jahat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jalan jalan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jamban<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jambu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jangan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jangan catastrophe<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jangan jangan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jangan tension<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jantan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jatuh hati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jatuh heart<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jazakallah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jeling<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jelly cone<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jelly cup<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jemput<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jemput datang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jemput makan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jenkol<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jering<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jerrorize<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ji seow<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ji siao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jiak cao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jiak chor<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jiak hong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jiak kor<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jiak lang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jiak lui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jiak png<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jiak sai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jian dui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jiao bin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jiao geh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jiayou<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jie jie<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jijik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jilat ludah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jilo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jit pun<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jiu hu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jiu ming<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jiwang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>joahamida<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>joayo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>johor laksa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>joli<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jom<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>joss paper<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jual jubo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jual mahal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>juang lah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jube<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jude<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jugger<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>junior college<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>just nice<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>just right<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>k.o.<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ka chng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ka zua<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kacang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kacang brain<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kacang hantu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kacang putih<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kacau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kacau daun<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kacau leaf<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kachau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kah kia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kai kai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kai qiao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kain sarong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kain songket<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaka<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kakak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki alcohol<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki arak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki bangku<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki bazir<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki betina<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki bodek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki botol<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki buli<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki cabul<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki cabut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki dadah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki gaduh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki gossip<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki hutang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki jantan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki joli<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki judi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki lang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki lepak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki lottery<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki mabuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki maksiat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki membazir<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki mengumpat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki menyampuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki minum<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki party<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki perempuan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki ponteng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki rape<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki sampuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki suap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki togok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki umpat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaki zina<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaku<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kalang kabut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kalimannu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kalipok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kam buan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kam guan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kam muan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kam tong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kamcheng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kampau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kampung chicken<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kampung ppl<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kampung spirit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kan cheong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kang kor<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kang tau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kangkong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kannu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kantang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kantoi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kao lat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kao peh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kapchai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kapoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>karaoke bar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>karat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kari<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kari laksa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kartun<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>karung guni<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>karut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kasi chance<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kati menggatal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>katik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>katik ayam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kawaii<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kawan-kawan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kay gau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kay kay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kay kiang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kay siao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaya hati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaya hutang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaya toast<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaypoh chee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaypoh kia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kayu tiga<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kc trap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kci<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kcs<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ke ai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ke lian<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kebuluh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kechik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kecil hati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kecoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kecohrable<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kedah laksa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kedekut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kedenking<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kee hiao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kee jiak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>keep quiet<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>keep safe<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>keep secret<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kek khi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kek lapis<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kek sai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kek si<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kekek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kelakar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kelam kabut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kelantan laksa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kelentong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>keling<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>keling pariah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kelong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kelong king<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kelong queen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>keluar baris<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kembung air<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena arrow<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena axe<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena bang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena bantai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena bedal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena belasah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena blast<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena box<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena cabul<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena catch<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena caught<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena cekik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena cheat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena con<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena control<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena corner<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena criticize<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena cut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena drench<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena drill<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena fire<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena force<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena goreng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena hammer<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena hentam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena hit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena hukum<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena jack<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena kelentong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena ketuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena kick<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena kondamn<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena kongkong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena kutuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena lanyak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena lempang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena main<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena marah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena paksa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena pecat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena perangkap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena play<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena politic<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena prank<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena pressure<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena psiko<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena psycho<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena pukul<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena punish<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena qie<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena rembat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena rogol<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena sack<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena sacked<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena saiko<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena saman<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena scam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena scold<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena screw<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena sekel<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena seksa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena semek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena sepak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena slam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena slap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena smack<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena sound<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena squash<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena stomp<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena strangle<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena tangan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena tangkap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena tekan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena tendang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena tiao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena tipu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena torture<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena trap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena trick<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena tumbuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena walkover<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena whack<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>keng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>keng gai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>keng king<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>keng queen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kengster<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kening terperanjat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kental<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kental shit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kentang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kentot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kentut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kenyang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>keong kan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>keow kui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kepala angin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kepala batu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kepala botak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kepala butoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kepala crack<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kepala pening<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kepala sakit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>keps<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kept woman<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kera sumbang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kerek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kerepek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kerepek ikan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kerepek kentang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kerepek pedas<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kerepek udang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kerisik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>keropok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kesian<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ketat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ketat ppl<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ketenteng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ketinggalan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ketot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ketuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ketupat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kfc man<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>khek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>khia khia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ki si<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kia lang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiabo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiam chye<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiam eh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiam lui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiam pah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiam siap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiampa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiao ka<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiao kar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiap si<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiapap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiasai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiasiism<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiasiness<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiasuism<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>killer litter<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kim jio<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kim zua<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kimak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kimek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kin chiong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>king<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kio tio<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiss backside<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiu mia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiu mo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiut miut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiwak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kizhavan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kizhavi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>knock off<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>knock out<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kodok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kolam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kolaveri<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kolot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kongkong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kongsi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>konjac jelly<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>konnyaku jelly<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kontot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>koo bye<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kool<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>koon<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>koon king<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>koon queen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>koot lat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kope<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kopi c<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kopi gau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kopi kia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kopi kosong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kopi lui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kopi money<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kopi o<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kopi peng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kopi poh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kopi sock<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kopiko<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kor kor<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kor lian<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>korban<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>koro<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kosong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kotek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kotta<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>koyak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>koyok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kristang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kthxbye<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuah lang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuah midnight<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuah suay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuai kia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuai kuai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuai lan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kucing kurap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kudut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kudut kedenking<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih akok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih ambon<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih bahulu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih bakar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih bangkit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih belanda<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih bingka<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih bom<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih bongkong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih bronok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih cara<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih cincin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih dadar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih dodol<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih gandos<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih jagung<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih jongkong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih kamir<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih kapit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih kasturi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih kaswi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih kaya<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih kelupis<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih koci<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih kodok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih kosui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih koya<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih lapis<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih legit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih lompang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih lopis<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih makmur<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih manja<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih marmer<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih momo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih pancong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih pulut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih rangin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih rengas<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih sago<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih salat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih semperit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih semprong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih siput<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih tako<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih talam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih tayap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih tutu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuih wajik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuku<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuku bird<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuku head<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuku jiao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kum cheng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kum gong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kum lan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kum pooi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kumsiahamidas<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kundi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kunji<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kupon<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kurang ajar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kurus kedenking<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kusut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kusut masai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuti<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kuti kuti<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kutti<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kutuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kwa hee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kwa meenite<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kway<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kwiyowo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>l-cube l-square<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lady boss<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lak seh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>laksa ipoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>laksa kari<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>laksam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>laling<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lam nua<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lambat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lambong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lame<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lame answer<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lame joke<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lamsing<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lan eh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lan game<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lan lan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lan si<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lan tiu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lan tui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lancing<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>langgar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>langsat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lanjiao wei<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lantak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lantak kau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lantern festival<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lanyak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lanzone<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lao ban<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lao beng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lao bu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lao chio<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lao da<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lao gong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lao hero<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lao hiao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lao jiao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lao kwee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lao nua<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lao peh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lao peng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lao po<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lao pok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lao shuai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lao yah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lao yandao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lapar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lasak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>laser mouth<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>last chance<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>last warning<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lau jiao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lau kau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lau kwee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lau lan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lau sai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lau yah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lawa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lazy bum<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lean body<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>leceh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>legong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lelong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lemang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lemau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lembab<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lembik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lembut hati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lemon tea<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lempang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>leng lui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>leng zai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lepat pisang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lerf<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lhd<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>li<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>li hai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>li ho<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>liam keng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lian<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lianglish<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lianified<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>liddat ha<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>liddat how<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ligo raisin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>like attention<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>like auntie<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>like makcik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>like market<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>like pakcik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>like praise<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>like real<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>like runway<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>like that<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>like uncle<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lim<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lim coffee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lim teh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>limited english<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lingua franca<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lintah darat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lion dance<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lip lai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>litter bug<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>little boy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>little strength<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>live firing<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>llst<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lo hei<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>load up<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>loan shark<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>loanmai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lobo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>loh soh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lolex<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lolz<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lomance<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lomantic<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>long bean<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>long life<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>longan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>longkang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>longkau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>longkau chui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lontong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lood<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>looksee looksee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>loosu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lose face<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lose money<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lost form<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>loti<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>love letter<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>loving lion<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>low class<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lppl<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>luan luan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lugi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lui bin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lum pah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lumber<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lumpang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lumsing<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lunar calendar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lup sup<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lurus bendul<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ma huan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>maangaa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>maapillai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mabok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>macam betul<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>macam biskut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>macam faham<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>macam paham<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>macam real<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>macha<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>machan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>machi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>macnoner<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>madrasah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>maggi mee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mah fan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mah jie<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mai beo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mai gay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mai hiam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mai lai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>main baju<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>main bedal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>main control<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>main gila<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>main hentam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>main jubo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>main kasar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>main kutuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>main main<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>main pantat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>main rembat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>main sondol<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>main tipu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>main tuduh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>main whack<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>majok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mak kau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mak nenek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>makan angin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>makan hati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>makan session<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>makan shit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>makan suap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>makan taik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>makcik add<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>makcikfied<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>make noise<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>make prata<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>make way<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>making money<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>maknyah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>maksiat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>makwa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>malas<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>malay costume<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>malay cuisine<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>malay shaman<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>maling shit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>malingsia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>malty flavor<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>maluating<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mamak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mamak shop<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mamat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mambo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mamee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mamee monster<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mami jarum<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mampoi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mampus<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>manage prostitute<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mandai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mandaikku yethuraan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mandi cowboy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mangali<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mangkuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>manja<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mannangkatti<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mantao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mantat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>manyak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>map drawing<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>marah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>marble cake<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mark attendance<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>masai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>masak masak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>masala chai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>masam manis<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>maseelis<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mashallah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mass order<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mass orgy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>masuk baris<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mat bunga<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mat emo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mat jiwa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mat kental<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mat motor<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mat rempit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mat rep<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mat rock<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mat roker<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mat salleh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mat smart<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mat taper<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mata duitan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mata keroh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mata kuching<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mata lembu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mata mata<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mata potek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>match fixing<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>matcha<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>maximum power<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mc<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mc king<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mc queen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mcjiji<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mcjiji food<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mckkj<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mediacorp<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>medical certificate<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mee hoon<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mei mei<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mei nu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>melampau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>melebih<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>melebih lebih<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>melepas<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>meluat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>membabi buta<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>membuta<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>memekak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>memorize blindly<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mempersiasuikan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mendak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mengada ngada<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mengarut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mengumpat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mental hospital<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mentel<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>menyampah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>menyampuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>menyibuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>menyundal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>menyusahkan orang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mepek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>merajok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>merajuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>merdeka generation<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>merengek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>merengek rengek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>merepek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>meringue icing<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>merlion<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>merlion ppl<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mexico bun<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mi mi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mian lui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>miang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mianhae<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mid-autumn festival<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>military command<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>military design<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>military exercise<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>minah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>minah bunga<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>minah emo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>minah jiwa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>minah kental<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>minah motor<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>minah rempit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>minah rep<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>minah rock<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>minah taper<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mineral water<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mini packet<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mini-packet<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>minor role<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>minyak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>miskin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>missed chance<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>missed opportunity<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>missed timing<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>missing tooth<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>miw<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mixed blood<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mixed culture<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mixed heritage<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mixed vegetable<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mixed vegetables<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mklghlg<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mkltws<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mlmlwm<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mna<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>moi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mommom eyeglass<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>monetary gift<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>money crazy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>money eyed<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>money face<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>money minded<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>money scam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mooncake<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mooncake festival<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>moonjum moraiyum<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mootai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mor peng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>more work<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mosquitoes-infested<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>moulded cake<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mountain tortoise<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mounting anger<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mouth itchy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>move aside<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>muah chee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>muddle-headed<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>muffadet<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mugger<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mugger toad<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>muka blank<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>muka crap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>muka pecah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>muka scrap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>muka stoink<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>muka stone<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>muka tebal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mulut berat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mulut besar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mulut buih<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mulut itchy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mulut laser<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mulut murai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mulut tempayan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mum-mum<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mummy jarum<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mundachi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mundam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mungsat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>municipal office<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>munjen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>muntah blood<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>murah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>murah hati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>murah ppl<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>murah rezeki<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>muruku ikan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>musibot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>musibut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mutton rendang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>my foot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>my one<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>myob<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mythical creature<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>na beh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>naataa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>naayi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>nabedous<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>nabeh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>naggy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>nah beh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>naik angin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>naik hantu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>namaste<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>nangka busuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>nao hiah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>nasi putih<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>nation builder<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>national service<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>national servicemen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>navigation exercise<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>nbab<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ncac<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>necroing<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>neh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>neighborhood game<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>nemmind<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>nenek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>netizen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>new bird<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>new rich<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>newbie<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>neyi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ngam ngam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>nhah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>nhnt<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ni hao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ni ni<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>niamed<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>night market<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ninja van<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>nlal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>no balls<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>no bodek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>no brain<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>no choice<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>no excuse<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>no face<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>no filing<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>no gahmen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>no money<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>no otak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>no pakai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>no shame<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>no speeyak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>noob<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>nose-picking<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>not making<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>not serious<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>nowsaday<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>nrar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>nsas<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ntat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>nvm<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>nyanyi sumbang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>nyonya kebaya<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ob marker<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>obvious answer<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>occifer<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>off<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>off day<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>off duty<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>officer vetti<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>offshore island<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>oi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>okt<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>old bird<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>old generation<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>olden days<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ombodhu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>on<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>on charge<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>on guard<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>on lah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>on off<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ondeh ondeh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>one<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>one kind<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>one sided<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ons<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ooh say<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>opeh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>oppa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>oppies<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>opposition party<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>or che<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>orang putih<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>orange fruit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>orange-coloured<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>orbi good<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>orbi quek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>orgas<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>orh gao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>orh hoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>otak crack<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>otak geliga<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>otak gila<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>otak kacang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>otak kolot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>otak kosong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>otak kotor<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>otak lu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>otak senget<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>otak sod<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>otak udang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>otak yellow<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>otak you<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>otang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>outfield training<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>outside food<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>overseas studies<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pa jiao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pack food<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>packet food<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>padan muka<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>paedo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>paggro<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pah lan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pahala<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pai cho<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pai jiak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pai kah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pai kwa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pai lang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pai miah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pai seh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pai sin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pai tau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pai than<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pai thia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pain<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pak bang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pak kiu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pakat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pakay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pakcik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pakcik add<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pakcikfied<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>paknyah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>paktorlogy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pakwa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pala batu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pala botak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pala butoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pala crack<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pala pening<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pala pusing<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pally pally<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>palm leaf<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>panas<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>panas baran<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>panas hati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pancet<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>panchan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pandai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pandan leaf<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pandey<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pandi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pang chan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pang chiu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pang giu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pang kang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pang pooi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pangkeng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>panjang tangan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>panjang umur<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pantang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pantat gatal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pantat itchy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pao niu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pao toh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pap vampire<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>papa kedana<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>paper aeroplane<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>paper airplane<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>paper cone<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>paper general<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>parachi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>parachuting<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>paradesi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>paraiyan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>parking coupon<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>parking fee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>party cube<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>partygoer<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pasal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pasang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pasang telinga<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pass motion<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pass urine<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>patah hati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>paternal uncle<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>patron saint<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pau chia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pau tau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pay up<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pcc<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>peanut brain<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pearl-like<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pecah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pecah lobang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pee thinnu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>peidu mama<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pek chek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pekak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pekak badak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pelahap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pelat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pelik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pemalas<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>penagih<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>penagih dadah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>penakut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>penalty fee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>penang cuisine<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>penat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>peng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>peng mil<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>peng you<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pengecut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pengsan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pening<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pening kepala<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>penipu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>penis retraction<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>penny pinching<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pepek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pepero<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perakus<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>peranakan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>peranakan cuisine<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perangai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perangai beruk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perangai buruk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perangai hantu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perangai pecah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan baik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan beng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan besar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan big<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan bijak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan busy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan cantik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan chio<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan class<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan classy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan clever<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan comel<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan cool<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan cute<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan fierce<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan funny<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan garang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan gerek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan good<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan handsome<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan hensem<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan hot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan jamb<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan jambu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan kaya<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan kelakar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan kesian<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan kiut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan lawa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan lian<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan lomantic<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan macho<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan marah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan mat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan minah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan muda<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan nice<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan pandai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan pelat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan pretty<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan rich<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan romantic<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan sachok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan seksi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan sendiri<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan sexy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan shuai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan slim<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan smart<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan strong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan sweet<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan tall<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan terror<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perasan young<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perbird<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pergi mampoi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pergi mampus<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pergi mati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perlis laksa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>permanent residence<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perng tang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>perut kembung<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>petai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pew pew<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>peyi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pgo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pi la<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pi sai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pia chui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>piak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pian chiah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pian jiak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>piang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pigu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pijak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pijak kepala<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pilu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pinkerton syndrome<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pinkie lee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pintar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pioneer generation<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pisaasu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pisang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pisang emas<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pisang kelat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pisang keling<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pisang kepok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pisang mas<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pisang rajah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pisau cukur<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>plan fail<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>plaster mulut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>plasterwork<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>play catching<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>play cheat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>play foul<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>play innocent<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>play play<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>play rough<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>play shirt<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>played out<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>please others<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pleasure seeking<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pledge loyalty<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pls<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>plu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pocky<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pocong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>poda<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>podi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>poh mata<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>point finger<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>polar snack<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>politaik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>polite greeting<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>polite request<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>political discourse<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>political family<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>political party<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>politick<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>polo sweet<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pondan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ponding<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pong kan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pongal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ponteng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pontianak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>poo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>poochandi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>poon zui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>poopxplosion<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>poot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>popiah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>popiah goreng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>popz<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>por<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>posertive<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>potato wheel<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>potong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>potong jalan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>potong queue<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>potong steam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>powder bath<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>powder form<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>powderful<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>powdery form<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>power<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>poyo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pp<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ppl<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>prata<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>prata dog<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>prata flip<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>prc<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pre-tertiary education<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pregnant duck<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>prembry<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>primary school<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pro<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pro establishment<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>protect pride<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>provision shop<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ps<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pua chao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>puah liap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>puas<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>puasa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>public nuisance<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>public servant<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>public transport<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pudding jagung<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pudding marmer<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pukimak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pukul<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pulasan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pulau ntu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pulut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pulut inti<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pulut panggang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pulut serunding<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pulut tatal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pulut tekan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pumchek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pundai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pundeh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>punnaakku<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>push pop<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>push up<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>puteri lilin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>puteri salat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>putus<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pwd<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pwn<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pyaar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pyramid-shaped<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>q mo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>qi guai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>qq<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>qu si<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>qu yuan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>quack medicine<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>queen control<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>raba-raba<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rabak murtabak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rabak rabak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rabaking<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rabun ayam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rabz kebabz<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rag-and-bone man<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rainbow bread<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>raja blur<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>raja bomoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>raja bully<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>raja complain<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>raja kelong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ramadhan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rara<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>raya<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ready already<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>reconnaisance<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>red bean<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>red envelope<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>red face<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>red headscarf<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>red packet<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>red wrapper<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>regular soldier<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rekey<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>relak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>relak lah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>release anger<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rembat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>remove testicles<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rempah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rempah udang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ren<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rendang ayam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rendang daging<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rendang kambing<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>reservist<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>reunion dinner<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rice bowl<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rice cracker<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rice flour<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ring pop<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rnostalgic<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>road hog<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>robert tao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rod mood<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rogol<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rojak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rojak bandung<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rokok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>role model<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>roll eye<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rosak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rosy complexion<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rotan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>roti<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>roti bakar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>roti john<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>roti kaya<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>roti prata<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rotten jackfruit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>round face<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>round stomach<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>roundish shape<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rubber stamp<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rugi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>run lion<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>run road<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>rush home<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>saamy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>saat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sabo king<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sabo queen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sachok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sad case<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sadded<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sadhaiyan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>saf 100<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sah kah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>saht<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>saht saht<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sai kang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sakali<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sakit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sakit hati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sakit jiwa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sakit kepala<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sakit otak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sakti<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>salah parking<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sama-sama<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>saman auntie<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>saman uncle<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>saman unker<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sambal cuka<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>samdol<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>same age<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>same religion<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>same sex<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>same-same<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sampai hati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sampai tua<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sampuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sampuk menyampuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>samseng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>samseng kia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>samster<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>samsui woman<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>san por<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>santan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sapau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sape cakap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sappe matter<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sapport<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sapu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sar kar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sar suku<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sarabat stall<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sarakku<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sarang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sarawak laksa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sarawak origin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sardine<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sargen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sarpork<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sarsi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sarsi float<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sarung<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>satay fish<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>satay sauce<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>satay stick<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>satki<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sattaikaaran<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sattaikaran<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sauce<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>save face<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>save money<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>save yourself<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>say again<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>say first<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>say her<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>say him<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>say me<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>say so<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>say somemore<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sayang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sayang seh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>scared what<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>scarycat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>score point<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>scrap face<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>screw loose<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>seafarer<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>seafood cracker<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>seasoned seaweed<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>seaweed chicken<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sedap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sedih<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>seductress<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>see how<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>see mirror<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>see what<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>segan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>seh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>seh bin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sei chor<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sei lou<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>seik bai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sekel<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sekel kepala<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>seksa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>selar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>selasih<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>selekeh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>selendang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>selenge<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>self-pwn<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>selit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>semangat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sembunyi muka<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>semek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>semme<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>semperit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>semula<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>senang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>senang diri<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sengau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>senget<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sengket<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>senju<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sensitive issue<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>seow<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>seow eh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sepet<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>seram sejuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>serani<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>serunding ayam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>serunding daging<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sesame ball<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sesame seed<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>set<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>set result<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>set!<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>settle<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>settle outside<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>seventh month<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sewel<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sewer serpent<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sewer service<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>shaddup<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>shag<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>shake head<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>shake leg<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>shaved ice<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>she she<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>shee shee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>shi fu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>shiling<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>shingz<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>shiny wrapper<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>shiok sendiri<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>shit face<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>shit pants<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>shitapore<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>shitaporean<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>shitapura<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>shooting drill<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>show face<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>show superiority<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>shuai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>shuai dai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>shuai ge<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>si beh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>si ginah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>si liao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>si mi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sia suay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>siah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>siak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sial<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sial lah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sialan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>siam bu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>siam tiu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sian half<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sian tao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>siansation<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>siao kia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>siao kow<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>siao lang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>siao liao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>siao on<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>siao peng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>siapa cakap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sibeh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sibuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sibuk sibuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sicko<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sign 1206<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sign extra<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sign on<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sik fung<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sikit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sillpore<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>silly goat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>silly toad<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sillypore<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sillyporean<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sillypura<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sim tia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sim tiah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>simi lanjiao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sin jiao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>singabloodypore<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>singapolang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>singapower<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>singapura<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>singlish<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sinkek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sinkie<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sinseh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sio<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>siol<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>siong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>siot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sirukki<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sivan sothu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>slap hand<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sleng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>slim mlim<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>slip inside<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>small kacang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>smart-aleck<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>smelly face<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>smoke<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>smooth talker<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>snail-shape<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>snake king<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>snake queen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sneered at<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sneeze non-stop<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sniff glue<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>so<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>so how<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>soc<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>social climber<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sock-shaped<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sod dot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sod sod<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>soft bun<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>soft jelly<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>soh chai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>soh si<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sohai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>solid<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>solo kia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sombong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sondol<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>songket<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>songkok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>soon li<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>soothu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sot sot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sour look<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>soursop<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>soursop puree<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>speaking siak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>specky<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>spectacle chocolate<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>spg<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>spiak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>spin cracker<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>spinning top<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>spoil<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>spoil market<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sponge cake<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>spot on<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>spout nonsense<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>squeeze through<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>standard<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>staple mulut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>stay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>steady<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>steady hand<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>steali<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>steam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>steamed cake<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>steamed nut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step angry<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step baik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step beng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step besar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step big<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step bijak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step blur<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step bodoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step busy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step cantik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step chio<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step class<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step classy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step clever<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step comel<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step cool<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step cute<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step fierce<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step funny<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step garang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step gerek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step good<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step handsome<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step hensem<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step hot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step jamb<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step jambu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step kacak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step kaya<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step kelakar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step kesian<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step kiut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step kuai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step lawa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step lian<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step lomantic<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step macho<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step marah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step mat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step minah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step muda<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step nice<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step pandai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step pelat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step pretty<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step rich<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step romantic<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step sachok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step sad<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step sedih<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step sek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step sexy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step shuai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step sibuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step slim<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step smart<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step stupid<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step sweet<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step tall<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step terror<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>step young<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>stewpiak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>stewpig<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>stick game<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>stick-shaped<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sticky rice<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>stinko<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>stir shit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>stoink<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>stoink face<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>stomp it<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>stomper<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>stone<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>stone face<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>stoner<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>strawberry generation<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>street smart<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>string game<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>study mama<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>stun<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>stupiak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>stupid mistake<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>stylo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>stylo milo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>suaku<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>suan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>suara sumbang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>suay suay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sub standard<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>subhanallah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>submissive husband<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>subsidai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>subtle anger<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>suck thumb<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sud sud<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sudah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sudah lah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sugee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sugoi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>suka hati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sukati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sukati lah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>suku<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sum seng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sumpah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sundal<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sundry good<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>super ring<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>superior absent<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sure anot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>surplise<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>susah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>susahkan orang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sutun<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>swee swee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sweet nothings<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>swing tangan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>switch off<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>switch on<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>switch stance<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>syncopant<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>syt<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>t drops<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tabah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tabah hati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tackle<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tactical movement<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>taf club<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tagih dadah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tahi arak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tahi dadah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tahi gossip<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tahi hutang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tahi judi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tahi kucing<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tahu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tahu goreng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tai chi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tai tai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>taik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>taiko<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tair<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tak apa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tak betul<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tak guna<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tak jalan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tak kena<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tak kuasa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tak larat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tak logic<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tak pakai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tak pe<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tak sanggup<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tak senonoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>takde bodek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>takde brain<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>takde filter<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>takde hati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>takde otak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>takde standard<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>take away<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>take cover<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>talam ubi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>talcum powder<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>talk big<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>talk bird<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>talk loudly<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>talk nonsense<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>talk rot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>talk rubbish<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tamade<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tamago boro<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tambah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tambelan laksa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tampan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tan chiak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tan lui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tandoori masala<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tang chek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tang kee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tangan itchy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tangkai jering<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tangkap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tangkap chio<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tangkap emo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tangkap feel<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tangkap feeling<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tangkap glam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tangkap glamer<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tangkap glamour<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tangkap handsome<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tangkap jamb<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tangkap jambu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tangkap jiwang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tangkap lawa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tangkap macho<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tangkap sweet<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tank crew<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tankee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tao eh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tao yen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tap water<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tapi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tapioca flour<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tapioca pearl<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tar por<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>target practice<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tarik harga<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>taruh hati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tau geh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tau hong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tau kee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tau tiah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>taupok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tebal muka<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>teddy biscuit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tee kee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>teh gu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>teh kosong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>teh masala<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>teh pao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>teh tarik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>teh-C<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tei mia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tekan session<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>telekung<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>telinga gajah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>telt<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>temasek holdings<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>temasick<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tembak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tempat biasa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tempat regular<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tempayan mouth<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>teng teng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tengik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>teochew cuisine<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tepi sikit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tepung<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tepung gomak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ter bye<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ter tau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>terbaboom<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>terbalik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>terengganu laksa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>terh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>terima kasih<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>terkongkong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>terperanjat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>terperanjat beruk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>terrihorble<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>terror<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>teruk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tetek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>thaathaa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>thaipusam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>thalai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>thambi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>thandachoru<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>thangachi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>thangam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>thani<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>thanz<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>the peng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>thiam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>thick-headed<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>thin wafer<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>thin-skinned<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>thng chu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>thoolu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>thoongumoonji<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>throw face<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>throw marbles<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>throw smoke<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>thru<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>thulukkaci<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>thulukkan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>thulukkar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>thx<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ti gong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tia bo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tia gong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tiam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tidak apa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tiger mother<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tiger show<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tikam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tiko<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tiko pek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>time lambat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tin teh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tio kan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tio stomp<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tio stun<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tiong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tiong xim<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tionged<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tiongified<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tipu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tipu duit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tipu feeling<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tipu money<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tiu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tnehing<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>togok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>togok session<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>toh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tok kong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tok sad<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tolong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tolong lah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tolong sikit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>toman<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tombalik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tompang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tong keng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tong shu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tony tan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>too free<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>too lan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>too noisy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>topo general<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>topo king<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tor hwee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tora<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>touch lottery<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>touch wood<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tow kong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>towkay neo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>town council<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>traditional brew<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tripod<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>trouble others<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tru<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tsao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tsao kng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tt<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ttm<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tu hao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tu lan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tua<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tua bangka<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tua ganyut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tua kang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tua kee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tua kerepot<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tua ki<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tua liap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tua pai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tua tao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tua teow<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tuang king<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tuang queen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tuangster<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tube-shaped<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tudung<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tum sim<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tumbuk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tumpang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tumpang bahagia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tumpang gembira<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tumpang happy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tumpang sad<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tumpang sedih<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tung shing<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tunjuk muka<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tup pai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>twisted mind<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>twisties<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>two players<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ty<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tyvm<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tzai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tzai chiu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tzai si<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tze char<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>udderwise<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ular<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ular king<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ular queen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>uluated<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>um chio<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>umph<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>un-glam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>uncle<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>unclear vision<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>unclefied<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>understooded<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>unglam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>unkerfied<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>unload<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>untahanable<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>up<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>up there<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>upsai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>urbanista<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>vaisakhi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>vanakkam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>vennai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>very can<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>vesak day<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>vetti<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>vetti officer<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>viet bu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>void deck<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>vpl<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wa lan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wa lau<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wa piang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wa seh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wa siao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wah lap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>walk walk<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wandering spirit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wang wang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wash photo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>waste duit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>waste effort<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>waste money<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>waste saliva<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>watch out<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wax apple<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wayang king<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wayang ppl<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wayang queen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wenla<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wet market<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>weva<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>whack<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>whacko<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>whacky<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>whallop<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>what<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>what done<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>what lah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>what thing<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>what-squat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wheel cracker<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>whew<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>white devil<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>white face<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>white rabbit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>white robe<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>white spider<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>win liao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>win lottery<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>win oreddy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>winter solstice<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>woi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wont die<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>woo hoo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>woodbridge hospital<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>worf<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>workers party<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>working class<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>worn out<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wound dressing<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>woven fabric<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wowie<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wowo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wowo king<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wu hua<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wu kok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wu liao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wu lui<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wu sim<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wurf<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>xdd<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>xhh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>xiao di<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>xiao qiang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>xiao san<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>xie xie<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>xin tong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>xingfu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>xinyao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>xln<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>xmm<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ya right<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ya siol<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yalor<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yam paste<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yam seng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yan yan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yang or<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yau kwee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yau siu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yaya<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yaya king<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yaya queen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ye eleh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yeh yeh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yelah tu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yellow minded<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yest<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yeye or<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yeye pantat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yistana<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>you tiao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>young ruffian<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yu sheng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yum cha<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yum seng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yummy<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yupi bear<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yuppie<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>z monster<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zao king<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zao queen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zao yim<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zar tan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zeh zeh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zero fighter<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zero point<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zg<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zheng ah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zhng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zho sian<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zhun bo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zhun zhun<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zhup<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zi cai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zi char<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zina<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zor kang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zor tang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zor teng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zzz<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Admiralty<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Aljunied<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Ang Mo Kio<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Aviation Park<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Bahar Junction<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Bartley<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Bayfront<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Bayshore<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Beauty World<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Bedok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Bedok North<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Bedok Reservoir<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Bedok South<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Bencoolen<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Bendemeer<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Bishan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Boon Keng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Boon Lay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Botanic Gardens<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Braddell<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Bras Basah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Brickland<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Bright Hill<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Buangkok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Bugis<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Bukit Batok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Bukit Batok West<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Bukit Brown<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Bukit Gombak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Bukit Panjang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Buona Vista<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Caldecott<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Canberra<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Cantonment<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Cashew<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Changi Airport<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Changi Airport Terminal 5<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Chinatown<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Chinese Garden<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Choa Chu Kang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Choa Chu Kang West<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>City Hall<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Clarke Quay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Clementi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Commonwealth<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Corporation<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Dakota<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Defu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Dhoby Ghaut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Dover<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Downtown<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Elias<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Enterprise<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Esplanade<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Eunos<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Expo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Farrer Park<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Farrer Road<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Fort Canning<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Founders' Memorial<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Gardens by the Bay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Gek Poh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Geylang Bahru<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Great World<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Gul Circle<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>HarbourFront<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Havelock<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Haw Par Villa<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Hillview<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Holland Village<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Hong Kah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Hougang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Hume<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Jalan Besar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Joo Koon<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Jurong East<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Jurong Hill<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Jurong Lake District<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Jurong Pier<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Jurong Town Hall<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Jurong West<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Kaki Bukit<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Kallang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Katong Park<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Kembangan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Kent Ridge<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Keppel<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Khatib<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>King Albert Park<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Kovan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Kranji<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Labrador Park<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Lakeside<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Lavender<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Lentor<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Little India<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Lorong Chuan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Loyang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>MacPherson<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Maju<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Marina Bay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Marina South<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Marina South Pier<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Marine Parade<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Marine Terrace<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Marsiling<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Marymount<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Mattar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Maxwell<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Mayflower<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Mount Pleasant<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Mountbatten<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Nanyang Crescent<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Nanyang Gateway<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Napier<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Newton<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Nicoll Highway<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Novena<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>one-north<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Orchard<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Orchard Boulevard<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Outram Park<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Pandan Reservoir<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Pasir Panjang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Pasir Ris<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Pasir Ris East<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Paya Lebar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Peng Kang Hill<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Pioneer<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Potong Pasir<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Prince Edward Road<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Promenade<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Punggol<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Punggol Coast<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Queenstown<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Raffles Place<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Redhill<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Riviera<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Rochor<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Sembawang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Sengkang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Serangoon<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Serangoon North<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Shenton Way<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Siglap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Simei<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Sixth Avenue<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Somerset<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Springleaf<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Stadium<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Stevens<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Sungei Bedok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Sungei Kadut<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Tai Seng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Tampines<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Tampines East<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Tampines North<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Tampines West<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Tan Kah Kee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Tanah Merah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Tanjong Katong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Tanjong Pagar<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Tanjong Rhu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Tavistock<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Tawas<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Teck Ghee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Telok Ayer<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Telok Blangah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Tengah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Tengah Park<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Tengah Plantation<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Tiong Bahru<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Toa Payoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Toh Guan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Tuas Crescent<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Tuas Link<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Tuas West Road<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Tukang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Turf City<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Ubi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Upper Changi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Upper Thomson<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>West Coast<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Woodlands<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Woodlands North<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Woodlands South<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Woodleigh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Xilin<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Yew Tee<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Yio Chu Kang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>Yishun<\/h2>"]
        }
      ],
        // SAMPLE FROM STIMULI
  sample: {
    type: "without-replacement",
    size: 4, // 2 stimuli
  },
      "randomize_order": true
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
              "required": true
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
          "preamble": ["Enter the words that come to your mind:<br><br>(Remember, if you do not know the word, write \"dk\" in the first box)"],
          "button_label": ["Continue"],
          "post_trial_gap": [0],
          "data": {
            "cue": jsPsych.timelineVariable('my_stimulus')
          }
        }
      ],
      "timeline_variables": [
        {
          "my_stimulus": ["<h2>4D<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act blur<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>act cute<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>action<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>agak agak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah beng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah lian<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ah long<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>aiyah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>alamak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ang moh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>angpow<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>atas<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bagus<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>balik kampong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>barang barang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>basket<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bo bian<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bochap<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bojio<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>boliao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>bodoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>boleh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>botak<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buay song<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buay steady<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>buay tahan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheekopek<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>cheem<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chin chai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chiobu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chiong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chop chop<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>chope<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>dabao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>diam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>double confirm<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>encik<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gila<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gonecase<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>goondu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>gostan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hantam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>haolian<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>heck care<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>heng<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>hoseh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>huat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jialat<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>jio<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kampong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kancheong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kaypoh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>keesiao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kena<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kenasai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiasi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kiasu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kopi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>kopitiam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>laosai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lehchey<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>liao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lim kopi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>lobang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mafan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>makan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>malu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mata<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>mati<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ownself<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>paikia<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>paiseh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>paktor<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pangsai<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>pasar malam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sabo<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>salah<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>see first<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>shiok<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>siam<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sian<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>siao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>simi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>simidaizi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>sotong<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>steady pompipi<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>suay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>suka<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>suka suka<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tahan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>talk cock<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>teh<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>tekan<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>towkay<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>ulu<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>vomit blood<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>walao<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>wayang<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>where got<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>yaya papaya<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>your head<\/h2>"]
        },
        {
          "my_stimulus": ["<h2>zhar bor<\/h2>"]
        }
      ],
        // SAMPLE FROM STIMULI
  sample: {
    type: "without-replacement",
    size: 2, // 2 stimuli
  },
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
  "on_finish": function() {
    var data = jsPsych.data.get().csv();
    var file = 'xprmntr_local_name';
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'submit');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: file, filedata: data}));
  }
}
);
