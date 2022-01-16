import { ReactComponent as ArrowSvg } from "assets/svg/arrow.svg";
import { MoviePage } from "utils/types";
import "./styles.css";

type Props = {
    page: MoviePage;
    onChange: Function;
}

function Pagination({ page, onChange }: Props) {
    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button onClick={() => onChange(page.number - 1)}
                    className="dsmovie-pagination-button"
                    disabled={page.first}
                >
                    <ArrowSvg />
                </button>

                <p>{`${page.number + 1} de ${page.totalPages}`}</p>

                <button onClick={() => onChange(page.number + 1)}
                    className="dsmovie-pagination-button"
                    disabled={page.last}
                >
                    <ArrowSvg className="dsmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;