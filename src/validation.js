

function validation(values) {
    let error = {}

    if(values.playerName === ""){
        error.playerName = "Should not be empty"
    }else{
        error.email = ""
    }

    if(values.playerID === ""){
        error.playerID = "Should not be empty"
    }else{
        error.playerID = ""
    }

    return error;
}

export default validation;
