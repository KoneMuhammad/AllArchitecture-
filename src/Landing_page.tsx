import landingpageimg from './assets/landingpageimg.svg'
import { Octokit } from "octokit";
import MermaidDiagram from "./MermaidDiagram";


const octokit = new Octokit();

export function Landing_page({
  diagram,
  setDiagram
}: {
  diagram: string;
  setDiagram: (value: any) => void;
})
 {

               function callbackend(e){
                sendReadMeToBackend(e,setDiagram)
               }

    if(diagram == ""){
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
            <form style={{ marginTop: "20px" }} onSubmit={callbackend}>
                <input className="input" name="github_repository"
                    type="text"
                    placeholder="www.github repo link">
                </input>
            </form>
        </main>
    )
}
else {
     return <MermaidDiagram code={diagram} />
}
}


function get_user_input(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formdata = new FormData(form);
    const userRepository = formdata.get("github_repository")
    console.log(`User Repository input is: ${userRepository}`)
    return userRepository
}

function fix_user_input_to_match_api_path(userRepository: any): string {
    const updatedinput1 = userRepository.replace("blob/main", "contents")
    const updatedinput2 = updatedinput1.replace(/github.com/, "github.com/repos")
    const githubEndpoint = updatedinput2.replace("https://github.com/", "/")

    console.log(`Final api string is: ${githubEndpoint}`)
    return githubEndpoint
}

async function make_request_to_github_api(e) {

    const url = fix_user_input_to_match_api_path(get_user_input(e))

    console.log(`the destrctured endpoint is: ${url}`)

    const result = await octokit.request(`GET ${url}`, {
        headers: {
            'X-GitHub-Api-Version': '2026-03-10',
            'Accept': 'application/json'
        }
    });

    const readMeInformation = result.data.content

    console.log(`readme information is: ${readMeInformation}`)

    return readMeInformation
}

async function sendReadMeToBackend(e, setDiagram: (value:any)=> void ) {

    const readMe = await make_request_to_github_api(e)

    const diagram = await fetch("https://allarchitecturebackend.onrender.com/diagram", {
        headers: {
            "Content-Type": "text/plain"
        },
        method: "POST",
        body: readMe
    })

    setDiagram(diagram);
}
