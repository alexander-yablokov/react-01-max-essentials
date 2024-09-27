export default function CoreConcept({image, title, ...extra}) {
    return (
        <li>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{extra.description}</p>
        </li>
    );
}