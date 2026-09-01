function fetch_resositories(){
    const repositories = fetch("/github.com/allofurls") 

}

class ui {

    convert_into_ui(){

    }
}

function turn_repositories_into_ui(repositories: string[]){

    const myUi = new ui
  
 const newUI = myUi.convert_into_ui(repositories)

return newUI
}

class ui<T> {

    convert_into_ui<T>(anyarray: <T>[]){

    }
}
//naka ma deff geenerics
//function == seperated block of code that should have its onw callbacks 
//handling of errors not to have all of them coupled and stuff 
// interchangable like bulding blocks
//each of of them does something 