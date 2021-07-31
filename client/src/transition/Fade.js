import React from 'react'
import TextTransition, { presets } from "react-text-transition";

export default function Fade() {
    const TEXTS = [
        "Design",
        "Startup",
        "Venture",
      ];

        const [index, setIndex] = React.useState(0);
      
        React.useEffect(() => {
          const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            2500 // every 3 seconds
          );
          return () => clearTimeout(intervalId);
        }, []);
    return (
        <div>
                <h1 className="display-4">
                    <section className="inline">
                    RaaS is a {' '} 
                <TextTransition
                    text={ TEXTS[index % TEXTS.length] }
                    springConfig={ presets.gently }
                    style={{ margin: "0 4px" }}
                    inline
                />{' '}
                Studio
                    </section>
                </h1>
        </div>
    )
}
