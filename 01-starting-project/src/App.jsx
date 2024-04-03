import {useState} from 'react';
import {CORE_CONCEPTS} from "./data-with-examples.js";
import {EXAMPLES} from './data-with-examples'
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {
    const [selectedTopic, setSelectedTopic] = useState();
    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent = (
            <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>
        )
    }

    function handleClick(selectedBtn) {

        setSelectedTopic(selectedBtn);

    }

    return (
        <div>
            <Header></Header>
            <main>
                <section id='core-concepts'>
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}></CoreConcept>)}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick('components')}>Concepts</TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'}  onClick={() => handleClick('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'props'}  onClick={() => handleClick('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'state'}  onClick={() => handleClick('state')}>State</TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
