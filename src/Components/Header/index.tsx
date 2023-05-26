import logo from '../../assets/logo.svg'
import hamburger from '../../assets/BurgenBtn.svg'
import styles from './index.module.css'
import {Menu,MenuButton,MenuList,MenuItem,} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <section className={styles.header}>
            <img className={styles.img} src={logo}/>
            <div className={styles.navbar_links}>
            <a href="#" className={styles.navbar_item_selected} > <Link to="/">Home </Link></a>
                <a href="#"> <Link to="/pokedex">Pokédex</Link></a>
                <a href="#"><Link to="/legendaries">Legendaries</Link></a>
                <a href="https://pokeapi.co/docs/v2#pokemon-section">Documentation</a>
            </div>
            <div className={styles.hamburger}>
                <Menu>
                    <MenuButton >
                        <img src={hamburger} />
                    </MenuButton>
                    <MenuList>
                        <MenuItem > <a href="#">
                                <Link to="/"><span>Home</span> </Link>
                            </a>
                        </MenuItem>
                        <MenuItem ><a href="#">
                                <Link to="pokedex"><span>Pokedéx</span> </Link>
                            </a>
                        </MenuItem>
                        <MenuItem ><a href="#"><div>Legendaries</div></a>
                        </MenuItem>
                        <MenuItem > <a href="https://pokeapi.co/docs/v2#pokemon-section">
                                <span>Documentation</span>
                            </a>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </section>
    )
}