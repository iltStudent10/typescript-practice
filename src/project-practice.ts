interface User {
    name: string;
    email: string;
}

interface Product {
    id: number;
    name: string;
    price: number;
}

interface Order {
    orderId: number;
    user: User;
    products: Product[];
    total: number;
}

function filterByProperty<T, K extends keyof T>(objects: T[], key: K, value: T[K]): T[] {
    return objects.filter(obj => obj[key] === value);
}