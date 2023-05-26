import logo from '../../assets/logo.svg'
import hamburger from '../../assets/BurgenBtn.svg'
import styles from './index.module.css'
import {Menu,MenuButton,MenuList,MenuItem,} from '@chakra-ui/react'

export const Header = () => {
    return (
        <section className={styles.header}>
            <img className={styles.img} src={logo}/>
            <div className={styles.navbar_links}>
                <a href="/" className={styles.navbar_mark} >Home</a>
                <a href="/pokedex">Pokédex</a>
                <a href="#">Legendaries</a>
                <a target="_blank" href="https://pokeapi.co">Documentation</a>
            </div>
            <div className={styles.hamburger}>
                <Menu>
                    <MenuButton >
                        <img src={hamburger} />
                    </MenuButton>
                    <MenuList>
                        <MenuItem ><a href="/"><div>Home</div></a>
                        </MenuItem>
                        <MenuItem ><a href="/pokedex"><div>Pokedéx</div></a>
                        </MenuItem>
                        <MenuItem ><a href="#"><div>Legendaries</div></a>
                        </MenuItem>
                        <MenuItem ><a target="_blank" href="https://pokeapi.co"><div>Documentation</div></a>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </section>
    )
}