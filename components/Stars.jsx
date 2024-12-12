import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

 export default function stars(vote){
    if (vote === 0){
        return `Nessun Voto`
    } else if (vote === 1){
      return <FontAwesomeIcon icon={faStar} />
    }else if (vote === 2){
      return <p><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
    }else if (vote === 3){
      return <p><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
    }else if (vote === 4){
      return <p><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
    }else{
      return <p><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
    }
    
  }