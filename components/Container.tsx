const Container = ({ className, children, ...props }: any) => {
  return (
    <div className={`p-4 text-left ${className}`} {...props}>
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default Container;
