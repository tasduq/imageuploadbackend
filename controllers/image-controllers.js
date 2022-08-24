const Images = require("../Models/Images");

const postImages = async (req, res) => {
  //   console.log(req.body);
  const { images } = req.body;

  if (images && images.length > 0) {
    const createdImages = new Images({
      images,
    });

    try {
      createdImages.save((err) => {
        if (err) {
          res.json({
            success: false,
            data: err,
            message: "Saving Images Failed",
          });
          return;
        } else {
          res.send({
            success: true,
            message: "Images got saved",
          });
        }
      });
    } catch (err) {
      res.json({
        success: false,
        data: err,
        message: "Saving images Failed",
      });
      return;
    }
  } else {
    res.json({ success: false, message: "Images not found" });
  }
};

const getImages = async (req, res) => {
  let foundImages = await Images.find();
  console.log(foundImages.length);
  if (foundImages) {
    res.json({
      success: true,
      message: "Images found",
      images: foundImages,
    });
  } else {
    res.json({ success: false, message: "Images not found" });
  }
};

module.exports = {
  postImages,
  getImages,
};
