let yaw = 0, throttle = 0, roll = 0, pitch = 0;

// exports.controller = {
//     getRemote(req, res) {
//         yaw = req.query.yaw ? req.query.yaw : yaw
//         throttle = req.query.throttle ? req.query.throttle : throttle
//         roll = req.query.roll ? req.query.roll : roll
//         pitch = req.query.pitch ? req.query.pitch : pitch
//         res.sendStatus(200);  
        
        
//     },

//     sendRemote(req, res) {
//         res.set({
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//         });
//         res.json({
//             "yaw":yaw,
//             "throttle":throttle,
//             "roll":roll,
//             "pitch":pitch
//         })


//     }
// };


const { response } = require('express');
const axios = require('axios');

exports.controller = {
    getRemote(req, res) {
        const localYaw = req.query.yaw ? req.query.yaw : yaw
        const localThrottle = req.query.throttle ? req.query.throttle : throttle
        const localRoll = req.query.roll ? req.query.roll : roll
        const localPitch = req.query.pitch ? req.query.pitch : pitch

        axios.get(`https://dronet-simulation.herokuapp.com/api/remote/get?yaw=${localYaw}&throttle=${localThrottle}&roll=${localRoll}&pitch=${localPitch}`)
        .then(function (response) {
            res.sendStatus(200); 
        })
        .catch(function (error) {
            console.log(error);
        })
    },

    sendRemote(req, res) {

        axios.get(`https://dronet-simulation.herokuapp.com/api/remote/send`)
        .then(function (response) {
            let data = response
            res.set({
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            });
            res.json({
                "yaw": data.yaw,
                "throttle": data.throttle,
                "roll": data.roll,
                "pitch": data.pitch
            })
        })
        .catch(function (error) {
            console.log(error);
        })
    }
};