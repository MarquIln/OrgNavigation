import { useState, useEffect } from 'react';

import { loadText } from '../services/loadData';

export default function useTexts() {
    const [texts, setTexts] = useState({});

    useEffect(() => {
        const callback = loadText();
        setTextos(callback);
    }, []);

    return texts;
}
