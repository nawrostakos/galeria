import './MovieList.css';
import Arek from './1.jpg';
import Miki from './2.jpg';
import Kuba from './3.jpg';
import Marcin from './4.jpg';


const menuItems = [
    {
        id: 1,
        title: 'Arek',
        time: ',,Arek"',
        description: 'to jest interpretacja arka',
        image: Arek,
    },
    {
        id: 2,
        title: 'Miki',
        time: ',,Miki"',
        description: 'to taka myszka miki jakby',
        image: Miki,
    },
    {
        id: 3,
        title: 'Kuba',
        time: ',,Kuba"',
        description: 'co by tu więcej mówić',
        image: Kuba,
    },
    {
        id: 4,
        title: 'Marcin',
        time: ',,Marcin"',
        description: 'Obraz o nazwie marcin',
        image: Marcin,
    },
]


const Menu = () => {
    return (
        <div>
            <h1>Galeria obrazów</h1>
            <ul style={{listStyleType: 'none', padding: 0 }}>
                {menuItems.map(item => (
                    <li key={item.id} className="menu-item">
                        <img src={item.image} alt={item.name}/>
                        <div style={{position: 'relative'}}>
                           <h1 style={{margin: 0 }}>{item.name}</h1> 
                           <h2 style={{margin: '5px 0' }}>{item.time}</h2> 
                           <p style={{color: 'grey'}}>{item.description}</p>

                        </div>
                    </li>
                )

                )}

            </ul>
        </div>
    );
}

export default Menu;