import { TLoading } from "@customTypes/shared";

type LoadingProps = {
  status: TLoading;
  error: string | null;
  children: React.ReactNode;
};

const Loading = ({ status, error, children }: LoadingProps) => {
  if (status === "pending") {
    return <div>Loading please wait</div>;
  }

  if (status === "failed") {
    return <p>{error}</p>;
  }

  return <>{children}</>;
};

export default Loading;
