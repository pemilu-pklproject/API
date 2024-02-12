const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Hasil_suara = require('../database/models');

const diskStorage = multer.diskStorage({
  // konfigurasi folder penyimpanan file
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../images-folder'));
  },
  filename: function (req, file, cb) {
    const fileName = 'document-' + Date.now() + path.extname(file.originalname);
    req.fileName = fileName; // Menyimpan nama file ke dalam request untuk digunakan nanti
    cb(null, fileName);
  },
});

module.exports = {
  get_image_search: multer({ storage: diskStorage }).single('image'),
  process_image: (req, res, next) => {
    next()
  },
  upload_to_bucket: async (req, res, next) => {
    if (!req.file) {
      return res.status(400).json({status: false, msg: 'File gambar dengan nama document tidak ditemukan'})
    }

    if (!req.file.mimetype.includes('image')) {
      fs.unlinkSync(req.file.path);
      return res.status(400).json({status: false, msg: 'File yang diunggah harus berupa gambar'})
    }

    try {
      const { path, filename } = req.file;
      const hasilSuaraId = req.body.id; 
      
      await Hasil_suara.update({ gambar: req.fileName }, { where: { id: hasilSuaraId } });

      fs.unlinkSync(path);
      next();
    } catch (err) {
      console.log(err);
      res.status(500).json({status: false, msg: 'Gagal menyimpan gambar ke dalam model Hasil_suara'});
    }
  }
};
