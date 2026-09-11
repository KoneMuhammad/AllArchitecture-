import mermaid from "mermaid";
import { useEffect, useRef } from "react";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
});

function MermaidDiagram({ code }: { code: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function render() {
      if (!ref.current) return;

      const { svg } = await mermaid.render(
        `diagram-${Date.now()}`,
        code
      );

      if (ref.current) {
        ref.current.innerHTML = svg;
      }
    }

    render();
  }, [code]);

  return <div ref={ref} />;
}

export default MermaidDiagram;