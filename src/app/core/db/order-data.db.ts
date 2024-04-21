import {Order} from '../../interfaces/common/order.interface';

export const ALL_ORDERS: Order[] = [
  {
    "_id": "64ad4404b10bad750b4a5d40",
    "orderId": "0241",
    "name": "Alex Jonson",
    "phoneNo": "01630630899",
    "shippingAddress": "Mirpur",
    "paymentType": "cash_on_delivery",
    "paymentStatus": "paid",
    "orderedItems": [
      {
        "category": {
          "_id": "6422b0576708a38c66b461d9",
          "name": "Ladies Collections",
          "slug": "ladies-collections"
        },
        "subCategory": {
          "_id": "6422ba4d6708a38c66b4655a",
          "name": "Purse",
          "slug": "ladies-collections"
        },
        "brand": {
          "_id": "6422ab726708a38c66b460b3",
          "name": "Soft Commerce",
          "slug": "ladies-collections"
        },
        "_id": "642d371017667cfb5e1fa913",
        "name": "Leather Purse for Women | LW-1033",
        "slug": "purse_for_women_lw_1033",
        "image": "/assets/images/temp/order/genuine-leather-backpack-for-women-lb-1002-2-1231.webp",
        "regularPrice": 700,
        "unitPrice": 700,
        "quantity": 1,
        "orderType": "regular",
      }
    ],
    "subTotal": 700,
    "deliveryCharge": 50,
    "discount": 0,
    "totalSave": 500,
    "grandTotal": 750,
    "discountTypes": [],
    "checkoutDate": "2023-07-11",
    "orderStatus": 2,
    "hasOrderTimeline": false,
    "orderTimeline": null,
    "user": "64abdc83b10bad750b4a56ff",
    "coupon": null,
    "couponDiscount": 0,
    "createdAt": "2023-07-11T11:59:00.105Z",
    "deliveryDate": null,
    "city": 'Dhaka',
    "email": 'alexjonson@gmail.com',
  }
]
