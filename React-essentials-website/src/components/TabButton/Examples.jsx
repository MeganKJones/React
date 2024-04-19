import TabButton from "./TabButton.jsx";
import {EXAMPLES} from "../../data-with-examples.js";
import {useState} from 'react';
import Section from '../Section/Section.jsx';
import Tabs from "./Tabs.jsx";

export default function Examples() {
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
        <Section title='Examples' id="examples">
            <Tabs ButtonContainer='menu' buttons={<>
                <TabButton isSelected={selectedTopic === 'components'}
                           onClick={() => handleClick('components')}>Concepts</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
            </>}>
                {tabContent}
            </Tabs>
        </Section>
    )
}