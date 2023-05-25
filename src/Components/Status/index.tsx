
import styles from './index.module.css'

type StatusProps = {
    type: string[];
}

export const Status = ({ type }: StatusProps) => {
    return (
<div className={type.includes('grass') || type.includes('bug') ? styles.statusGreen :
 type.includes('stile') ||  type.includes('dark') ||  type.includes('rock')  ? styles.statusGray :
  type.includes('water') ||  type.includes('ice') ? styles.statusBlue : 
  type.includes('fire') ||  type.includes('fighting') ||  type.includes('dragon') ? styles.statusRed :
  type.includes('normal') ||  type.includes('gosth') ? styles.statusLightBlue :
  type.includes('poison') ||  type.includes('psychic') ||  type.includes('fairy') ||  type.includes('ghost') ? styles.statusPurple :
  type.includes('ground') ? styles.statusBrown :
   styles.statusYellow
 }>
    <div className={styles.statusName}>
        {type}
    </div>
        </div>
    )

}