import landingpageimg from './assets/landingpageimg.svg'


export function Landing_page(){

    let userinput: string = ''

    //this is the github api path 
    const apiCodeSample = "/repos/{owner}/{repo}/contents/{path}"
                                           
// here i append "repos", and "contents" to the user input
function fix_user_input_to_match_api_path(): string {
    const updatedinput1 = userinput.replace(/blob/,"contents/blob")
    const updatedinput2 = updatedinput1.replace(/github.com/, "github.com/repos")
    const apiPath = updatedinput2
    return apiPath
}
    return (
        <main className="main">
       <header className="header">
        <h1 className="h1">
            Contribute to open source in a meaningful way
        </h1>
        <h2 className="h2">
            see the code's architecture<br />
            think about it<br />
            contribute
        </h2>
        <img src={landingpageimg} className="headerimg">
        </img>
       </header>
       <form style={{marginTop: "20px"}} method={HTTPMethod}action={fix_user_input_to_match_api_path}>
        <input className="input" 
        type= "text" 
        placeholder="www.github repo link">
        </input>
       </form>
       </main>
    )
}