import { User } from "@app/types";
import { Card } from "@app/ui-components";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { ReactComponent as WebIcon } from "../../assets/icons/web.svg";
import UserCardListItem from "./UserCardListItem/UserCardListItem";

import styles from "./UserCard.module.scss";

interface CardProps {
  readonly user: User;
}

export default function UserCard({ user }: CardProps) {
  return (
    <div className={styles.userCard}>
      <Card header={user.name}>
        <ul>
          <UserCardListItem
            title="Email:"
            value={user.email}
            icon={<EmailIcon />}
          ></UserCardListItem>
          <UserCardListItem
            title="Phone:"
            value={user.phone}
            icon={<PhoneIcon />}
          ></UserCardListItem>
          <UserCardListItem
            title="Website:"
            value={user.website}
            icon={<WebIcon />}
          ></UserCardListItem>
          <UserCardListItem
            title="Address:"
            value={
              user.address.suite +
              ", " +
              user.address.street +
              ", " +
              user.address.city
            }
            icon={<LocationIcon />}
          ></UserCardListItem>
        </ul>
      </Card>
    </div>
  );
}
