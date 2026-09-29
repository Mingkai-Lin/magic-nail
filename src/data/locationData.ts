import type { Location } from "../types/booking";

// Shared by both personal and group booking flows, so there's one place to
// update salon locations instead of two copies that can drift apart.
const locationData: Location[] = [
  {
    id: 1,
    heading: "Magic Nail - Las Vegas",
    address: " 6807 Philharmonic Ave, Las Vegas, NV 89139",
  },
  {
    id: 2,
    heading: "TBA",
    address: "TBA",
  },
];
export default locationData;
