const indexCtrl = {}

indexCtrl.index = (_, res) => res.status(200).send('Sport API')

module.exports = indexCtrl