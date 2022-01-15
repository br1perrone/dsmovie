import { ReactComponent as ArrowSvg } from "assets/svg/arrow.svg";
import "./styles.css";

function Pagination() {
    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={true} >
                    <ArrowSvg />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsmovie-pagination-button" disabled={false} >
                    <ArrowSvg className="dsmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;