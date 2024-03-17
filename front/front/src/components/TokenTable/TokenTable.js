import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { useSelector } from 'react-redux';
import "./TokenTable.css";
import { useEffect, useState} from "react";
import { BalanceFormatter, PriceFormatter, ValueRenderer } from './value_renderer';
import LastUpdate from './menu_item';

function TokenTable () {
    const balance = useSelector((state) => state.token);
    const [rowData, setRowData] = useState(balance);
    
    useEffect(() => {
        setRowData(balance);
    }, [balance]);
    
    const columnDefs = [
        { field: 'wallet_name', headerName: 'wallet', cellClass: ['celClass', 'celClassLeft']},
        { field: 'asset', headerName: 'asset', cellClass: ['celClass', 'celClassLeft'] },
        { field: 'network_name', headerName: 'network', cellClass: ['celClass', 'celClassLeft'] },
        { field: 'balance', headerName: 'quantity', filter: 'agNumberColumnFilter', cellRenderer: BalanceFormatter,  cellClass: ['celClass', 'celClassLeft'] },
        { field: 'price', headerName: 'price', filter: 'agNumberColumnFilter', cellRenderer: PriceFormatter, cellClass: ['celClass', 'celClassLeft'] },
        {
            field: 'value',
            headerName: "value",
            cellRenderer: ValueRenderer,
            cellClass: ['celClass', 'celClassLeft']
        },
        { 
            field: 'updated', 
            headerName: 'last_update', 
            cellClass: ['celClass', 'celClassRight'], 
            headerClass: "ag-right-aligned-header",
            cellRenderer: LastUpdate
        }
    ];

    return (
        <div
         className="ag-theme-quartz" // applying the grid theme
         style={{ height: 500 }} // the grid will fill the size of the parent container
        >
          <AgGridReact
              // rowData={balance}
              columnDefs={columnDefs}
          />
        </div>
      )
}

export default TokenTable;