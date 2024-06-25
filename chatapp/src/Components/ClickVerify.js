import React from "react";
import { Link } from "react-router-dom";
function ClickVerify (){
    return(
        
        <div style={styles.container}>
                    <h1>Your account is verified!</h1>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgBApYPwpQShLxzpURmX0Kv2KGU-xDr_8Xrg&s"
                        alt="success-image"
                        style={styles.image}
                    />
                    <h2>Click on below button to login</h2>
                    <Link to="/">
                        <button style={styles.button}>Login</button>
                    </Link>
                    {/* <button style={styles.button} onClick={handleProceed}>Proceed to Welcome</button> */}
                </div>
    )
}

const styles = {
    container: {
        textAlign: "center",
        marginTop: "50px",
    },
    image: {
        width: "150px",
        height: "150px",
        margin: "20px",
    },
    button: {
        marginTop: "20px",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
    },
};

export default ClickVerify