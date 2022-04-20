const Container = ({ children }) => {
  return (
    <div className="p-4 text-left">
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default Container;
