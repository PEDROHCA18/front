import "@/components/admin/css/progressao.css"
export default function CardProgressos() {
    return (
      <div className="analytics">
        <div className="card">
          <div className="card-head">
            <h2>500.00</h2>
            <span className="las la-eye"></span>
          </div>
          <div className="card-progress">
            <small>Treinos adicionados</small>
            <div className="card-indicator">
              <div className="indicator two" style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>
  
        <div className="card">
          <div className="card-head">
            <h2>200.00</h2>
            <span className="las la-envelope"></span>
          </div>
          <div className="card-progress">
            <small>Receitas adicionadas</small>
            <div className="card-indicator">
              <div className="indicator four" style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  