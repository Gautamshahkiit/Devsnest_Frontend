const incNumber = ()=>{
    return {
        type: "increment",
    }
}
const decNumber = ()=>{
    return {
        type: "decrement"
    }
}

const userName = (data)=>{
    return {
        type: "userName",
        data: data,
    }
}

const userEmail = (data)=>{
    return {
        type: "userEmail",
        data: data,
    }
}

export {incNumber, decNumber, userName, userEmail};