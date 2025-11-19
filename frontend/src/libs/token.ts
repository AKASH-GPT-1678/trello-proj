import axios from "axios"
export const checkToken = async (token: string): Promise<boolean> => {
  try {
    const res = await axios.get("http://localhost:5000/api/check-token", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });


    if (res.status === 200) {
        console.log(res.data);
      return true; 
    }

    return false;
  } catch (error: any) {
  
    return false;
  }
};