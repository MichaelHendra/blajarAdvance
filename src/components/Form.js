// create style here
const style = {
  form: {
    margin: "16px 20% 0",
  },
  formGroup: {
    marginBottom: "16px",
  },
  formLabel: {
    marginBottom: "8px",
    display: "inline-block",
  },
  formInput: {
    display: "block",
    width: "100%",
    padding: ".375rem .75rem",
    fontSize: "1rem",
    lineHeight: 1.5,
    color: "#212529",
    backgroundColor: "#fff",
    border: "1px solid #ced4da",
    borderRadius: ".25rem",
  },
}

// create Form component
function Form() {
  return (
    // code inside div
    <div>
      <from style={style.form}>
        <div style={style.formGroup}>
          <label htmlFor="username" style={style.formLabelformLabel}>Username</label>
          <input id="usernem"
          placeholder="Masukan Username"
          style={style.formInput}/>
        </div>
      </from>
    </div>
  )
}

export default Form
