import { AppContext } from "./AppContext";
import { useState } from "react";
import { useAuth, useClerk, useUser } from "@clerk/react";
import axios from "axios";
import { toast } from "react-toastify";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface AppContextProviderProps {
    children: ReactNode;
}

const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [credit, setCredit] = useState<number>(0);

    const [ image, setImage ] = useState<File | null>(null);
    const [resultImage, setResultImage] = useState<string>("");

    const backendURL = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate()
    
    const { getToken } = useAuth();

    const { isSignedIn } = useUser();
    const { openSignIn } = useClerk();

    const loadCredits = async () => {
        try {
            const token = await getToken();
            const { data } = await axios.get(`${backendURL}/api/user/credits`, {headers:{token}});
            if (data.success) {
                setCredit(data.credits);
            }
            
        } catch (error) {
            console.error(error);
            if (error instanceof Error) {                
                toast.error(error.message);
            }
        }
    }
    
    const removeBG = async (image: File) => {
        try {
            if (!isSignedIn) {
                openSignIn({});
                return;
            }
            setImage(image);
            setResultImage("");

            navigate("/result");
            const token = await getToken();
            const formData = new FormData();
            formData.append("image", image);

            const { data } = await axios.post(`${backendURL}/api/image/remove-bg`,formData,{headers:{token}});
            if (data.success) {
                setResultImage(data.resultImage);
                if (data.creditBalance !== undefined) {
                    setCredit(data.creditBalance);
                } else {
                    toast.error(data.message);
                }
            } else {
                toast.error(data.message);
                if (data.creditBalance === 0) {
                    navigate("/buy");
                }
            }

        } catch (error) {
            console.error(error);
        }
    }

    const value = {
        credit,
        setCredit,
        loadCredits,
        backendURL,
        image,
        setImage,
        resultImage,
        setResultImage,
        removeBG

    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
