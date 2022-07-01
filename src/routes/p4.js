const router = require('express').Router();
const character = require("../json/p4/PC.json");
const npc = require("../json/p4/NPC.json");
const persona = require("../json/p4/persona.json");
const schoolAns = require("../json/p4/school-answers.json");

/*
/ ペルソナ4ルート。
/ すべてのエンドポイントが一覧表示されます。
/
/ Persona 4 root endpoint
/ Will be used to list all the endpoint
/
*/
router.get('/', (req, res) => {
    res.json({
        message: "Persona 4 EndPoints.",
        WIP: true
    })
});

// カレンダー情報を取得する
// calandar/month/day
// Wish me luck...
router.get('/calandar/:month/:day', (req, res) => {
    res.json({
        error: 501
    })
});

// プレイ可能なキャラクター情報を入手する
// Get playable Character information
router.get('/character/playable/:name', async(req, res) => {
    const CharName = req.params.name
    await character.forEach(char => {
        if (char.id.toLowerCase() == CharName.toLowerCase()) {
            var charInfo = char
            res.json({
                Info: charInfo
            })
        }
    });
});

// ノンプレイキャラクター情報を入手する
// Get non-playable characters information
router.get('/character/npc/:name', async(req, res) => {
    const CharName = req.params.name
    await npc.forEach(char => {
        if (char.Name.toLowerCase().split(" ").join("_") == CharName.toLowerCase()) {
            var charInfo = char
            res.json({
                Info: charInfo
            })
        }
    });
});

//ペルソナ情報を取得する
// Get persona information
router.get('/persona/:name', async(req, res) => {
    const PersonaName = req.params.name
    await persona.forEach(char => {
        if (char.Name.toLowerCase().split(" ").join("_") == PersonaName.toLowerCase()) {
            var personaInfo = char
            res.json({
                Info: personaInfo
            })
        }
    });
});

// 学校の回答を得る
// Get School Answer
router.get('/answer', (req, res) => {
    schoolAns.forEach(ans => {
        console.log(ans)
    })
})

module.exports = router