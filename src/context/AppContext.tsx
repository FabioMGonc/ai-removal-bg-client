import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

interface AppContextType {
    credit: number;
    setCredit: Dispatch<SetStateAction<number>>;
    loadCredits: () => Promise<void>;
    removeBG: (image: File) => Promise<void>;
    image: File | null;
    setImage: Dispatch<SetStateAction<File | null>>;
    resultImage: string;
    setResultImage: Dispatch<SetStateAction<string>>;
    backendURL: string;
}

export const AppContext = createContext<AppContextType | null>(null);

