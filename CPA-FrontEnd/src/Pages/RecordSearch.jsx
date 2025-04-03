import axios from "axios"
import { useState } from "react";
import { Record } from "../models/Record";
import "../App.css";
import { RecordCard } from "../components/RecordCard";


export const RecordSearch = () =>
    {


        //This is a filter we keep track of to help the user only see the records they want
        var filter =""
        //This keeps track of the records on the client-side
        const [records, setRecords] = useState([]);

        

        //This is our get function. We are getting the list of all records, then filtering them on the client side.
        //This only works because we have only one user and they technically have access to all records
        //If we implemented multi-user this would change
        const getRecords = async(fill)=>{
            await axios.get('http://localhost:8080/records')
            .then(data=>{
                try{
                    setRecords(data.data.filter((data)=>
                    {
                        // console.log(fill+" "+data.type)
                        //This is our big "if" statement where we check if we are:
                        // admin (full access to all records)
                        // a user (access to records matching our username)
                        //not logged in (no access)
                        if(localStorage.getItem("username")==="admin" || data.owner===localStorage.getItem("username"))
                        {
                            if(fill===""|| fill===null || fill=== undefined || fill === "All")
                                return true
                            else
                                return data.type===fill 
                        } 
                            
                        return false
                    }

                    ).map(input=>{
                    return {
                        record: new Record(input.id, input.owner, input.type, input.total_revenue, input.taxes_owed, input.taxes_paid,  input.status),
                        id:input?.id,
                        owner: input?.owner,
                        type: input?.type,
                        total_revenue: input?.revenue,
                        taxes_owed: input?.taxes_owed,
                        taxes_paid: input?.taxes_paid,
                        status: input?.status
                                }
                            }
                        )
                    ) 
                }catch(e)
                {
                    //had trouble properly formatting a removal statement that would not crash. Catching the error is the best I could do at this time
                    console.log(e)

                       
                }
                
        })
        }


        //This is the function we pass down to our RecordCard component, that allows it to update itself and the original value in the database
        const updateFile = async(record, newType)=>
        {
            console.log("update?"+record.id +" "+newType)
            try{
                await axios.put("http://localhost:8080/records/"+record.id,{
                        id:record.id,
                        owner:record.owner,
                        type:newType,//--Here is where we make a change: we are inserting the passed parameter "newtype" into the put request body
                        total_revenue:record.total_revenue,
                        // taxes_owed:record.taxes_owed,
                        // taxes_paid:record.taxes_paid,//This is a quick fix for a discovered issue: the taxes owed/paid are being swapped somewhere
                        taxes_owed:record.taxes_paid,
                        taxes_paid:record.taxes_owed,
                        status:record.status
                    } ).then(async ()=>{
                    getRecords(filter);
             }
            )
            }catch(e)
            {
                console.log(e)
            }
             
        }
        //Simple delete function we pass along to the recordCard so it can properly delete itself
        const deleteFile =async(id)=>
        {
            console.log("delete?"+id)
            
             await axios.delete("http://localhost:8080/records/"+id ).then(async ()=>{
                    await getRecords(filter);
             }
            )
        }

        
        return(
            //this is where the HTML of the page is set up. We have a label, a button to get the records,
            // a header for our table with filtering implemented
            // and then we call Record Card for each file's record
            //this is also where we pass Update and Delete File functions
        <> 
        
            <h1>Records</h1>
            <button type="button"
                onClick={()=>{return (getRecords(filter));}}>Get Records
            </button>
            <table>
                <thead>
                    <tr>
                    <th>Record Number</th>
                    <th>Owner</th>
                    <th>
                        <select name="typeFilter" id="typeFilter" 
                        defaultValue="All"
                        onChange={()=>{
                            filter = document.getElementById("typeFilter").value
                            getRecords(filter);
                            
                            }
                        }
                        >
                            <option value = "">All</option>
                            <option value="Military">Military</option>
                            <option value="Business">Business</option>
                            <option value="Personal">Personal</option>
                            <option value="International">International</option>
                        </select>
                    </th>
                    <th>Total Revenue</th>
                    <th>Taxes Paid</th>
                    <th>Taxes Owed</th>
                    {/* <th>Taxes Paid</th> */}
                    <th>Status</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        
                        records.map(record=>
                            {
                                try{
                                    return (<RecordCard record = {record}
                                    deleteFile={deleteFile}
                                    updateFile={updateFile}
                                    key ={record.id}
                                    />
                                    )
                                }
                                catch(e)
                                {
                                    console.log(e)
                                    return<></>;
                                    
                                }
                               
                            } 
                        )
                    }
                </tbody>
            </table>
            
        </>
        
        )
    }
