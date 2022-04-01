import { UserProvider } from "./User";
import { BookProvider } from "./Book";

const Providers = ({ children }) => {
  return (
    <BookProvider>
      <UserProvider>{children}</UserProvider>
    </BookProvider>
  );
};

export default Providers;
