import Head from "next/head";
import type { FC, PropsWithChildren } from "react";

export const metadata = {
  title: "Admin - Next.js Static CMS Blog",
};

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async />
      </Head>
      <body>{children}</body>
    </html>
  );
};

export default AdminLayout;
