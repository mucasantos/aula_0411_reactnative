import { ActionBtn } from "@/components/ActionBtn";
import { Balance } from "@/components/Balance";
import { Header } from "@/components/Header";
import { Lembrete } from "@/components/Lembrete";
import { TransactionList } from "@/components/TransactionList";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {

  return (
    <SafeAreaView>
      <Header />
      <Balance />
      <ActionBtn />
      <Lembrete />
      <TransactionList />
    </SafeAreaView>
  )
}

{/* 237 linhas antes dos componentes */ }
{/* 22 linhas depois dos componentes */ }