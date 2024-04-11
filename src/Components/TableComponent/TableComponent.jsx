import React, {useState} from 'react';
import { images } from "../../constants";
import './Table.scss';
//import logo from '../../assets/logo.png'; // Adjusted import path

const TableComponent = () => {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
  
    const handleSelectAll = () => {
      setSelectAll(!selectAll);
      setSelectedRows(selectAll ? [] : 
        ['servicebell.com', 
        'baseten.com',
        'superhuman.com',
        'donut.com',
        'startengine.com',
        'kandji.io',
        'mutinyhu.com',
        'joinpogo.com',
        'kalshi.com',
        'aha.io',
        'vitally.io',
         
      ] ); // Add all rows to selectedRows or clear it
    };
  
    const handleSelectRow = (domain) => {
      if (selectedRows.includes(domain)) {
        setSelectedRows(selectedRows.filter(row => row !== domain)); // Deselect row
      } else {
        setSelectedRows([...selectedRows, domain]); // Select row
      }
    };
  
    const handleDeleteSelectedRows = () => {
      // Delete selected rows
      // Implement your delete logic here
      alert('Deleting selected rows: ' + selectedRows.join(', '));
    };

    const expandicon = () => {
      alert('Nothing');
    }
  
    return (
      <table className="custom-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
              
              <img src={images.expandicon} alt="Expand icon" className="expand-icon"  style={{ marginLeft: '7px' }} />
            </th>
            {/* <th>Serial No.</th> */}
            <th> T Domain</th>
            <th><img src={images.linkedin} alt="linkedin logo " /><span>Enrich Company</span>
            <img src={images.buttonicon} alt="butticon logo " style={{ marginLeft: '50px' }}/> 
            </th>
            <th>
            <img src={images.sideIcon} alt="lines logo" />
            <img src={images.url} alt="urllogo" />
              Url</th>
              <th><img src={images.plusDark} style={{width: "18px", height: "18px"}} alt="Plus icon" />
              Add Column 
              <img src={images.downArrawLight} style={{width: "18px", height: "18px"}} alt="Plus icon" />
              </th>
            {selectedRows.length > 0 && <th>Delete</th>}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" checked={selectedRows.includes('servicebell.com')} onChange={() => handleSelectRow('servicebell.com')} />
            </td>
            <td onMouseOver={() => console.log("Hovered")}> servicebell.com</td>
    
            <td>
              <img src={images.logo} alt="ServiceBell Logo" /> ServiceBell
               </td>
            <td>
              <a href="https://www.linkedin.com"><img src={images.share} alt="aha Logo" />"https://www.linkedin.com"</a>
            </td>
            <td></td>
            {selectedRows.includes('servicebell.com') && <td><button onClick={handleDeleteSelectedRows}>Delete</button></td>}
          </tr>
  
          <tr>
            <td>
              <input type="checkbox" checked={selectedRows.includes('baseten.com')} onChange={() => handleSelectRow('baseten.com')} />
            </td>
            <td onMouseOver={() => console.log("Hovered")}> baseten.com</td>
            <td>
               <img src={images.logo2} alt="baseten Logo" />  
             <span> Baseten</span> 
            </td>
            <td>
              <a href="https://www.linkedin.com"><img src={images.share} alt="aha Logo" />"https://www.linkedin.com"</a>
            </td>
            <td></td>
            {selectedRows.includes('baseten.com') && <td><button onClick={handleDeleteSelectedRows}>Delete</button></td>}
          </tr>
  
          <tr>
            <td>
              <input type="checkbox" checked={selectedRows.includes('superhuman.com')} onChange={() => handleSelectRow('superhuman.com')} />
            </td>
            <td onMouseOver={() => console.log("Hovered")}> superhuman.com</td>
            <td>
              <img src={images.superhuman} alt="superhuman Logo" />  
               <span> Superhuman</span>
            </td>
            <td>
              <a href="https://www.linkedin.com"><img src={images.share} alt="aha Logo" />"https://www.linkedin.com"</a>
            </td>
            <td></td>
            {selectedRows.includes('superhuman.com') && <td><button onClick={handleDeleteSelectedRows}>Delete</button></td>}
          </tr>
  
          <tr>
            <td>
              <input type="checkbox" checked={selectedRows.includes('donut.com')} onChange={() => handleSelectRow('donut.com')} />
            </td>
            <td onMouseOver={() => console.log("Hovered")}>
            donut.com</td>
            <td>
              <img src={images.logo4} alt="donut Logo" /> 
             <span> Donut</span> 
            </td>
            <td>
              <a href="https://www.linkedin.com"><img src={images.share} alt="aha Logo" />"https://www.linkedin.com"</a>
            </td>
            <td></td>
            {selectedRows.includes('donut.com') && <td><button onClick={handleDeleteSelectedRows}>Delete</button></td>}
          </tr>
  
          <tr>
            <td>
              <input type="checkbox" checked={selectedRows.includes('startengine.com')} onChange={() => handleSelectRow('startengine.com')} />
            </td>
            <td onMouseOver={() => console.log("Hovered")}>startengine.com</td>
            <td>
              <img src={images.start} alt="startengine Logo" /> 
            <span> Startengine</span>  
            </td>
            <td>
              <a href="https://www.linkedin.com"><img src={images.share} alt="aha Logo" />"https://www.linkedin.com"</a>
            </td>
            <td></td>
            {selectedRows.includes('startengine.com') && <td><button onClick={handleDeleteSelectedRows}>Delete</button></td>}
          </tr>
  
          <tr>
            <td>
              <input type="checkbox" checked={selectedRows.includes('kandji.io')} onChange={() => handleSelectRow('kandji.io')} />
            </td>
            <td onMouseOver={() => console.log("Hovered")}>kandji.io</td>
            <td>
              <img src={images.kandji} alt="kandji Logo" />  
               <span> Kandji</span>
            </td>
            <td>
              <a href="https://www.linkedin.com"><img src={images.share} alt="aha Logo" />"https://www.linkedin.com"</a>
            </td>
            <td></td>
            {selectedRows.includes('kandji.io') && <td><button onClick={handleDeleteSelectedRows}>Delete</button></td>}
          </tr>
  
          <tr>
            <td>
              <input type="checkbox" checked={selectedRows.includes('mutinyhu.com')} onChange={() => handleSelectRow('mutinyhu.com')} />
            </td>
            <td onMouseOver={() => console.log("Hovered")}>
mutinyhu.com</td>
            <td>
              <img src={images.mutiny} alt="mutinyhu Logo" />  
             <span> Mutinyhu</span> 
            </td>
            <td>
              <a href="https://www.linkedin.com"><img src={images.share} alt="aha Logo" />"https://www.linkedin.com"</a>
            </td>
            <td></td>
            {selectedRows.includes('mutinyhu.com') && <td><button onClick={handleDeleteSelectedRows}>Delete</button></td>}
          </tr>
  
          <tr>
            <td>
              <input type="checkbox" checked={selectedRows.includes('joinpogo.com')} onChange={() => handleSelectRow('joinpogo.com')} />
            </td>
            <td onMouseOver={() => console.log("Hovered")}>joinpogo.com</td>
            <td>
             <img src={images.joinpogo} alt="joinpogo Logo" />  
              <span> Joinpogo</span>
            </td>
            <td>
              <a href="https://www.linkedin.com"><img src={images.share} alt="aha Logo" />"https://www.linkedin.com"</a>
            </td>
            <td></td>
            {selectedRows.includes('joinpogo.com') && <td><button onClick={handleDeleteSelectedRows}>Delete</button></td>}
          </tr>
  
          <tr>
            <td>
              <input type="checkbox" checked={selectedRows.includes('kalshi.com')} onChange={() => handleSelectRow('kalshi.com')} />
            </td>
            <td onMouseOver={() => console.log("Hovered")}>kalshi.com</td>
            <td>
             <img src={images.kalsi} alt="kalshi Logo" />  
             <span> Kalshi.com</span> 
            </td>
            <td>
              <a href="https://www.linkedin.com"><img src={images.share} alt="aha Logo" />"https://www.linkedin.com"</a>
            </td>
            <td></td>
            {selectedRows.includes('kalshi.com') && <td><button onClick={handleDeleteSelectedRows}>Delete</button></td>}
          </tr>
  
          <tr>
            <td>
              <input type="checkbox" checked={selectedRows.includes('aha.io')} onChange={() => handleSelectRow('aha.io')} />
            </td>
            <td onMouseOver={() => console.log("Hovered")}>aha.io</td>
            <td>
              <img src={images.aha} alt="aha Logo" /> 
               <span> Aha</span>Aha
            </td>
            <td>
              <a href="https://www.linkedin.com"> <img src={images.share} alt="aha Logo" />"https://www.linkedin.com" </a>
            </td>
            <td></td>
            {selectedRows.includes('aha.io') && <td><button onClick={handleDeleteSelectedRows}>Delete</button></td>}
          </tr>
  
        
          {/* Add more rows as needed */}
        </tbody>
        
        <div className="new-row-button"> 
          <img src={images.plusDark} style={{width: "18px", height: "18px"}} alt="Plus icon" />
              New row
    </div>
      </table>
    );
  };
  
  export default TableComponent;