export interface ICustomer {
    customerId: number;
    name: string;
    adress: string;
    orderId?: number;
    customerSince?: any;
}

export interface IProduct {
    productId: number;
    name: string;
    quantity: number;
    description: string;
    cost: number;
    category: string;
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
