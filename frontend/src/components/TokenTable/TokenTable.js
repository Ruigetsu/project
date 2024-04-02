import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import "./TokenTable.css";
import { BalanceFormatter, PriceFormatter, ValueRenderer } from './value_renderer';
import LastUpdate from './menu_item';
import { useEffect } from 'react';
import { updateToken } from '../../store/actions';

function TokenTable () {
    const balance = useSelector((state) => state.token);
    const dispatch = useDispatch();
    
    useEffect(() => {
      const socket = new WebSocket("ws://8adbbe6d6a9d.vps.myjino.ru/ws/wallet");
      socket.onmessage = (event) => {
        const data =  JSON.parse(event.data);
        console.log(data);
        dispatch(updateToken(data.balance))
      }
    }, [])
 
    const columnDefs = [
        { field: 'wallet_name', headerName: 'wallet', cellClass: ['celClass', 'celClassLeft']},
        { field: 'token', headerName: 'asset', cellClass: ['celClass', 'celClassLeft'] },
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
    const defaultColDef = useMemo(() => {
      return {
        editable: true,
        enableRowGroup: true,
        enablePivot: true,
        enableValue: true,
        sortable: true,
        resizable: true,
        filter: true,
        flex: 1,
        minWidth: 40,
      };
  }, []);
    return (
        <div
         className="ag-theme-quartz" // applying the grid theme
         style={{ height: 500 }} // the grid will fill the size of the parent container
        >
          <AgGridReact
            rowData={balance}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
          />
        </div>
      )
}

export default TokenTable;