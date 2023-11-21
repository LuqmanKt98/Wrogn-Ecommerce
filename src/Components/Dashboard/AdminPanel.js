import HeaderAdmin from "./HeaderAdmin";
import Sidebar from "./Sidebar";

function AdminPanel(){
    return(

        <div className="container-fluid">
             
            <HeaderAdmin/>
            
          
           <div className="row"> 
           <div className="col-md-3">
           <Sidebar/>
           </div>
           <div className="col-md-11" style={{border:"2px solid black"}}>

           </div>
           
           </div>
        </div>
        
       

    );
}


export default AdminPanel;