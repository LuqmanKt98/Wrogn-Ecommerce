import HeaderAdmin from "./HeaderAdmin";
import Sidebar from "./Sidebar";

function Add() {
  return (
    <div className="container-fluid">
      <div className="row">
        <HeaderAdmin />
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-11">
        </div>
      </div>
    </div>
  );
}

export default Add;
