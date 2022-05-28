const Container = ({ className, children, ...props }: any) => {
  return (
    <div className={`p-4 text-left ${className}`} {...props}>
      <div className="container 2xl:max-w-[1280px] mx-auto">{children}</div>
    </div>
  );
};

export default Container;
