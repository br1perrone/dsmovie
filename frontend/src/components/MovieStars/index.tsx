import {ReactComponent as StarFullSvg} from 'assets/svg/star_full.svg'
import {ReactComponent as StarHalfSvg} from 'assets/svg/star_half.svg'
import {ReactComponent as StarEmptySvg} from 'assets/svg/star_empty.svg'

import "./styles.css";

function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFullSvg />
            <StarFullSvg />
            <StarFullSvg />
            <StarHalfSvg />
            <StarEmptySvg />
        </div>
    );
}
export default MovieStars;