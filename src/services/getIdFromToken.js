import { jwtDecode } from "jwt-decode";

export function getIdFromToken(token) {
    const {id} = jwtDecode(token);
    return id
}