export interface ICustomer {
    customerId: number;
    name: string;
    adress: string;
    orderId?: number;
    customerSince?: any;
}

export interface IProduct {
    productId: number;
    category: string;
    name: string;
    quantity: number;
    description: string;
    cost: number;
}

export interface IOrder {
    customerId: number;
    orderItems: IOrderItem[];
}

export interface IOrderItem {
    orderItemId: number;
    orderItemIName: string;
    quantity: number;
    orderItemCost: number;
}

export interface ICartProduct {
    productId: number;
    quantity: number;
}
