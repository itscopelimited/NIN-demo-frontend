import React,{useState, useEffect}from 'react'
import NIMClogo from './img/nimc.png'
import Spinner from './spinner'

function Enrolmentform() {
    const [title, setTitle] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [marriedWoman, setMarriedWoman] = useState('')
    const [maidenName, setmaidenName] = useState('')
    const [nameChange, setnameChange] = useState('')
    const [previousSurname, setpreviousSurname] = useState('')
    const [previousFirstName, setpreviousFirstName] = useState('')
    const [previousMiddleName, setpreviousMiddleName] = useState('')
    const [homeless, setHomeless] = useState('')
    const [cityOfResidence, setcityOfResidence] = useState('')
    const [countryOfResidence, setcountryOfResidence] = useState('')
    const [stateOfResidence, setstateOfResidence] = useState('')
    const [lgaOfResidence, setLgaOfResidence] = useState('')
    const [addressOfResidence, setAddressOfResidence] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [dateOfBirth, setdateOfBirth] = useState('')
    const [birthVerification, setbirthVerification] = useState('')
    const [birthCountry, setbirthCountry] = useState('')
    const [birthLga, setbirthLga] = useState('')
    const [birthState, setbirthState] = useState('')
    const [originCountry, setoriginCountry] = useState('')
    const [originState, setoriginState] = useState('')
    const [originLga, setoriginLga] = useState('')
    const [originTown, setoriginTown] = useState('')
    const [fatheroriginCountry, setfatheroriginCountry] = useState('')
    const [fatheroriginState, setfatheroriginState] = useState('')
    const [fatheroriginLga, setfatheroriginLga] = useState('')
    const [fatheroriginTown, setfatheroriginTown] = useState('')
    const [motheroriginCountry, setmotheroriginCountry] = useState('')
    const [motheroriginState, setmotheroriginState] = useState('')
    const [motheroriginLga, setmotheroriginLga] = useState('')
    const [motheroriginTown, setmotheroriginTown] = useState('')
    const [gender, setGender] = useState('')
    const [height, setHeight] = useState('')
    const [residenceStatus, setResidenceStatus] = useState('')
    const [nationality, setNationality] = useState('')
    const [supportingDocuments, setsupportingDocuments] = useState('')
    const [supportingDocumentNumber, setdocumentNumber] = useState(null)
    const [documentExpiryDate, setdocumentExpiryDate] = useState(null)
    const [maritalStatus, setmaritalStatus] = useState('')
    const [nativeLanguage, setNativeLanguage] = useState('')
    const [languagesYouReadAndWrite, setlanguagesYouReadAndWrite] = useState('')
    const [otherLanguagesSpoken, setotherLanguagesSpoken] = useState('')
    const [educationLevel, seteducationLevel] = useState('')
    const [religion, setReligion] = useState('')
    const [telephone, setTelephone] = useState('')
    const [employmentStatus, setEmploymentStatus] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [occupation, setOccupation] = useState('')
    const [fathersSurname, setfathersSurname] = useState('')
    const [fathersFirstName, setfathersFirstName] = useState('')
    const [fathersMiddleName, setfathersMiddleName] = useState('')
    const [fathersNin, setfathersNin] = useState('')
    const [mothersSurname, setmothersSurname] = useState('')
    const [mothersFirstName, setmothersFirstName] = useState('')
    const [mothersMiddleName, setmothersMiddleName] = useState('')
    // const [mothersMaidenName, setmothersMaidenName] = useState('')
    const [mothersNin, setmothersNin] = useState('')
    const [guardianSurname, setguardianSurname] = useState('')
    const [guardianFirstName, setguardianFirstname] = useState('')
    const [guardianMiddleName, setguardianMiddlename] = useState('')
    const [guardianNin, setguardianNin] = useState('')
    const [nextOfKinSurname, setnextOfKinSurname] = useState('')
    const [nextOfKinFirstname, setnextOfKinFirstname] = useState('')
    const [nextOfKinMiddlename, setnextOfKinMiddlename] = useState('')
    const [nextOfKinRelationship, setnextOfKinRelationship] = useState('')
    const [nextOfKinCountry, setnextOfKinCountry] = useState('')
    const [nextOfKinState, setnextOfKinState] = useState('')
    const [nextOfKinLga, setnextOfKinLga] = useState('')
    const [nextOfKinTown, setnextOfKinTown] = useState('')
    const [nextOfKinStreetAddress, setnextOfKinStreetAddress] = useState('')
    const [nextOfKinNin, setnextOfKinNin] = useState('')
    
    // APPOINTMENT STATES
    const [appointmentYear] = useState(2021)
    const [appointmentMonth, setAppointmentMonth] = useState('')
    const [appointmentDay, setAppointmentDay] = useState()
    const [appointmentBranch, setAppointmentBranch] = useState('')
    const [loading, setLoading] = useState(false)
    // const [defaultTime] = useState('')
    // const [pickedTimes] = useState('')
    const [availableTime, setavailableTime] = useState('')
    const [timeResponse, setTimeResponse] = useState('')
    const [selectedTime, setSelectedTime] = useState('')

    const handleTitle = ({target}) =>{
      setTitle(target.value)
    }
    const handleFirstName = ({target}) =>{
      setfirstName(target.value)
    }
    const handleLastName = ({target}) =>{
      setlastName(target.value)
    }
    const handleMarriedWoman = ({target}) =>{
      setMarriedWoman(target.value)
    }
    const handleMaidenName = ({target}) =>{
      setmaidenName(target.value)
    }
    const handleNameChange = ({target}) =>{
      setnameChange(target.value)
    }
    const handlePreviousSurname = ({target}) =>{
      setpreviousSurname(target.value)
    }
    const handlePreviousFirstName = ({target}) =>{
      setpreviousFirstName(target.value)
    }
    const handlePreviousMiddleName = ({target}) =>{
      setpreviousMiddleName(target.value)
    }
    const handleHomeless = ({target}) =>{
      setHomeless(target.value)
    }
    const handleCityOfResidence = ({target}) =>{
      setcityOfResidence(target.value)
    }
    const handleCountryOfResidence = ({target}) =>{
      setcountryOfResidence(target.value)
    }
    const handleStateOfResidence = ({target}) =>{
      setstateOfResidence(target.value)
    }
    const handleLgaOfResidence = ({target}) =>{
      setLgaOfResidence(target.value)
    }
    const handleAddressOfResidence = ({target}) =>{
      setAddressOfResidence(target.value)
    }
    const handlePostalCode = ({target}) =>{
      setPostalCode(target.value)
    }
    const handleDateOfBirth = ({target}) =>{
      setdateOfBirth(target.value)
    }
    const handleBirthVerification = ({target}) =>{
      setbirthVerification(target.value)
    }
    const handleBirthCountry = ({target}) =>{
      setbirthCountry(target.value)
    }
    const handleBirthState = ({target}) =>{
      setbirthState(target.value)
    }
    const handleBirthLga = ({target}) =>{
      setbirthLga(target.value)
    }
    const handleOriginCountry = ({target}) =>{
      setoriginCountry(target.value)
    }
    const handleOriginState = ({target}) =>{
      setoriginState(target.value)
    }
    const handleOriginLga = ({target}) =>{
      setoriginLga(target.value)
    }
    const handleOriginTown = ({target}) =>{
      setoriginTown(target.value)
    }
    const handleFatherOriginCountry = ({target}) =>{
      setfatheroriginCountry(target.value)
    }
    const handleFatherOriginState = ({target}) =>{
      setfatheroriginState(target.value)
    }
    const handleFatherOriginLga = ({target}) =>{
      setfatheroriginLga(target.value)
    }
    const handleFatherOriginTown = ({target}) =>{
      setfatheroriginTown(target.value)
    }
    const handleMotherOriginCountry = ({target}) =>{
      setmotheroriginCountry(target.value)
    }
    const handleMotherOriginState = ({target}) =>{
      setmotheroriginState(target.value)
    }
    const handleMotherOriginLga = ({target}) =>{
      setmotheroriginLga(target.value)
    }
    const handleMotherOriginTown = ({target}) =>{
      setmotheroriginTown(target.value)
    }
    const handleGender = ({target}) =>{
      setGender(target.value)
    }
    const handleHeight = ({target}) =>{
      setHeight(target.value)
    }
    const handleResidenceStatus = ({target}) =>{
      setResidenceStatus(target.value)
    }
    const handleNationality = ({target}) =>{
      setNationality(target.value)
    }
    const handleSupportingDocuments = ({target}) =>{
      setsupportingDocuments(target.value)
    }
    const handleDocumentNumber = ({target}) =>{
      setdocumentNumber(target.value)
    }
    const handleDocumentExpiryDate = ({target}) =>{
      setdocumentExpiryDate(target.value)
    }
    const handleMaritalStatus = ({target}) =>{
      setmaritalStatus(target.value)
    }
    const handleNativeLanguage = ({target}) =>{
      setNativeLanguage(target.value)
    }
    const handleLanguagesRead = ({target}) =>{
      setlanguagesYouReadAndWrite(target.value)
    }
    const handleOtherLanguages = ({target}) =>{
      setotherLanguagesSpoken(target.value)
    }
    const handleEducationLevel = ({target}) =>{
      seteducationLevel(target.value)
    }
    const handleReligion = ({target}) =>{
      setReligion(target.value)
    }
    const handleTelephone = ({target}) =>{
      setTelephone(target.value)
    }
    const handleEmploymentStatus = ({target}) =>{
      setEmploymentStatus(target.value)
    }
    const handleEmailAddress = ({target}) =>{
      setEmailAddress(target.value)
    }
    const handleOccupation = ({target}) =>{
      setOccupation(target.value)
    }
    const handleFathersSurname = ({target}) =>{
      setfathersSurname(target.value)
    }
    const handleFathersFirstName = ({target}) =>{
      setfathersFirstName(target.value)
    }
    const handleFathersMiddleName = ({target}) =>{
      setfathersMiddleName(target.value)
    }
    const handleFathersNin = ({target}) =>{
      setfathersNin(target.value)
    }
    const handleMothersSurname = ({target}) =>{
      setmothersSurname(target.value)
    }
    const handleMothersFirstName = ({target}) =>{
      setmothersFirstName(target.value)
    }
    const handleMothersMiddleName = ({target}) =>{
      setmothersMiddleName(target.value)
    }
    // const handleMothersMaidenName = ({target}) =>{
    //   setmothersMaidenName(target.value)
    // }
    const handleMothersNin = ({target}) =>{
      setmothersNin(target.value)
    }
    const handleGuardianSurname = ({target}) =>{
      setguardianSurname(target.value)
    }
    const handleGuardianFirstname = ({target}) =>{
      setguardianFirstname(target.value)
    }
    const handleGuardianMiddlename = ({target}) =>{
      setguardianMiddlename(target.value)
    }
    const handleGuardianNin = ({target}) =>{
      setguardianNin(target.value)
    }
    const handleNextOfKinSurname = ({target}) =>{
      setnextOfKinSurname(target.value)
    }
    const handleNextOfKinFirstname = ({target}) =>{
      setnextOfKinFirstname(target.value)
    }
    const handleNextOfKinMiddlename = ({target}) =>{
      setnextOfKinMiddlename(target.value)
    }
    const handleNextOfKinRelationship = ({target}) =>{
      setnextOfKinRelationship(target.value)
    }
    const handleNextOfKinCountry = ({target}) =>{
      setnextOfKinCountry(target.value)
    }
    const handleNextOfKinState = ({target}) =>{
      setnextOfKinState(target.value)
    }
    const handleNextOfKinLga = ({target}) =>{
      setnextOfKinLga(target.value)
    }
    const handleNextOfKinTown = ({target}) =>{
      setnextOfKinTown(target.value)
    }
    const handleNextOfKinStreetAddress = ({target}) =>{
      setnextOfKinStreetAddress(target.value)
    }
    const handleNextOfKinNin = ({target}) =>{
      setnextOfKinNin(target.value)
    }
    
    // HANDLER FUNCTIONS FOR BOOKING
    let token = sessionStorage.getItem('__browser_data')
    useEffect(() => {
      if(!token){
        alert('Session Expired! Login to Access Form.')
        window.location = '/#/login'
      }
    })
    const handleAppointmentMonth = ({target}) =>{
      setAppointmentMonth(target.value)
    }
    const handleAppointmentDay = ({target}) =>{
      setAppointmentDay(target.value)
    }

    const handleAppointmentBranch = async({target}) =>{
      setAppointmentBranch(target.value)
    }

    const handleSelectedTime = ({target}) =>{
      setSelectedTime(target.value)
    }
    
    const bookingData = {
      year: appointmentYear,
      month: appointmentMonth,
      date: appointmentDay,
      branch: appointmentBranch
    }
    console.log(bookingData)

    

    const handleAppointmentBooking = async(e) =>{
      e.preventDefault();
      if(appointmentYear === '' || appointmentYear > 2021){
        alert('Please Enter a Valid Year!')
        return false
      }
      else if(appointmentMonth === ''){
        alert('Please Enter a Valid Month')
      }
      else if(appointmentDay === '' || appointmentDay > 31){
        alert('Please Enter a Valid Day')
      }
      else if(appointmentBranch === ''){
        alert('Branch Field is Empty')
      }
      else{
        setLoading(true)
        await fetch("https://cors-anywhere.herokuapp.com/http://167.99.82.56:5050/api/v1/get/collection-time",
            {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Access-Control-Allow-Origin": '*',
                    "myqueu-x-token": `${token}`
                },
                method: "POST",
                mode: 'cors',
                body: JSON.stringify(bookingData)
            })
        .then((response) => response.json() )
        .then((data) => {
          console.log(data)
            if(data.status === 200){
              setLoading(false)
              setavailableTime(data.data.availableTime)
              setTimeResponse(data)
            }
            else if(data.errors.date){
              setLoading(false)
              alert(data.errors.date)
            }
            else if(data.status === 401){
              setLoading(false)
              alert('Session Expired! Login to Access Form.')
              window.location='/*/login'
            }
          console.log(availableTime)
        })
        .catch((err) => console.log(err));
      }
    }

    const enrolmentForm = {
      title: title,
      firstName: firstName,
      lastName: lastName,
      maidenName: maidenName,
      changedName: nameChange,
      previousSurname: previousSurname,
      previousFirstName: previousFirstName,
      previousMiddleName: previousMiddleName,
      homeless: homeless,
      cityOfResidence: cityOfResidence,
      countryOfResidence: countryOfResidence,
      stateOfResidence: stateOfResidence,
      lgaOfResidence: lgaOfResidence,
      addressOfResidence: addressOfResidence,
      postalCode: postalCode,
      dateOfBirth: dateOfBirth,
      birthVerification: birthVerification,
      birthCountry: birthCountry,
      birthState: birthState,
      birthLga: birthLga,
      originatingCountry: originCountry,
      originatingState: originState,
      originatingLga: originLga,
      originatingTown: originTown,
      fatherOriginatingCountry: fatheroriginCountry,
      fatherOriginatingState: fatheroriginState,
      fatherOriginatingLga: fatheroriginLga,
      fatherOriginatingTown: fatheroriginTown,
      motherOriginatingCountry: motheroriginCountry,
      motherOriginatingState: motheroriginState,
      motherOriginatingLga: motheroriginLga,
      motherOriginatingTown: motheroriginTown,
      gender: gender,
      height: height,
      residenceStatus: residenceStatus,
      nationality: nationality,
      maritalStatus: maritalStatus,
      mainNativeLanguageSpoken: nativeLanguage,
      languagesYouReadAndWrite: languagesYouReadAndWrite,
      otherLanguagesSpoken: otherLanguagesSpoken,
      educationLevel: educationLevel,
      religion: religion,
      telephone: telephone,
      employmentStatus: employmentStatus,
      emailAddress: emailAddress,
      occupation: occupation,
      fathersSurname: fathersSurname,
      fathersFirstName: fathersFirstName,
      fathersMiddleName: fathersMiddleName,
      fathersNin: fathersNin,
      mothersSurname: mothersSurname,
      mothersFirstName: mothersFirstName,
      mothersMiddleName: mothersMiddleName,
      mothersNin: mothersNin,
      guardianSurname: guardianSurname,
      guardianFirstname: guardianFirstName,
      guardianMiddlename: guardianMiddleName,
      guardianNin: guardianNin,
      nextOfKinSurname: nextOfKinSurname,
      nextOfKinFirstname: nextOfKinFirstname,
      nextOfKinMiddlename: nextOfKinMiddlename,
      nextOfKinRelationship: nextOfKinRelationship,
      nextOfKinCountry: nextOfKinCountry,
      nextOfKinState: nextOfKinState,
      nextOfKinTown: nextOfKinTown,
      nextOfKinLga: nextOfKinLga,
      nextOfKinStreetAddress: nextOfKinStreetAddress,
      nextOfKinNin: nextOfKinNin,
      year: appointmentYear ,
      date: appointmentDay ,
      month: appointmentMonth,
      branch: appointmentBranch ,
      time: selectedTime
    }
    
    if(supportingDocuments === 'anyIdentityReference'){
      enrolmentForm.anyIdentityReference = {
        documentNumber : supportingDocumentNumber,
        expiryDate: documentExpiryDate
      }
    } 
    else if(supportingDocuments === 'immigrationDocument'){
      enrolmentForm.immigrationDocument = {
        documentNumber : supportingDocumentNumber,
        expiryDate: documentExpiryDate
      }
    }
    else if(supportingDocuments === 'nationalInsurance'){
      enrolmentForm.nationalInsurance = {
        documentNumber : supportingDocumentNumber,
        expiryDate: documentExpiryDate
      }
    }
    else if(supportingDocuments === 'nigeriaDriverLicense'){
      enrolmentForm.nigeriaDriverLicense = {
        documentNumber : supportingDocumentNumber,
        expiryDate: documentExpiryDate
      }
    }
    else if(supportingDocuments === 'nigerianPassport'){
      enrolmentForm.nigerianPassport = {
        documentNumber : supportingDocumentNumber,
        expiryDate: documentExpiryDate
      }
    }
    else if(supportingDocuments === 'otherDesignatedDocument'){
      enrolmentForm.otherDesignatedDocument = {
        documentNumber : supportingDocumentNumber,
        expiryDate: documentExpiryDate
      }
    }
    else if(supportingDocuments === 'otherNationalIdentityCard'){
      enrolmentForm.otherNationalIdentityCard = {
        documentNumber : supportingDocumentNumber,
        expiryDate: documentExpiryDate
      }
    }
    else if(supportingDocuments === 'otherPassport'){
      enrolmentForm.otherPassport = {
        documentNumber : supportingDocumentNumber,
        expiryDate: documentExpiryDate
      }
    }
    else if(supportingDocuments === 'otherTravelDocument'){
      enrolmentForm.otherTravelDocument = {
        documentNumber : supportingDocumentNumber,
        expiryDate: documentExpiryDate
      }
    }
       
    console.log(enrolmentForm)
    const handleSubmit = async(e) =>{
      e.preventDefault();
      // if(appointmentYear === '' || appointmentYear > 2021){
      //   alert('Please Enter a Valid Year!')
      //   return false
      // }
      // else if(appointmentMonth === ''){
      //   alert('Please Enter a Valid Month')
      // }
      // else if(appointmentDay === '' || appointmentDay > 31){
      //   alert('Please Enter a Valid Day')
      // }
      // else if(appointmentBranch === ''){
      //   alert('Branch Field is Empty')
      // }
      // else{
        setLoading("submit")
        await fetch("https://cors-anywhere.herokuapp.com/http://167.99.82.56:5050/api/v1/create/nin",
            {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Access-Control-Allow-Origin": '*',
                    "myqueu-x-token": `${token}`,
                    "Accept": 'application/json'
                },
                method: "POST",
                mode: 'cors',
                body: JSON.stringify(enrolmentForm)
            })
        .then((response) => response.json() )
        .then((data) => {
          console.log(data)
            if(data.status === 200){
              setLoading(false)
              alert(data.message)
            }
            // else if(data.status === 401){
            //   // alert('Session Expired! Login to Access Form.')
            //   // window.location='/login'
            // }
            // else if(data.status === 400){
            //   setLoading(false)
            // }
            else if(data.errors){
              alert(data.errors)
            }
            else if(data.errors.title){
              setLoading(false)
              alert(data.errors.title)
            }
            
          console.log(availableTime)
        })
        .catch((err) => {
          console.log(err)
          if(err === 'TypeError: Failed to fetch'){
            alert('Network Error')
            setLoading(false)
          }
        });
      //}
    }

    return (
        <>
          <div>
              <img src={NIMClogo} alt="NIMC logo" className='nimc'/>
              <h1 className='form_heading'>NATIONAL IDENTIFICATION NUMBER ENROLMENT FORM</h1>
              <p className="instructions">PLEASE FILL THE FORM APPROPRIATELY</p>

              <form onSubmit={handleSubmit} method='POST' className="enrolment_form col s12">
                  {/* WHAT ARE YOUR NAMES? */}
                  <div className="names_block_A block row">
                      <h3 className="block_heading">WHAT ARE YOUR NAMES?</h3>
                      <div className="input-field col s12">
                        <label htmlFor="title">TITLE (Mr/Mrs/Master/Miss/Ms): </label>
                        <input onChange={handleTitle} id='title' type="text" required/>
                      </div>
                    
                      <div className="input-field col s6">
                        <label htmlFor="lastname">LAST NAME: </label>
                        <input onChange={handleLastName} id='lastname' type="text"/>
                      </div>
                      
                      <div className="input-field col s6">
                        <label htmlFor="firstname">FIRST NAME: </label>
                        <input onChange={handleFirstName} id='firstname' type="text" required/>
                      </div>
                      
                      {/* <div className="input-field col s12">
                        <label htmlFor="middlename">MIDDLE NAME: </label>
                        <input id='middlename' type="text" required/>
                      </div>
                      
                      <div className="input-field col s12">
                        <label htmlFor="othername">OTHER NAMES: </label>
                        <input id='othername' type="text" required/>
                      </div> */}


                      <div className='input-field col s12' onChange={handleMarriedWoman} value={marriedWoman}>
                        <p>ARE YOU A MARRIED WOMAN?</p>
                        <p>
                          <label htmlFor='true'>
                            <input id='true' value='true' name="group1" type="radio"/>
                            <span>Yes</span>
                          </label>
                        </p>
                        <p>
                          <label htmlFor='false'>
                            <input id='false' value='false' name="group1" type="radio" />
                            <span>No</span>
                          </label>
                        </p>
                      </div>

                      {marriedWoman === 'true' ? 
                        <div className="input-field col s12">
                          <label htmlFor="maidenname">MAIDEN NAME: </label>
                          <input onChange={handleMaidenName} id='maidenname' type="text" required/>
                        </div> : null}
                  </div>

                  {/* HAVE YOU CHANGED YOUR NAME BEFORE */}
                  <div className="names_block_B block row">
                    <div className='input-field col s12' onChange={handleNameChange} value={nameChange}>
                      <p>HAVE YOU CHANGED YOUR NAME BEFORE?</p>
                      <p>
                        <label htmlFor='namechangetrue'>
                          <input id='namechangetrue' value='Yes' name="namechange" type="radio"/>
                          <span>Yes</span>
                        </label>
                      </p>
                      <p>
                        <label htmlFor='namechangefalse'>
                          <input id='namechangefalse' value='No' name="namechange" type="radio" />
                          <span>No</span>
                        </label>
                      </p>
                    </div>
                    {nameChange === 'Yes' ? 
                    <div>
                      <div className="input-field col s12">
                        <label htmlFor="prevsurname">PREVIOUS SURNAME:</label>
                        <input id='prevsurname' onChange={handlePreviousSurname} type="text" required/>
                      </div>
                  
                      <div className="input-field col s12">
                        <label htmlFor="prevfirstname">PREVIOUS FIRST NAME:</label>
                        <input id='prevfirstname' onChange={handlePreviousFirstName} type="text"/>
                      </div>
                    
                      <div className="input-field col s12">
                        <label htmlFor="prevmidname">PREVIOUS MIDDLE NAME: </label>
                        <input id='prevmidname' onChange={handlePreviousMiddleName} type="text" required/>
                      </div> 
                    </div> : null}
                  </div>

                  {/* WHERE DO YOU LIVE */}
                  <div className="names_block_B block row">
                      <div className='input-field col s12' onChange={handleHomeless} value={homeless}>
                        <p>ARE YOU HOMELESS?</p>
                        <p>
                          <label htmlFor='homelesstrue'>
                            <input id='homelesstrue' value='Yes' name="homeless" type="radio"/>
                            <span>Yes</span>
                          </label>
                        </p>
                        <p>
                          <label htmlFor='homelessfalse'>
                            <input id='homelessfalse' value='No' name="homeless" type="radio" />
                            <span>No</span>
                          </label>
                        </p>
                      </div>
                      {homeless === 'No' ?
                        <div>
                          <div className="input-field col s6">
                            <label htmlFor="cityresidence">CITY OF RESIDENCE:</label>
                            <input id='cityresidence' onChange={handleCityOfResidence} type="text" required/>
                          </div>
                        
                          <div className="input-field col s6">
                            <label htmlFor="countryresidence">COUNTRY OF RESIDENCE:</label>
                            <input id='countryresidence' onChange={handleCountryOfResidence} type="text"/>
                          </div>
                          
                          <div className="input-field col s6">
                            <label htmlFor="stateresidence">STATE OF RESIDENCE: </label>
                            <input id='stateresidence' onChange={handleStateOfResidence} type="text" required/>
                          </div>

                          <div className="input-field col s6">
                            <label htmlFor="lgaresidence">LGA OF RESIDENCE: </label>
                            <input id='lgaresidence' onChange={handleLgaOfResidence} type="text" required/>
                          </div>

                          <div className="input-field col s6">
                            <label htmlFor="residenceaddress">ADDRESS OF RESIDENCE: </label>
                            <input id='residenceaddress' onChange={handleAddressOfResidence} type="text" required/>
                          </div>
                          
                          <div className="input-field col s6">
                            <label htmlFor="postalcode">POSTAL CODE: </label>
                            <input id='postalcode' onChange={handlePostalCode} type="number" validate required/>
                          </div>
                        </div> : null}
                  </div>

                  {/* WHEN AND WHERE WERE YOU BORN? */}
                  <div className="names_block_B block row">
                      <h3 className="block_heading">WHEN AND WHERE WERE YOU BORN?</h3>
                      <div className="input-field col s12">
                        <p htmlFor="dateofbirth">DATE OF BIRTH:</p>
                        <input id='dateofbirth' onChange={handleDateOfBirth} type='date' required/>
                      </div>
                    
                      <div className="input-field col s12">
                        <p>DATE OF BIRTH VERIFICATION</p>
                        <select value={birthVerification} onChange={handleBirthVerification} className='browser-default' id="dobverification">
                            <option defaultValue=''> </option>
                            <option value="verified">Verified</option>
                            <option value="approximate">Approximate</option>
                            <option value="declared">Declared</option>
                        </select>
                      </div>
                      
                      <div className="input-field col s12">
                        <label htmlFor="pobcountry">PLACE OF BIRTH - COUNTRY:</label>
                        <input id='pobcountry' onChange={handleBirthCountry} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="pobstate">PLACE OF BIRTH - STATE:</label>
                        <input id='pobstate' onChange={handleBirthState} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="poblocalgovt">PLACE OF BIRTH - LGA:</label>
                        <input id='poblocalgovt' onChange={handleBirthLga} type="text" required/>
                      </div>
                  </div>

                  {/* WHERE ARE YOU FROM? */}
                  <div className="names_block_B block row">
                      <h3 className="block_heading">WHERE ARE YOU FROM?</h3>
                      <div className="input-field col s12">
                        <label htmlFor="origincountry">PLACE OF ORIGIN - COUNTRY:</label>
                        <input id='origincountry' onChange={handleOriginCountry} type='text' required/>
                      </div>
                      
                      <div className="input-field col s12">
                        <label htmlFor="originstate">PLACE OF ORIGIN - STATE:</label>
                        <input id='originstate' onChange={handleOriginState} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="originlocalgovt">PLACE OF ORIGIN - LGA:</label>
                        <input id='originlocalgovt' onChange={handleOriginLga} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="origintown">PLACE OF ORIGIN - TOWN:</label>
                        <input id='origintown' onChange={handleOriginTown} type="text" required/>
                      </div>
                  </div>

                  {/* WHERE IS YOUR FATHER FROM */}
                  <div className="names_block_B block row">
                      <h3 className="block_heading">WHERE IS YOUR FATHER FROM?</h3>
                      <div className="input-field col s12">
                        <label htmlFor="origincountry">PLACE OF ORIGIN - COUNTRY:</label>
                        <input id='origincountry' onChange={handleFatherOriginCountry} type='text' required/>
                      </div>
                      
                      <div className="input-field col s12">
                        <label htmlFor="originstate">PLACE OF ORIGIN - STATE:</label>
                        <input id='originstate' onChange={handleFatherOriginState} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="originlocalgovt">PLACE OF ORIGIN - LGA:</label>
                        <input id='originlocalgovt' onChange={handleFatherOriginLga} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="origintown">PLACE OF ORIGIN - TOWN:</label>
                        <input id='origintown' onChange={handleFatherOriginTown} type="text" required/>
                      </div>
                  </div>

                  {/* WHERE IS OUR MOTHER FROM? */}
                  <div className="names_block_B block row">
                      <h3 className="block_heading">WHERE IS YOUR MOTHER FROM?</h3>
                      <div className="input-field col s12">
                        <label htmlFor="origincountry">PLACE OF ORIGIN - COUNTRY:</label>
                        <input id='origincountry' onChange={handleMotherOriginCountry} type='text' required/>
                      </div>
                      
                      <div className="input-field col s12">
                        <label htmlFor="originstate">PLACE OF ORIGIN - STATE:</label>
                        <input id='originstate' onChange={handleMotherOriginState} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="originlocalgovt">PLACE OF ORIGIN - LGA:</label>
                        <input id='originlocalgovt' onChange={handleMotherOriginLga} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="origintown">PLACE OF ORIGIN - TOWN:</label>
                        <input id='origintown' onChange={handleMotherOriginTown} type="text" required/>
                      </div>
                  </div>

                  {/* YOUR PHYSICAL FEATURES */}
                  <div className="names_block_B block row">
                      <h3 className="block_heading">YOUR PHYSICAL FEATURES</h3>
                      <div className='input-field col s12' onChange={handleGender} value={gender}>
                        <p>GENDER</p>
                        <p>
                          <label htmlFor='malegender'>
                            <input id='malegender' value='Male' name="gender" type="radio"/>
                            <span>Male</span>
                          </label>
                        </p>
                        <p>
                          <label htmlFor='femalegender'>
                            <input id='femalegender' value='Female' name="gender" type="radio" />
                            <span>Female</span>
                          </label>
                        </p>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="height">HEIGHT(CM):</label>
                        <input id='height' onChange={handleHeight} type="number" required/>
                      </div>

                      <div className="input-field col s12">
                        <p>RESIDENCE STATUS</p>
                        <select value={residenceStatus} onChange={handleResidenceStatus} className='browser-default' id="residencestatus">
                            <option defaultValue=''> </option>
                            <option value="birth">Birth</option>
                            <option value="naturalization">Naturalization</option>
                            <option value="registration">Registration</option>
                        </select>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="nationality">NATIONALITY:</label>
                        <input id='nationality' onChange={handleNationality} type="text" required/>
                      </div>
                  </div>

                  {/* YOUR SUPPORTING DOCUMENTS */}
                  <div className="names_block_B block row">
                      <h3 className="block_heading">YOUR SUPPORTING DOCUMENTS:</h3>

                      <div className="input-field col s12">
                        <p htmlFor="documents">DOCUMENTS:</p>
                        <select value={supportingDocuments} onChange={handleSupportingDocuments} className='browser-default' id="documents">
                            <option defaultValue=' '> </option>
                            <option value="anyIdentityReference">Any identity reference</option>
                            <option value="immigrationDocument">Immigration Document</option>
                            <option value="nationalInsurance">National Insurance</option>
                            <option value="nigeriaDriverLicense">Nigeria Driver License</option>
                            <option value="nigerianPassport">Nigerian Passport</option>
                            <option value="otherDesignatedDocument">Other Designated Document</option>
                            <option value="otherNationalIdentityCard">Other National Identity Card</option>
                            <option value="otherPassport">Other Passport</option>
                            <option value="otherTravelDocument">Other Travel Document</option>
                        </select>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="documentNumber">DOCUMENT NUMBER</label>
                        <input id='documentNumber' onChange={handleDocumentNumber} type="number" required/>
                      </div>

                      <div className="input-field col s12">
                        <p htmlFor="documentExpiryDate">DOCUMENT EXPIRY DATE:</p>
                        <input id='documentExpiryDate' onChange={handleDocumentExpiryDate} type="date" required/>
                      </div>
                  </div>
                  
                  {/* YOUR OTHER DETAILS */}
                  <div className="names_block_B block row">
                      <h3 className="block_heading">YOUR OTHER DETAILS:</h3>

                      <div className="input-field col s12">
                        <p htmlFor="maritalStatus">MARITAL STATUS:</p>
                        <select value={maritalStatus} onChange={handleMaritalStatus} className='browser-default' id="maritalStatus">
                            <option defaultValue=' '> </option>
                            <option value="divorced">Divorced</option>
                            <option value="married">Married</option>
                            <option value="separated">Separated</option>
                            <option value="single">Single</option>
                            <option value="widowed">Widowed</option>
                        </select>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="mainNativeLanguageSpoken">NATIVE LANGUAGE SPOKEN:</label>
                        <input onChange={handleNativeLanguage} id='mainNativeLanguageSpoken' type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="languagesYouReadAndWrite">LANGUAGE YOU READ AND WRITE:</label>
                        <input onChange={handleLanguagesRead} id='languagesYouReadAndWrite' type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="otherLanguagesSpoken">OTHER LANGUAGE SPOKEN:</label>
                        <input onChange={handleOtherLanguages} id='otherLanguagesSpoken' type="text" required/>
                      </div>

                      <div className="input-field col s6">
                        <p htmlFor="educationLevel">EDUCATION LEVEL:</p>
                        <select value={educationLevel} onChange={handleEducationLevel} className='browser-default' id="educationLevel">
                            <option defaultValue=' '> </option>
                            <option value="certification">Certification</option>
                            <option value="none">None</option>
                            <option value="postgraduate">Postgraduate</option>
                            <option value="primary">Primary</option>
                            <option value="secondary">Secondary</option>
                            <option value="tertiary">Tertiary</option>
                        </select>
                      </div>

                      <div className="input-field col s6">
                        <p htmlFor="religion">RELIGION:</p>
                        <select value={religion} onChange={handleReligion} className='browser-default' id="religion">
                            <option defaultValue=' '> </option>
                            <option value="christainity">Christainity</option>
                            <option value="islam">Islam</option>
                            <option value="traditional">Traditional</option>
                            <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="occupation">OCCUPATION/PROFESSION:</label>
                        <input onChange={handleOccupation} id='occupation' type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="telephone">TELEPHONE:</label>
                        <input onChange={handleTelephone} id='telephone' type="tel" required/>
                      </div>

                      <div className="input-field col s12">
                        <p htmlFor="employmentStatus">EMPLOYMENT STATUS:</p>
                        <select value={employmentStatus} onChange={handleEmploymentStatus} className='browser-default' id="employmentStatus">
                            <option defaultValue=' '> </option>
                            <option value="employed">Employed</option>
                            <option value="unemployed">Unemployed</option>
                            <option value="pensioner">Pensioner</option>
                            <option value="selfemployed">Self Employed</option>
                        </select>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="emailAddress">EMAIL ADDRESS:</label>
                        <input id='emailAddress' onChange={handleEmailAddress} type="email" required/>
                      </div>
                  </div>

                  {/* Details Of YOUR PARENTS */}
                  <div className="names_block_N block row">
                      <h3 className="block_heading">DETAILS OF YOUR PARENTS</h3>
                      <div className="input-field col s6">
                        <label htmlFor="fathersSurname">FATHER'S SURNAME:</label>
                        <input id='fathersSurname' onChange={handleFathersSurname} type='text' required/>
                      </div>
                      
                      <div className="input-field col s6">
                        <label htmlFor="fathersFirstName">FATHER'S FIRST NAME:</label>
                        <input id='fathersFirstName' onChange={handleFathersFirstName} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="fathersMiddleName">FATHER'S MIDDLE NAME:</label>
                        <input id='fathersMiddleName' onChange={handleFathersMiddleName} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="fathersNin">FATHER'S NIN(if available):</label>
                        <input id='fathersNin' onChange={handleFathersNin} type="number" />
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="mothersSurname">MOTHER'S SURNAME:</label>
                        <input id='mothersSurname' onChange={handleMothersSurname} type='text' required/>
                      </div>
                      
                      <div className="input-field col s12">
                        <label htmlFor="mothersFirstName">MOTHER'S FIRST NAME:</label>
                        <input id='mothersFirstName' onChange={handleMothersFirstName} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="mothersMiddleName">MOTHER'S MIDDLE NAME:</label>
                        <input id='mothersMiddleName' onChange={handleMothersMiddleName} type="text" required/>
                      </div>

                      {/* <div className="input-field col s6">
                        <label htmlFor="mothersMaidenName">MOTHER'S MAIDEN NAME:</label>
                        <input id='mothersMaidenName' onChange={handleMothersMaidenName} type="text" required/>
                      </div> */}

                      <div className="input-field col s12">
                        <label htmlFor="mothersNin">MOTHER'S NIN(if available):</label>
                        <input id='mothersNin' onChange={handleMothersNin} type="number" />
                      </div>
                  </div>

                  {/* GUARDIAN DETAILS */}
                  <div className="names_block_N block row">
                      <h3 className="block_heading">GUARDIAN DETAILS</h3>
                      <div className="input-field col s12">
                        <label htmlFor="guardianSurname">SURNAME:</label>
                        <input id='guardianSurname' onChange={handleGuardianSurname} type='text' />
                      </div>
                      
                      <div className="input-field col s6">
                        <label htmlFor="guardianFirstName">FIRST NAME:</label>
                        <input id='guardianFirstName' onChange={handleGuardianFirstname} type="text" />
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="guardianMiddleName">MIDDLE NAME:</label>
                        <input id='guardianMiddleName' onChange={handleGuardianMiddlename} type="text" />
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="guardianNin">NATIONAL IDENTIFICATION NUMBER:</label>
                        <input id='guardianNin' onChange={handleGuardianNin} type="number" />
                      </div>
                  </div>

                  {/* NEXT OF KIN DETAILS */}
                  <div className="names_block_N block row">
                      <h3 className="block_heading">YOUR NEXT OF KIN DETAILS</h3>
                      <div className="input-field col s12">
                        <label htmlFor="nextOfKinSurname">SURNAME OF NEXT OF KIN:</label>
                        <input id='nextOfKinSurname' onChange={handleNextOfKinSurname} type='text' required/>
                      </div>
                      
                      <div className="input-field col s12">
                        <label htmlFor="nextOfKinFirstName">FIRST NAME OF NEXT OF KIN:</label>
                        <input id='nextOfKinFirstName' onChange={handleNextOfKinFirstname} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="nextOfKinMiddleName">MIDDLE NAME OF NEXT OF KIN:</label>
                        <input id='nextOfKinMiddleName' onChange={handleNextOfKinMiddlename} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="nextOfKinRelationship">RELATIONSHIP WITH OF NEXT OF KIN:</label>
                        <input id='nextOfKinRelationship' onChange={handleNextOfKinRelationship} type="text" required/>
                      </div>
                  </div>

                  {/* ADDRESS OF NEXT OF KIN */}
                  <div className="names_block_N block row">
                      <h3 className="block_heading">ADDRESS OF YOUR NEXT OF KIN</h3>
                      <div className="input-field col s12">
                        <label htmlFor="nextOfKinCountry">COUNTRY OF RESIDENCE:</label>
                        <input id='nextOfKinCountry' onChange={handleNextOfKinCountry} type='text' required/>
                      </div>
                      
                      <div className="input-field col s6">
                        <label htmlFor="nextOfKinState">STATE OF RESIDENCE:</label>
                        <input id='nextOfKinState' onChange={handleNextOfKinState} type="text" required/>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="nextOfKinLga">LGA OF RESIDENCE:</label>
                        <input id='nextOfKinLga' onChange={handleNextOfKinLga} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="nextOfKinTown">TOWN/CITY OF RESIDENCE:</label>
                        <input id='nextOfKinTown' onChange={handleNextOfKinTown} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="nextOfKinStreet">STREET ADDRESS:</label>
                        <input id='nextOfKinStreet' onChange={handleNextOfKinStreetAddress} type="text" required/>
                      </div>

                      {/* <div className="input-field col s6">
                        <label htmlFor="nextOfKinPostalCode">POSTAL CODE:</label>
                        <input id='nextOfKinPostalCode' type="number" required/>
                      </div> */}

                      <div className="input-field col s12">
                        <label htmlFor="nextOfKinNin">NEXT OF KIN'S NIN:</label>
                        <input id='nextOfKinNin' onChange={handleNextOfKinNin} type="number" />
                      </div>
                  </div>

                  {/* Booking Details */}
                  <div className="names_block_N block row">
                      <h3 className="block_heading">BOOK APPOINTMENT FOR NIN SLIP COLLECTION</h3>
                      {/* "month": "Jan",
                      "year": 2021,
                      "date": 6,
                      "branch": "Lekki",
                      "time": "8:30am" */}
                      <div className="input-field col s12">
                        <p htmlFor="year">Year</p>
                        <input id='year' defaultValue='2021' type="text"/>
                      </div>

                      <div className="input-field col s12">
                        <select value={appointmentMonth} onChange={handleAppointmentMonth} id="month" className='browser-default'>
                          <option defaultValue=''>MONTH</option>
                          <option value="Jan">Jan</option>
                          <option value="Feb">Feb</option>
                          <option value="Mar">March</option>
                          <option value="Apr">Apr</option>
                          <option value="May">May</option>
                          <option value="Jun">Jun</option>
                          <option value="Jul">Jul</option>
                          <option value="Aug">Aug</option>
                          <option value="Sep">Sep</option>
                          <option value="Oct">Oct</option>
                          <option value="Nov">Nov</option>
                          <option value="Dec">Dec</option>
                        </select>
                      </div>

                      <div className="input-field col s12">
                        <select value={appointmentDay} onChange={handleAppointmentDay} id="day" className='browser-default'>
                          <option defaultValue='' >DAY</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                          <option value="31">31</option>
                        </select>
                      </div>

                      <div className="input-field col s12">
                        <select value={appointmentBranch} onChange={handleAppointmentBranch} id="location" className='browser-default'>
                          <option defaultValue=''>BRANCH</option>
                          <option value="lekki">Lekki Phase 1</option>
                          <option value="Ajah">Ajah</option>
                          <option value="Victoria Island">Victoria Island</option>
                          <option value="Ikoyi">Ikoyi</option>
                        </select>
                      </div>

                      {availableTime ?
                          <div className='input-field col s12'>
                            <select id="time" value={selectedTime} onChange={handleSelectedTime} className='browser-default'>
                              {availableTime ?
                                availableTime.map(time => 
                                    <option key={time} value={time}>{time}</option>
                                ) : null}
                            </select> 
                          </div> : null
                      }
                      
                      {!timeResponse ?  
                            <button onClick={handleAppointmentBooking} className='btn green' style={{display:'block', margin:'20px auto'}}>
                              Book appointment
                            </button> : null
                      }
                     

                      {loading === true ? <Spinner/> : null}
                  
                      {/* {availableTime ? } */}
                  </div>

                  {/* DECLARATION/ATTESTATION */}
                  <div className="names_block_N block row">
                      <h3 className="block_heading">DECLARATION/ATTESTATION</h3>
                      <label>
                        <input type="radio"/>
                        <span>I certify that the information provided by me on this form is complete, true and accurate. I understand that the information provided by me on this form
                          and my biometrics shall constitute my personal information/data to be entered into the National Identity Database. I consent to sharing of my data
                          provided herein with any organization permitted by the NIMC Act 23 of 2007 and within the Nigerian Law. I hereby apply for a National Identification
                          Number (NIN) and a National Identity (Smart) Card. I accept that this form may be scanned, saved and discarded after use as the Commission may deem
                          fit. I understand and accept that if any information I have provided herein is not correct or is false, the Commission reserves the right of prosecution if
                          discovered.
                        </span>
                      </label>
                      <button type='submit' className='btn green' style={{display:'block', margin:'20px auto'}}>
                              SUBMIT
                      </button>
                      {loading === 'submit' ? <Spinner/> : null}
                  </div>
              </form>
          </div>  
        </>
    )
}

export default Enrolmentform
