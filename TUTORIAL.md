# Customer Capture App Tutorial

This tutorial will guide high school students through building a mobile application for collecting and managing customer data using React Native and Expo.

## Table of Contents

1. [Creating the Project](#creating-the-project)
2. [Reset the Project to a Default State](#reset-the-project-to-a-default-state)
3. [Building the Home Screen](#building-the-home-screen)
4. [Updating the Index and Add Screens](#updating-the-index-and-add-screens)
5. [Updating the Add Screen](#updating-the-add-screen)
6. [Updating All Customers Screen](#updating-all-customers-screen)
7. [Creating the Form Context](#creating-the-form-context)

## Run commands in separate command prompt, not in VS

## Creating the Project

**Install Expo CLI**
   ```bash
   npm install -g expo-cli
   ```

Let's start by creating a new Expo project:

1. **Create a new project in your user directory - Not in your OneDrive**
   ```bash
   npx create-expo-app CustomerCapture --template
   ```
   Choose the "Default" template when prompted.

2. **Navigate to your project directory and open in VSCode**
   ```bash
   cd CustomerCapture
   code .
   ```

3. **Install required dependencies**
   ```bash
   npm install @expo/vector-icons react-native-element-dropdown expo-blur expo-haptics
   ```

4. **Start the development server**
   ```bash
   npx expo start
   ```

5. **Once the development server is running - open an Android emulator**
   ```bash
   a
   ```

## Reset the project to a default state

1. Once you have verified that the app is running stop the metro server

  ```bash
  ctrl + c
  ```

2. Run the reset script

  ```bash
  npm run reset-project
  ```

4. Choose 'N' and hit enter
   
5. Restart the expo server

  ```
  npx expo start
  ```

6. Once the server is running

  ```
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
   import { StyleSheet } from "react-native";
   import colors from "./colors";
   
   export default StyleSheet.create({
   	container: {
   		flex: 1,
   		backgroundColor: colors.background,
   		marginTop: 50,
   		alignItems: "center",
   	},
   	keyboardAvoidContainer: {
   		flex: 1,
   		width: "100%",
   	},
   	h1: {
   		fontSize: 34,
   		color: colors.text,
   	},
   	cardGroup: {
   		flexDirection: "row",
   		width: "50%",
   		justifyContent: "center",
   		alignItems: "center",
   		paddingHorizontal: 10,
   		gap: 20,
   	},
   	cardContainer: {
   		width: "100%",
   		backgroundColor: colors.primary,
   		borderRadius: 10,
   		padding: 20,
   		marginTop: 20,
   		alignItems: "center",
   		flexDirection: "column",
   		justifyContent: "center",
   	},
   	cardHeader: {
   		flexDirection: "column",
   		justifyContent: "space-between",
   		alignItems: "center",
   	},
   	cardHeaderText: {
   		fontSize: 20,
   		color: colors.white,
   		textAlign: "center",
   		fontWeight: "bold",
   	},
   	screenHeader: {
   		flexDirection: "row",
   		justifyContent: "center",
   		alignItems: "center",
   		width: "100%",
   		marginBottom: 20,
   	},
   	backButton: {
   		padding: 10,
   		marginRight: 10,
   	},
   	formContainer: {
   		width: "90%",
   		justifyContent: "flex-start",
   		alignSelf: "center",
   	},
   	inputGroup: {
   		marginTop: 20,
   		marginHorizontal: 10,
   	},
   	inputSplit: {
   		flexDirection: "row",
   		gap: 20,
   		justifyContent: "space-between",
   		paddingHorizontal: 10,
   	},
   	inputSplitContainer: {
   		flex: 1,
   		paddingTop: 20,
   		width: "100%",
   	},
   	input: {
   		width: "100%",
   		paddingHorizontal: 10,
   		borderWidth: 2,
   		borderColor: colors.border,
   		borderRadius: 8,
   	},
   	inputLabel: {
   		fontSize: 10,
   		paddingLeft: 5,
   		paddingTop: 5,
   		fontWeight: "bold",
   	},
   	buttonContainer: {
   		width: "85%",
   		alignSelf: "center",
   		marginBottom: 55,
   		marginTop: 25,
   	},
   
   	dropdown: {
   		height: 45,
   		width: "100%",
   		borderWidth: 2,
   		borderColor: colors.border,
   		borderRadius: 8,
   		paddingHorizontal: 10,
   	},
   	icon: {
   		marginRight: 5,
   	},
   	label: {
   		position: "absolute",
   		backgroundColor: "white",
   		left: 22,
   		top: 8,
   		zIndex: 999,
   		paddingHorizontal: 8,
   		fontSize: 14,
   	},
   	placeholderStyle: {
   		fontSize: 16,
   	},
   	selectedTextStyle: {
   		fontSize: 16,
   	},
   	iconStyle: {
   		width: 20,
   		height: 20,
   	},
   	inputSearchStyle: {
   		height: 40,
   		fontSize: 16,
   	},
   	switchContainer: {
   		flexDirection: "column",
   		alignItems: "flex-start",
   		paddingTop: 20,
   	},
   	switchLabel: {
   		fontSize: 10,
   		paddingLeft: 5,
   		paddingTop: 5,
   		fontWeight: "bold",
   	},
   	inputError: {
   		borderColor: colors.error,
   	},
   	errorText: {
   		color: colors.error,
   	},
   	modalOverlay: {
   		flex: 1,
   		backgroundColor: "rgba(0, 0, 0, 0.5)",
   		justifyContent: "center",
   		alignItems: "center",
   	},
   	modalContent: {
   		backgroundColor: colors.background,
   		borderRadius: 10,
   		padding: 20,
   		width: "80%",
   		maxWidth: 400,
   	},
   	modalTitle: {
   		fontSize: 20,
   		fontWeight: "bold",
   		marginBottom: 15,
   		color: colors.text,
   	},
   	modalHeader: {
   		flexDirection: "row",
   		justifyContent: "space-between",
   		alignItems: "center",
   		marginBottom: 15,
   	},
   	modalText: {
   		fontSize: 16,
   		marginBottom: 20,
   		color: colors.text,
   		textAlign: "center",
   	},
   	modalButtons: {
   		flexDirection: "row",
   		justifyContent: "space-between",
   		marginTop: 20,
   		gap: 20,
   	},
   	modalButton: {
   		padding: 10,
   		borderRadius: 5,
   		minWidth: 120,
   		height: 45,
   		alignItems: "center",
   		justifyContent: "center",
   	},
   	editButton: {
   		backgroundColor: colors.secondary,
   		padding: 8,
   
   		borderRadius: 8,
   		width: 40,
   		height: 40,
   		alignItems: "center",
   		justifyContent: "center",
   	},
   	cancelButton: {
   		padding: 8,
   		backgroundColor: colors.error,
   		borderRadius: 8,
   		width: 40,
   		height: 40,
   		alignItems: "center",
   		justifyContent: "center",
   	},
   	modalButtonText: {
   		color: colors.text,
   		fontSize: 16,
   		fontWeight: "500",
   	},
   	disabledButton: {
   		opacity: 0.5,
   	},
   	disabledButtonText: {
   		color: colors.text,
   	},
   	messageContainer: {
   		padding: 15,
   		borderRadius: 8,
   		marginHorizontal: 20,
   		marginTop: 10,
   		width: "90%",
   	},
   	successMessage: {
   		backgroundColor: "#d4edda",
   		borderColor: "#c3e6cb",
   	},
   	errorMessage: {
   		backgroundColor: "#f8d7da",
   		borderColor: "#f5c6cb",
   	},
   	messageText: {
   		color: "#721c24",
   		fontSize: 16,
   		textAlign: "center",
   	},
   	customerList: {
   		width: "100%",
   		padding: 20,
   		alignItems: "flex-start",
   	},
   	customerName: {
   		fontSize: 18,
   		color: colors.text,
   		paddingVertical: 10,
   		textAlign: "left",
   		paddingLeft: 10,
   	},
   	customerItemContainer: {
   		width: "100%",
   	},
   	customerItemContent: {
   		flexDirection: "row",
   		alignItems: "center",
   		paddingHorizontal: 0,
   	},
   	customerItemBorder: {
   		width: "100%",
   		height: 1,
   		backgroundColor: colors.border,
   	},
   	deleteButton: {
   		padding: 8,
   		backgroundColor: colors.error,
   		borderRadius: 8,
   		width: 40,
   		height: 40,
   		alignItems: "center",
   		justifyContent: "center",
   	},
   	deleteConfirmContainer: {
   		padding: 20,
   		alignItems: "center",
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

## Create the EditCustomerModal
1. Create a new directory in your root directory called 'components'

2. Create a new file in the components folder called EditCustomerModal.tsx and paste in the following

  ```typescript
  import React, { useState } from 'react';
  import { View, Text, TouchableOpacity, Modal, TextInput, ScrollView } from 'react-native';
  import styles from '@/constants/styles';
  import colors from '@/constants/colors';
  import { Dropdown } from 'react-native-element-dropdown';
  import { Ionicons } from '@expo/vector-icons';
  import { Switch } from 'react-native';

  interface EditCustomerModalProps
  {
      visible: boolean;
      onClose: () => void;
      onCustomerUpdated: () => void;
      customer: {
          id: string;
          email: string;
          full_name?: string;
          first_name: string;
          last_name?: string;
          home_address_1?: string;
          home_address_2?: string;
          home_city?: string;
          home_state?: string;
          home_zip?: string;
          home_phone?: string;
          mobile_phone?: string;
          preferred_contact_method?: string;
          preferred_contact_time?: string;
          subscribed_to_email?: boolean;
          subscribed_to_sms?: boolean;
      };
  }

  export default function EditCustomerModal({ visible, onClose, onCustomerUpdated, customer }: EditCustomerModalProps)
  {
      const [formData, setFormData] = useState(customer);
      const [isSaving, setIsSaving] = useState(false);
      const [isDeleting, setIsDeleting] = useState(false);
      const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

      const handleDelete = async () =>
      {
          setIsDeleting(true);
          try
          {
              const mutation = `
                  mutation DeleteCustomer($id: ID!) {
                      deleteCustomer(id: $id) {
                          success
                          message
                      }
                  }
              `;

              const response = await fetch('http://192.168.68.55:8080/graphql', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      query: mutation,
                      variables: {
                          id: formData.id,
                      },
                  }),
              });

              const data = await response.json();
              if (data.errors)
              {
                  console.error('Error deleting customer:', data.errors);
              } else if (data.data.deleteCustomer.success)
              {
                  onCustomerUpdated();
              }
          } catch (error)
          {
              console.error('Error:', error);
          } finally
          {
              setIsDeleting(false);
              setShowDeleteConfirm(false);
          }
      };

      const handleSave = async () =>
      {
          setIsSaving(true);
          try
          {
              const mutation = `
                  mutation EditCustomer(
                      $id: ID!
                      $email: String!
                      $firstName: String!
                      $homeAddress1: String
                      $homeAddress2: String
                      $homeCity: String
                      $homeState: String
                      $homePhone: String
                      $homeZip: String
                      $lastName: String
                      $mobilePhone: String
                      $preferredContactMethod: String
                      $preferredContactTime: String
                      $subscribedToEmail: Boolean
                      $subscribedToSms: Boolean
                  ) {
                      editCustomer(
                          id: $id
                          email: $email
                          first_name: $firstName
                          home_address_1: $homeAddress1
                          home_address_2: $homeAddress2
                          home_city: $homeCity
                          home_state: $homeState
                          home_phone: $homePhone
                          home_zip: $homeZip
                          last_name: $lastName
                          mobile_phone: $mobilePhone
                          preferred_contact_method: $preferredContactMethod
                          preferred_contact_time: $preferredContactTime
                          subscribed_to_email: $subscribedToEmail
                          subscribed_to_sms: $subscribedToSms
                      ) {
                          id
                          email
                          first_name
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

              const response = await fetch('http://192.168.68.55:8080/graphql', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      query: mutation,
                      variables: {
                          id: formData.id,
                          email: formData.email,
                          firstName: formData.first_name,
                          homeAddress1: formData.home_address_1,
                          homeAddress2: formData.home_address_2,
                          homeCity: formData.home_city,
                          homeState: formData.home_state,
                          homePhone: formData.home_phone,
                          homeZip: formData.home_zip,
                          lastName: formData.last_name,
                          mobilePhone: formData.mobile_phone,
                          preferredContactMethod: formData.preferred_contact_method,
                          preferredContactTime: formData.preferred_contact_time,
                          subscribedToEmail: formData.subscribed_to_email,
                          subscribedToSms: formData.subscribed_to_sms,
                      },
                  }),
              });

              const data = await response.json();
              if (data.errors)
              {
                  console.error('Error updating customer:', data.errors);
              } else
              {
                  onCustomerUpdated();
              }
          } catch (error)
          {
              console.error('Error:', error);
          } finally
          {
              setIsSaving(false);
          }
      };

      return (
          <Modal
              visible={visible}
              transparent
              animationType="slide"
              onRequestClose={onClose}
          >
              <View style={styles.modalOverlay}>
                  <View style={[styles.modalContent, { maxHeight: '80%' }]}>
                      <View style={styles.modalHeader}>
                          <Text style={styles.modalTitle}>Edit Customer</Text>
                          {!showDeleteConfirm && (
                              <TouchableOpacity
                                  style={styles.deleteButton}
                                  onPress={() => setShowDeleteConfirm(true)}
                                  disabled={isDeleting}
                              >
                                  <Ionicons name="trash-outline" size={24} color={colors.white} />
                              </TouchableOpacity>
                          )}
                      </View>

                      {showDeleteConfirm ? (
                          <View style={styles.deleteConfirmContainer}>
                              <Text style={styles.modalText}>
                                  Are you sure you want to delete this customer? This action cannot be undone.
                              </Text>
                              <View style={styles.modalButtons}>
                                  <TouchableOpacity
                                      style={[styles.modalButton, styles.cancelButton]}
                                      onPress={() => setShowDeleteConfirm(false)}
                                      disabled={isDeleting}
                                  >
                                      <Text style={styles.modalButtonText}>Cancel</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                      style={[styles.modalButton, styles.deleteButton]}
                                      onPress={handleDelete}
                                      disabled={isDeleting}
                                  >
                                      <Text style={styles.modalButtonText}>
                                          {isDeleting ? 'Deleting...' : 'Delete'}
                                      </Text>
                                  </TouchableOpacity>
                              </View>
                          </View>
                      ) : (
                          <>
                              <ScrollView>
                                  <View style={styles.inputGroup}>
                                      <Text style={styles.inputLabel}>First Name</Text>
                                      <TextInput
                                          style={styles.input}
                                          value={formData.first_name}
                                          onChangeText={(text) => setFormData({ ...formData, first_name: text })}
                                      />
                                  </View>

                                  <View style={styles.inputGroup}>
                                      <Text style={styles.inputLabel}>Last Name</Text>
                                      <TextInput
                                          style={styles.input}
                                          value={formData.last_name || ''}
                                          onChangeText={(text) => setFormData({ ...formData, last_name: text })}
                                      />
                                  </View>

                                  <View style={styles.inputGroup}>
                                      <Text style={styles.inputLabel}>Email</Text>
                                      <TextInput
                                          style={styles.input}
                                          value={formData.email}
                                          onChangeText={(text) => setFormData({ ...formData, email: text })}
                                          keyboardType="email-address"
                                      />
                                  </View>

                                  <View style={styles.inputGroup}>
                                      <Text style={styles.inputLabel}>Home Address</Text>
                                      <TextInput
                                          style={styles.input}
                                          value={formData.home_address_1 || ''}
                                          onChangeText={(text) => setFormData({ ...formData, home_address_1: text })}
                                      />
                                  </View>

                                  <View style={styles.inputGroup}>
                                      <Text style={styles.inputLabel}>City</Text>
                                      <TextInput
                                          style={styles.input}
                                          value={formData.home_city || ''}
                                          onChangeText={(text) => setFormData({ ...formData, home_city: text })}
                                      />
                                  </View>

                                  <View style={styles.inputGroup}>
                                      <Text style={styles.inputLabel}>State</Text>
                                      <TextInput
                                          style={styles.input}
                                          value={formData.home_state || ''}
                                          onChangeText={(text) => setFormData({ ...formData, home_state: text })}
                                      />
                                  </View>

                                  <View style={styles.inputGroup}>
                                      <Text style={styles.inputLabel}>ZIP Code</Text>
                                      <TextInput
                                          style={styles.input}
                                          value={formData.home_zip || ''}
                                          onChangeText={(text) => setFormData({ ...formData, home_zip: text })}
                                          keyboardType="numeric"
                                      />
                                  </View>

                                  <View style={styles.inputGroup}>
                                      <Text style={styles.inputLabel}>Home Phone</Text>
                                      <TextInput
                                          style={styles.input}
                                          value={formData.home_phone || ''}
                                          onChangeText={(text) => setFormData({ ...formData, home_phone: text })}
                                          keyboardType="phone-pad"
                                      />
                                  </View>

                                  <View style={styles.inputGroup}>
                                      <Text style={styles.inputLabel}>Mobile Phone</Text>
                                      <TextInput
                                          style={styles.input}
                                          value={formData.mobile_phone || ''}
                                          onChangeText={(text) => setFormData({ ...formData, mobile_phone: text })}
                                          keyboardType="phone-pad"
                                      />
                                  </View>

                                  <View style={styles.inputGroup}>
                                      <Text style={styles.inputLabel}>Preferred Contact Method</Text>
                                      <Dropdown
                                          style={styles.dropdown}
                                          placeholderStyle={styles.placeholderStyle}
                                          selectedTextStyle={styles.selectedTextStyle}
                                          inputSearchStyle={styles.inputSearchStyle}
                                          iconStyle={styles.iconStyle}
                                          data={[
                                              { label: 'Email', value: 'email' },
                                              { label: 'Phone', value: 'phone' },
                                              { label: 'Text', value: 'text' },
                                          ]}
                                          maxHeight={300}
                                          labelField="label"
                                          valueField="value"
                                          value={formData.preferred_contact_method}
                                          onChange={(item) =>
                                          {
                                              setFormData({ ...formData, preferred_contact_method: item.value });
                                          }}
                                          renderLeftIcon={() => (
                                              <Ionicons style={styles.icon} color="black" name="call-outline" size={20} />
                                          )}
                                          itemTextStyle={{ color: colors.text }}
                                      />
                                  </View>

                                  <View style={styles.inputGroup}>
                                      <Text style={styles.inputLabel}>Preferred Contact Time</Text>
                                      <Dropdown
                                          style={styles.dropdown}
                                          placeholderStyle={styles.placeholderStyle}
                                          selectedTextStyle={styles.selectedTextStyle}
                                          inputSearchStyle={styles.inputSearchStyle}
                                          iconStyle={styles.iconStyle}
                                          data={[
                                              { label: 'Morning', value: 'morning' },
                                              { label: 'Afternoon', value: 'afternoon' },
                                              { label: 'Evening', value: 'evening' },
                                          ]}
                                          maxHeight={300}
                                          labelField="label"
                                          valueField="value"
                                          value={formData.preferred_contact_time}
                                          onChange={(item) =>
                                          {
                                              setFormData({ ...formData, preferred_contact_time: item.value });
                                          }}
                                          renderLeftIcon={() => (
                                              <Ionicons style={styles.icon} color="black" name="time-outline" size={20} />
                                          )}
                                          itemTextStyle={{ color: colors.text }}
                                      />
                                  </View>

                                  <View style={styles.switchContainer}>
                                      <Text style={styles.switchLabel}>Subscribe to Email</Text>
                                      <Switch
                                          value={formData.subscribed_to_email}
                                          onValueChange={(value) => setFormData({ ...formData, subscribed_to_email: value })}
                                      />
                                  </View>

                                  <View style={styles.switchContainer}>
                                      <Text style={styles.switchLabel}>Subscribe to SMS</Text>
                                      <Switch
                                          value={formData.subscribed_to_sms}
                                          onValueChange={(value) => setFormData({ ...formData, subscribed_to_sms: value })}
                                      />
                                  </View>
                              </ScrollView>

                              <View style={styles.modalButtons}>
                                  <TouchableOpacity
                                      style={[
                                          styles.modalButton,
                                          styles.editButton,
                                          (isSaving || isDeleting) && styles.disabledButton
                                      ]}
                                      onPress={handleSave}
                                      disabled={isSaving || isDeleting}
                                  >
                                      <Text style={[
                                          styles.modalButtonText,
                                          (isSaving || isDeleting) && styles.disabledButtonText
                                      ]}>
                                          {isSaving ? 'Saving...' : 'Save Changes'}
                                      </Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                      style={[
                                          styles.modalButton,
                                          styles.cancelButton,
                                          (isSaving || isDeleting) && styles.disabledButton
                                      ]}
                                      onPress={onClose}
                                      disabled={isSaving || isDeleting}
                                  >
                                      <Text style={[
                                          styles.modalButtonText,
                                          (isSaving || isDeleting) && styles.disabledButtonText
                                      ]}>
                                          Cancel
                                      </Text>
                                  </TouchableOpacity>
                              </View>
                          </>
                      )}
                  </View>
              </View>
          </Modal>
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
