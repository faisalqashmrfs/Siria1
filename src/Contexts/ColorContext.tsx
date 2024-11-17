import React, { createContext, ReactNode, useState } from 'react';

interface ColorContextProps {
    brandColor: string;
    setBrandColor: (color: string) => void;
}

export const ColorContext = createContext<ColorContextProps>({
    brandColor: '',
    setBrandColor: () => { },
});

export const ColorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [brandColor, setBrandColor] = useState('');

    return (
        <ColorContext.Provider value={{ brandColor, setBrandColor }}>
            {children}
        </ColorContext.Provider>
    );
};