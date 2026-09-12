import MermaidDiagram from "./MermaidDiagram";

export function DiagramPage(){

    return (
         <main className="main">
            <header className="header">
                <h1 className="h1">
                    The Architecture
                </h1>
              <MermaidDiagram code={diagram} />
            </header>
         </main>
    )
}
