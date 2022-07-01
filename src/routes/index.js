const router = require('express').Router();
const p4 = require('./p4.js')

router.use("/p4", p4);

router.get('/', (req,res)=>{
    res.json({
        message: "Persona API avail' Endpoints:",
        endpoints: {
        "/p1": "Revelations: Persona (501)",
        "/p2": "Persona 2: Innocent Sin (501)",
        "/p3": "Persona 3 (501)",
        "/p3": "Persona 3 FES (501)",
        "/p3p": "Persona 3 Portable (501)",
        "/p4": "Persona 4 (501)",
        "/p4g": "Persona 4 The Golden (501)",
        "/p5": "Persona 5(501)",
        "/p5s": "Persona 5 Striker (501)",
        "/p5r": "Persona 5 Royal (501)",
        },
        info: {
            "(200)": "Available",
            "(501)": "Not Implemented",
            "(Incomplete)": "Endpoints is a work in progress, might be inacurate or incomplete",
        }
    })
})

module.exports = router