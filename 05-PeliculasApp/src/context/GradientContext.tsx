import React, { createContext, useState } from "react";

interface ImageColors {
    primary:string,
    secondary:string
}

interface contextProps {
    colors: ImageColors,
    prevColors: ImageColors,
    handleColors: (colors: ImageColors) => void;
    handlePrevColors: (colors: ImageColors) => void; 
}

export const GradientContext = createContext({} as contextProps);


export const GradientProvider = ({children}: any)=>{

    const [colors, setColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    })

    const [prevColors, setPrevColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    })

    const handleColors = (colors: ImageColors) => {
        setColors(colors)
    }

    const handlePrevColors = (colors: ImageColors) => {
        setPrevColors(colors)
    }

    return(
        <GradientContext.Provider
            value={{
                colors,
                prevColors,
                handleColors,
                handlePrevColors
            }}
        >
            { children }
        </GradientContext.Provider>
    )
}