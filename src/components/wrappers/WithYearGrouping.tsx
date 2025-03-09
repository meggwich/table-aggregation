// Функция для преобразования данных для YearTable
interface DataItem {
    date: string;
    amount: number;
}

const yearTransform = (data: DataItem[]) => {
    if (!data || !data.length) return [];
    
    // Создаем объект для хранения суммы по годам
    const yearlyData: { [key: number]: number } = {};
    
    // Группировка по годам
    data.forEach(item => {
        const year = new Date(item.date).getFullYear();
        
        if (!yearlyData[year]) {
            yearlyData[year] = 0;
        }
        
        yearlyData[year] += item.amount;
    });
    
    // Преобразование в массив и сортировка по годам
    return Object.entries(yearlyData)
        .map(([year, amount]) => ({
            year: parseInt(year),
            amount
        }))
        .sort((a, b) => a.year - b.year);
};

export default yearTransform;