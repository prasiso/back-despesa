export function dateRandom() {
    const anos = [2023, 2024, 2025];
    const ano = anos[Math.floor(Math.random() * anos.length)];
    const mes = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const dia = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
    const novaData = new Date(`${ano}-${mes}-${dia}T00:00:00`);
    return novaData
}