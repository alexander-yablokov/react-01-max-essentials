export default function TabButton({children, onClick, isSelected}) {
    const activeClass = isSelected ? 'active' : null;
    return (
        <li>
            <button className={activeClass} onClick={onClick}>{children}</button>
        </li>
    );
}
