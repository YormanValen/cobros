import env from '@/env';
import { useAuthStore } from '@/stores/auth';
import axios from 'axios';

const awsEndpointPrefijo = env.AWS_ENDPOINT_PREFIJO;

export const getUser = async (journalID: any) => {
    const authStore = useAuthStore();
    const token = authStore.user.token;
    try {
        const response = await axios.get(`${awsEndpointPrefijo}/core/journal/${journalID}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        return null;
    }
};
