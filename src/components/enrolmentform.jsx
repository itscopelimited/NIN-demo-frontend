import React,{useState, useEffect}from 'react'
import NIMClogo from './img/nimc.png'
import Spinner from './spinner'

function Enrolmentform({baseurl}) {
    const [, setTitle] = useState("")
    const [, setfirstName] = useState("")
    const [, setlastName] = useState("")
    // const [marriedWoman, setMarriedWoman] = useState("")
    const [, setmaidenName] = useState("")
    const [nameChange, setnameChange] = useState("")
    const [, setpreviousSurname] = useState("")
    const [, setpreviousFirstName] = useState("")
    const [, setpreviousMiddleName] = useState("")
    const [homeless, setHomeless] = useState("")
    const [, setcityOfResidence] = useState("")
    const [, setcountryOfResidence] = useState("")
    const [, setstateOfResidence] = useState("")
    const [, setLgaOfResidence] = useState("")
    const [, setAddressOfResidence] = useState("")
    const [, setPostalCode] = useState("")
    const [, setdateOfBirth] = useState("")
    const [birthVerification, setbirthVerification] = useState("")
    const [, setbirthCountry] = useState("")
    const [, setbirthLga] = useState("")
    const [, setbirthState] = useState("")
    const [, setoriginCountry] = useState("")
    const [, setoriginState] = useState("")
    const [, setoriginLga] = useState("")
    const [, setoriginTown] = useState("")
    const [, setfatheroriginCountry] = useState("")
    const [, setfatheroriginState] = useState("")
    const [, setfatheroriginLga] = useState("")
    const [, setfatheroriginTown] = useState("")
    const [, setmotheroriginCountry] = useState("")
    const [, setmotheroriginState] = useState("")
    const [, setmotheroriginLga] = useState("")
    const [, setmotheroriginTown] = useState("")
    const [gender, setGender] = useState("")
    const [, setHeight] = useState("")
    const [residenceStatus, setResidenceStatus] = useState("")
    const [, setNationality] = useState("")
    const [supportingDocuments, setsupportingDocuments] = useState("")
    const [, setdocumentNumber] = useState("")
    const [, setdocumentExpiryDate] = useState("")
    const [maritalStatus, setmaritalStatus] = useState("")
    const [, setNativeLanguage] = useState("")
    const [, setlanguagesYouReadAndWrite] = useState("")
    const [, setotherLanguagesSpoken] = useState("")
    const [educationLevel, seteducationLevel] = useState("")
    const [religion, setReligion] = useState("")
    const [, setTelephone] = useState("")
    const [employmentStatus, setEmploymentStatus] = useState("")
    const [, setEmailAddress] = useState("")
    const [, setOccupation] = useState("")
    const [, setfathersSurname] = useState("")
    const [, setfathersFirstName] = useState("")
    const [, setfathersMiddleName] = useState("")
    const [, setfathersNin] = useState("")
    const [, setmothersSurname] = useState("")
    const [, setmothersFirstName] = useState("")
    const [, setmothersMiddleName] = useState("")
    // const [mothersMaidenName, setmothersMaidenName] = useState('')
    const [, setmothersNin] = useState("")
    const [, setguardianSurname] = useState("")
    const [, setguardianFirstname] = useState("")
    const [, setguardianMiddlename] = useState("")
    const [, setguardianNin] = useState("")
    const [, setnextOfKinSurname] = useState("")
    const [, setnextOfKinFirstname] = useState("")
    const [, setnextOfKinMiddlename] = useState("")
    const [, setnextOfKinRelationship] = useState("")
    const [, setnextOfKinCountry] = useState("")
    const [, setnextOfKinState] = useState("")
    const [, setnextOfKinLga] = useState("")
    const [, setnextOfKinTown] = useState("")
    const [, setnextOfKinStreetAddress] = useState("")
    const [, setnextOfKinNin] = useState("")
    const [declaration, setDeclaration] = useState("")
    
    // APPOINTMENT STATES
    const [appointmentYear] = useState(2021)
    const [appointmentMonth, setAppointmentMonth] = useState("")
    const [appointmentDay, setAppointmentDay] = useState("")
    const [appointmentBranch, setAppointmentBranch] = useState("")
    const [loading, setLoading] = useState(false)
    const [defaultTime, setdefaultTime] = useState()
    const [pickedTime, setpickedTime] = useState()
    // const [availableTime, setavailableTime] = useState()
    const [timeResponse, setTimeResponse] = useState("")
    const [selectedTime, setSelectedTime] = useState("")

    
    //ON PAGE LOAD CHECK FOR COOKIE AND REDIRECT TO LOGIN PAGE IF NOT FOUND
    //IF FOUND, FETCH FORM DATA IF ANY
    useEffect(() => {
      if(!document.cookie || !token){
          alert('Session Expired! Login to Access Form.')
          window.location='/#/login'
      }
      
      
    })


    //SAVE FROM TO LOCAL STORAGE FOR DRAFTS
    const handleTitle = ({target}) =>{
      setTitle(target.value)
      localStorage.setItem('title', target.value)
    }

    const handleFirstName = ({target}) =>{
      setfirstName(target.value)
      localStorage.setItem('firstName', target.value)
    }
    const handleLastName = ({target}) =>{
      setlastName(target.value)
      localStorage.setItem('lastName', target.value)
    }
    // const handleMarriedWoman = ({target}) =>{
    //   setMarriedWoman(target.value)
    // }
    const handleMaidenName = ({target}) =>{
      setmaidenName(target.value)
      localStorage.setItem('maidenName', target.value)
    }
    const handleNameChange = ({target}) =>{
      setnameChange(target.value)
    }
    const handlePreviousSurname = ({target}) =>{
      setpreviousSurname(target.value)
      localStorage.setItem('previousSurname', target.value)
    }
    const handlePreviousFirstName = ({target}) =>{
      setpreviousFirstName(target.value)
      localStorage.setItem('previousFirstName', target.value)
    }
    const handlePreviousMiddleName = ({target}) =>{
      setpreviousMiddleName(target.value)
      localStorage.setItem('previousMiddleName', target.value)
    }
    const handleHomeless = ({target}) =>{
      setHomeless(target.value)
    }
    const handleCityOfResidence = ({target}) =>{
      setcityOfResidence(target.value)
      localStorage.setItem('cityOfResidence', target.value)
    }
    const handleCountryOfResidence = ({target}) =>{
      setcountryOfResidence(target.value)
      localStorage.setItem('countryOfResidence', target.value)
    }
    const handleStateOfResidence = ({target}) =>{
      setstateOfResidence(target.value)
      localStorage.setItem('stateOfResidence', target.value)
    }
    const handleLgaOfResidence = ({target}) =>{
      setLgaOfResidence(target.value)
      localStorage.setItem('lgaOfResidence', target.value)
    }
    const handleAddressOfResidence = ({target}) =>{
      setAddressOfResidence(target.value)
      localStorage.setItem('addressOfResidence', target.value)
    }
    const handlePostalCode = ({target}) =>{
      setPostalCode(target.value)
      localStorage.setItem('postalCode', target.value)
    }
    const handleDateOfBirth = ({target}) =>{
      setdateOfBirth(target.value)
      localStorage.setItem('dateOfBirth', target.value)
    }
    const handleBirthVerification = ({target}) =>{
      setbirthVerification(target.value)
    }
    const handleBirthCountry = ({target}) =>{
      setbirthCountry(target.value)
      localStorage.setItem('birthCountry', target.value)
    }
    const handleBirthState = ({target}) =>{
      setbirthState(target.value)
      localStorage.setItem('birthState', target.value)
    }
    const handleBirthLga = ({target}) =>{
      setbirthLga(target.value)
      localStorage.setItem('birthLga', target.value)
    }
    const handleOriginCountry = ({target}) =>{
      setoriginCountry(target.value)
      localStorage.setItem('originCountry', target.value)
    }
    const handleOriginState = ({target}) =>{
      setoriginState(target.value)
      localStorage.setItem('originState', target.value)
    }
    const handleOriginLga = ({target}) =>{
      setoriginLga(target.value)
      localStorage.setItem('originLga', target.value)
    }
    const handleOriginTown = ({target}) =>{
      setoriginTown(target.value)
      localStorage.setItem('originTown', target.value)
    }
    const handleFatherOriginCountry = ({target}) =>{
      setfatheroriginCountry(target.value)
      localStorage.setItem('fatheroriginCountry', target.value)
    }
    const handleFatherOriginState = ({target}) =>{
      setfatheroriginState(target.value)
      localStorage.setItem('fatheroriginState', target.value)
    }
    const handleFatherOriginLga = ({target}) =>{
      setfatheroriginLga(target.value)
      localStorage.setItem('fatheroriginLga', target.value)
    }
    const handleFatherOriginTown = ({target}) =>{
      setfatheroriginTown(target.value)
      localStorage.setItem('fatheroriginTown', target.value)
    }
    const handleMotherOriginCountry = ({target}) =>{
      setmotheroriginCountry(target.value)
      localStorage.setItem('motheroriginCountry', target.value)
    }
    const handleMotherOriginState = ({target}) =>{
      setmotheroriginState(target.value)
      localStorage.setItem('motheroriginState', target.value)
    }
    const handleMotherOriginLga = ({target}) =>{
      setmotheroriginLga(target.value)
      localStorage.setItem('motheroriginLga', target.value)
    }
    const handleMotherOriginTown = ({target}) =>{
      setmotheroriginTown(target.value)
      localStorage.setItem('motheroriginTown', target.value)
    }
    const handleGender = ({target}) =>{
      setGender(target.value)
    }
    const handleHeight = ({target}) =>{
      setHeight(target.value)
      localStorage.setItem('height', target.value)
    }
    const handleResidenceStatus = ({target}) =>{
      setResidenceStatus(target.value)
    }
    const handleNationality = ({target}) =>{
      setNationality(target.value)
      localStorage.setItem('nationality', target.value)
    }
    const handleSupportingDocuments = ({target}) =>{
      setsupportingDocuments(target.value)
    }
    const handleDocumentNumber = ({target}) =>{
      setdocumentNumber(target.value)
      localStorage.setItem('documentNumber', target.value)
    }
    const handleDocumentExpiryDate = ({target}) =>{
      setdocumentExpiryDate(target.value)
      localStorage.setItem('documentExpiryDate', target.value)
    }
    const handleMaritalStatus = ({target}) =>{
      setmaritalStatus(target.value)
    }
    const handleNativeLanguage = ({target}) =>{
      setNativeLanguage(target.value)
      localStorage.setItem('nativeLanguage', target.value)
    }
    const handleLanguagesRead = ({target}) =>{
      setlanguagesYouReadAndWrite(target.value)
      localStorage.setItem('languagesYouReadAndWrite', target.value)
    }
    const handleOtherLanguages = ({target}) =>{
      setotherLanguagesSpoken(target.value)
      localStorage.setItem('otherLanguagesSpoken', target.value)
    }
    const handleEducationLevel = ({target}) =>{
      seteducationLevel(target.value)
    }
    const handleReligion = ({target}) =>{
      setReligion(target.value)
    }
    const handleTelephone = ({target}) =>{
      setTelephone(target.value)
      localStorage.setItem('telephone', target.value)
    }
    const handleEmploymentStatus = ({target}) =>{
      setEmploymentStatus(target.value)
    }
    const handleEmailAddress = ({target}) =>{
      setEmailAddress(target.value)
      localStorage.setItem('emailAddress', target.value)
    }
    const handleOccupation = ({target}) =>{
      setOccupation(target.value)
      localStorage.setItem('occupation', target.value)
    }
    const handleFathersSurname = ({target}) =>{
      setfathersSurname(target.value)
      localStorage.setItem('fathersSurname', target.value)
    }
    const handleFathersFirstName = ({target}) =>{
      setfathersFirstName(target.value)
      localStorage.setItem('fathersFirstName', target.value)
    }
    const handleFathersMiddleName = ({target}) =>{
      setfathersMiddleName(target.value)
      localStorage.setItem('fathersMiddleName', target.value)
    }
    const handleFathersNin = ({target}) =>{
      setfathersNin(target.value)
      localStorage.setItem('fathersNin', target.value)
    }
    const handleMothersSurname = ({target}) =>{
      setmothersSurname(target.value)
      localStorage.setItem('mothersSurname', target.value)
    }
    const handleMothersFirstName = ({target}) =>{
      setmothersFirstName(target.value)
      localStorage.setItem('mothersFirstName', target.value)
    }
    const handleMothersMiddleName = ({target}) =>{
      setmothersMiddleName(target.value)
      localStorage.setItem('mothersMiddleName', target.value)
    }
    // const handleMothersMaidenName = ({target}) =>{
    //   setmothersMaidenName(target.value)
    // }
    const handleMothersNin = ({target}) =>{
      setmothersNin(target.value)
      localStorage.setItem('mothersNin', target.value)
    }
    const handleGuardianSurname = ({target}) =>{
      setguardianSurname(target.value)
      localStorage.setItem('guardianSurname', target.value)
    }
    const handleGuardianFirstname = ({target}) =>{
      setguardianFirstname(target.value)
      localStorage.setItem('guardianFirstname', target.value)
    }
    const handleGuardianMiddlename = ({target}) =>{
      setguardianMiddlename(target.value)
      localStorage.setItem('guardianMiddlename', target.value)
    }
    const handleGuardianNin = ({target}) =>{
      setguardianNin(target.value)
      localStorage.setItem('guardianNin', target.value)
    }
    const handleNextOfKinSurname = ({target}) =>{
      setnextOfKinSurname(target.value)
      localStorage.setItem('nextOfKinSurname', target.value)
    }
    const handleNextOfKinFirstname = ({target}) =>{
      setnextOfKinFirstname(target.value)
      localStorage.setItem('nextOfKinFirstname', target.value)
    }
    const handleNextOfKinMiddlename = ({target}) =>{
      setnextOfKinMiddlename(target.value)
      localStorage.setItem('nextOfKinMiddlename', target.value)
    }
    const handleNextOfKinRelationship = ({target}) =>{
      setnextOfKinRelationship(target.value)
      localStorage.setItem('nextOfKinRelationship', target.value)
    }
    const handleNextOfKinCountry = ({target}) =>{
      setnextOfKinCountry(target.value)
      localStorage.setItem('nextOfKinCountry', target.value)
    }
    const handleNextOfKinState = ({target}) =>{
      setnextOfKinState(target.value)
      localStorage.setItem('nextOfKinState', target.value)
    }
    const handleNextOfKinLga = ({target}) =>{
      setnextOfKinLga(target.value)
      localStorage.setItem('nextOfKinLga', target.value)
    }
    const handleNextOfKinTown = ({target}) =>{
      setnextOfKinTown(target.value)
      localStorage.setItem('nextOfKinTown', target.value)
    }
    const handleNextOfKinStreetAddress = ({target}) =>{
      setnextOfKinStreetAddress(target.value)
      localStorage.setItem('nextOfKinStreetAddress', target.value)
    }
    const handleNextOfKinNin = ({target}) =>{
      setnextOfKinNin(target.value)
      localStorage.setItem('nextOfKinNin', target.value)
    }
    const handleDeclaration = ({target}) =>{
      setDeclaration(target.value)
    }
    
    // HANDLER FUNCTIONS FOR BOOKING
    // let token = sessionStorage.getItem('__browser_data')
    // useEffect(() => {
    //   if(!token){
    //     alert('Session Expired! Login to Access Form.')
    //     window.location = '/#/login'
    //   }
    // })
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

    
    let token = localStorage.getItem('__browser_data')
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
        await fetch(`${baseurl}/api/v1/get/collection-time`,
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
              setpickedTime(data.data.pickedTimes)
              setdefaultTime(data.data.defaultTime)
              // setavailableTime(data.data.availableTime)
              setTimeResponse(data)
            }
            else if(data.errors.date){
              setLoading(false)
              alert(data.errors.date)
            }
            else if(data.status === 401){
              setLoading(false)
              alert(data.message)
              window.location='/*/login'
            }
          // console.log(data.data.availableTime)
          // console.log(data.data.pickedTimes)
          // console.log(data.data.defaultTime)
        })
        .catch((err) => console.log(err));
      }
    }

    const enrolmentForm = {
      title: localStorage.getItem('title'),
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName'),
      maidenName: localStorage.getItem('maidenName'),
      changedName: nameChange,
      previousSurname: localStorage.getItem('previousSurname'),
      previousFirstName: localStorage.getItem('previousFirstName'),
      previousMiddleName: localStorage.getItem('previousMiddleName'),
      homeless: homeless,
      cityOfResidence: localStorage.getItem('cityOfResidence'),
      countryOfResidence: localStorage.getItem('countryOfResidence'),
      stateOfResidence: localStorage.getItem('stateOfResidence'),
      lgaOfResidence: localStorage.getItem('lgaOfResidence'),
      addressOfResidence: localStorage.getItem('addressOfResidence'),
      postalCode: localStorage.getItem('postalCode'),
      dateOfBirth: localStorage.getItem('dateOfBirth'),
      birthVerification: birthVerification,
      birthCountry: localStorage.getItem('birthCountry'),
      birthState: localStorage.getItem('birthState'),
      birthLga: localStorage.getItem('birthLga'),
      originatingCountry: localStorage.getItem('originCountry'),
      originatingState: localStorage.getItem('originState'),
      originatingLga: localStorage.getItem('originLga'),
      originatingTown: localStorage.getItem('originTown'),
      fatherOriginatingCountry: localStorage.getItem('fatheroriginCountry'),
      fatherOriginatingState: localStorage.getItem('fatheroriginState'),
      fatherOriginatingLga: localStorage.getItem('fatheroriginLga'),
      fatherOriginatingTown: localStorage.getItem('fatheroriginTown'),
      motherOriginatingCountry: localStorage.getItem('motheroriginCountry'),
      motherOriginatingState: localStorage.getItem('motheroriginState'),
      motherOriginatingLga: localStorage.getItem('motheroriginLga'),
      motherOriginatingTown: localStorage.getItem('motheroriginTown'),
      gender: gender,
      height: localStorage.getItem('height'),
      residenceStatus: residenceStatus,
      nationality: localStorage.getItem('nationality'),
      maritalStatus: maritalStatus,
      mainNativeLanguageSpoken: localStorage.getItem('nativeLanguage'),
      languagesYouReadAndWrite: localStorage.getItem('languagesYouReadAndWrite'),
      otherLanguagesSpoken: localStorage.getItem('otherLanguagesSpoken'),
      educationLevel: educationLevel,
      religion: religion,
      telephone: localStorage.getItem('telephone'),
      employmentStatus: employmentStatus,
      emailAddress: localStorage.getItem('emailAddress'),
      occupation: localStorage.getItem('occupation'),
      fathersSurname: localStorage.getItem('fathersSurname'),
      fathersFirstName: localStorage.getItem('fathersFirstName'),
      fathersMiddleName: localStorage.getItem('fathersMiddleName'),
      fathersNin: localStorage.getItem('fathersNin'),
      mothersSurname: localStorage.getItem('mothersSurname'),
      mothersFirstName: localStorage.getItem('mothersFirstName'),
      mothersMiddleName: localStorage.getItem('mothersMiddleName'),
      mothersNin: localStorage.getItem('mothersNin'),
      guardianSurname: localStorage.getItem('guardianSurname'),
      guardianFirstname: localStorage.getItem('guardianFirstname'),
      guardianMiddlename: localStorage.getItem('guardianMiddlename'),
      guardianNin: localStorage.getItem('guardianNin'),
      nextOfKinSurname: localStorage.getItem('nextOfKinSurname'),
      nextOfKinFirstname: localStorage.getItem('nextOfKinFirstname'),
      nextOfKinMiddlename: localStorage.getItem('nextOfKinMiddlename'),
      nextOfKinRelationship: localStorage.getItem('nextOfKinRelationship'),
      nextOfKinCountry: localStorage.getItem('nextOfKinCountry'),
      nextOfKinState: localStorage.getItem('nextOfKinState'),
      nextOfKinTown: localStorage.getItem('nextOfKinTown'),
      nextOfKinLga: localStorage.getItem('nextOfKinLga'),
      nextOfKinStreetAddress: localStorage.getItem('nextOfKinStreetAddress'),
      nextOfKinNin: localStorage.getItem('nextOfKinNin'),
      year: appointmentYear,
      date: appointmentDay,
      month: appointmentMonth,
      branch: appointmentBranch,
      time: selectedTime
    }
    
    if(supportingDocuments === 'anyIdentityReference'){
      enrolmentForm.anyIdentityReference = {
        //documentNumber : supportingDocumentNumber,
        documentNumber : localStorage.getItem('documentNumber'),
        expiryDate : localStorage.getItem('documentExpiryDate')
        //expiryDate: documentExpiryDate
      }
    } 
    else if(supportingDocuments === 'immigrationDocument'){
      enrolmentForm.immigrationDocument = {
        //documentNumber : supportingDocumentNumber,
        documentNumber : localStorage.getItem('documentNumber'),
        expiryDate : localStorage.getItem('documentExpiryDate')
        //expiryDate: documentExpiryDate
      }
    }
    else if(supportingDocuments === 'nationalInsurance'){
      enrolmentForm.nationalInsurance = {
        //documentNumber : supportingDocumentNumber,
        documentNumber : localStorage.getItem('documentNumber'),
        expiryDate : localStorage.getItem('documentExpiryDate')
        //expiryDate: documentExpiryDate
      }
    }
    else if(supportingDocuments === 'nigeriaDriverLicense'){
      enrolmentForm.nigeriaDriverLicense = {
        //documentNumber : supportingDocumentNumber,
        documentNumber : localStorage.getItem('documentNumber'),
        expiryDate : localStorage.getItem('documentExpiryDate')
        //expiryDate: documentExpiryDate
      }
    }
    else if(supportingDocuments === 'nigerianPassport'){
      enrolmentForm.nigerianPassport = {
        //documentNumber : supportingDocumentNumber,
        documentNumber : localStorage.getItem('documentNumber'),
        expiryDate : localStorage.getItem('documentExpiryDate')
        //expiryDate: documentExpiryDate
      }
    }
    else if(supportingDocuments === 'otherDesignatedDocument'){
      enrolmentForm.otherDesignatedDocument = {
        //documentNumber : supportingDocumentNumber,
        documentNumber : localStorage.getItem('documentNumber'),
        expiryDate : localStorage.getItem('documentExpiryDate')
        //expiryDate: documentExpiryDate
      }
    }
    else if(supportingDocuments === 'otherNationalIdentityCard'){
      enrolmentForm.otherNationalIdentityCard = {
        //documentNumber : supportingDocumentNumber,
        documentNumber : localStorage.getItem('documentNumber'),
        expiryDate : localStorage.getItem('documentExpiryDate')
        //expiryDate: documentExpiryDate
      }
    }
    else if(supportingDocuments === 'otherPassport'){
      enrolmentForm.otherPassport = {
        //documentNumber : supportingDocumentNumber,
        documentNumber : localStorage.getItem('documentNumber'),
        expiryDate : localStorage.getItem('documentExpiryDate')
        //expiryDate: documentExpiryDate
      }
    }
    else if(supportingDocuments === 'otherTravelDocument'){
      enrolmentForm.otherTravelDocument = {
        //documentNumber : supportingDocumentNumber,
        documentNumber : localStorage.getItem('documentNumber'),
        expiryDate : localStorage.getItem('documentExpiryDate')
        //expiryDate: documentExpiryDate
      }
    }
       
    console.log(enrolmentForm)

    //FINAL FORM SUBMISSION
    const handleSubmit = async(e) =>{
      e.preventDefault();
      if(declaration === ''){
        alert('Please Accept Declaration/Attestation!')
        return false
      }
      setLoading("submit")
      await fetch(`${baseurl}/api/v1/create/nin`,
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
          if(data.status === 201){
            setLoading(false)
            alert(`${data.message} You Will Be Reminded a Day To Your Appointment Date`)
            window.location=`${data.data.paymentUrl}`
          }
          // else if(data.status === 401){
          //   // alert('Session Expired! Login to Access Form.')
          //   // window.location='/login'
          // }
          // else if(data.status === 400){
          //   setLoading(false)
          // }
          // else if(data.errors.profile){
          //   alert(data.errors.profile, data.errors.message)
          // }
          else if(data.errors){
            setLoading(false)
            alert(data.message)
          }
          else if(data.errors.title){
            setLoading(false)
            alert(data.errors.title)
          }
      })
      .catch((err) => console.log(err));
    }

    // const tempFormData = {
    //   enrolmentForm
    // }

    //EVERY 10 SECONDS, SAVE FORM VALUES TO DATABASE
    
    // console.log(tempFormData)
    // const interval = setInterval(async() => {
    //   // await fetch("https://cors-anywhere.herokuapp.com/http://167.99.82.56:5050/api/v1/create/temp-nin",
    //   //   {
    //   //       headers: {
    //   //             "Content-Type": "application/json; charset=UTF-8",
    //   //             "Access-Control-Allow-Origin": '*',
    //   //             "myqueu-x-token": `${token}`,
    //   //             "Accept": 'application/json'
    //   //          },
    //   //          method: "POST",
    //   //          mode: 'cors',
    //   //          body: JSON.stringify(tempFormData)
    //   //   })
    //   //   .then((response) => response.json() )
    //   //   .then((data) => {
    //   //     console.log(data)
    //   //     clearInterval(interval)
    //   //     if(data){}
    //   //   })
    //   //   .catch((err) => console.log(err))
    // }, 60000);



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
                        <input onChange={handleTitle} value={localStorage.getItem('title') === null ? '' : localStorage.getItem('title')} id='title' type="text" required/>
                      </div>
                    
                      <div className="input-field col s6">
                        <label htmlFor="lastname">LAST NAME: </label>
                        <input onChange={handleLastName} value={localStorage.getItem('lastName') === null ? '' : localStorage.getItem('lastName')} id='lastname' type="text"/>
                      </div>
                      
                      <div className="input-field col s6">
                        <label htmlFor="firstname">FIRST NAME: </label>
                        <input onChange={handleFirstName} value={localStorage.getItem('firstName') === null ? '' : localStorage.getItem('firstName')} id='firstname' type="text" required/>
                      </div>
                      
                      {/* <div className="input-field col s12">
                        <label htmlFor="middlename">MIDDLE NAME: </label>
                        <input id='middlename' type="text" required/>
                      </div>
                      
                      <div className="input-field col s12">
                        <label htmlFor="othername">OTHER NAMES: </label>
                        <input id='othername' type="text" required/>
                      </div> */}


                      {/* <div className='input-field col s12' onChange={handleMarriedWoman} value={marriedWoman}>
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
                        </div> : null} */}
                      <div className="input-field col s12">
                          <label htmlFor="maidenname">MAIDEN NAME: </label>
                          <input onChange={handleMaidenName} value={localStorage.getItem('maidenName') === null ? '' : localStorage.getItem('maidenName')} id='maidenname' type="text" required/>
                      </div>
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
                        <input id='prevsurname' value={localStorage.getItem('previousSurname') === null ? '' : localStorage.getItem('previousSurname')} onChange={handlePreviousSurname} type="text" required/>
                      </div>
                  
                      <div className="input-field col s12">
                        <label htmlFor="prevfirstname">PREVIOUS FIRST NAME:</label>
                        <input id='prevfirstname' value={localStorage.getItem('previousFirstName') === null ? '' : localStorage.getItem('previousFirstName')} onChange={handlePreviousFirstName} type="text"/>
                      </div>
                    
                      <div className="input-field col s12">
                        <label htmlFor="prevmidname">PREVIOUS MIDDLE NAME: </label>
                        <input id='prevmidname' value={localStorage.getItem('previousMiddleName') === null ? '' : localStorage.getItem('previousMiddleName')} onChange={handlePreviousMiddleName} type="text" required/>
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
                            <input id='cityresidence' value={localStorage.getItem('cityOfResidence') === null ? '' : localStorage.getItem('cityOfResidence')} onChange={handleCityOfResidence} type="text" required/>
                          </div>
                        
                          <div className="input-field col s6">
                            <label htmlFor="countryresidence">COUNTRY OF RESIDENCE:</label>
                            <input id='countryresidence' value={localStorage.getItem('countryOfResidence') === null ? '' : localStorage.getItem('countryOfResidence')} onChange={handleCountryOfResidence} type="text" required/>
                          </div>
                          
                          <div className="input-field col s6">
                            <label htmlFor="stateresidence">STATE OF RESIDENCE: </label>
                            <input id='stateresidence' value={localStorage.getItem('stateOfResidence') === null ? '' : localStorage.getItem('stateOfResidence')} onChange={handleStateOfResidence} type="text" required/>
                          </div>

                          <div className="input-field col s6">
                            <label htmlFor="lgaresidence">LGA OF RESIDENCE: </label>
                            <input id='lgaresidence' value={localStorage.getItem('lgaOfResidence') === null ? '' : localStorage.getItem('lgaOfResidence')} onChange={handleLgaOfResidence} type="text" required/>
                          </div>

                          <div className="input-field col s6">
                            <label htmlFor="residenceaddress">ADDRESS OF RESIDENCE: </label>
                            <input id='residenceaddress' value={localStorage.getItem('addressOfResidence') === null ? '' : localStorage.getItem('addressOfResidence')} onChange={handleAddressOfResidence} type="text" required/>
                          </div>
                          
                          <div className="input-field col s6">
                            <label htmlFor="postalcode">POSTAL CODE: </label>
                            <input id='postalcode' value={localStorage.getItem('postalCode') === null ? '' : localStorage.getItem('postalCode')} onChange={handlePostalCode} type="number" required/>
                          </div>
                        </div> : null}
                  </div>

                  {/* WHEN AND WHERE WERE YOU BORN? */}
                  <div className="names_block_B block row">
                      <h3 className="block_heading">WHEN AND WHERE WERE YOU BORN?</h3>
                      <div className="input-field col s12">
                        <p htmlFor="dateofbirth">DATE OF BIRTH:</p>
                        <input id='dateofbirth' onChange={handleDateOfBirth} value={localStorage.getItem('dateOfBirth') === null ? '' : localStorage.getItem('dateOfBirth')} type='date' required/>
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
                        <input id='pobcountry' value={localStorage.getItem('birthCountry') === null ? '' : localStorage.getItem('birthCountry')} onChange={handleBirthCountry} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="pobstate">PLACE OF BIRTH - STATE:</label>
                        <input id='pobstate' value={localStorage.getItem('birthState') === null ? '' : localStorage.getItem('birthState')} onChange={handleBirthState} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="poblocalgovt">PLACE OF BIRTH - LGA:</label>
                        <input id='poblocalgovt' value={localStorage.getItem('birthLga') === null ? '' : localStorage.getItem('birthLga')} onChange={handleBirthLga} type="text" required/>
                      </div>
                  </div>

                  {/* WHERE ARE YOU FROM? */}
                  <div className="names_block_B block row">
                      <h3 className="block_heading">WHERE ARE YOU FROM?</h3>
                      <div className="input-field col s12">
                        <label htmlFor="origincountry">PLACE OF ORIGIN - COUNTRY:</label>
                        <input id='origincountry' value={localStorage.getItem('originCountry') === null ? '' : localStorage.getItem('originCountry')} onChange={handleOriginCountry} type='text' required/>
                      </div>
                      
                      <div className="input-field col s12">
                        <label htmlFor="originstate">PLACE OF ORIGIN - STATE:</label>
                        <input id='originstate' value={localStorage.getItem('originState') === null ? '' : localStorage.getItem('originState')} onChange={handleOriginState} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="originlocalgovt">PLACE OF ORIGIN - LGA:</label>
                        <input id='originlocalgovt' value={localStorage.getItem('originLga') === null ? '' : localStorage.getItem('originLga')} onChange={handleOriginLga} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="origintown">PLACE OF ORIGIN - TOWN:</label>
                        <input id='origintown' value={localStorage.getItem('originTown') === null ? '' : localStorage.getItem('originTown')} onChange={handleOriginTown} type="text" required/>
                      </div>
                  </div>

                  {/* WHERE IS YOUR FATHER FROM */}
                  <div className="names_block_B block row">
                      <h3 className="block_heading">WHERE IS YOUR FATHER FROM?</h3>
                      <div className="input-field col s12">
                        <label htmlFor="origincountry">PLACE OF ORIGIN - COUNTRY:</label>
                        <input id='origincountry' value={localStorage.getItem('fatheroriginCountry') === null ? '' : localStorage.getItem('fatheroriginCountry')} onChange={handleFatherOriginCountry} type='text' required/>
                      </div>
                      
                      <div className="input-field col s12">
                        <label htmlFor="originstate">PLACE OF ORIGIN - STATE:</label>
                        <input id='originstate' value={localStorage.getItem('fatheroriginState') === null ? '' : localStorage.getItem('fatheroriginState')} onChange={handleFatherOriginState} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="originlocalgovt">PLACE OF ORIGIN - LGA:</label>
                        <input id='originlocalgovt' value={localStorage.getItem('fatheroriginLga') === null ? '' : localStorage.getItem('fatheroriginLga')} onChange={handleFatherOriginLga} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="origintown">PLACE OF ORIGIN - TOWN:</label>
                        <input id='origintown' value={localStorage.getItem('fatheroriginTown') === null ? '' : localStorage.getItem('fatheroriginTown')} onChange={handleFatherOriginTown} type="text" required/>
                      </div>
                  </div>

                  {/* WHERE IS OUR MOTHER FROM? */}
                  <div className="names_block_B block row">
                      <h3 className="block_heading">WHERE IS YOUR MOTHER FROM?</h3>
                      <div className="input-field col s12">
                        <label htmlFor="origincountry">PLACE OF ORIGIN - COUNTRY:</label>
                        <input id='origincountry' value={localStorage.getItem('motheroriginCountry') === null ? '' : localStorage.getItem('motheroriginCountry')} onChange={handleMotherOriginCountry} type='text' required/>
                      </div>
                      
                      <div className="input-field col s12">
                        <label htmlFor="originstate">PLACE OF ORIGIN - STATE:</label>
                        <input id='originstate' value={localStorage.getItem('motheroriginState') === null ? '' : localStorage.getItem('motheroriginState')} onChange={handleMotherOriginState} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="originlocalgovt">PLACE OF ORIGIN - LGA:</label>
                        <input id='originlocalgovt' value={localStorage.getItem('motheroriginLga') === null ? '' : localStorage.getItem('motheroriginLga')} onChange={handleMotherOriginLga} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="origintown">PLACE OF ORIGIN - TOWN:</label>
                        <input id='origintown' value={localStorage.getItem('motheroriginTown') === null ? '' : localStorage.getItem('motheroriginTown')} onChange={handleMotherOriginTown} type="text" required/>
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
                        <input id='height' value={localStorage.getItem('height') === null ? '' : localStorage.getItem('height')} onChange={handleHeight} type="number" required/>
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
                        <input id='nationality' value={localStorage.getItem('nationality') === null ? '' : localStorage.getItem('nationality')} onChange={handleNationality} type="text" required/>
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
                        <input id='documentNumber' value={localStorage.getItem('documentNumber') === null ? '' : localStorage.getItem('documentNumber')} onChange={handleDocumentNumber} type="number" required/>
                      </div>

                      <div className="input-field col s12">
                        <p htmlFor="documentExpiryDate">DOCUMENT EXPIRY DATE:</p>
                        <input id='documentExpiryDate' value={localStorage.getItem('documentExpiryDate') === null ? '' : localStorage.getItem('documentExpiryDate')} onChange={handleDocumentExpiryDate} type="date" required/>
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
                        <input onChange={handleNativeLanguage} value={localStorage.getItem('nativeLanguage') === null ? '' : localStorage.getItem('nativeLanguage')} id='mainNativeLanguageSpoken' type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="languagesYouReadAndWrite">LANGUAGE YOU READ AND WRITE:</label>
                        <input onChange={handleLanguagesRead} value={localStorage.getItem('languagesYouReadAndWrite') === null ? '' : localStorage.getItem('languagesYouReadAndWrite')} id='languagesYouReadAndWrite' type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="otherLanguagesSpoken">OTHER LANGUAGE SPOKEN:</label>
                        <input onChange={handleOtherLanguages} value={localStorage.getItem('otherLanguagesSpoken') === null ? '' : localStorage.getItem('otherLanguagesSpoken')} id='otherLanguagesSpoken' type="text" required/>
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
                        <input onChange={handleOccupation} value={localStorage.getItem('occupation') === null ? '' : localStorage.getItem('occupation')} id='occupation' type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="telephone">TELEPHONE:</label>
                        <input onChange={handleTelephone} value={localStorage.getItem('telephone') === null ? '' : localStorage.getItem('telephone')} id='telephone' type="tel" required/>
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
                        <input id='emailAddress' value={localStorage.getItem('emailAddress') === null ? '' : localStorage.getItem('emailAddress')} onChange={handleEmailAddress} type="email" required/>
                      </div>
                  </div>

                  {/* Details Of YOUR PARENTS */}
                  <div className="names_block_N block row">
                      <h3 className="block_heading">DETAILS OF YOUR PARENTS</h3>
                      <div className="input-field col s6">
                        <label htmlFor="fathersSurname">FATHER'S SURNAME:</label>
                        <input id='fathersSurname' value={localStorage.getItem('fathersSurname') === null ? '' : localStorage.getItem('fathersSurname')} onChange={handleFathersSurname} type='text' required/>
                      </div>
                      
                      <div className="input-field col s6">
                        <label htmlFor="fathersFirstName">FATHER'S FIRST NAME:</label>
                        <input id='fathersFirstName' value={localStorage.getItem('fathersFirstName') === null ? '' : localStorage.getItem('fathersFirstName')} onChange={handleFathersFirstName} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="fathersMiddleName">FATHER'S MIDDLE NAME:</label>
                        <input id='fathersMiddleName' value={localStorage.getItem('fathersMiddleName') === null ? '' : localStorage.getItem('fathersMiddleName')} onChange={handleFathersMiddleName} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="fathersNin">FATHER'S NIN(if available):</label>
                        <input id='fathersNin' value={localStorage.getItem('fathersNin') === null ? '' : localStorage.getItem('fathersNin')} onChange={handleFathersNin} type="number" />
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="mothersSurname">MOTHER'S SURNAME:</label>
                        <input id='mothersSurname' value={localStorage.getItem('mothersSurname') === null ? '' : localStorage.getItem('mothersSurname')} onChange={handleMothersSurname} type='text' required/>
                      </div>
                      
                      <div className="input-field col s12">
                        <label htmlFor="mothersFirstName">MOTHER'S FIRST NAME:</label>
                        <input id='mothersFirstName' value={localStorage.getItem('mothersFirstName') === null ? '' : localStorage.getItem('mothersFirstName')} onChange={handleMothersFirstName} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="mothersMiddleName">MOTHER'S MIDDLE NAME:</label>
                        <input id='mothersMiddleName' value={localStorage.getItem('mothersMiddleName') === null ? '' : localStorage.getItem('mothersMiddleName')} onChange={handleMothersMiddleName} type="text" required/>
                      </div>

                      {/* <div className="input-field col s6">
                        <label htmlFor="mothersMaidenName">MOTHER'S MAIDEN NAME:</label>
                        <input id='mothersMaidenName' onChange={handleMothersMaidenName} type="text" required/>
                      </div> */}

                      <div className="input-field col s12">
                        <label htmlFor="mothersNin">MOTHER'S NIN(if available):</label>
                        <input id='mothersNin' value={localStorage.getItem('mothersNin') === null ? '' : localStorage.getItem('mothersNin')} onChange={handleMothersNin} type="number" />
                      </div>
                  </div>

                  {/* GUARDIAN DETAILS */}
                  <div className="names_block_N block row">
                      <h3 className="block_heading">GUARDIAN DETAILS</h3>
                      <div className="input-field col s12">
                        <label htmlFor="guardianSurname">SURNAME:</label>
                        <input id='guardianSurname' value={localStorage.getItem('guardianSurname') === null ? '' : localStorage.getItem('guardianSurname')} onChange={handleGuardianSurname} type='text' required/>
                      </div>
                      
                      <div className="input-field col s6">
                        <label htmlFor="guardianFirstName">FIRST NAME:</label>
                        <input id='guardianFirstName' value={localStorage.getItem('guardianFirstname') === null ? '' : localStorage.getItem('guardianFirstname')} onChange={handleGuardianFirstname} type="text" required/>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="guardianMiddleName">MIDDLE NAME:</label>
                        <input id='guardianMiddleName' value={localStorage.getItem('guardianMiddlename') === null ? '' : localStorage.getItem('guardianMiddlename')} onChange={handleGuardianMiddlename} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="guardianNin">NATIONAL IDENTIFICATION NUMBER:</label>
                        <input id='guardianNin' value={localStorage.getItem('guardianNin') === null ? '' : localStorage.getItem('guardianNin')} onChange={handleGuardianNin} type="number" />
                      </div>
                  </div>

                  {/* NEXT OF KIN DETAILS */}
                  <div className="names_block_N block row">
                      <h3 className="block_heading">YOUR NEXT OF KIN DETAILS</h3>
                      <div className="input-field col s12">
                        <label htmlFor="nextOfKinSurname">SURNAME OF NEXT OF KIN:</label>
                        <input id='nextOfKinSurname' value={localStorage.getItem('nextOfKinSurname') === null ? '' : localStorage.getItem('nextOfKinSurname')} onChange={handleNextOfKinSurname} type='text' required/>
                      </div>
                      
                      <div className="input-field col s12">
                        <label htmlFor="nextOfKinFirstName">FIRST NAME OF NEXT OF KIN:</label>
                        <input id='nextOfKinFirstName' value={localStorage.getItem('nextOfKinFirstname') === null ? '' : localStorage.getItem('nextOfKinFirstname')} onChange={handleNextOfKinFirstname} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="nextOfKinMiddleName">MIDDLE NAME OF NEXT OF KIN:</label>
                        <input id='nextOfKinMiddleName' value={localStorage.getItem('nextOfKinMiddlename') === null ? '' : localStorage.getItem('nextOfKinMiddlename')} onChange={handleNextOfKinMiddlename} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="nextOfKinRelationship">RELATIONSHIP WITH OF NEXT OF KIN:</label>
                        <input id='nextOfKinRelationship' value={localStorage.getItem('nextOfKinRelationship') === null ? '' : localStorage.getItem('nextOfKinRelationship')} onChange={handleNextOfKinRelationship} type="text" required/>
                      </div>
                  </div>

                  {/* ADDRESS OF NEXT OF KIN */}
                  <div className="names_block_N block row">
                      <h3 className="block_heading">ADDRESS OF YOUR NEXT OF KIN</h3>
                      <div className="input-field col s12">
                        <label htmlFor="nextOfKinCountry">COUNTRY OF RESIDENCE:</label>
                        <input id='nextOfKinCountry' value={localStorage.getItem('nextOfKinCountry') === null ? '' : localStorage.getItem('nextOfKinCountry')} onChange={handleNextOfKinCountry} type='text' required/>
                      </div>
                      
                      <div className="input-field col s6">
                        <label htmlFor="nextOfKinState">STATE OF RESIDENCE:</label>
                        <input id='nextOfKinState' value={localStorage.getItem('nextOfKinState') === null ? '' : localStorage.getItem('nextOfKinState')} onChange={handleNextOfKinState} type="text" required/>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="nextOfKinLga">LGA OF RESIDENCE:</label>
                        <input id='nextOfKinLga' value={localStorage.getItem('nextOfKinLga') === null ? '' : localStorage.getItem('nextOfKinLga')} onChange={handleNextOfKinLga} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="nextOfKinTown">TOWN/CITY OF RESIDENCE:</label>
                        <input id='nextOfKinTown' value={localStorage.getItem('nextOfKinTown') === null ? '' : localStorage.getItem('nextOfKinTown')} onChange={handleNextOfKinTown} type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="nextOfKinStreet">STREET ADDRESS:</label>
                        <input id='nextOfKinStreet' value={localStorage.getItem('nextOfKinStreetAddress') === null ? '' : localStorage.getItem('nextOfKinStreetAddress')} onChange={handleNextOfKinStreetAddress} type="text" required/>
                      </div>

                      {/* <div className="input-field col s6">
                        <label htmlFor="nextOfKinPostalCode">POSTAL CODE:</label>
                        <input id='nextOfKinPostalCode' type="number" required/>
                      </div> */}

                      <div className="input-field col s12">
                        <label htmlFor="nextOfKinNin">NEXT OF KIN'S NIN:</label>
                        <input id='nextOfKinNin' value={localStorage.getItem('nextOfKinNin') === null ? '' : localStorage.getItem('nextOfKinNin')} onChange={handleNextOfKinNin} type="number" />
                      </div>
                  </div>

                  {/* Booking Details */}
                  <div className="names_block_N block row">
                      <h3 className="block_heading">BOOK APPOINTMENT FOR NIN SLIP DATA CAPTURING</h3>
                      <p style={{textAlign:'center', fontWeight:'bold'}} className='red-text'>Pay extra attention to month and day chosen, once picked, it cannot be changed!</p>
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

                      {defaultTime ?
                          <div className='input-field col s12'>
                            <p>SELECT TIME:</p>
                            <select id="time" value={selectedTime} onChange={handleSelectedTime} className='browser-default'>
                              <option defaultValue=''></option>
                              {
                                defaultTime.map((time) =>{
                                  let t = pickedTime.find(timeResponse => timeResponse === time)
                                  if(t === undefined){
                                      t = ''
                                  }
                                  if(time === t){
                                    return (<option key={time} value={time} disabled>{time}</option>)
                                  } else{
                                    return (<option key={time} value={time} >{time}</option>)
                                  }
                                }) 
                              }
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
                      <label htmlFor='declaration'>
                        <input id='declaration' type="radio" value='agreed' onChange={handleDeclaration} required/>
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
                      {/* <p style={{textAlign:'center', color: 'green'}}>Login to account</p> */}
                  </div>
              </form>
          </div>  
        </>
    )
}

export default Enrolmentform
