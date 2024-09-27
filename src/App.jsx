import reactImg from './assets/react-core-concepts.png';
import {CORE_CONCEPTS} from "./data";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    const description = reactDescriptions[genRandomInt(2)];
    return (
        <header>
            <img src={reactImg}
                 alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}

function CoreConcept({image, title, ...extra}) {
    return (
        <li>
            <img src={image} alt={title}/>
                <h3>{title}</h3>
                <p>{extra.description}</p>
        </li>
);
}

function App() {
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
            </main>
        </div>
    );
}

export default App;
