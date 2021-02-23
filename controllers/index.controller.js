const indexCtrl = {}

indexCtrl.index = (_, res) => res.status(200).send('JWT Auth')

module.exports = indexCtrl