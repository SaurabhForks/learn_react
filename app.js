import React from "react";
import ReactDOM from "react-dom/client";

// const element = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I am h1"), React.createElement("h2", {}, "I am h2")]));
/**
 * Body
- Search
- Restaurant Container
- Restaurant Card
- Dish Name
- Image
- Restaurant Name
- Rating
- Cuisines
- Time to Deliver
Footer
- Copyright
- Links
- Address
- Contact
 */
const rdata = [
    {
        info: {
            id: "150591",
            name: "Satkar Restaurant",
            cloudinaryImageId: "rvxp5xbniat84r6efku2",
            locality: "Sinchai Colony",
            areaName: "Satkar Chowk",
            costForTwo: "₹250 for two",
            cuisines: [
                "North Indian",
                "South Indian",
                "Indian",
                "Salads",
                "Desserts",
            ],
            avgRating: 4.4,
            veg: true,
            parentId: "21553",
            avgRatingString: "4.4",
            totalRatingsString: "2.5K+",
            sla: {
                deliveryTime: 36,
                lastMileTravel: 11.1,
                serviceability: "SERVICEABLE",
                slaString: "35-40 mins",
                lastMileTravelString: "11.1 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2025-03-06 22:45:00",
                opened: true,
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg",
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
                                    description: "pureveg",
                                    imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                            },
                        ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "₹175 OFF",
                subHeader: "ABOVE ₹549",
                discountTag: "FLAT DEAL",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
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
        analytics: {
            context: "seo-data-a36fec40-39f3-473f-a607-b67939398beb",
        },
        cta: {
            link: "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "658210",
            name: "The Fusion Lounge",
            cloudinaryImageId: "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
            locality: "Triloki nagar",
            areaName: "Railway Station",
            costForTwo: "₹300 for two",
            cuisines: [
                "South Indian",
                "Chinese",
                "Beverages",
                "Fast Food",
                "Desserts",
            ],
            avgRating: 4.1,
            parentId: "395453",
            avgRatingString: "4.1",
            totalRatingsString: "323",
            sla: {
                deliveryTime: 55,
                lastMileTravel: 10,
                serviceability: "SERVICEABLE",
                slaString: "50-55 mins",
                lastMileTravelString: "10.0 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2025-03-06 23:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
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
        analytics: {
            context: "seo-data-a36fec40-39f3-473f-a607-b67939398beb",
        },
        cta: {
            link: "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "151649",
            name: "Hotel Sai Nath & Sai Restaurant",
            cloudinaryImageId: "vkhcohhmqfczycw9vsar",
            locality: "railway station",
            areaName: "Chhindwara Locality",
            costForTwo: "₹200 for two",
            cuisines: [
                "North Indian",
                "South Indian",
                "Chinese",
                "Beverages",
                "Fast Food",
                "Desserts",
            ],
            avgRating: 4.3,
            veg: true,
            parentId: "101802",
            avgRatingString: "4.3",
            totalRatingsString: "973",
            sla: {
                deliveryTime: 40,
                lastMileTravel: 10.3,
                serviceability: "SERVICEABLE",
                slaString: "35-40 mins",
                lastMileTravelString: "10.3 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2025-03-06 22:30:00",
                opened: true,
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg",
                    },
                ],
            },
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "pureveg",
                                    imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                            },
                        ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
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
        analytics: {
            context: "seo-data-a36fec40-39f3-473f-a607-b67939398beb",
        },
        cta: {
            link: "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "151518",
            name: "Bakery World",
            cloudinaryImageId: "mt2aggiscfl3yviatwng",
            locality: "Parasia Road",
            areaName: "Parasia Road",
            costForTwo: "₹250 for two",
            cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
            avgRating: 4.4,
            veg: true,
            parentId: "40363",
            avgRatingString: "4.4",
            totalRatingsString: "258",
            sla: {
                deliveryTime: 37,
                lastMileTravel: 11.7,
                serviceability: "SERVICEABLE",
                slaString: "35-40 mins",
                lastMileTravelString: "11.7 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2025-03-06 22:30:00",
                opened: true,
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg",
                    },
                ],
            },
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "pureveg",
                                    imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                            },
                        ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
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
        analytics: {
            context: "seo-data-a36fec40-39f3-473f-a607-b67939398beb",
        },
        cta: {
            link: "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "151656",
            name: "Dev International",
            cloudinaryImageId: "enj3srsnhbltbom2ovvh",
            locality: "khajri road",
            areaName: "Mohan Nagar",
            costForTwo: "₹100 for two",
            cuisines: ["North Indian", "Chinese", "Fast Food", "Beverages"],
            avgRating: 4.3,
            parentId: "71556",
            avgRatingString: "4.3",
            totalRatingsString: "458",
            sla: {
                deliveryTime: 59,
                lastMileTravel: 11.7,
                serviceability: "SERVICEABLE",
                slaString: "55-60 mins",
                lastMileTravelString: "11.7 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2025-03-06 22:30:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "₹150 OFF",
                subHeader: "ABOVE ₹399",
                discountTag: "FLAT DEAL",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
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
        analytics: {
            context: "seo-data-a36fec40-39f3-473f-a607-b67939398beb",
        },
        cta: {
            link: "https://www.swiggy.com/city/chhindwara/dev-international-khajri-road-mohan-nagar-rest151656",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "151515",
            name: "Gupta Bhojnalay",
            cloudinaryImageId: "jo9pdipf4elcuch8g55q",
            locality: "fulwara chowk",
            areaName: "Chhindwara Locality",
            costForTwo: "₹200 for two",
            cuisines: ["Fast Food", "Indian", "Beverages"],
            avgRating: 4,
            veg: true,
            parentId: "91635",
            avgRatingString: "4.0",
            totalRatingsString: "447",
            sla: {
                deliveryTime: 44,
                lastMileTravel: 10.8,
                serviceability: "SERVICEABLE",
                slaString: "40-45 mins",
                lastMileTravelString: "10.8 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2025-03-06 22:45:00",
                opened: true,
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg",
                    },
                ],
            },
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "pureveg",
                                    imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                            },
                        ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
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
        analytics: {
            context: "seo-data-a36fec40-39f3-473f-a607-b67939398beb",
        },
        cta: {
            link: "https://www.swiggy.com/city/chhindwara/gupta-bhojnalay-fulwara-chowk-chhindwara-locality-rest151515",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "234875",
            name: "Adil Hotel",
            cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
            locality: "Rautha Wada",
            areaName: "Chhindwara Locality",
            costForTwo: "₹150 for two",
            cuisines: ["North Indian", "Biryani", "Tandoor"],
            avgRating: 4.3,
            parentId: "27123",
            avgRatingString: "4.3",
            totalRatingsString: "1.2K+",
            sla: {
                deliveryTime: 37,
                lastMileTravel: 10.7,
                serviceability: "SERVICEABLE",
                slaString: "35-40 mins",
                lastMileTravelString: "10.7 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2025-03-06 23:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "₹150 OFF",
                subHeader: "ABOVE ₹399",
                discountTag: "FLAT DEAL",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
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
        analytics: {
            context: "seo-data-a36fec40-39f3-473f-a607-b67939398beb",
        },
        cta: {
            link: "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
            type: "WEBLINK",
        },
    },
];
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <svg class="VXJlj" viewBox="0 0 61 61" height="49" width="49">
                    <g clip-path="url(#a)">
                        <path
                            fill="#FF5200"
                            d="M.32 30.5c0-12.966 0-19.446 3.498-23.868a16.086 16.086 0 0 1 2.634-2.634C10.868.5 17.354.5 30.32.5s19.446 0 23.868 3.498c.978.774 1.86 1.656 2.634 2.634C60.32 11.048 60.32 17.534 60.32 30.5s0 19.446-3.498 23.868a16.086 16.086 0 0 1-2.634 2.634C49.772 60.5 43.286 60.5 30.32 60.5s-19.446 0-23.868-3.498a16.086 16.086 0 0 1-2.634-2.634C.32 49.952.32 43.466.32 30.5Z"
                        ></path>
                        <path
                            fill="#fff"
                            fill-rule="evenodd"
                            d="M32.317 24.065v-6.216a.735.735 0 0 0-.732-.732.735.735 0 0 0-.732.732v7.302c0 .414.336.744.744.744h.714c10.374 0 11.454.54 10.806 2.73-.03.108-.066.21-.102.324-.006.024-.012.048-.018.066-2.724 8.214-10.092 18.492-12.27 21.432a.764.764 0 0 1-1.23 0c-1.314-1.776-4.53-6.24-7.464-11.304-.198-.462-.294-1.542 2.964-1.542h3.984c.222 0 .402.18.402.402v3.216c0 .384.282.738.666.768a.73.73 0 0 0 .582-.216.701.701 0 0 0 .216-.516v-4.362a.76.76 0 0 0-.756-.756h-8.052c-1.404 0-2.256-1.2-2.814-2.292-1.752-3.672-3.006-7.296-3.006-10.152 0-7.314 5.832-13.896 13.884-13.896 7.17 0 12.6 5.214 13.704 11.52.006.054.048.294.054.342.288 3.096-7.788 2.742-11.184 2.76a.357.357 0 0 1-.36-.36v.006Z"
                            clip-rule="evenodd"
                        ></path>
                    </g>
                    <defs>
                        <clipPath id="a">
                            <path fill="#fff" d="M.32.5h60v60h-60z"></path>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <ul className="nav">
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Contact</li>
                <li className="nav-item">Cart</li>
            </ul>
        </div>
    );
};
const Card = ({ data }) => {
    const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, locality } = data.info;
    const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    return (
        <div className="card">
            <img className="card-img" src={IMG_CDN_URL + cloudinaryImageId} alt="" />
            <div className="card-info">
                <h3>{name}</h3>
                <div className="rating">{avgRating}</div>
                <div className="cusien">{cuisines.join(", ")}</div>
                <div className="address">{locality}</div>
            </div>
        </div>
    );
};
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" /> <button>Search</button>
            </div>
            <div className="res-container">
                <div className="card-conatiner">
                    {rdata.map((item) => (
                        <Card data={item} key={item.info.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};
const Footer = () => {
    return (
        <div className="footers">
            <ul>
                <li>Copyright</li>
                <li>address</li>
                <li>Links</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
