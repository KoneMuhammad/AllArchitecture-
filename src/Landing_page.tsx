import landingpageimg from './assets/landingpageimg.svg'


export function Landing_page(){

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
       <form style={{marginTop: "20px"}} onSubmit={make_request_to_github_api}>
        <input className="input" id= "github_repository"
        type= "text" 
        placeholder="www.github repo link">
        </input>
       </form>
       </main>
    )
}
function make_request_to_github_api(e){
    fix_user_input_to_match_api_path(get_user_input(e))
}

function fix_user_input_to_match_api_path(userRepository: any): string {
    const updatedinput1 = userRepository.replace(/blob/,"contents/blob")
    const updatedinput2 = updatedinput1.replace(/github.com/, "github.com/repos")
    const apiPath = updatedinput2
    return apiPath
}

function get_user_input(e)
{
    e.preventDefault();
   const form =  e.currentTarget;
    const formdata = new FormData(form);
   const userRepository = formdata.get("github_repository")
   return userRepository
}