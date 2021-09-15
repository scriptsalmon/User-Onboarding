import React from 'react'

export default function Form(props) {
    const { values, update, submit } = props;
    
    const onChange = (event) => {
        const { name, value, type, checkbox } = event.target;
        const valueToUse = type === 'checkbox' ? checkbox : value;
        update(name, valueToUse);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    return (
        <div className="Form">
            <div className="Form-header">
                <h1>Worker Application</h1>
            </div>
            
            <form onSubmit={onSubmit}>
{/* TEXTBOX TEXTBOX TEXTBOX TEXTBOX TEXTBOX TEXTBOX TEXTBOX TEXTBOX TEXTBOX TEXTBOX TEXTBOX  */}
                <label> Username&nbsp;
                    <input 
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={onChange}
                    />
                </label>
                <label> Email&nbsp;
                    <input 
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label> Password&nbsp;
                    <input 
                        type="text"
                        name="password"
                        value={values.password}
                        onChange={onChange}
                    />
                </label>
{/* RADIO RADIO RADIO RADIO RADIO RADIO RADIO RADIO RADIO RADIO RADIO RADIO RADIO RADIO RADIO  */}
                <div> Preference&nbsp;
                    <label> Part Time&nbsp;
                        <input 
                            type="radio"
                            name="wrkPref"
                            value="partTime"
                            checked={values.wrkPref === "partTime"}
                            onChange={onChange}
                        />
                    </label>
                    <label> Full Time&nbsp;
                        <input 
                            type="radio"
                            name="wrkPref"
                            value="fullTime"
                            checked={values.wrkPref === "fullTime"}
                            onChange={onChange}
                        />
                    </label>
                </div>
{/*CHECKBOX CHECKBOX CHECKBOX CHECKBOX CHECKBOX CHECKBOX CHECKBOX CHECKBOX CHECKBOX CHECKBOX */}
                <label> Terms&nbsp;
                    <input 
                        type="checkbox"
                        name="terms"
                        checked={values.terms}
                        onChange={onChange}
                    />
                </label>
{/* SUBMIT SUBMIT SUBMIT SUBMIT SUBMIT SUBMIT SUBMIT SUBMIT SUBMIT SUBMIT SUBMIT SUBMIT SUBMIT  */}
                <div>
                    <label>
                        <input 
                            type="submit"
                            value="Apply"
                        />
                    </label>
                </div>
            </form>
        </div>
    )
}
