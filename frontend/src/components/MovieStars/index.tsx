import { ReactComponent as StarFullSvg } from 'assets/svg/star_full.svg'
import { ReactComponent as StarHalfSvg } from 'assets/svg/star_half.svg'
import { ReactComponent as StarEmptySvg } from 'assets/svg/star_empty.svg'

import "./styles.css";

// EX:
// getFills(3.5) => [1, 1, 1, 0.5, 0]
// getFills(4.1) => [1, 1, 1, 1, 0.5]
function getFills(score: number) {

    const fills = [0, 0, 0, 0, 0];

    const integerPart = Math.floor(score);

    for (let i = 0; i < integerPart; i++) {
        fills[i] = 1;
    }

    const diff = score - integerPart;
    if (diff > 0) {
        fills[integerPart] = 0.5;
    }

    return fills;
}

function Star({fill} : {fill: number}) {
    if (fill === 0) return <StarEmptySvg />;
    if (fill === 1) return <StarFullSvg />;
    return <StarHalfSvg />;
}

function MovieStars({score} : {score: number}) {
    const fills = getFills(score);

    return (
        <div className="dsmovie-stars-container">
            <Star fill={fills[0]} />
            <Star fill={fills[1]} />
            <Star fill={fills[2]} />
            <Star fill={fills[3]} />
            <Star fill={fills[4]} />
        </div>
    );
}
export default MovieStars;