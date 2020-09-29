module.exports = function check(str, bracketsConfig) {
    return !str
        .split("")
        .reduce(
            (accum, br) =>
                (br === bracketsConfig.find((b) => b.includes(br))[1] &&
                bracketsConfig.find((b) => b.includes(br))[0] ===
                    accum[accum.length - 1]
                    ? accum.pop()
                    : accum.push(br),
                true) && accum,
            []
        ).length;
};
