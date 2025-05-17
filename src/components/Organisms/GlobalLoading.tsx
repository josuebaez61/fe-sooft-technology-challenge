import { useAppSelector } from "../../lib/redux/hooks";
import Spinner from "../Atoms/Spinner";
import Overlay from "../Molecules/Overlay";

export default function GlobalLoading() {
  const { loading } = useAppSelector((state) => state.globalLoading);

  if (!loading) return null;

  return (
    <Overlay>
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    </Overlay>
  );
}
