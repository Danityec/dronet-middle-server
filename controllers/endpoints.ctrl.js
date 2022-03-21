let yaw = 0, throttle = 0, roll = 0, pitch = 0;

exports.controller = {
    getRemote(req, res) {
        yaw = req.query.yaw ? req.query.yaw : yaw
        throttle = req.query.throttle ? req.query.throttle : throttle
        roll = req.query.roll ? req.query.roll : roll
        pitch = req.query.pitch ? req.query.pitch : pitch
        res.sendStatus(200);   
    },

    sendRemote(req, res) {
        res.set({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        });
        res.json({
            "yaw":yaw,
            "throttle":throttle,
            "roll":roll,
            "pitch":pitch
        })
    }
};
