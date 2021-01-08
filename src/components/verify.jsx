import React,{useState} from 'react'
import NIMClogo from './img/nimc.png'

function Verify({data}) {
    const [phone] = useState(data.data.phone);
    const [code, setCode] = useState();
    // const [statusCode, setStatusCode] = useState(400)
    // const [verifyResponse, setVerifyResponse] = useState('');

    console.log(data)
    const handleCode = ({target}) =>{
        setCode(target.value)
    }

    const tokenData = {
        phone: phone,
        token: code
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(code === ''){
            alert('Please Enter Verification Code')
            return false;
        }
        
        await fetch("https://cors-anywhere.herokuapp.com/http://167.99.82.56:5050/api/v1/verify/account",
            {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Access-Control-Allow-Origin": '*'
                },
                method: "POST",
                mode: 'cors',
                body: JSON.stringify(tokenData)
            })
        .then((response) => response.json() )
        .then((data) => {
            console.log(data)
            alert(data.message)
            //setStatusCode(data.status)
            window.location='/#/login'
        })
        .catch((err) => console.log(err));
    }

        return (
            <>
                <div className='home-container'>
                    <div className=' z-depth-4'>
                        <img src={NIMClogo} alt="NIMC Logo" className='nimc'/> 
                        <p style={{color:'green', margin: '20px 0 0 0'}}>{data.message}!</p>
                        <form onSubmit={handleSubmit} action="" method='POST'>
                            <div className="input-field col s12" style={{textAlign:'center', width:'350px', padding:'30px'}}>
                                <label htmlFor="verify" style={{textAlign:'center'}}>Enter Verification Code: </label>
                                <input onChange={handleCode} style={{margin:'auto', width:'100px'}} type="text" id='verify' className='validate'/>
                            </div>
                            <button type='submit' className='btn green' style={{margin:'10px'}}>Submit</button>
                        </form>
                    </div>
                </div>
            </>
        )
    
    // else if(statusCode === 201){
    //     return <Login/>
    // }
}

export default Verify
