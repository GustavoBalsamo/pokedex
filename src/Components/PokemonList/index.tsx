import styles from './index.module.css';
import { Card, Stack, Heading, CardBody } from '@chakra-ui/react';
import { Status } from '../Status';

export type PokemonTypeProps = {
  name: string;
  attack: string;
  defense: string;
  types: string[];
  image: string;
  experience?: number;
  abilities?: string[];
  hp?: number;
  spAttack?: number;
  spDefense?: number;
  generation?: number;
  index?: number;
  onClick?: () => void;
};

export const PokemonList = ({ name, attack, defense, types, image, onClick }: PokemonTypeProps) => {
  return (
    <Card className={styles.card}direction={{ base: 'column', sm: 'row' }}overflow='hidden'variant='outline'onClick={onClick} >
      <Stack>
        <CardBody className={styles.cardBody}>
          <Heading className={styles.pokemonName}>{name}</Heading>
          <div className={styles.statsContainer}>
            <div className={styles.statsColumn}>
              <div className={styles.stats}>
                <span>{attack}</span>
              </div>
              <p>Attack</p>
            </div>
            <div className={styles.statsColumn}>
              <div className={styles.stats}>
                <span>{defense}</span>
              </div>
              <p>Defense</p>
            </div>
          </div>
          <div className={styles.statusBox}>
            {types.map((type, index) => (
              <Status key={index} type={[type]}/>
            ))}
          </div>
        </CardBody>
      </Stack>
      <div className={types.includes('grass') || types.includes('bug') ? styles.pokemonGreen :
        types.includes('stile') || types.includes('dark') || types.includes('rock') ? styles.pokemonGray :
          types.includes('water') || types.includes('ice') ? styles.pokemonBlue :
            types.includes('fire') || types.includes('fighting') || types.includes('dragon') ? styles.pokemonRed :
              types.includes('normal') || types.includes('gosth') ? styles.pokemonLightBlue :
                types.includes('poison') || types.includes('psychic') || types.includes('fairy') || types.includes('ghost') ? styles.pokemonPurple :
                  types.includes('ground') ? styles.pokemonBrown :
                    styles.pokemonYellow
      }>
        <img className={styles.pokemonImg} src={image}/>
      </div>
    </Card>
  );
};
