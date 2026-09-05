import landingpageimg from './assets/landingpageimg.svg'
import { Octokit } from "octokit";

const octokit = new Octokit();

export function Landing_page() {

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
            <form style={{ marginTop: "20px" }} onSubmit={make_request_to_github_api}>
                <input className="input" name="github_repository"
                    type="text"
                    placeholder="www.github repo link">
                </input>
            </form>
        </main>
    )
}
//helper functions

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

    return readMeInformation

    //readme -> send readme to deepseak -> create class -> populate class o2329323 -> paste into request
    //to kroki, -> kroki responds with image 
}

async function getAiResponse() {

    const aiResponseAsAClass = fetch("")
    const aiCallResult = await fetch("https://api.deepseek.com/chat/completion", {
        body: `{"messages": [
    {
      "content": "you take this github ReadMe and from it create a class named architecture with the properties 
      base: string[], backendstuff: string[], glassScreen: string[]
      ",
      "role": "system"
    },
    {             //{ readMeInformation }
      "content": "readmeinformation",
      "role": "user"
    }
      ],
 "model": "deepseek-v4-flash"
    }`,
    headers: {
        "Content-Type":"application/json",
        "Accept": "application/json",
        "Authorization": "Bearer <TOKEN>"
    }
     })
}
