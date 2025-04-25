import { Stack } from "expo-router";
import { FormProvider } from "@/context/FormContext";

export default function Layout()
{
  return (
    <FormProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="AddCustomer" options={{ headerShown: false }} />
        <Stack.Screen name="add2" options={{ headerShown: false }} />
        <Stack.Screen name="AllCustomers" options={{ headerShown: false }} />
      </Stack>
    </FormProvider>
  );
}
