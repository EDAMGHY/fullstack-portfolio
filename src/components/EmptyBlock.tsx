export const EmptyBlock = <T,>({
  data = [],
  message,
}: {
  data: T[];
  message: string;
}) => {
  return data?.length <= 0 ? (
    <div className="h-[200px] w-full text-center flex justify-center items-center">
      <h2 className="heading-2">{message}</h2>
    </div>
  ) : null;
};
