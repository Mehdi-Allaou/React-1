
// import './Modal.css'

// export default function Modal(props) {
//   return (
//     <div className="modal-backdrop">
//       <div className="modal">
//         {props.children}
//       </div>
//     </div>
//   )
// }

import ReactDOM from "react-dom"
import './Modal.css'

export default function Modal({ children,
  handleClose,
  IsSalesModal }) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
      <div className="modal" style={{
        border: "4px solid",
        borderColor: IsSalesModal ? "#ff4500" : "#555",
        textAlign: "center"
        }}>
        {children}
        {/* <button
          onClick={handleClose}
          className={IsSalesModal ? "sales-btn" : ""}
        >close</button> */}
      </div>
    </div>
  ), document.body)
}
