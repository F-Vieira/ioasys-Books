import { UserProvider } from "./User";
import { BookProvider } from "./Book";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <BookProvider>{children}</BookProvider>
    </UserProvider>
  );
};

export default Providers;
