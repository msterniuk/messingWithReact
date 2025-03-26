//my first React function
const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];

function Callout() {
    
    const listItems = people.map((curPerson) => <li> {curPerson} </li>); 
    
    return (

    <>
    <ol> {listItems} </ol>
    </>

    );   
}


export default Callout; 


