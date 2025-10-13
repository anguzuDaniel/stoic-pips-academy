import ContactCTA from "../app/components/ContactCTA";
import "../../styles/globals.css";
import RootLayout from "@/app/layout";
import Layout from "@/app/components/layout/Layout";

export default function Page() {
  return (
    <div>
      <Layout>
        <ContactCTA />
      </Layout>
    </div>
  );
}
