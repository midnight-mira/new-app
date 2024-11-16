import { createContext, useState } from 'react';

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
    const [selectedArticle, setSelectedArticle] = useState(null);

    return (
        <ArticleContext.Provider value={[selectedArticle, setSelectedArticle]}>
            {children}
        </ArticleContext.Provider>
    );
}
