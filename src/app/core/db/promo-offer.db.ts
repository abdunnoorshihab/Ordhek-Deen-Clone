
import {PromoOffer} from "../../interfaces/common/promo-offer.interface";
import {ALL_PRODUCTS} from './all-products.db';

// Next Date for Offer End
const nextDay = new Date();
nextDay.setDate(nextDay.getDate() + 30);


export const ALL_PROMO_OFFERS: PromoOffer[] =
  [
    {
      "_id": "6433251317667cfb5e205778",
      "title": "Hot Sale Offer!",
      "slug": "samo_leather_eid_fest_30_to_70_discount_with_gift_",
      "description": "🎉স্যামো লেদার ঈদ ফেস্ট !!🎉\nসকল পণ্যে ৩০-৭০% পর্যন্ত মূল্য ছাড় !! 🔥\nসাথে থাকছে ফ্রী গিফট!\nআর কি চাই?\nবিস্তারিত জানতে কল করুন ☎️- ০১৭১৭-৫৭৪৮৬৯\nঅনলাইন অর্ডার করতে ভিজিট করুন-\nhttps://samoleather.com/ \n৳১০০০+ অর্ডারে একটি চাবির রিং সম্পুর্ন ফ্রী\n৳২০০০+ অর্ডারে একটি চাবির রিং ও একটি কার্ড হোল্ডার সম্পুর্ন ফ্রী\n৳৩৫০০+ অর্ডারে একটি চাবির রিং, একটি কার্ড হোল্ডার ও একটি ওয়ালেট সম্পুর্ন ফ্রী\n৳৫০০০+ অর্ডারে একটি চাবির রিং, একটি কার্ড হোল্ডার, একটি ওয়ালেট ও একটি বেল্ট সম্পুর্ন ফ্রী\n🏃‍♂️🏃সরাসরি কিনতে চলে আসুন আমাদের মোহাম্মদপুর আউটলেট এ।\nঠিকানা: শপ নং-৪১/৪২, সাত মসজিদ সুপার মার্কেট, বাশ বাড়ি রোড, মোহাম্মদপুর (বাস স্ট্যান্ড), ঢাকা-১২০৭",
      "bannerImage": "/assets/images/temp/banner/offer-banner.jpg",
      "startDateTime": "2023-04-10T20:39:56.000Z",
      "endDateTime": nextDay,
      "products": ALL_PRODUCTS.slice(0,8),
      "createdAt": "2023-04-09T20:50:27.752Z"
    },
    {
      "_id": "6459679b17667cfb5e240645",
      "title": "Big Discount Offer",
      "slug": "samo_leather_summer_sale_30_to_60_",
      "description": "Soft Commerce is the perfect place to shop for genuine leather goods. We have a wide selection of office bags, laptop bags, backpacks, messenger bags, belts, wallets, and jackets made from cow leather. Our prices are unbeatable, and we offer discounts on top of our already low prices. Shop with us today and see why we're the best!",
      "bannerImage": "/assets/images/temp/banner/offer-banner2.webp",
      "startDateTime": "2023-05-08T21:15:08.123Z",
      "endDateTime": nextDay,
      "products":  ALL_PRODUCTS.slice(10,18),
      "createdAt": "2023-05-08T21:20:28.095Z"
    },
  ]



