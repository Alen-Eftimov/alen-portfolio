import React from 'react'
import { modal } from '../data'

const Modal = () => {
  return (
    <>
      {
        modal.map((item) => (
          <div id={item.id} className="modal fade" role="dialog" key={item.id}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type='button' className="close" data-dismiss="modal">
                    <span className="glyphicon glyphicon-remove" />
                  </button>
                  <img className="img-res" src={item.img} alt={item.alt} />
                </div>
                <div className="modal-body">
                  <h4 className="modal-title">{item.title}</h4>
                  <p>{item.description_1}</p>
                  <h3>{item.subtitle}</h3>
                  <p>{item.description_2}</p>
                </div>
                <div className="modal-footer">
                  <a href={item.href} className="btn btn-fill">Visit Page</a>
                </div>
              </div>
              {/* < /.modal-content > */}
            </div>
            {/* < /.modal-dialog > */}
          </div>
        ))
      }
    </>
  )
}

export default Modal
