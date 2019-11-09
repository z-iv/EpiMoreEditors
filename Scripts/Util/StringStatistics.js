const StringStatistics = (value) => {
    const original = typeof value === "string" ? value : "";
    const trimmed = original.trim();
    return {
        paragraphs: trimmed ? (trimmed.match(/\n+/g) || []).length + 1 : 0,
        words: trimmed ? (trimmed.replace(/['";:,.?¿\-!¡]+/g, "").match(/\S+/g) || []).length : 0,
        characters: trimmed ? trimmed.replace(/\s/g, "").length : 0
    };
};

export default StringStatistics;