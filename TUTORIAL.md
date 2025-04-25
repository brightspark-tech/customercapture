# Customer Capture App Tutorial

This tutorial will guide high school students through building a mobile application for collecting and managing customer data using React Native and Expo.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Setting Up Your Development Environment](#setting-up-your-development-environment)
3. [Creating the Project](#creating-the-project)
4. [Building the Home Screen](#building-the-home-screen)
5. [Updating the index and add screens](#updating-the-index-and-add-screens)
6. [Updating the Add Screen](#updating-the-add-screen)
7. [Updating All Customers Screen](#updating-all-customers-screen)
8. [Creating the Form Context](#creating-the-form-context)



## Project Overview

The Customer Capture app allows businesses to collect and manage customer information. Key features include:

- A home screen with navigation options
- A multi-step form for collecting customer information
- Storage and retrieval of customer data
- Ability to view and edit existing customer records

## Setting Up Your Development Environment

Before we begin, you'll need to set up your development environment:

1. **Install Node.js and npm**
   - Download and install from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node -v` and `npm -v`

2. **Install Expo CLI**
   ```bash
   npm install -g expo-cli
   ```


## Creating the Project

Let's start by creating a new Expo project:

1. **Create a new project**
   ```bash
   npx create-expo-app CustomerCapture --template
   ```
   Choose the "Tabs (TypeScript)" template when prompted.

2. **Navigate to your project directory**
   ```bash
   cd CustomerCapture
   ```

3. **Install required dependencies**
   ```bash
   npm install @expo/vector-icons react-native-element-dropdown expo-blur expo-haptics
   ```

4. **Start the development server**
   ```bash
   npx expo start
   ```

5. **Launch an Android emulator**
   ```bash
   a
   ```


## Building the Home Screen

Now, let's create the home screen with navigation options:

1. **Set up the constants**
   
   Create a `constants` folder in the root directory with the following files:

   **colors.ts**
   ```typescript
   export default {
     primary: '#007AFF',
     secondary: '#5856D6',
     background: '#F2F2F7',
     text: '#1C1C1E',
     white: '#FFFFFF',
     black: '#000000',
     gray: '#8E8E93',
     error: '#FF3B30'
   };
   ```

   **styles.ts**
   ```typescript
   import { StyleSheet } from 'react-native';
   import colors from './colors';

   export default StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: colors.background,
       padding: 16,
     },
     h1: {
       fontSize: 24,
       fontWeight: 'bold',
       color: colors.text,
       marginBottom: 20,
     },
     cardGroup: {
       marginTop: 20,
     },
     cardContainer: {
       backgroundColor: colors.primary,
       borderRadius: 10,
       padding: 16,
       marginBottom: 16,
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.1,
       shadowRadius: 4,
       elevation: 2,
     },
     cardHeader: {
       flexDirection: 'row',
       alignItems: 'center',
     },
     cardHeaderText: {
       color: colors.white,
       fontSize: 18,
       fontWeight: '600',
       marginLeft: 10,
     },
     keyboardAvoidContainer: {
       flex: 1,
     },
     screenHeader: {
       flexDirection: 'row',
       alignItems: 'center',
       marginBottom: 20,
     },
     backButton: {
       marginRight: 10,
     },
     formContainer: {
       flex: 1,
     },
     inputSplit: {
       flexDirection: 'row',
       marginBottom: 15,
     },
     inputSplitContainer: {
       flex: 1,
       marginRight: 10,
     },
     input: {
       backgroundColor: colors.white,
       borderRadius: 5,
       padding: 10,
       borderWidth: 1,
       borderColor: '#E0E0E0',
     },
     inputError: {
       borderColor: colors.error,
     },
     inputLabel: {
       fontSize: 12,
       color: colors.gray,
       marginTop: 4,
     },
     errorText: {
       color: colors.error,
     },
     buttonContainer: {
       marginTop: 20,
       marginBottom: 20,
     },
     dropdown: {
       height: 50,
       backgroundColor: colors.white,
       borderRadius: 5,
       padding: 10,
       borderWidth: 1,
       borderColor: '#E0E0E0',
     },
     placeholderStyle: {
       fontSize: 16,
       color: colors.gray,
     },
     selectedTextStyle: {
       fontSize: 16,
     },
     inputSearchStyle: {
       height: 40,
       fontSize: 16,
     },
     iconStyle: {
       width: 20,
       height: 20,
     },
     customerList: {
       paddingBottom: 20,
     },
     customerItemContainer: {
       backgroundColor: colors.white,
       borderRadius: 8,
       padding: 15,
       marginBottom: 10,
     },
     customerItemContent: {
       flexDirection: 'row',
       alignItems: 'center',
     },
     customerName: {
       fontSize: 16,
       marginLeft: 10,
     },
     customerItemBorder: {
       height: 1,
       backgroundColor: '#E0E0E0',
       marginTop: 10,
     },
     modalOverlay: {
       flex: 1,
       backgroundColor: 'rgba(0, 0, 0, 0.5)',
       justifyContent: 'center',
       alignItems: 'center',
     },
     modalContent: {
       backgroundColor: colors.white,
       borderRadius: 10,
       padding: 20,
       width: '90%',
       maxHeight: '80%',
     },
     modalHeader: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       marginBottom: 15,
     },
     modalTitle: {
       fontSize: 18,
       fontWeight: 'bold',
     },
     modalBody: {
       maxHeight: 400,
     },
     modalFooter: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       marginTop: 20,
     },
   });
   ```

2. **Modify the app/index.tsx file**
   ```typescript
   import { Text, View, SafeAreaView } from "react-native";

    export default function Index() {
      return (
        <SafeAreaView>
          <View>
            <Text>Welcome to the Customer Capture App!</Text>
          </View>
        </SafeAreaView>
      );
    }
   ```

3. **Create a new file: AllCustomers.tsx**
  ```typescript
    import { Text, View, SafeAreaView } from "react-native";

    export default function AllCustomers() {
      return (
        <SafeAreaView>
          <View>
            <Text>All Customers Screen</Text>
          </View>
        </SafeAreaView>
      );
    }
  ```

4. **Create a new file: AddCustomer.tsx**
  ```typescript
    import { Text, View, SafeAreaView } from "react-native";

    export default function AddCustomer() {
      return (
        <SafeAreaView>
          <View>
            <Text>Add Customer Screen</Text>
          </View>
        </SafeAreaView>
      );
    }
  ```

5. **Integrate these screens into the layout file**
  1. Open the _layout.tsx file
  2. Update it to use the new screens
  ```typescript
  import { Stack } from "expo-router";

  export default function Layout() {
    return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="AllCustomers" options={{ title: "All Customers" }} />
        <Stack.Screen name="AddCustomer" options={{ title: "Add Customer" }} />
      </Stack>
    );
  }
  ```

## Updating the index and add screens

1. **Open index.tsx and modify the file**

```typescript
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

// Import constants
import colors from "@/constants/colors";
import styles from "@/constants/styles";

export default function Index() {
  const router = useRouter();

  const onAddCustomer = () => {
    router.push("/add");
  };

  const onAllCustomers = () => {
    router.push("/AllCustomers");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.h1}>Customer Capture</Text>
      </View>
      <View style={styles.cardGroup}>
        <TouchableOpacity style={styles.cardContainer} onPress={onAddCustomer}>
          <View style={styles.cardHeader}>
            <Ionicons name="add-circle-outline" size={24} color={colors.white} />
            <Text style={styles.cardHeaderText}>Add New Customer</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardContainer} onPress={onAllCustomers}>
          <View style={styles.cardHeader}>
            <Ionicons name="eye" size={24} color={colors.white} />
            <Text style={styles.cardHeaderText}>View All Customers</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
```

## Updating the Add Screen

1. **Open the `AddCustomer.tsx` file** and replace its content with the following:

```typescript
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, Button, KeyboardAvoidingView, Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { useRouter } from "expo-router";

// Import constants
import colors from "@/constants/colors";
import styles from "@/constants/styles";

export default function AddCustomer() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [error, setError] = useState({
    hasError: false,
    field: "",
    errorMessage: "",
  });

  const router = useRouter();

  const onBack = () => {
    router.back();
  };

  const next = () => {
    if (!firstName) {
      setError({
        hasError: true,
        field: "firstName",
        errorMessage: "First name is required",
      });
      return;
    }

    // Navigate to the next screen with form data as parameters
    router.push({
      pathname: "/add2",
      params: {
        firstName,
        lastName,
        address1,
        address2,
        city,
        state,
        zip,
      },
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
      style={styles.keyboardAvoidContainer}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 200}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.screenHeader}>
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Ionicons name="arrow-back-outline" size={24} color={colors.text} />
          </TouchableOpacity>
          <Text style={styles.h1}>Add New Customer</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputSplit}>
            <View style={styles.inputSplitContainer}>
              <TextInput
                placeholder="First Name"
                style={[styles.input, error.hasError && styles.inputError]}
                value={firstName}
                onChangeText={(text) => {
                  setFirstName(text);
                  setError({
                    hasError: false,
                    field: "",
                    errorMessage: "",
                  });
                }}
              />
              {error.hasError && error.field === "firstName" && (
                <Text style={[styles.inputLabel, styles.errorText]}>
                  {error.errorMessage}
                </Text>
              )}
            </View>
            <View style={styles.inputSplitContainer}>
              <TextInput
                placeholder="Last Name"
                style={styles.input}
                value={lastName}
                onChangeText={(text) => setLastName(text)}
              />
            </View>
          </View>
          <View style={styles.inputSplit}>
            <View style={styles.inputSplitContainer}>
              <TextInput
                placeholder="Address 1"
                style={styles.input}
                value={address1}
                onChangeText={(text) => setAddress1(text)}
              />
            </View>
            <View style={styles.inputSplitContainer}>
              <TextInput
                placeholder="Address 2"
                style={styles.input}
                value={address2}
                onChangeText={(text) => setAddress2(text)}
              />
            </View>
          </View>
          <View style={styles.inputSplit}>
            <View style={styles.inputSplitContainer}>
              <TextInput
                placeholder="City"
                style={styles.input}
                value={city}
                onChangeText={(text) => setCity(text)}
              />
            </View>
            <View style={styles.inputSplitContainer}>
              <TextInput
                placeholder="State"
                style={styles.input}
                value={state}
                onChangeText={(text) => setState(text)}
              />
            </View>
          </View>
          <View style={styles.inputSplit}>
            <View style={styles.inputSplitContainer}>
              <TextInput
                placeholder="Zip"
                style={styles.input}
                value={zip}
                onChangeText={(text) => setZip(text)}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Next" color={colors.secondary} onPress={next} />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
```

## Updating All Customers Screen
1. **Open the `AllCustomers.tsx` file** and replace its content with the following:

   ```typescript
  import { Text, View, SafeAreaView, TouchableOpacity, FlatList, TextInput, Button, ActivityIndicator } from "react-native";
  import Ionicons from "@expo/vector-icons/Ionicons";
  import { useRouter } from "expo-router";
  import React, { useState, useEffect } from 'react'

  // Import constants
  import colors from "@/constants/colors";
  import styles from "@/constants/styles";
  import EditCustomerModal from "@/components/EditCustomerModal";

  interface Customer {
    id: string;
    first_name: string;
    full_name?: string;
    email: string;
    last_name: string;
    home_address_1: string;
    home_address_2: string;
    home_city: string;
    home_state: string;
    home_zip: string;
    home_phone: string;
    mobile_phone: string;
    preferred_contact_method: string;
    preferred_contact_time: string;
    subscribed_to_email: boolean;
    subscribed_to_sms: boolean;
  }

  export default function AllCustomers() {
    const [customers, setCustomers] = useState<Customer[]>([])
    const [loading, isLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)

    const fetchCustomers = async () => {
      const query = `
      query {
        customers {
          id
          first_name
          full_name
          email
          last_name
          home_address_1
          home_address_2
          home_city
          home_state
          home_zip
          home_phone
          mobile_phone
          preferred_contact_method
          preferred_contact_time
          subscribed_to_email
          subscribed_to_sms
        }
      }
      `;

      isLoading(true);
      try {
        const response = await fetch('https://customer-capture-backend-866938565525.us-central1.run.app/graphql', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: query
          })
        });
        const data = await response.json();
        setCustomers(data.data.customers);
      } catch (error) {
        console.error('Error fetching customers:', error);
      } finally {
        isLoading(false);
      }
    };

    useEffect(() => {
      fetchCustomers();
    }, []);

    const router = useRouter();
    const onBack = () => {
      router.back();
    };

    const openEditModal = (customer: Customer) => {
      setSelectedCustomer(customer);
      setModalOpen(true);
    };

    const closeEditModal = () => {
      setModalOpen(false);
      setSelectedCustomer(null);
    };

    const handleCustomerUpdated = () => {
      fetchCustomers();
      closeEditModal();
    };

    const renderItem = ({ item }: { item: Customer }) => (
      <TouchableOpacity
        style={styles.customerItemContainer}
        onPress={() => openEditModal(item)}
      >
        <View style={styles.customerItemContent}>
          <Ionicons name="person-circle" size={20} color={colors.black} />
          <Text style={styles.customerName}>{item.full_name || item.first_name} - {item.email}</Text>
        </View>
        <View style={styles.customerItemBorder} />
      </TouchableOpacity>
    );

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.screenHeader}>
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Ionicons name="arrow-back-outline" size={24} color={colors.text} />
          </TouchableOpacity>
          <Text style={styles.h1}>All Customers</Text>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : (
          <FlatList
            data={customers}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.customerList}
            showsVerticalScrollIndicator={true}
            ItemSeparatorComponent={() => <View style={styles.customerItemBorder} />}
          />
        )}

        {modalOpen && selectedCustomer && (
          <EditCustomerModal
            visible={modalOpen}
            onClose={closeEditModal}
            customer={selectedCustomer}
            onCustomerUpdated={handleCustomerUpdated}
          />
        )}
      </SafeAreaView>
    );
  }
  ```

## Creating the Form Context

Next, let's create a context to manage form data across multiple screens:

1. **Create a context folder and FormContext.tsx file**
   ```typescript
   import React, { createContext, useContext, useState } from 'react';

   type FormData = {
     // First screen data
     firstName: string;
     lastName: string;
     address1: string;
     address2: string;
     city: string;
     state: string;
     zip: string;

     // Second screen data
     email: string;
     homePhone: string;
     mobilePhone: string;
     prefContactMethod: string;
     prefContactTime: string;
     emailOptIn: boolean;
     smsOptIn: boolean;
   };

   type FormContextType = {
     formData: FormData;
     updateFirstScreen: (data: Partial<FormData>) => void;
     updateSecondScreen: (data: Partial<FormData>) => void;
     resetForm: () => void;
   };

   const initialFormData: FormData = {
     firstName: '',
     lastName: '',
     address1: '',
     address2: '',
     city: '',
     state: '',
     zip: '',
     email: '',
     homePhone: '',
     mobilePhone: '',
     prefContactMethod: '',
     prefContactTime: '',
     emailOptIn: false,
     smsOptIn: false,
   };

   const FormContext = createContext<FormContextType | undefined>(undefined);

   export function FormProvider({ children }: { children: React.ReactNode }) {
     const [formData, setFormData] = useState<FormData>(initialFormData);

     const updateFirstScreen = (data: Partial<FormData>) => {
       setFormData(prev => ({ ...prev, ...data }));
     };

     const updateSecondScreen = (data: Partial<FormData>) => {
       setFormData(prev => ({ ...prev, ...data }));
     };

     const resetForm = () => {
       setFormData(initialFormData);
     };

     return (
       <FormContext.Provider value={{ formData, updateFirstScreen, updateSecondScreen, resetForm }}>
         {children}
       </FormContext.Provider>
     );
   }

   export function useForm() {
     const context = useContext(FormContext);
     if (context === undefined) {
       throw new Error('useForm must be used within a FormProvider');
     }
     return context;
   }
   ```

2. **Update _layout.tsx to include the FormProvider**
   ```typescript
   import { Stack } from 'expo-router';
   import { FormProvider } from '@/context/FormContext';

   export default function Layout() {
     return (
       <FormProvider>
         <Stack>
           <Stack.Screen name="index" options={{ headerShown: false }} />
           <Stack.Screen name="add" options={{ headerShown: false }} />
           <Stack.Screen name="add2" options={{ headerShown: false }} />
           <Stack.Screen name="AllCustomers" options={{ headerShown: false }} />
         </Stack>
       </FormProvider>
     );
   }
  ```
