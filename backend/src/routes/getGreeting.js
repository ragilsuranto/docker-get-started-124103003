const GREETING = 'HALLO GAIS!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
