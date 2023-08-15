import albumLikesModel from "./model.js";

export const getUserLikesAlbum = (userId, albumId) =>
  albumLikesModel.findOne({ user: userId, albumId });
export const userLikesAlbum = (user, album, albumId) =>
  albumLikesModel.create({ user, album, albumId });
export const userUnlikesAlbum = (userId, albumId) =>
  albumLikesModel.deleteOne({ user: userId, album: albumId });
