<%
    Response.Write("<h1>Vulnerable to ASP Code Execution</h1>")
    Response.Write("Executed by: " & Request.ServerVariables("REMOTE_ADDR"))
%>