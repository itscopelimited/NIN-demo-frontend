import React from 'react'
import NIMClogo from './img/nimc.png'
import {Link} from 'react-router-dom'

function Receipt() {
    //https://nin-demoapp.com/?hash=eyJzdGF0dXMiOjIwMCwibWVzc2FnZSI6IllvdXIgTklOIEZvcm0gYXBwbGljYXRpb24gd2FzIHN1Y2Nlc3NmdWwiLCJkYXRhIjp7ImFtb3VudCI6NTAwMCwiZW1haWwiOiJzdGVwaGVuaWxvcmk0NThAZ21haWwuY29tIiwiY29sbGVjdGlvbiI6eyJub3RpZmljYXRpb25zIjp7ImN1cnJlbnQiOmZhbHNlLCJkYXlUaHJlZSI6ZmFsc2UsImRheVR3byI6ZmFsc2UsImRheU9uZSI6ZmFsc2UsImFXZWVrIjpmYWxzZSwiYW5Ib3VyIjpmYWxzZSwiYU1pbnV0ZSI6ZmFsc2UsInNlbGVjdGVkIjpmYWxzZX0sInllYXIiOjIwMjEsInN0YXR1cyI6IkJvb2tlZCIsInBheW1lbnRTdGF0dXMiOiJQYWlkIiwiX2lkIjoiNjAwNmM4MzA3NGQ2YjIxNjJlOWIzN2M5IiwidXNlcklkIjoiNWZmOGMzMmFkNmY3NGMwMTk5MTExZTgxIiwibmluRm9ybUlkIjoiNjAwNmM4MzA3NGQ2YjIxNjJlOWIzN2M4IiwiYnJhbmNoIjoiTGVra2kiLCJkYXkiOjYsIm1vbnRoIjoiSmFuIiwidGltZSI6IjEwOjAwYW0iLCJfX3YiOjB9LCJzdGF0dXMiOiJTdWNjZXNzZnVsbCIsInBhaWRBdCI6IjIwMjEtMDEtMTlUMTE6NTc6MjYuODk0WiJ9LCJlcnJvcnMiOnt9fQ==  
    let hash = window.atob('eyJzdGF0dXMiOjIwMCwibWVzc2FnZSI6IllvdXIgTklOIEZvcm0gYXBwbGljYXRpb24gd2FzIHN1Y2Nlc3NmdWwiLCJkYXRhIjp7ImFtb3VudCI6NTAwMCwiZW1haWwiOiJzdGVwaGVuaWxvcmk0NThAZ21haWwuY29tIiwiY29sbGVjdGlvbiI6eyJub3RpZmljYXRpb25zIjp7ImN1cnJlbnQiOmZhbHNlLCJkYXlUaHJlZSI6ZmFsc2UsImRheVR3byI6ZmFsc2UsImRheU9uZSI6ZmFsc2UsImFXZWVrIjpmYWxzZSwiYW5Ib3VyIjpmYWxzZSwiYU1pbnV0ZSI6ZmFsc2UsInNlbGVjdGVkIjpmYWxzZX0sInllYXIiOjIwMjEsInN0YXR1cyI6IkJvb2tlZCIsInBheW1lbnRTdGF0dXMiOiJQYWlkIiwiX2lkIjoiNjAwNmM4MzA3NGQ2YjIxNjJlOWIzN2M5IiwidXNlcklkIjoiNWZmOGMzMmFkNmY3NGMwMTk5MTExZTgxIiwibmluRm9ybUlkIjoiNjAwNmM4MzA3NGQ2YjIxNjJlOWIzN2M4IiwiYnJhbmNoIjoiTGVra2kiLCJkYXkiOjYsIm1vbnRoIjoiSmFuIiwidGltZSI6IjEwOjAwYW0iLCJfX3YiOjB9LCJzdGF0dXMiOiJTdWNjZXNzZnVsbCIsInBhaWRBdCI6IjIwMjEtMDEtMTlUMTE6NTc6MjYuODk0WiJ9LCJlcnJvcnMiOnt9fQ');
    let decodedString = JSON.parse(hash)
    console.log(decodedString)

    // useEffect(() => {
    //     if query from browser not available window.location = '/#/enrolmentForm'
    // })
    const handlePrint = () =>{
        window.print()
    }
    

    return (
        <>
            <div className='home-container'>
                <div className='container z-depth-4'>
                    <img src={NIMClogo} className='nimc' alt=""/>
                    {decodedString.status === 200 ?
                        <h1 style={{fontSize:'1.5em'}} className='green-text'>{decodedString.message}!</h1>
                    : <h1 style={{fontSize:'1.5em'}} className='red-text'>{decodedString.message}!</h1>}
                    <table className='striped centered'>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <td>{decodedString.data.email}</td>
                            </tr>
                            <tr>
                                <th>Amount</th>
                                <td>#{decodedString.data.amount}</td>
                            </tr>
                            <tr style={{position:'relative'}}>
                                <th>Status</th>
                                <td style={{display:'flex'}}>{decodedString.data.status}
                                    <div>
                                        {decodedString.status === 200 ?
                                            <p 
                                                style={{
                                                    width: '10px',
                                                    height: '10px',
                                                    background: 'green',
                                                    borderRadius: '50%',
                                                    margin: '5px 0 0 10px'
                                                }}>
                                            </p>:
                                            <p 
                                                style={{
                                                    width: '10px',
                                                    height: '10px',
                                                    background: 'red',
                                                    borderRadius: '50%',
                                                    margin: '5px 0 0 10px'
                                                }}>
                                            </p>
                                        }
                                    </div>
                                </td>
                            </tr>
                        </thead>

                        <thead>
                            <tr>
                                <td colSpan='3' className='teal-text' style={{textAlign: 'center', fontSize:'1.5em', fontWeight: 'bold'}}>
                                    Appointment For Data Capturing
                                </td>
                            </tr>
                            <tr>
                                <th>Date: </th>
                                <td>{decodedString.data.collection.day} {decodedString.data.collection.month} {decodedString.data.collection.year}</td>
                            </tr>
                            <tr>
                                <th>Time: </th>
                                <td>{decodedString.data.collection.time}</td>
                            </tr>
                        </thead>
                    </table>
                    <div className="home-buttons">
                                        <button className='btn green' onClick={handlePrint}>Print Receipt</button>
                                        <button className='btn teal'>
                                            <Link to='/login' className='white-text'>
                                                Back to profile
                                            </Link>
                                        </button>
                                    </div>
                </div>
            </div>
        </>
    )
}

export default Receipt
