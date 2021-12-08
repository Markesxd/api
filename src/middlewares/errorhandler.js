module.exports = (err, req, res) => {
    res.status(500).json({erro: err.message});
}