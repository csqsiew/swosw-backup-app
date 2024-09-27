# jaysire/jspsych re-implementation of SWOSW

## Motivation 

Original site for collecting singlish associations (https://singlishwords.nus.edu.sg/) might not be sustainable. This serves as a "poor man's" back up so that data collection can continue.

## Libraries needed

```
#install.packages("remotes")
remotes::install_github("djnavarro/jaysire")
```

Jaysire documentation: https://jaysire.djnavarro.net/index.html

## For local testing 

Uncomment the relevant sections at the end of `script.R` and comment out the web deployment section. 

## Demo site (hosted on a jatos instance)

https://bit.ly/singlish-associations

JATOS documentation: https://www.jatos.org/Whats-JATOS.html

## to dos 

- include other demographic questions (but be aware of the many limits in jspsych; see below)
- include full master list of cues, increase number of cues, currently 5 
- try to improve overall look and feel

### not possible (within jaysire/jspsych)

- question types of different kinds cannot be in the same page (i.e., cannot have a check box with text books for the cues) 
- drop down boxes 

## Pros and cons 

- jaysire is not longer maintained; but it is simply a wrapper around jspsych and knowledge of javascript would be sufficient to understand how to fix it vs. the web application requires knowledge of more languages 
- limited functionality and not very pretty, but this could be improved with custom css/html  
