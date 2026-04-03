import { HotelData } from "./types";

export const HOTEL_DATA: HotelData = {
  hotel_details: {
    name: "Hotel B P Emerald",
    tagline: "Comfort and Tradition in the Heart of Mathura",
    location: {
      address: "Sonkh Road, Pali Khera, Mathura, Uttar Pradesh 281004, India",
      city: "Mathura",
      state: "Uttar Pradesh",
      landmark: "Near Sonkh Road Highway",
      google_maps_link: "https://maps.app.goo.gl/ECkxyxKvCp9j9Sxm9"
    },
    contact: {
      phone: "+91-XXXXXXXXXX",
      email: "info@hotelbpemerald.com",
      website: "www.hotelbpemerald.com"
    }
  },
  website_sections: {
    hero_section: {
      title: "Welcome to Hotel B P Emerald, Mathura",
      subtitle: "Experience luxury and spiritual peace near Krishna Janmabhoomi.",
      cta_button: "Book Your Stay"
    },
    about_us: {
      description: "Hotel B P Emerald is a premium lodging facility in Mathura, designed for pilgrims, business travelers, and families. Located on Sonkh Road, we offer easy access to the holy sites of Mathura and Vrindavan while providing a peaceful environment away from the city's hustle.",
      usp: [
        "Proximity to major temples",
        "Modern amenities with traditional hospitality",
        "Spacious rooms and professional staff"
      ]
    },
    room_types: [
      {
        type: "Deluxe AC Room",
        features: ["King-size bed", "Free WiFi", "Smart TV", "Air Conditioning"],
        price_range: "₹2,500 - ₹3,500",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80"
      },
      {
        type: "Executive Suite",
        features: ["Separate Sitting Area", "Mini Fridge", "Premium Toiletries", "City View"],
        price_range: "₹4,500 - ₹5,500",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
      },
      {
        type: "Family Room",
        features: ["4 Beds", "Large Space", "Perfect for Pilgrims", "Room Service"],
        price_range: "₹5,000 - ₹6,500",
        image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"
      }
    ],
    amenities: [
      "Free High-Speed Wi-Fi",
      "In-house Multi-cuisine Restaurant",
      "24/7 Room Service",
      "Ample Car Parking Space",
      "Power Backup",
      "Travel Desk for Temple Tours"
    ],
    nearby_attractions: [
      {
        name: "Shri Krishna Janmabhoomi",
        distance: "Approx 5-6 km",
        image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Dwarkadhish Temple",
        distance: "Approx 7 km",
        image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Vrindavan (Bankey Bihari Temple)",
        distance: "12-14 km",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Goverdhan Hill",
        distance: "20 km",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
      }
    ],
    seo_keywords: [
      "Best hotel in Mathura",
      "Hotel near Sonkh Road Mathura",
      "Accommodation near Krishna Janmabhoomi",
      "Budget luxury hotel Mathura",
      "Hotel B P Emerald Mathura"
    ]
  }
};
