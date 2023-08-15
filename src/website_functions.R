## Code for website functions
## Aedin, Feb 10th 2023
## Will be tidied up by more coding proficient lab members ;-)


#' makeQuery
#'
#' @param authors 
#' @param year 
#' @param ... 
#'
#' @return
#' @export
#'
#' @examples
makeQuery<-function(authors=authors, year=NULL, ...){
  my_query <- paste("{",paste(sapply(authors,paste0,"[AU] "), collapse ="OR "), "}","AND", year,"[PDAT]")
  if (is.null(year)) my_query <- paste("{",paste(sapply(authors, paste0, "[AU] "), collapse ="OR "), "}")
  
}

#' getRefs
#'
#' @param my_query 
#' @param ... 
#'
#' @return text with class RefManageR::BibEntry
#' @export
#'
#' @examples
getRefs<-function(my_query=NULL, ...) {
  library(RefManageR)
  mybib23=ReadPubMed(my_query)
}