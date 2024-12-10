import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img 
        className="logo"
        src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-modern-logos-of-food-carts-png-image_5366854.jpg" 
        alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
};

const ResturantCard = (props) => {
  const {resData} = props;
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.card.info;
  return (
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img 
      className="res-logo"
      src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.card.info.cloudinaryImageId} 
      alt="res-logo" 
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.card.info.sla.deliveryTime} mins</h4>
    </div>
  )
};

const resList = [
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "537139",
        name: "Narmada Chain of Restaurant",
        cloudinaryImageId:
          "FOOD_CATALOG/IMAGES/CMS/2024/8/31/6de6ccb7-887b-4631-90b7-289861a24f95_afd86359-6904-4e52-b4a0-0090c87b94ba.jpg",
        locality: "Koramangala",
        areaName: "Koramangala",
        costForTwo: "₹500 for two",
        cuisines: ["Biryani", "Andhra", "South Indian"],
        avgRating: 4.5,
        parentId: "410569",
        avgRatingString: "4.5",
        totalRatingsString: "10K+",
        promoted: true,
        adTrackingId:
          "cid=22465951~p=0~adgrpid=22465951#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=537139~eid=7cfa4506-e64c-481c-9c5a-f598977991fd~srvts=1733847658526~collid=83639",
        sla: {
          deliveryTime: 52,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "50-55 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-12-11 02:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textExtendedBadges: {},
            textBased: {},
          },
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            text: "BENEFITS",
            logo: "v1634558776/swiggy_one/OneLogo_3x.png",
          },
          freedelMessage: "FREE DELIVERY",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "2.0K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        campaignId: "22465951",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=537139&source=collection&query=Biryani",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD",
    },
  },

  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "229",
        name: "Meghana Foods",
        cloudinaryImageId: "iivuhjc2mswi9lublktf",
        locality: "Koramangala",
        areaName: "Koramangala",
        costForTwo: "₹500 for two",
        cuisines: ["Biryani", "Andhra", "South Indian", "Chinese", "Seafood"],
        avgRating: 4.6,
        parentId: "635",
        avgRatingString: "4.6",
        totalRatingsString: "179K+",
        sla: {
          deliveryTime: 53,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "50-55 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-12-11 02:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Biryani.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId: "Rxawards/_CATEGORY-Biryani.png",
                    description: "Delivery!",
                  },
                },
              ],
            },
            textExtendedBadges: {},
          },
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            text: "BENEFITS",
            logo: "v1634558776/swiggy_one/OneLogo_3x.png",
          },
          freedelMessage: "FREE DELIVERY",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "20K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=229&source=collection&query=Biryani",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD",
    },
  },

  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "426",
        name: "Hotel Empire",
        cloudinaryImageId: "10f8b483521b9359d9c8fcd37f23c9d3",
        locality: "HSR Layout",
        areaName: "HSR Layout",
        costForTwo: "₹450 for two",
        cuisines: ["Kebabs", "Biryani"],
        avgRating: 4.3,
        parentId: "475",
        avgRatingString: "4.3",
        totalRatingsString: "79K+",
        promoted: true,
        adTrackingId:
          "cid=22494879~p=1~adgrpid=22494879#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=426~eid=0220c6ac-8986-431b-8b0b-e5345dbc7140~srvts=1733847658526~collid=83639",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 1.3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "1.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-12-11 02:45:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-North%20Indian.png",
              description: "Delivery!",
            },
            {
              imageId: "bolt/Bolt%20Listing%20badge@3x.png",
              description: "bolt!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                    description: "Delivery!",
                  },
                },
                {
                  attributes: {
                    imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                    description: "bolt!",
                  },
                },
              ],
            },
            textExtendedBadges: {},
            textBased: {},
          },
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            text: "BENEFITS",
            logo: "v1634558776/swiggy_one/OneLogo_3x.png",
          },
          freedelMessage: "FREE DELIVERY",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "31K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        campaignId: "22494879",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=426&source=collection&query=Biryani",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD",
    },
  },

  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "194610",
        name: "Mani's Dum Biryani",
        cloudinaryImageId:
          "FOOD_CATALOG/IMAGES/CMS/2024/3/27/bc960282-e31e-4e77-97e9-6c6ec9cec813_c46e6499-a9ca-43e8-91d5-85aa6f0afa15.jpg",
        locality: "HSR Layout\t",
        areaName: "HSR Layout",
        costForTwo: "₹300 for two",
        cuisines: ["Andhra", "Biryani", "North Indian"],
        avgRating: 4.5,
        parentId: "623",
        avgRatingString: "4.5",
        totalRatingsString: "13K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 1.6,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "1.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-12-10 23:45:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/Bolt%20Listing%20badge@3x.png",
              description: "bolt!",
            },
          ],
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                  },
                },
              ],
            },
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    shortDescription: "options available",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                  },
                },
              ],
            },
            textBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹50 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            text: "BENEFITS",
            logo: "v1634558776/swiggy_one/OneLogo_3x.png",
          },
          freedelMessage: "FREE DELIVERY",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "1.5K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=194610&source=collection&query=Biryani",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD",
    },
  },

  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "709170",
        name: "Imperio Restaurant",
        cloudinaryImageId:
          "FOOD_CATALOG/IMAGES/CMS/2024/5/14/3aac561e-583e-4618-98f4-258eda870c86_ff2bba69-6f22-4b87-a960-e893eba1277e.jpg",
        locality: "Sector 2",
        areaName: "HSR",
        costForTwo: "₹500 for two",
        cuisines: [
          "Biryani",
          "Kebabs",
          "South Indian",
          "Tandoor",
          "Beverages",
          "Ice Cream",
          "North Indian",
          "Desserts",
        ],
        avgRating: 4.2,
        parentId: "5610",
        avgRatingString: "4.2",
        totalRatingsString: "7.9K+",
        promoted: true,
        adTrackingId:
          "cid=22465969~p=2~adgrpid=22465969#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=709170~eid=8f788b38-05f6-4f7f-bfe6-fad408ff05ba~srvts=1733847658526~collid=83639",
        sla: {
          deliveryTime: 45,
          lastMileTravel: 2.5,
          serviceability: "SERVICEABLE",
          slaString: "40-45 mins",
          lastMileTravelString: "2.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-12-11 04:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textExtendedBadges: {},
            textBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹100 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            text: "BENEFITS",
            logo: "v1634558776/swiggy_one/OneLogo_3x.png",
          },
          freedelMessage: "FREE DELIVERY",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        campaignId: "22465969",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=709170&source=collection&query=Biryani",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD",
    },
  },

  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "108097",
        name: "Ambur Star Briyani Since 1890",
        cloudinaryImageId:
          "FOOD_CATALOG/IMAGES/CMS/2024/4/13/6aa31197-769b-4d46-aabe-dac4aa1b47d2_fe4708f2-8937-4d5d-8e89-67a3a0129cb2.jpg",
        locality: "2nd Stage",
        areaName: "BTM Layout",
        costForTwo: "₹500 for two",
        cuisines: ["Biryani", "Chettinad", "Andhra", "Beverages", "Seafood"],
        avgRating: 4.4,
        parentId: "21400",
        avgRatingString: "4.4",
        totalRatingsString: "20K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-12-11 00:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    shortDescription: "options available",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹50 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            text: "BENEFITS",
            logo: "v1634558776/swiggy_one/OneLogo_3x.png",
          },
          freedelMessage: "FREE DELIVERY",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=108097&source=collection&query=Biryani",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD",
    },
  },

  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "115918",
        name: "Oottupura",
        cloudinaryImageId: "erfmzrfq4daulyf4opkv",
        locality: "Maruthi Nagar",
        areaName: "Btm Layout",
        costForTwo: "₹268 for two",
        cuisines: ["Kerala", "South Indian"],
        avgRating: 4.4,
        parentId: "7485",
        avgRatingString: "4.4",
        totalRatingsString: "14K+",
        promoted: true,
        adTrackingId:
          "cid=22464183~p=3~adgrpid=22464183#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=115918~eid=7d720072-0cc6-4235-a41e-9db3bba8233d~srvts=1733847658526~collid=83639",
        sla: {
          deliveryTime: 37,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-12-10 22:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹50 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            text: "BENEFITS",
            logo: "v1634558776/swiggy_one/OneLogo_3x.png",
          },
          freedelMessage: "FREE DELIVERY",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        campaignId: "22464183",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=115918&source=collection&query=Biryani",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD",
    },
  },
]

const Body = () => {
  return (
    <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      {resList.map((resturant) => ( <ResturantCard key={resturant.card.info.id} resData={resturant}/>))}
    </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);


// const heading = React.createElement('h1', 
//     {id: "heading", abc: "xyz"}, 
//     "Hellow World! from React!"
// );


/**
 *  <div id="parent">
 *      <div id="child">
 *          <h1>I am child</h1>
 *          <h2>I am child</h2>
 *      </div>
 *      <div id="child">
 *          <h1>I am child</h1>
 *          <h2>I am child</h2>
 *      </div>
 * 
 * </div>
 */

// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am child 1 🚀"),
//     React.createElement("h2", {}, "I am child 2"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am child"),
//     React.createElement("h2", {}, "I am child 2"),
//   ])
// ]
// );