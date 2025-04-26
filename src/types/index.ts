
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  hospital: string;
  experience: string;
  rating: number;
  reviewsCount: number;
  photo: string;
}

export interface Review {
  id: string;
  doctorId: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  helpful: number;
  replies: number;
}
