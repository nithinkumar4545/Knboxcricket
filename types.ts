
export interface Box {
  id: string;
  name: string;
  description: string;
  pricePerHour: number;
  imageUrl: string;
  amenities: string[];
  capacity: string;
}

export interface Slot {
  id: string;
  time: string;
  isBooked: boolean;
}

export interface Booking {
  id: string;
  boxId: string;
  date: string;
  slotId: string;
  userName: string;
  userEmail: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
