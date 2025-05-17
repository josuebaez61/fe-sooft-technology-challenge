import { useAppSelector } from "../../lib/redux/hooks";
import Spinner from "../Atoms/Spinner";
import Overlay from "../Molecules/Overlay";

export default function GlobalLoading() {
  const { loading } = useAppSelector((state) => state.globalLoading);

  if (!loading) return null;

  return (
    <>
      <Overlay isVisible />
      <div className="fixed inset-0 z-50 flex items-center justify-center animate__animated animate__fadeIn animate__faster">
        <Spinner />
      </div>
    </>
  );
}
