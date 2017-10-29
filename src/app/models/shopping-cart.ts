import { ShoppingCartItem } from "./shopping-cart-item";

/* 
    ABOUT ME: The purpose of this class is to provide some logic for a shopping cart
    and what properties it has. The Shopping cart we get from the database will be of
    this type.
*/
export class ShoppingCart {
    items:ShoppingCartItem[];//represents items in shopping cart.
    constructor(public itemsMap:{[productId:string]:ShoppingCartItem},public dateCreated:Date) {
        //we need to initialize items array, so we can use this in other components.
        this.initializeItemsArray();
    }

    private initializeItemsArray() {
        this.items = [];
        for(let eachProductId in this.itemsMap) {
            let item = this.itemsMap[eachProductId];
            let shoppingCartItem:ShoppingCartItem = new ShoppingCartItem(item.product,item.quantity);
            this.items.push(shoppingCartItem);
        }
    }

    //TODO: Fix localStorage issue with shopping cart
    /*Adds up the quantity of each item in shopping cart. 
        This is used to display the badge on the toolbar.
    */
    getTotalNumberOfItems():number {
        let totalNumberOfItems = 0;
        for(let eachProductId in this.itemsMap)
            totalNumberOfItems += this.itemsMap[eachProductId].quantity;
        return totalNumberOfItems;
    }

    getTotalPrice():number {
        let totalPrice:number = 0;
        this.items.forEach((item:ShoppingCartItem) => {
            totalPrice += item.getTotalPrice();
        });
        return totalPrice;
    }

}