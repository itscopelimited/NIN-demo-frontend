import React,{useState} from 'react'
import NIMClogo from './img/nimc.png'

function Enrolmentform() {
    // const [changedname, setchangedname] = useState('')
    // const changednameHandler = ({target}) =>{
    //   setchangedname(target.value)
    //   console.log(changedname)
    // }
    

    return (
        <>
          <div>
              <img src={NIMClogo} alt="NIMC logo" className='nimc'/>
              <h1 className='form_heading'>NATIONAL IDENTIFICATION NUMBER ENROLMENT FORM</h1>
              <p className="instructions">PLEASE FILL THE FORM APPROPRIATELY</p>

              <form action="" method='POST' className="enrolment_form col s12">
                  <div className="names_block_A block row">
                      <h3 className="block_heading">WHAT ARE YOUR NAMES?</h3>
                      <div className="input-field">
                        <label htmlFor="title">TITLE (Mr/Mrs/Master/Miss/Ms): </label>
                        <input id='title' type="text" required/>
                      </div>
                    
                      <div className="input-field col s6">
                        <label htmlFor="lastname">LAST NAME: </label>
                        <input id='lastname' type="text" className='validate' />
                      </div>
                      
                      <div className="input-field col s6">
                        <label htmlFor="firstname">FIRST NAME: </label>
                        <input id='firstname' type="text" required/>
                      </div>
                      
                      <div className="input-field col s12">
                        <label htmlFor="middlename">MIDDLE NAME: </label>
                        <input id='middlename' type="text" required/>
                      </div>
                      
                      <div className="input-field col s12">
                        <label htmlFor="othername">OTHER NAMES: </label>
                        <input id='othername' type="text" required/>
                      </div>
                      
                      <div className="input-field col s12">
                        <label htmlFor="maidenname">MAIDEN NAME: </label>
                        <input id='maidenname' type="text" required/>
                      </div>
                  </div>

                  {/* <div onChange={changednameHandler}>
                    <label htmlFor="changename">HAVE YOU CHANGED YOUR NAME BEFORE?</label>
                    <p>
                      <label>
                        <input type="radio" value='Yes' name='changename'/>
                        <span>Yes</span>
                      </label>
                    </p>
                    <p>
                      <label>
                          <input type="radio" value='No' name='changename'/>
                          <span>No</span>
                      </label>
                    </p>
                  </div> */}
                  {/* <div onChange={changednameHandler}>
                  <label htmlFor="changename">HAVE YOU CHANGED YOUR NAME BEFORE?</label>
                    <select defaultValue='' className='browser-default' name="dobverification" id="">
                        <option disabled value=' '> </option>
                        <option value="verified">Verified</option>
                        <option value="approximate">Approximate</option>
                        <option value="declared">Declared</option>
                    </select>
                  </div> */}

                  <div className="names_block_B block row">
                    <h3 className="block_heading">HAVE YOU CHANGED YOUR NAME BEFORE?</h3>
                      <div className="input-field col s12">
                        <label htmlFor="prevsurname">PREVIOUS SURNAME:</label>
                        <input id='prevsurname' type="text" required/>
                      </div>
                    
                      <div className="input-field col s12">
                        <label htmlFor="prevfirstname">PREVIOUS FIRST NAME:</label>
                        <input id='prevfirstname' type="text"/>
                      </div>
                      
                      <div className="input-field col s12">
                        <label htmlFor="prevmidname">PREVIOUS MIDDLE NAME: </label>
                        <input id='prevmidname' type="text" required/>
                      </div>
                  </div>

                  <div className="names_block_B block row">
                      <h3 className="block_heading">WHERE DO YOU LIVE?</h3>
                      <div className="input-field col s6">
                        <label htmlFor="cityresidence">CITY OF RESIDENCE:</label>
                        <input id='cityresidence' type="text" required/>
                      </div>
                    
                      <div className="input-field col s6">
                        <label htmlFor="countryresidence">COUNTRY OF RESIDENCE:</label>
                        <input id='countryresidence' type="text"/>
                      </div>
                      
                      <div className="input-field col s6">
                        <label htmlFor="stateresidence">STATE OF RESIDENCE: </label>
                        <input id='stateresidence' type="text" required/>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="lgaresidence">LGA OF RESIDENCE: </label>
                        <input id='lgaresidence' type="text" required/>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="residenceaddress">ADDRESS OF RESIDENCE: </label>
                        <input id='residenceaddress' type="text" required/>
                      </div>
                      
                      <div className="input-field col s6">
                        <label htmlFor="postalcode">POSTAL CODE: </label>
                        <input id='postalcode' type="text" required/>
                      </div>
                  </div>

                  <div className="names_block_B block row">
                      <h3 className="block_heading">WHEN AND WHERE WERE YOU BORN?</h3>
                      <div className="input-field col s6">
                        <label htmlFor="dateofbirth">DATE OF BIRTH:</label>
                        <input id='dateofbirth' type='date' required/>
                      </div>
                    
                      <div className="input-field col s6">
                        <label htmlFor="dobverification">DATE OF BIRTH VERIFICATION:</label>
                        <select defaultValue=' ' className='browser-default' id="dobverification">
                            <option disabled value=' '> </option>
                            <option value="verified">Verified</option>
                            <option value="approximate">Approximate</option>
                            <option value="declared">Declared</option>
                        </select>
                      </div>
                      
                      <div className="input-field col s12">
                        <label htmlFor="pobcountry">PLACE OF BIRTH - COUNTRY:</label>
                        <input id='pobcountry' type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="pobstate">PLACE OF BIRTH - STATE:</label>
                        <input id='pobstate' type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="poblocalgovt">PLACE OF BIRTH - LGA:</label>
                        <input id='poblocalgovt' type="text" required/>
                      </div>
                  </div>

                  <div className="names_block_B block row">
                      <h3 className="block_heading">WHERE ARE YOU FROM?</h3>
                      <div className="input-field col s12">
                        <label htmlFor="origincountry">PLACE OF ORIGIN - COUNTRY:</label>
                        <input id='origincountry' type='text' required/>
                      </div>
                      
                      <div className="input-field col s12">
                        <label htmlFor="originstate">PLACE OF ORIGIN - STATE:</label>
                        <input id='originstate' type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="originlocalgovt">PLACE OF ORIGIN - LGA:</label>
                        <input id='originlocalgovt' type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="origintown">PLACE OF ORIGIN - TOWN:</label>
                        <input id='origintown' type="text" required/>
                      </div>
                  </div>

                  <div className="names_block_B block row">
                      <h3 className="block_heading">WHERE IS YOUR FATHER FROM?</h3>
                      <div className="input-field col s12">
                        <label htmlFor="origincountry">PLACE OF ORIGIN - COUNTRY:</label>
                        <input id='origincountry' type='text' required/>
                      </div>
                      
                      <div className="input-field col s12">
                        <label htmlFor="originstate">PLACE OF ORIGIN - STATE:</label>
                        <input id='originstate' type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="originlocalgovt">PLACE OF ORIGIN - LGA:</label>
                        <input id='originlocalgovt' type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="origintown">PLACE OF ORIGIN - TOWN:</label>
                        <input id='origintown' type="text" required/>
                      </div>
                  </div>

                  <div className="names_block_B block row">
                      <h3 className="block_heading">WHERE IS YOUR MOTHER FROM?</h3>
                      <div className="input-field col s12">
                        <label htmlFor="origincountry">PLACE OF ORIGIN - COUNTRY:</label>
                        <input id='origincountry' type='text' required/>
                      </div>
                      
                      <div className="input-field col s12">
                        <label htmlFor="originstate">PLACE OF ORIGIN - STATE:</label>
                        <input id='originstate' type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="originlocalgovt">PLACE OF ORIGIN - LGA:</label>
                        <input id='originlocalgovt' type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="origintown">PLACE OF ORIGIN - TOWN:</label>
                        <input id='origintown' type="text" required/>
                      </div>
                  </div>

                  <div className="names_block_B block row">
                      <h3 className="block_heading">YOUR PHYSICAL FEATURES</h3>
                      <div className="input-field col s6">
                        <label htmlFor="gender">GENDER:(M/F)</label>
                        <input id='gender' type='text' required/>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="height">HEIGHT(CM):</label>
                        <input id='height' type="text" required/>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="residencestatus">RESIDENCE STATUS:</label>
                        <select defaultValue=' ' className='browser-default' id="residencestatus">
                            <option disabled value=' '> </option>
                            <option value="birth">Birth</option>
                            <option value="naturalization">naturalization</option>
                            <option value="registration">registration</option>
                        </select>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="nationality">Nationality:</label>
                        <input id='nationality' type="text" required/>
                      </div>
                  </div>

                  <div className="names_block_B block row">
                      <h3 className="block_heading">YOUR SUPPORTING DOCUMENTS:</h3>

                      <div className="input-field col s12">
                        <label htmlFor="documents">DOCUMENTS:</label>
                        <select defaultValue=' ' className='browser-default' id="documents">
                            <option disabled value=' '> </option>
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
                        <input id='documentNumber' type="number" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="documentExpiryDate">DOCUMENT EXPIRY DATE:</label>
                        <input id='documentExpiryDate' type="date" required/>
                      </div>
                  </div>
                  
                  {/* YOUR OTHER DETAILS */}
                  <div className="names_block_B block row">
                      <h3 className="block_heading">YOUR OTHER DETAILS:</h3>

                      <div className="input-field col s12">
                        <label htmlFor="maritalStatus">MARITAL STATUS:</label>
                        <select defaultValue=' ' className='browser-default' id="maritalStatus">
                            <option disabled value=' '> </option>
                            <option value="divorced">Divorced</option>
                            <option value="married">Married</option>
                            <option value="separated">Separated</option>
                            <option value="single">Single</option>
                            <option value="widowed">Widowed</option>
                        </select>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="mainNativeLanguageSpoken">MAIN NATIVE LANGUAGE SPOKEN:</label>
                        <input id='mainNativeLanguageSpoken' type="text" required/>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="languagesYouReadAndWrite">LANGUAGE YOU READ AND WRITE:</label>
                        <input id='languagesYouReadAndWrite' type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="otherLanguagesSpoken">OTHER LANGUAGE SPOKEN:</label>
                        <input id='otherLanguagesSpoken' type="text" required/>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="educationLevel">EDUCATION LEVEL:</label>
                        <select defaultValue=' ' className='browser-default' id="educationLevel">
                            <option disabled value=' '> </option>
                            <option value="certification">Certification</option>
                            <option value="none">None</option>
                            <option value="postgraduate">Postgraduate</option>
                            <option value="primary">Primary</option>
                            <option value="secondary">Secondary</option>
                            <option value="tertiary">Tertiary</option>
                        </select>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="religion">RELIGION:</label>
                        <select defaultValue=' ' className='browser-default' id="religion">
                            <option disabled value=' '> </option>
                            <option value="christainity">Christainity</option>
                            <option value="islam">Islam</option>
                            <option value="traditional">Traditional</option>
                            <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="telephone">TELEPHONE:</label>
                        <input id='telephone' type="tel" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="employmentStatus">EMPLOYMENT STATUS:</label>
                        <select defaultValue=' ' className='browser-default' id="employmentStatus">
                            <option disabled value=' '> </option>
                            <option value="employed">Employed</option>
                            <option value="unemployed">Unemployed</option>
                            <option value="pensioner">Pensioner</option>
                            <option value="selfemployed">Self Employed</option>
                        </select>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="emailAddress">EMAIL ADDRESS:</label>
                        <input id='emailAddress' type="email" required/>
                      </div>
                  </div>

                  {/* Details Of YOUR PARENTS */}
                  <div className="names_block_N block row">
                      <h3 className="block_heading">DETAILS OF YOUR PARENTS</h3>
                      <div className="input-field col s6">
                        <label htmlFor="fathersSurname">FATHER'S SURNAME:</label>
                        <input id='fathersSurname' type='text' required/>
                      </div>
                      
                      <div className="input-field col s6">
                        <label htmlFor="fathersFirstName">FATHER'S FIRST NAME:</label>
                        <input id='fathersFirstName' type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="fathersMiddleName">FATHER'S MIDDLE NAME:</label>
                        <input id='fathersMiddleName' type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="fathersNin">FATHER'S NIN(if available):</label>
                        <input id='fathersNin' type="number" required/>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="mothersSurname">MOTHER'S SURNAME:</label>
                        <input id='mothersSurname' type='text' required/>
                      </div>
                      
                      <div className="input-field col s6">
                        <label htmlFor="mothersFirstName">MOTHER'S FIRST NAME:</label>
                        <input id='mothersFirstName' type="text" required/>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="mothersMiddleName">MOTHER'S MIDDLE NAME:</label>
                        <input id='mothersMiddleName' type="text" required/>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="mothersMaidenName">MOTHER'S MAIDEN NAME:</label>
                        <input id='mothersMaidenName' type="text" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="mothersNin">MOTHER'S NIN(if available):</label>
                        <input id='mothersNin' type="number" required/>
                      </div>
                  </div>

                  {/* GUARDIAN DETAILS */}
                  <div className="names_block_N block row">
                      <h3 className="block_heading">GUARDIAN DETAILS</h3>
                      <div className="input-field col s6">
                        <label htmlFor="guardianSurname">SURNAME:</label>
                        <input id='guardianSurname' type='text' required/>
                      </div>
                      
                      <div className="input-field col s6">
                        <label htmlFor="guardianFirstName">FIRST NAME:</label>
                        <input id='guardianFirstName' type="text" required/>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="guardianMiddleName">MIDDLE NAME:</label>
                        <input id='guardianMiddleName' type="text" required/>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="guardianNin">NATIONAL IDENTIFICATION NUMBER:</label>
                        <input id='guardianNin' type="number" required/>
                      </div>
                  </div>

                  {/* NEXT OF KIN DETAILS */}
                  <div className="names_block_N block row">
                      <h3 className="block_heading">YOUR NEXT OF KIN DETAILS</h3>
                      <div className="input-field col s6">
                        <label htmlFor="nextOfKinSurname">SURNAME OF NEXT OF KIN:</label>
                        <input id='nextOfKinSurname' type='text' required/>
                      </div>
                      
                      <div className="input-field col s6">
                        <label htmlFor="nextOfKinFirstName">FIRST NAME OF NEXT OF KIN:</label>
                        <input id='nextOfKinFirstName' type="text" required/>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="nextOfKinMiddleName">MIDDLE NAME OF NEXT OF KIN:</label>
                        <input id='nextOfKinMiddleName' type="text" required/>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="nextOfKinRelatonship">RELATIONSHIP WITH OF NEXT OF KIN:</label>
                        <input id='nextOfKinRelatonship' type="text" required/>
                      </div>
                  </div>

                  {/* ADDRESS OF NEXT OF KIN */}
                  <div className="names_block_N block row">
                      <h3 className="block_heading">ADDRESS OF YOUR NEXT OF KIN</h3>
                      <div className="input-field col s6">
                        <label htmlFor="nextOfKinCountry">COUNTRY OF RESIDENCE:</label>
                        <input id='nextOfKinCountry' type='text' required/>
                      </div>
                      
                      <div className="input-field col s6">
                        <label htmlFor="nextOfKinState">STATE OF RESIDENCE:</label>
                        <input id='nextOfKinState' type="text" required/>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="nextOfKinLga">LGA OF RESIDENCE:</label>
                        <input id='nextOfKinLga' type="text" required/>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="nextOfKinTown">TOWN/CITY OF RESIDENCE:</label>
                        <input id='nextOfKinTown' type="text" required/>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="nextOfKinStreet">STREET ADDRESS:</label>
                        <input id='nextOfKinStreet' type="text" required/>
                      </div>

                      <div className="input-field col s6">
                        <label htmlFor="nextOfKinPostalCode">POSTAL CODE:</label>
                        <input id='nextOfKinPostalCode' type="number" required/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="nextOfKinNin">NEXT OF KIN'S NIN:</label>
                        <input id='nextOfKinNin' type="number" required/>
                      </div>
                  </div>

                  {/* Booking Details */}
                  <div className="names_block_N block row">
                      <h3 className="block_heading">BOOK APPOINTMENT FOR COLLECTION OF NIN SLIP</h3>
                      {/* "month": "Jan",
                      "year": 2021,
                      "date": 6,
                      "branch": "Lekki",
                      "time": "8:30am" */}
                      <div className="input-field col s12">
                        <label htmlFor="year">Year</label>
                        <input id='year' value='2021' type="text"/>
                      </div>

                      <div className="input-field col s12">
                        <label htmlFor="month">MONTH:</label>
                        <select defaultValue='' id="month" className='browser-default'>
                          <option disabled value=''> </option>
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
                        <label htmlFor="day">DAY</label>
                        <select defaultValue='' id="day" className='browser-default'>
                          <option disabled > </option>
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
                        <label htmlFor="location">BRANCH</label>
                        <select defaultValue='' id="location" className='browser-default'>
                          <option disabled > </option>
                          <option value="lekki">Lekki Phase 1</option>
                          <option value="Ajah">Ajah</option>
                          <option value="Victoria Island">Victoria Island</option>
                          <option value="Ikoyi">Ikoyi</option>
                        </select>
                      </div>
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
                  </div>
              </form>
          </div>  
        </>
    )
}

export default Enrolmentform
