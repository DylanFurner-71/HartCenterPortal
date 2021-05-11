import React from 'react'
import AllowView from "./AllowView"
import Print from "./Print"
import { CSVLink, CSVDownload } from "react-csv";
import { 
  useTable, 
  usePagination,
  useSortBy,
  useFilters, 
  useGlobalFilter, 
  useAsyncDebounce, 
  useRowSelect } from 'react-table'
// A great library for fuzzy filtering/sorting items
import {matchSorter} from 'match-sorter';
//Checkbox for selecting
const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef
    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])
    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    )
  }
)
// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)
  return (
    <span>
      Search:{' '}
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: '1.1rem',
          border: '0',
          width: "95%"
        }}
      />
    </span>
  )
}
// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length
  return (
    <input
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}
// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])
  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
}
// // Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = val => !val
// Our table component
function Table({ columns, data }) {
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )
  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    prepareRow,
    selectedFlatRows,
    state,
    state: {
      selectedRowIds,
      pageIndex,
      pageSize,
      sortBy,
      filters},
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
    },
    useFilters, // useFilters!
    useGlobalFilter, // useGlobalFilter!
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )
  // We don't want to render all of the rows for this example, so cap
  // it for this use case
  // const firstPageRows = rows.slice(0, 10)
  return (
    <div>
      <div style={{padding:'1em', maxWidth:'99%', overflowX:'auto'}}>
      <table className="table table-striped table-bordered" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  <div>
                  <span {...column.getSortByToggleProps()}>
                      {column.render('Header')}
                      {/* Add a sort direction indicator */}
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </div>
                 
                  {/* Render the columns filter UI */}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
          <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: 'left',
              }}
            >
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <br />
      <CSVLink 
        style={{border:"3px solid black", padding:"7px", borderRadius:"1em", color:"black"}}
        data={selectedFlatRows.map(d => d.original)}
        filename='student_report.csv'
        >Student Report</CSVLink>
      {/* <div>
        <pre>
          <code>{JSON.stringify(state.filters, null, 2)}</code>
        </pre>
        <p>Selected Rows: {Object.keys(selectedRowIds).length}</p>
      <pre>
        <code>
          {JSON.stringify(
            {
              selectedRowIds: selectedRowIds,
              'selectedFlatRows[].original': selectedFlatRows.map(
                d => d.original
              ),
            },
            null,
            2
          )}
        </code>
      </pre>
      </div> */}
    </div>
  )
}
const columns = [
      {
        Header: 'First Name',
        accessor: 'first_name',
        disableFilters: true,
      },
      {
        Header: 'Last Name',
        accessor: 'last_name',
        disableFilters: true,
      },
      {
        Header: 'SMU ID',
        accessor: 'smu_id',
        disableFilters: true,
      },
      {
        Header: 'Gender',
        accessor: 'gender',
        Filter: SelectColumnFilter,
        filter: "fuzzyText",
      },
      {
        Header: 'Ethnicity',
        accessor: 'ethnicity',
        Filter: SelectColumnFilter,
        filter: "fuzzyText",
      },
      // {
      //   Header: 'Class',
      //   accessor: 'class',
      //   Filter: SelectColumnFilter,
      //   filter: "fuzzyText",
       
      // },
      {
        Header: 'Survey Completion Status',
        accessor: 'surv_status',
        Filter: SelectColumnFilter,
        filter: "fuzzyText",
      },
      {
        Header: 'Email',
        accessor: 'smu_email',
        disableFilters: true,
      },
      {
        Header: 'Study',
        accessor: 'study',
        Filter: SelectColumnFilter,
        filter: "fuzzyText",
      },
      {
        Header: 'Term',
        accessor: 'batch',
        Filter: SelectColumnFilter,
        filter: "fuzzyText"
      },
      {
        Header: 'Allow View',
        accessor: 'allowview',
        disableFilters: true,
        Cell: ({value}) => <AllowView ischecked={value}/>
      },
      {
        Header: 'Print Results',
        accessor: 'print',
        disableFilters: true,
        Cell: ({value}) => <Print value={value}/>
      },
      {
        Header: 'Highest',
        accessor: 'competency1',
        Filter: SelectColumnFilter,
        filter: "fuzzyText"
      },
      {
        Header: 'Lowest',
        accessor: 'competency2',
        Filter: SelectColumnFilter,
        filter: "fuzzyText"
      },
      // {
      //   Header: 'Phone Number',
      //   accessor: 'phonenumber',
      // },
]
export const ViewReportTable = ({students}) => {
  return (
    <div>
      <Table columns={columns} data={students} />
    </div>
  );
};
