function getFrameTotal(scores) {
    return scores[0] && scores.reduce((sum, score) => sum + (score || 0), 0);
}

export default getFrameTotal;