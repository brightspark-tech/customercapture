# Customer Capture App Tutorial

This tutorial will guide high school students through building a mobile application for collecting and managing customer data using React Native and Expo.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Setting Up Your Development Environment](#setting-up-your-development-environment)
3. [Creating the Project](#creating-the-project)
4. [Building the Home Screen](#building-the-home-screen)
5. [Creating the Form Context](#creating-the-form-context)
6. [Building the Customer Form - Part 1](#building-the-customer-form-part-1)
7. [Building the Customer Form - Part 2](#building-the-customer-form-part-2)
8. [Setting Up the Backend](#setting-up-the-backend)
9. [Displaying Customer Data](#displaying-customer-data)
10. [Implementing Edit Functionality](#implementing-edit-functionality)
11. [Final Touches and Deployment](#final-touches-and-deployment)

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
     }

     const onAllCustomers = () => {
       router.push("/AllCustomers")
     }

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
