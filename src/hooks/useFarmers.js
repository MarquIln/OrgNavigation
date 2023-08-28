import { useState, useEffect } from 'react';

import { loadFarmers } from '../services/loadData';

export default function useFarmers ( bestFarmers ) {
    const [list, setList] = useState([]);

    useEffect(() => {
        const callback = loadFarmers();
        callback.list.sort(
            (farmer1, farmer2) => farmer1.distancia - farmer2.distancia,
        );
        let newList = callback.list;
        
        if (melhoresProdutores) {
            newList = newList.filter(
                (produtor) => produtor.estrelas > 3
            );
        }
        setLista(newList);
    }, []);

    return list;
}
