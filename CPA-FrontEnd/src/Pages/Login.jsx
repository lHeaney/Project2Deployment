import "../App.css"

export const Login = () =>
{

    //The forms submission was supposed to validate the inputs as part of multi-user login
    //this code is left as a stub for future expansion
    // const validateLogin =async()=>{
     
    //     return false
    // }
    // const {user} = useContext(userContext)
    

    //Login is a form, but that is for multi-user logins. Right now, it only sets the username to local storage
    return(
    <>
    <h1 >Login</h1>
    <form 
    name = "loginForm" 
      action="/RecordSearch"
    //   onSubmit={validateLogin()} 
    //This table hold the username and password field. The username field is open and available, the password field is disabled at this time
    //Username is stored in local storage for use in the owner field of createRecord, and the filtering of getRecords  
    >
        <table>
            <tbody>
                <tr>
                    <th>
                       <label>Username</label> <input name = "username" id = "usernameField" 
                       disable = "false"
                       ></input> 
                    </th>
                    
                </tr>
                <tr>
                   <td>
                        <label>Password</label> <input name = "password" type = "Password"  id = "passwordField"
                        disabled = {true}
                        ></input> 
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <button type="submit" onClick={()=>{
                            localStorage.setItem("username", document.getElementById("usernameField").value)
                            localStorage.setItem("password", document.getElementById("passwordField").value)
                        }}>login</button>
                    </td>
                    
                </tr>
            </tbody>
        </table>
    </form>
     
    </>
    )
}