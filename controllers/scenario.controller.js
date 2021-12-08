const Scenario = require('../models/scenario.model');

const scenarioCtrl = {};

// Get all scenarios
scenarioCtrl.getScenarios = async (req, res) => {
    const scenarios = await Scenario.find();
    res.json(scenarios);
}

// Get a single scenario
scenarioCtrl.getScenario = async (req, res) => {
    const scenario = await Scenario.findById(req.params.id);
    res.json(scenario);
}

// Create a new scenario
scenarioCtrl.createScenario = async (req, res) => {
    const scenario = new Scenario(req.body);
    await scenario.save();
    res.json({
        'status': 'Scenario saved'
    });
}

// Update a scenario
scenarioCtrl.updateScenario = async (req, res) => {
    const { id } = req.params;
    const scenario = {
        // name: req.body.name,
        // description: req.body.description,
        // steps: req.body.steps
    };
    await Scenario.findByIdAndUpdate(id, {$set: scenario}, {new: true});
    res.json({status: 'Scenario updated'});
}

// Delete a scenario
scenarioCtrl.deleteScenario = async (req, res) => {
    await Scenario.findByIdAndRemove(req.params.id);
    res.json({status: 'Scenario deleted'});
}

module.exports = scenarioCtrl;