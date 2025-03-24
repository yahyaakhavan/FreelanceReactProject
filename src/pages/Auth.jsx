import AuthContainer from "../features/Authentication/AuthContainer";

export default function Auth() {
  return (
    <div className="h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center items-center min-h-screen relative">
          <AuthContainer />
        </div>
      </div>
    </div>
  );
}
