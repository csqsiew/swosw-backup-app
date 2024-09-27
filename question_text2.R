# there is a bug in the jaysire library where the required=FALSE argument does not work 
# these are my own versions of the functions needed to make this work 
# since we don't want to force responses for cues if there are none 

question_text2 <- function (prompt, placeholder = "", rows = 1, columns = 40, required = FALSE, 
          name = NULL) 
{
  q <- drop_nulls(list(prompt = prompt, placeholder = placeholder, 
                       rows = rows, columns = columns, required = js_logical(required), ###  
                       name = name))
  return(structure(q, class = "jspr_freetext"))
}

drop_nulls <- function(x) {
  x[purrr::map_lgl(x, ~!is.null(.x))]
}

js_logical <- function(x) {
  x <- as.logical(x)
  if(x == TRUE) return(js_code("true"))
  return(js_code("false"))
}

js_code <- function(x) {
  class(x) <- "json"
  x
}