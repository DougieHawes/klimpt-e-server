export const createImage = (req, res) => {
  res.status(200).json({ msg: "createImage" });
};

export const getImage = (req, res) => {
  const { imageId } = req.params;
  res.status(200).json({ msg: `getImage ${imageId}` });
};

export const getUserImages = (req, res) => {
  res.status(200).json({ msg: "getUserImages" });
};

export const getImages = (req, res) => {
  res.status(200).json({ msg: "getImages" });
};

export const deleteImage = (req, res) => {
  const { imageId } = req.params;
  res.status(200).json({ msg: `deleteImage ${imageId}` });
};
