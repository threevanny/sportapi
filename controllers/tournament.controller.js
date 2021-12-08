const Tournament = require('../models/tournament.model');
const tournamentCtrl = {};

// Get all tournaments
tournamentCtrl.getTournaments = async (req, res) => {
    const tournaments = await Tournament.find();
    res.json(tournaments);
}

// Get a tournament
tournamentCtrl.getTournament = async (req, res) => {
    const tournament = await Tournament.findById(req.params.id);
    res.json(tournament);
}

//  Create a tournament
tournamentCtrl.createTournament = async (req, res) => {
    const tournament = new Tournament(req.body);
    await tournament.save();
    res.json({
        'status': 'Tournament saved'
    });
}

// Update a tournament
tournamentCtrl.updateTournament = async (req, res) => {
    const { id } = req.params;
    const tournament = {
        // name: req.body.name,
        // date: req.body.date,
        // place: req.body.place,
        // description: req.body.description,
        // image: req.body.image
    };
    await Tournament.findByIdAndUpdate(id, {$set: tournament}, {new: true});
    res.json({
        'status': 'Tournament updated'
    });
}

// Delete a tournament
tournamentCtrl.deleteTournament = async (req, res) => {
    await Tournament.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Tournament deleted'
    });
}

module.exports = tournamentCtrl;