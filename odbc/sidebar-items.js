initSidebarItems({"enum":[["Allocated","`Statement` state used to represent a freshly allocated connection"],["Connected","DataSource state used to represent a connection to a data source."],["Disconnected","DataSource state used to represent a data source handle which not connected to a data source."],["HasResult","`Statement` state used to represent a statement with a result set cursor"],["NoResult","`Statement` state used to represent a statement with no result set"],["NoVersion","Environment state used to represent that no odbc version has been set."],["Prepared","`Statement` state used to represent a statement compiled into an access plan"],["ResultSetState","Holds a `Statement` after execution of a query.Allocated"],["Version3","Environment state used to represent that environment has been set to odbc version 3"]],"mod":[["ffi","Reexport odbc-sys as ffi"]],"struct":[["Cursor","Used to retrieve data from the fields of a query result"],["DataSource","Represents a connection to an ODBC data source"],["DataSourceInfo","Holds name and description of a datasource"],["DiagnosticRecord","ODBC Diagnostic Record"],["DriverInfo","Struct holding information available on a driver."],["EnvAllocError","Environment allocation error"],["Environment","Handle to an ODBC Environment"],["Statement","RAII wrapper around ODBC statement"]],"trait":[["GetDiagRec",""],["Handle","Reflects the ability of a type to expose a valid handle"],["InputParameter","Allows types to be used with `Statement::bind_parameter`"],["Output","Indicates that a type can be retrieved using `Cursor::get_data`"]],"type":[["Executed","`Statement` state used to represent a statement with a result set cursor"],["Result","Result type returned by most functions in this crate"]]});