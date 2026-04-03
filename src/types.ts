export interface Location {
  address: string;
  city: string;
  state: string;
  landmark: string;
  google_maps_link: string;
}

export interface Contact {
  phone: string;
  email: string;
  website: string;
}

export interface HotelDetails {
  name: string;
  tagline: string;
  location: Location;
  contact: Contact;
}

export interface RoomType {
  type: string;
  features: string[];
  price_range: string;
  image: string;
}

export interface Attraction {
  name: string;
  distance: string;
  image: string;
}

export interface WebsiteSections {
  hero_section: {
    title: string;
    subtitle: string;
    cta_button: string;
  };
  about_us: {
    description: string;
    usp: string[];
  };
  room_types: RoomType[];
  amenities: string[];
  nearby_attractions: Attraction[];
  seo_keywords: string[];
}

export interface HotelData {
  hotel_details: HotelDetails;
  website_sections: WebsiteSections;
}
