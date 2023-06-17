import {
  Page,
  DataTable,
  LegacyCard,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";


export default function HomePage() {
  const EmailRows = [
    ["1", "CD001", "user1@gmail.com"],
    ["2", "CD002", "user2@gmail.com"],
    ["3", "CD003", "user3@gmail.com"],
    ["4", "CD004", "user4@gmail.com"],
  ];

  const OrderRows = [
    ["1", "CD001", "12345", "12 Nov 2022 - 11.00AM"],
    ["2", "CD002", "12346", "12 Nov 2022 - 12.00PM"],
    ["3", "CD003", "12347", "12 Nov 2022 - 09.30AM"],
    ["4", "CD004", "12348", "12 Nov 2022 - 04.00PM"],
  ];
  const CheckoutRows = [
    ["1", "CD001", "12 Nov 2022 - 11.00AM", "Active"],
    ["2", "CD002", "12 Nov 2022 - 12.00PM", "Active"],
    ["3", "CD003", "12 Nov 2022 - 09.30AM", "Inactive"],
    ["4", "CD004", "12 Nov 2022 - 04.00PM", "Inactive"],
  ];
  const AllRows = [
    ["1", "user1@gmail.com", "CD001"],
    ["2", "user2@gmail.com", "CD002"],
    ["3", "user3@gmail.com", "CD003"],
    ["4", "user4@gmail.com", "CD004"],
  ];

  return (
    <Page>
      <TitleBar
        title="All Pages"
        primaryAction={{
          content: "All Pages",
          onAction: () => navigate("/qrcodes/new"),
        }}
      />

      {/* 1 */}
      <Page title="Email Details">
        <LegacyCard>
          <DataTable
            columnContentTypes={["text", "numeric", "numeric", "numeric"]}
            headings={["S.NO", "Customer ID", "Email ID"]}
            rows={EmailRows}
            // totals={["", "", 255]}
          />
        </LegacyCard>
      </Page>

      {/* 2 */}
      <Page title="Order Details">
        <LegacyCard>
          <DataTable
            columnContentTypes={["text", "numeric", "numeric", "numeric"]}
            headings={["S. No", "Customer ID", "Order no", "Order Date/Time"]}
            rows={OrderRows}
          />
        </LegacyCard>
      </Page>

      {/* 3 */}
      <Page title="Checkout">
        <LegacyCard>
          <DataTable
            columnContentTypes={["text", "numeric", "numeric", "numeric"]}
            headings={[
              "S.No",
              "Customer ID",
              "Checkout Date/ Time",
              "Checkout status",
            ]}
            rows={CheckoutRows}
          />
        </LegacyCard>
      </Page>

      {/* 4 */}
      <Page title="All Pages">
        <LegacyCard>
          <DataTable
            columnContentTypes={["text", "numeric", "numeric"]}
            headings={["Store", "Email", "Captured Details"]}
            rows={AllRows}
          />
        </LegacyCard>
      </Page>
    </Page>
  );
}
