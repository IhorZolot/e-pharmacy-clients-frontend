
export interface Review {
  _id: number;
  name: string;
  testimonial: string;
  photo?: string;
}
export type ErrorResponse = {
  message: string;
};