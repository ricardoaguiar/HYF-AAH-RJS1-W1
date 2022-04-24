import users from '../data/users';
import ListItem from '../components/ListItem';

export default function UnorderedList() {
  return (
    <div>
      <ul>
        {users.map((item, index) => {
          return (
            <ListItem
              key={item.id}
              fullname={item.fullname}
              address={item.address}
              age={item.age}
              height={item.height}
              language={item.languages.map((language) => language).join(', ')}
            />
          );
        })}
      </ul>
    </div>
  );
}
