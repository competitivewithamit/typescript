import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const custommap = new CustomMap();
const company = new Company();
custommap.addMarker(user);
custommap.addMarker(company);
