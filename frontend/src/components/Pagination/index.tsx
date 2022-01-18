import { ReactComponent as ArrowSvg } from "assets/svg/arrow.svg";
import { PageType } from "reducers/PageReducer";
import "./styles.css";

type Props = {
    page: PageType;
    dispatch: React.Dispatch<any>;
}

function Pagination({page, dispatch} :Props) {
    // const [{page}, dispatch] = useAppContext();
    // const {state, dispatch} = useContext(Context);
    // const page = state.page;

    const handlePrevPageClick = () => {
        dispatch({type: 'SET_NUMBER', payload: {number: page.number -1} as PageType});
    }
    
    const handleNextPageClick = () => {
        dispatch({type: 'SET_NUMBER', payload: {number: page.number +1} as PageType});
    }

    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button onClick={handlePrevPageClick}
                    className="dsmovie-pagination-button"
                    disabled={page.first}
                >
                    <ArrowSvg />
                </button>

                <p>{`${page.number + 1} de ${page.totalPages}`}</p>

                <button onClick={handleNextPageClick}
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