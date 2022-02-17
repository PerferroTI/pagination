import axios from "axios";
import { useEffect, useState } from "react";
import {api} from '../hooks/api'

export function useApi<T = unknown> (url: string) {
    const [data, setData] = useState<T | null>(null);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        api.get(url)
        .then(response => {
            setData(response.data)
        })
        .finally(() => {
            setIsFetching(false)
        })
    }, [])

    return {data, isFetching}
}
