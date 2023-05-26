import { Link } from 'react-router-dom'
import pikachu from '../../assets/banner.png'
import pikachu_mobile from '../../assets/BannerComplete.png'
import { Header } from '../Header'
import styles from './index.module.css'

export const Home = () => {
    return (
        <div>
    <Header/>
            <section className={styles.section}>
                <img className={styles.pikachu} src={pikachu_mobile}/>
                <div className={styles.description}>
                    <h1 className={styles.title}><strong>Find</strong> all your favorite <strong>Pokemon</strong></h1>
                    <h2 className={styles.information}>You can know the type of Pokemon, its strengths, disadvantages and abilities</h2>
                    <button  className={styles.button}><Link to="pokedex">   See pokemons </ Link ></button>
                </div>
                <img className={styles.image} src={pikachu}/>
            </section>
        </div>
    )
}