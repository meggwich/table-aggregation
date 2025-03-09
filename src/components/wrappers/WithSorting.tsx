// Функция для преобразования данных для SortTable
const sortTransform = (data: { amount: number }[]) => {
    if (!data || !data.length) return [];
    
    // Сортировка по убыванию amount
    return [...data].sort((a, b) => b.amount - a.amount);
};

export default sortTransform;