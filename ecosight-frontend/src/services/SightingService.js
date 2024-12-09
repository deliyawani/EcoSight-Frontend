import axios from "axios";

const CREATE_URL = 'http://localhost:8080/sightings/create';

const ALL_SIGHTINGS_URL = 'http://localhost:8080/sightings/all';

const FILE_UPLOAD_URL = 'http://localhost:8080/upload/files';

const VIEW_SIGHTING_URL = 'http://localhost:8080/sightings/';

const USERS_SIGHTINGS_URL = 'http://localhost:8080/sightings/user/'

const EXPORT_SIGHTINGS_URL = 'http://localhost:8080/sightings/export/csv';

export const newSighting = (sighting, header) => axios.post(CREATE_URL, sighting, header);

export const allSightings = (header) => axios.get(ALL_SIGHTINGS_URL, header);

export const fileUpload = (file) => axios.post(FILE_UPLOAD_URL, file);

export const viewSighting = (id, header) => axios.get(VIEW_SIGHTING_URL + id, header);

export const deleteSighting = (id, header) => axios.delete(VIEW_SIGHTING_URL + id, header);

export const updateSighting = (id, status, header) => axios.patch(VIEW_SIGHTING_URL + id + '/status', status, header);

export const usersSightings = (id, header) => axios.get(USERS_SIGHTINGS_URL + id, header);

export const exportSightings = (header) => axios.get(EXPORT_SIGHTINGS_URL, header);