// Функция для преобразования данных для MonthTable
interface DataItem {
    date: string;
    amount: number;
}

// Функция для преобразования данных для MonthTable
const monthTransform = (data: DataItem[]) => {
    if (!data || !data.length) return [];
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Создаем объект для хранения суммы по месяцам
    const monthlyData: { [key: string]: number } = {};
    
    // Группировка по месяцам
    data.forEach(item => {
        const date = new Date(item.date);
        const monthIdx = date.getMonth();
        const monthName = months[monthIdx];
        
        if (!monthlyData[monthName]) {
            monthlyData[monthName] = 0;
        }
        
        monthlyData[monthName] += item.amount;
    });
    
    // Преобразование в массив и сортировка по порядку месяцев
    return months
        .filter(month => monthlyData[month] !== undefined)
        .map(month => ({
            month,
            amount: monthlyData[month]
        }));
};

export default monthTransform;