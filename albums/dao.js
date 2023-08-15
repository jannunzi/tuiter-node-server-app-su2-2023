import albumModel from "./model.js";

export const createAlbum = (album) => albumModel.create(album);
export const getAlbums = () => albumModel.find();
export const getAlbumByAlbumId = (albumId) => albumModel.findOne({ albumId });
export const getAlbumById = (id) => albumModel.findById(id);
