import type { ServiceCategory } from "../types/booking";

// Shared by both personal and group booking flows, so there's one place to
// update the service menu instead of two copies that can drift apart.
const serviceData: ServiceCategory[] = [
  {
    title: "MANICURES",
    text: "Performed on natural nails and includes regular polish",
    options: [
      {
        id: 1,
        product: "Basic Manicure",
        time: 30,
        price: 50,
      },
      {
        id: 2,
        product: "Luxury Manicure",
        time: 30,
        price: 60,
      },
      {
        id: 3,
        product: "Luxury Manicure Plus",
        time: 30,
        price: 70,
      },
    ],
  },
  {
    title: "NAIL EXTRAS",
    text: "Performed on natural nails and includes regular polish",
    options: [
      {
        id: 4,
        product: "Regular Polish",
        time: 30,
        price: 50,
      },
      {
        id: 5,
        product: "Gel Top Coat",
        time: 30,
        price: 50,
      },
    ],
  },
];

export default serviceData;
