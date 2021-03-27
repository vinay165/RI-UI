import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export async function getSchools() {
    try {
        return await axios.get(`${BASE_URL}/School`);
    } catch (error) {
        console.error(error);
    }
}

export async function editSchool(school) {
    try {
        return await axios.put(`${BASE_URL}/School`, school);
    } catch (error) {
        console.error(error);
    }
}

export async function deleteSchool(id) {
    try {
        return await axios.delete(`${BASE_URL}/School`, {
            params: { id }
        });
    } catch (error) {
        console.error(error);
    }
}
