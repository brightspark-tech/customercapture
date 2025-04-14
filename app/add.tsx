import { Text, View, SafeAreaView, TouchableOpacity, TextInput, Button, KeyboardAvoidingView, Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Dropdown } from 'react-native-element-dropdown'
import { useRouter } from "expo-router";
import React, { useState, useEffect } from 'react'
import { useForm } from '@/context/FormContext';

//import  constants
import colors from "@/constants/colors";
import styles from "@/constants/styles";
import states from "@/constants/states"

export default function Index()
{
    const { formData, updateFirstScreen } = useForm();
    const [isFocus, setIsFocus] = useState(false);
    const router = useRouter();

    // Initialize local state with context values
    const [firstName, setFirstName] = useState(formData.firstName);
    const [lastName, setLastName] = useState(formData.lastName);
    const [address1, setAddress1] = useState(formData.address1);
    const [address2, setAddress2] = useState(formData.address2);
    const [city, setCity] = useState(formData.city);
    const [state, setState] = useState(formData.state);
    const [zip, setZip] = useState(formData.zip);
    const [error, setError] = useState({
        hasError: false,
        field: "",
        errorMessage: ""
    })

    // Update context when local state changes
    useEffect(() =>
    {
        updateFirstScreen({
            firstName,
            lastName,
            address1,
            address2,
            city,
            state,
            zip
        });
    }, [firstName, lastName, address1, address2, city, state, zip]);

    const onBack = () =>
    {
        router.back();
    }

    const next = () =>
    {
        if (!firstName)
        {
            setError({
                hasError: true,
                field: "firstName",
                errorMessage: "First name is required"
            })
            return
        }
        router.push({
            pathname: '/add2',
            params: {
                firstName,
                lastName,
                address1,
                address2,
                city,
                state,
                zip
            }
        });
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
            style={styles.keyboardAvoidContainer}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 200}
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
                                onChangeText={(text) =>
                                {
                                    setFirstName(text)
                                    setError({
                                        hasError: false,
                                        field: "",
                                        errorMessage: ""
                                    })
                                }}
                            />
                            {error.hasError ? (
                                <Text style={[styles.inputLabel, error.hasError && styles.errorText]}>{error.errorMessage}</Text>
                            ) : (<Text style={styles.inputLabel}>First Name</Text>)}

                        </View>
                        <View style={styles.inputSplitContainer}>
                            <TextInput placeholder="Last Name" style={styles.input} value={lastName} onChangeText={(text) => setLastName(text)} />
                            <Text style={styles.inputLabel}>Last Name</Text>
                        </View>
                    </View>
                    <View style={styles.inputSplit}>
                        <View style={styles.inputSplitContainer}>
                            <TextInput placeholder="Address 1" style={styles.input} value={address1} onChangeText={(text) => setAddress1(text)} />
                            <Text style={styles.inputLabel}>Address 1</Text>
                        </View>
                        <View style={styles.inputSplitContainer}>
                            <TextInput placeholder="Address 2" style={styles.input} value={address2} onChangeText={(text) => setAddress2(text)} />
                            <Text style={styles.inputLabel}>Address 2</Text>
                        </View>
                    </View>
                    <View style={styles.inputSplit}>

                        <View style={styles.inputSplitContainer}>

                            <TextInput placeholder="City" style={styles.input} value={city} onChangeText={(text) => setCity(text)} />
                            <Text style={styles.inputLabel}>City</Text>
                        </View>
                    </View>
                    <View style={styles.inputSplit}>
                        <View style={styles.inputSplitContainer}>
                            <Dropdown
                                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                search
                                data={states}
                                maxHeight={200}
                                labelField="label"
                                valueField="value"
                                onChange={item =>
                                {
                                    setState(item.value);
                                    setIsFocus(false);
                                }}
                                value={state}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                placeholder={!isFocus ? 'Select item' : '...'}
                                searchPlaceholder="Search..."
                            />

                            <Text style={styles.inputLabel}>State</Text>
                        </View>
                        <View style={styles.inputSplitContainer}>
                            <TextInput inputMode="numeric" placeholder="Zip" style={styles.input} value={zip} onChangeText={(text) => setZip(text)} />
                            <Text style={styles.inputLabel}>Zip</Text>
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
