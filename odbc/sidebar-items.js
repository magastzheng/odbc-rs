initSidebarItems({"enum":[["Allocated","`Statement` state used to represent a freshly allocated connection"],["HasResult","`Statement` state used to represent a statement with a result set cursor. A statement is most likely to enter this state after a `SELECT` query."],["NoResult","`Statement` state used to represent a statement with no result set. A statement is likely to enter this state after executing e.g. a `CREATE TABLE` statement"],["Prepared","`Statement` state used to represent a statement compiled into an access plan. A statement will enter this state after a call to `Statement::prepared`"],["ResultSetState","Holds a `Statement` after execution of a query.Allocated"]],"fn":[["create_environment_v3","Creates an ODBC Environment and declares specification of version 3.0 are used"],["create_environment_v3_with_os_db_encoding",""]],"mod":[["ffi","Reexport odbc-sys as ffi"]],"static":[["DB_ENCODING",""],["OS_ENCODING",""]],"struct":[["ColumnDescriptor",""],["Connection","Represents a connection to an ODBC data source"],["Cursor","Used to retrieve data from the fields of a query result"],["DataSourceInfo","Holds name and description of a datasource"],["DiagnosticRecord","ODBC Diagnostic Record"],["DriverInfo","Struct holding information available on a driver."],["Environment","Handle to an ODBC Environment"],["Statement","A `Statement` can be used to execute queries and retrieves results."]],"trait":[["GetDiagRec","Allows retrieving a diagnostic record, describing errors (or lack thereof) during the last operation."],["Handle","Reflects the ability of a type to expose a valid handle"],["OdbcType",""],["Output","Indicates that a type can be retrieved using `Cursor::get_data`"]],"type":[["Executed","`Statement` state used to represent a statement with a result set cursor. A statement is most likely to enter this state after a `SELECT` query."],["Result","Result type returned by most functions in this crate"],["SqlDate",""],["SqlSsTime2",""],["SqlTime",""],["SqlTimestamp",""],["Version3","Environment state used to represent that environment has been set to odbc version 3"]]});