import {useState} from "react";
import Header from './components/Header/Header';
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import {CORE_CONCEPTS} from "./data";

function App() {
    const [selectedTopic, setSelectedTopic] = useState('Please click a button');

    // функция-обработчик должна быть внутри компонента
    function handleClick(selectButton) {
        setSelectedTopic(selectButton);
    }

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept title={CORE_CONCEPTS[0].title}
                                     description={CORE_CONCEPTS[0].description}
                                     image={CORE_CONCEPTS[0].image}/>

                        <CoreConcept {...CORE_CONCEPTS[1]}/>

                        <CoreConcept title={CORE_CONCEPTS[2].title}
                                     description={CORE_CONCEPTS[2].description}
                                     image={CORE_CONCEPTS[2].image}/>

                        <CoreConcept title={CORE_CONCEPTS[3].title}
                                     description={CORE_CONCEPTS[3].description}
                                     image={CORE_CONCEPTS[3].image}/>

                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onClick={() => handleClick('components')}>Components</TabButton>
                        <TabButton onClick={() => handleClick('jsx')}>JSX</TabButton>
                        <TabButton onClick={() => handleClick('props')}>Props</TabButton>
                        <TabButton onClick={() => handleClick('state')}>State</TabButton>
                    </menu>
                    {selectedTopic}
                </section>
            </main>
        </div>
    );
}

export default App;
