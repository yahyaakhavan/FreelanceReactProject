import { useTranslation } from "react-i18next";

export default function DashboardHeader() {
  const { t } = useTranslation();
  return (
    <div className="mb-8">
      <h1 className="font-bold text-2xl text-secondary-900 mb-2">
        {t("Total_statistics")}
      </h1>
      <p className="text-secondary-600">خلاصه ای از آمار خود را ببینید</p>
    </div>
  );
}
