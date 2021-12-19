import { writable } from "svelte/store";
export const parks = writable([]);
const fetchParks = async () => {
    const data = await(await fetch("http://localhost:8080/park")).json();
    parks.set(data.slice(0,1));
};
fetchParks();