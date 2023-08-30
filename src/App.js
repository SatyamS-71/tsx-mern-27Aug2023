import "./styles.css";

import { ConfigProvider, theme } from "antd";

import AppLayout from "../src/Components/AppLayout/AppLayout";

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ffe81f",
          colorInfo: "#ffe81f",
          fontSize: 14,
          colorBgBase: "#5d5b5b",
          colorTextBase: "#ffffff",
        },
      }}
    >
      <AppLayout />
    </ConfigProvider>
  );
}
