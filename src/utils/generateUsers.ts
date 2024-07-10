import { UserType } from "@/components/columns";
import Chance from "chance";

const chance = new Chance();

export function generateUsers(count: number): UserType[] {
  const users: UserType[] = [];

  for (let i = 0; i < count; i++) {
    const user: UserType = {
      id: chance.integer(),
      name: chance.first(),
      surname: chance.last(),
      phone: chance.phone(),
      email: chance.email(),
      telegram: chance.bool() ? chance.twitter().substring(1) : null,
      whatsapp: chance.bool() ? chance.phone() : null,
      skype: chance.bool() ? chance.twitter().substring(1) : null,
      wallet: chance.bb_pin(),
      payment_method: chance.pickone(["debit", "credit", "paypal"]),
      created_at: chance
        .date({ year: chance.year({ min: 2000, max: 2022 }) })
        .toISOString(),
      updated_at: chance
        .date({ year: chance.year({ min: 2000, max: 2022 }) })
        .toISOString(),
    };

    users.push(user);
  }

  return users;
}
