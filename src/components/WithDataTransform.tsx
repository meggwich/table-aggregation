// HOC для преобразования данных
import { ComponentType } from 'react';

// HOC для преобразования данных
const withDataTransform = <T,>(Component: ComponentType<T>, transformFunction: (list: T[]) => T[]) => {
    return (props: { list: T[] }) => {
        const transformedData = transformFunction(props.list);
        return <Component {...props} list={transformedData} />;
    };
};

export default withDataTransform;