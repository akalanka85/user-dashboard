import { User } from "@app/types";
import Card from "../../components/Card/Card";
import styles from "./UserCard.module.scss";
import { ReactComponent as LocationIcon } from '../../assets/location.svg';
import { ReactComponent as EmailIcon } from '../../assets/email.svg';
import { ReactComponent as PhoneIcon } from '../../assets/phone.svg';
import { ReactComponent as WebIcon } from '../../assets/web.svg';

import UserCardListItem from "./UserCardListItem/UserCardListItem";

interface CardProps {
  user: User;
}


export default function UserCard({user}: CardProps) {
  return (
  <div className={styles.userCard}>
    <Card header={user.name}>
      <ul>
        <UserCardListItem title="Email:" value={user.email} icon={<EmailIcon/>}></UserCardListItem>
        <UserCardListItem title="Phone:" value={user.phone} icon={<PhoneIcon/>}></UserCardListItem>
        <UserCardListItem title="Website:" value={user.website} icon={<WebIcon/>}></UserCardListItem>
        <UserCardListItem title="Address:" value={user.address.suite} icon={<LocationIcon/>}></UserCardListItem>
      </ul>
    </Card>
  </div>

  );
}
