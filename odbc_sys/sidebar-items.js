initSidebarItems({"constant":[["SQL_MAX_MESSAGE_LENGTH","Maximum message length"],["SQL_NO_TOTAL",""],["SQL_NTS",""],["SQL_NTSL",""],["SQL_NULL_DATA",""],["SQL_OV_ODBC2",""],["SQL_OV_ODBC3",""],["SQL_OV_ODBC3_80",""],["SQL_SQLSTATE_SIZE",""]],"enum":[["Dbc",""],["Env",""],["EnvironmentAttribute","Governs behaviour of EnvironmentAttribute"],["FetchOrientation","Codes used for FetchOrientation in `SQLFetchScroll`, `SQLDataSources` and in `SQLDrivers`"],["FreeStmtOption","SQL Free Statement options"],["HandleType","Represented in C headers as SQLSMALLINT"],["InfoType","Information requested by SQLGetInfo"],["InputOutput","Used by `SQLBindParameter`."],["Obj",""],["SQLRETURN","Indicates the overall success or failure of the function"],["SqlCDataType","The C data type is specified in the SQLBindCol and SQLGetData functions with the TargetType argument and in the SQLBindParameter function with the ValueType argument."],["SqlDataType","SQL Data Types"],["SqlDriverConnectOption","Options for `SQLDriverConnect`"],["Stmt",""]],"fn":[["SQLAllocHandle","Allocates an environment, connection, statement, or descriptor handle."],["SQLBindParameter","Binds a buffer to a parameter marker in an SQL statement"],["SQLCloseCursor","Closes a cursor that has been opened on a statement and discards pending results."],["SQLConnect","SQLConnect establishes connections to a driver and a data source. The connection handle references storage of all information about the connection to the data source, including status, transaction state, and error information."],["SQLDataSources","Returns information about a data source. This function is implemented only by the Driver Manager."],["SQLDisconnect","Closes the connection associated with a specific connection handle."],["SQLDriverConnect","An alternative to `SQLConnect`. It supports data sources that require more connection information than the three arguments in `SQLConnect`, dialog boxes to prompt the user for all connection information, and data sources that are not defined in the system information"],["SQLDrivers","Lists driver descriptions and driver attribute keywords. This function is implemented only by the Driver Manager."],["SQLExecDirect","Executes a preparable statement, using the current values of the parameter marker variables if any parameters exist in the statement. This is the fastest way to submit an SQL statement for one-time execution"],["SQLExecute","Executes a prepared statement, using the current values of the parameter marker variables if any paramater markers exis in the statement."],["SQLFetch","SQLFetch fetches the next rowset of data from the result set and returns data for all bound columns."],["SQLFreeHandle","Frees resources associated with a specific environment, connection, statement, or descriptor handle."],["SQLFreeStmt","Stops processing associated with a specific statement, closes any open cursors associated with the statement, discards pending results, or, optionally, frees all resources associated with the statement handle."],["SQLGetData",""],["SQLGetDiagRec","Return the current values of multiple fields of a diagnostic record that contains eror, warning, and status information."],["SQLGetInfo","Returns general information about the driver and data source associated with a connection"],["SQLNumResultCols","Returns the number of columns in a result set"],["SQLPrepare","Compiles the statement and generates an access plan."],["SQLSetEnvAttr","Sets attributes that govern aspects of environments"],["SQLTables","Returns the list of table, catalog, or schema names, and table types, stored in a specific data source. The driver returns the information as a result set"]],"type":[["SQLCHAR",""],["SQLHANDLE",""],["SQLHDBC","The connection handle references storage of all information about the connection to the data source, including status, transaction state, and error information."],["SQLHENV",""],["SQLHSTMT",""],["SQLHWND",""],["SQLINTEGER",""],["SQLLEN",""],["SQLPOINTER",""],["SQLSMALLINT",""],["SQLUINTEGER",""],["SQLULEN",""],["SQLUSMALLINT",""]]});