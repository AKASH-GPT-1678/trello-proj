
export const createBoard = async (name : string , token : string) => {
    const response = await fetch("http://localhost:5000/api/boards", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        },
        
        body: JSON.stringify({name})
    });
    const data = await response.json();
    return data;
};

export const joinBoard = async (id : string , token : string) => {
    const response = await fetch(`http://localhost:5000/api/joinboard/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        },
    });
    const data = await response.json();
    return data;
};