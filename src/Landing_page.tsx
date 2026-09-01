import landingpageimg from './assets/landingpageimg.svg'


export function Landing_page(){
 
}g
let appending = ""
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
       <form style={{marginTop: "20px"}} method={HTTPMethod}action={resource}>
        <input className="input" 
        type= "text" 
        placeholder="www.github repo link">
        </input>
       </form>
       </main>
    )
}