import { HiArrowRight } from "react-icons/hi";
import useBack from "../hooks/useBake";

export default function NotFound() {
  const onBack = useBack();
  return (
    <div className="h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl">
        <div className="sm:max-w-sm flex justify-center pt-10">
          <div>
            <h1 className="text-xl font-bold text-secondary-700 mb-8">
              صفحه ای که دنبالش بودید، پیدا نشد
            </h1>
            <button className="flex items-center gap-x-3" onClick={onBack}>
              <HiArrowRight className="w-6 h-6 text-primary-900" />
              <span>برگشت</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
