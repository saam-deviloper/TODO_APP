import { Link } from "expo-router";
import React from "react";

function index() {
  return (
    <div>
      <main style={styles.contianer}>
        <form
          action=""
          style={{
            backgroundColor: "#e3e3e3",
            display: "flex",
            flexDirection: "column",
            height: "70vh",
            width: "50vw",
            padding: 20,
            borderRadius: 20,
          }}
        >
          <fieldset style={styles.fieldSet}>
            <label htmlFor="email" style={styles.label}>E-mail</label>
            <input id="email" type="text" placeholder="email..." style={styles.input} />
          </fieldset>

          <fieldset style={styles.fieldSet}>

          <label htmlFor="#password" style={styles.label}>password</label>
          <input id="password" type="text" placeholder="password..." style={styles.input}/>
          </fieldset>

          <button type="button" style={styles.sumbit_button}>Login</button>
          <a href="#" type="sumbit" style={styles.registerButton}>
            Dont have an Account yet?Register
          </a>
        </form>

        <Link href="/register" />
      </main>
    </div>
  );
}

export default index;

const styles = {
  contianer: {
    display: "flex",
    flex: 1,
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {},
  label:{
    fontSize:18,
    fontWeight:'bold',
    marginRight:15
    // display:"block"
  },
  input: {
    borderRadius:4,
    border:0,
    height:44,
    width:"35%"

  },
  sumbit_button: {
    backgroundColor:"dodgerblue",
    fontWeight:"bold",
    borderRadius:4,
    border:0,
    height:44,
    // width:"35%"

  },
  fieldSet: {
    border: "1px solid black",
    marginBottom:10,
    borderRadius:5,
    textAlign:"center"
  },
  registerButton:{
    textAlign:"center",
    marginTop:10,
  }
};
