
//insert kandidat
const insertKandidat = async (req, res) => {
    try {
        res.json({
            status: true,
            statusCode: 200,
            data: req.body
        });
        console.log("berhasil");
    } catch (err) {
        console.error(err);
        res.status(500).send("Failed");
    }
};

module.exports = {
    insertKandidat
}