interface YearTableProps {
    list: { year: number; amount: number }[];
}

function YearTable(props: YearTableProps) {
    console.log('YearTable', props);
    return (
        <div>
            <h2>Year Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map((item, index) => (
                        <tr key={index}>
                            <td>{item.year}</td>
                            <td>{item.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default YearTable;