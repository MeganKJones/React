import {CORE_CONCEPTS} from "../../data-with-examples.js";
import CoreConcept from "./CoreConcept.jsx";

export default function CoreConcepts() {
    return (
        <section id='core-concepts'>
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => <CoreConcept
                    key={conceptItem.title} {...conceptItem}></CoreConcept>)}
            </ul>
        </section>
    )
}
