const express = require('express');
const router = express.Router();

const ActiveDebate = require('../models/activeDebate');

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


module.exports = router;