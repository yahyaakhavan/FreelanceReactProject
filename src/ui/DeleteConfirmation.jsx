/* eslint-disable react/prop-types */
export default function DeleteConfirmation({
  projectName,
  onClose,
  disabled,
  onConfirm,
}) {
  return (
    <div>
      <h2 className="font-bold text-base mb-8">
        شما در حال حدف {projectName} هستید. آیا اطمینان دارید؟
      </h2>
      <div className="flex justify-between items-center gap-x-16">
        <button
          onClick={() => {
            onClose();
          }}
          disabled={disabled}
          className="btn btn--primary flex-1"
        >
          خیر
        </button>
        <button
          disabled={disabled}
          onClick={() => {
            onConfirm();
          }}
          className="btn btn--danger flex-1 py-3"
        >
          بلی
        </button>
      </div>
    </div>
  );
}
