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