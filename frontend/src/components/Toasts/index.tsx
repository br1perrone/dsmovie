import "./styles.css";

export type ToastType = {
    title: string;
    message: string;
    body: string;
    type: string;
    img?: string;
    time?: number;
}
type ToastsProps = {
    data: ToastType[];
}
function Toasts({ data }: ToastsProps) {
    return (
        <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center dsmovie-toast-container">
            {data.map(toast => {
                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        {toast.img &&
                            <img src={toast.img} className="rounded mr-2" alt={toast.title} />
                        }
                        <strong className="mr-auto">{toast.title}</strong>
                        {toast.time &&
                            <small>11 mins ago</small>
                        }
                        <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="toast-body">
                        {toast.body}
                    </div>
                </div>
            })}
        </div>
    )
}
export default Toasts