import { Header } from "components/Header/Header";
import { Loader } from "components/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { SharedWrapper } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <SharedWrapper>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </SharedWrapper>
  );
};
