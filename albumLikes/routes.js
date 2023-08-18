import * as likesDao from "./dao.js";
import * as albumDao from "../albums/dao.js";

function AlbumLikesRoutes(app) {
  const userLikesAlbum = async (req, res) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    const userId = currentUser._id;
    const albumId = req.params["albumId"];

    const likes = await likesDao.getUserLikesAlbum(userId, albumId);
    if (likes) {
      res.sendStatus(200);
      return;
    }

    let album = await albumDao.getAlbumByAlbumId(albumId);
    if (!album) {
      album = await albumDao.createAlbum(req.body);
    }

    const actualLikes = await likesDao.userLikesAlbum(
      userId,
      album._id,
      albumId
    );
    res.json(actualLikes);
  };

  const getLikesForUser = async (req, res) => {
    const userId = req.params.userId;
    const likes = await likesDao.getLikesForUser(userId);
    res.json(likes);
  };
  const getLikesForAlbum = async (req, res) => {
    const albumId = req.params.albumId;
    const likes = await likesDao.getLikesForAlbum(albumId);
    res.json(likes);
  };
  app.get("/api/albums/:albumId/likes", getLikesForAlbum);
  app.get("/api/users/:userId/likes", getLikesForUser);
  app.post("/api/albums/:albumId/likes", userLikesAlbum);
}

export default AlbumLikesRoutes;
