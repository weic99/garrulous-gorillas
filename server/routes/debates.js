const express = require('express');
const router = express.Router();

const ActiveDebate = require('../models/activeDebate');
const DebateArg = require('../models/debateArg');

router.post('/api/post', (req, res) => {

  const newDebate = new ActiveDebate({
    topic: req.body.topic
  });

  // Save into activeDebate table only, for creating a new debate topic
  ActiveDebate.add(newDebate, (err, data) => {
    if (err) {
      res.json({
        success: false,
        msg: `Failed to add activedebate: ${newDebate.topic}`
      });
    } else if (data) {
      res.json({
        success: true,
        msg: `New activedebate ${newDebate.topic} is added`
      });
    }
  });
});

router.get('/api/get', (req, res) => {

  ActiveDebate.getAll((err, data) => {
    if (err) {
      res.json({
        success: false,
        msg: `Failed to get all debates`
      });
    } else if (data) {
      console.log('DEBATES / GET success! data:', data);
      res.json({
        success: true,
        msg: `Got all debates success!`,
        data: data
      });
    }
  });
});

router.post('/api/postArg', (req, res) => {

  const newArgument = new DebateArg({
    body: req.body.argumentBody,
    votes: 0,
    debateTopic: req.body.topic,
    debateSide: req.body.side
  });

  DebateArg.addArgument(newArgument, (err, data) => {
    if (err) {
      res.json({
        success: false,
      });
    } else if (data) {
      console.log('POST arguments success!', data);
      res.json({
        success: true,
        data: data
      });
    }
  });

  // TODO later: supposed to add to activeDebate's debateArgs array
  // ActiveDebate.addToArgumentToDebate(newArgument, (err, data) => {
  // });

});

router.get('/api/getArgs', (req, res) => {
  console.log('ATTEMPT get args', req.query);

  const topic = req.query.topic;
  const side = req.query.side;

  DebateArg.getArgsByTopicAndSide(topic, side, (err, data) => {
    if (err) {
      res.json({
        success: false
      });
    } else if (data) {
      console.log('GET arguments success!', data);
      res.json({
        success: true,
        data: data
      });
    }
  });
});

router.get('/api/getVotes', (req, res) => {

});

module.exports = router;