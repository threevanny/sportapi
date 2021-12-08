const Team = require('../models/team.model')
const teamCtrl = {};

// Get all teams
teamCtrl.getTeams = async (req, res) => {
    const teams = await Team.find();
    res.json(teams);
};

// Get a team
teamCtrl.getTeam = async (req, res) => {
    const team = await Team.findById(req.params.id);
    res.json(team);
};

// Create a team
teamCtrl.createTeam = async (req, res) => {
    const team = new Team(req.body);
    await team.save();
    res.json({
        'status': 'Team saved'
    });
}

// Update a team
teamCtrl.updateTeam = async (req, res) => {
    const { id } = req.params;
    const team = {
        // name: req.body.name,
        // description: req.body.description,
        // image: req.body.image,
        // members: req.body.members
    };
    await Team.findByIdAndUpdate(id, {$set: team}, {new: true});
    res.json({
        'status': 'Team updated'
    });
}

// Delete a team
teamCtrl.deleteTeam = async (req, res) => {
    await Team.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Team deleted'
    });
}

module.exports = teamCtrl;