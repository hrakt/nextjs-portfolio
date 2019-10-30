import portfolio from '../Portfolio/Portfolio.scss';

const Filter = () => {
    const selected = [];
    const handleClick = e => {
        e.target.tagName == 'LI' && selected.includes(e.target.tagName)
            ? selected.push(e.target.innerText)
            : null;
        console.log(selected);
    };
    return (
        <div className={portfolio['filter-container']}>
            <h1 className={portfolio['filter-container__header']}>
                My current technology stack is
            </h1>
            <ul
                className={portfolio['filter-container__list']}
                onClick={handleClick}
            >
                <li>React</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Redux</li>
                <li>Sass</li>
                <li>Javascript</li>
                <li>Styled Components</li>
                <li>Firebase & Firestore</li>
            </ul>
        </div>
    );
};

export default Filter;
