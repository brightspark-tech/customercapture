import { Text, View, SafeAreaView, TouchableOpacity, TextInput, Button, KeyboardAvoidingView, Platform, Switch } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React, { useState, useEffect } from 'react'
import { useForm } from '@/context/FormContext';

//import  constants
import colors from "@/constants/colors";
import styles from "@/constants/styles";
import { Dropdown } from "react-native-element-dropdown";

export default function Add2()
{
    const { formData, updateSecondScreen, resetForm } = useForm();


    // Initialize local state with context values
    const [email, setEmail] = useState(formData.email);
    const [homePhone, setHomePhone] = useState(formData.homePhone);
    const [mobilePhone, setMobilePhone] = useState(formData.mobilePhone);
    const [prefContactMethod, setPrefContactMethod] = useState(formData.prefContactMethod);
    const [prefContactTime, setPrefContactTime] = useState(formData.prefContactTime);
    const [emailOptIn, setEmailOptIn] = useState(formData.emailOptIn);
    const [smsOptIn, setSmsOptIn] = useState(formData.smsOptIn);
    const [isMethodFocus, setIsMethodFocus] = useState(false);
    const [isTimeFocus, setIsTimeFocus] = useState(false);

    const [saving, isSaving] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [error, setError] = useState({
        hasError: false,
        field: "",
        errorMessage: ""
    })

    const [success, setSuccess] = useState({
        isShown: false,
        success: false,
        message: ""
    })

    // Update context when local state changes
    useEffect(() =>
    {
        updateSecondScreen({
            email,
            homePhone,
            mobilePhone,
            prefContactMethod,
            prefContactTime,
            emailOptIn,
            smsOptIn
        });
    }, [email, homePhone, mobilePhone, prefContactMethod, prefContactTime, emailOptIn, smsOptIn]);

    const router = useRouter();

    const onBack = () =>
    {
        router.back();
    }

    const saveContact = async () =>
    {
        if (submitted) return; // Prevent multiple submissions

        console.log("Saving customer");
        if (!formData.firstName)
        {
            setError({
                hasError: true,
                field: "firstName",
                errorMessage: "First name is required"
            })
            return
        }

        if (!formData.email)
        {
            setError({
                hasError: true,
                field: "email",
                errorMessage: "Email is required"
            })
            return
        }

        isSaving(true);

        const mutation = `
            mutation AddCustomer(
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
                addCustomer(
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
                    status
                    message
                    customer {
                        id
                        first_name
                        last_name
                        email
                        home_phone
                        mobile_phone
                        preferred_contact_method
                        preferred_contact_time
                        subscribed_to_email
                        subscribed_to_sms
                    }
                    existingCustomer {
                        id
                        first_name
                        last_name
                        email
                        home_phone
                        mobile_phone
                        preferred_contact_method
                        preferred_contact_time
                        subscribed_to_email
                        subscribed_to_sms
                    }
                }
            }
        `;

        const variables = {
            email: formData.email,
            firstName: formData.firstName,
            homeAddress1: formData.address1,
            homeAddress2: formData.address2,
            homeCity: formData.city,
            homeState: formData.state,
            homePhone: formData.homePhone,
            homeZip: formData.zip,
            lastName: formData.lastName,
            mobilePhone: formData.mobilePhone,
            preferredContactMethod: formData.prefContactMethod,
            preferredContactTime: formData.prefContactTime,
            subscribedToEmail: formData.emailOptIn,
            subscribedToSms: formData.smsOptIn
        };

        try
        {
            const response = await fetch('http://192.168.68.55:8080/graphql', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query: mutation,
                    variables: variables
                })
            });

            const data = await response.json();

            console.log(data)

            if (data.errors)
            {
                console.error("Error saving new customer: ", data.errors);
                setSuccess({
                    isShown: true,
                    success: false,
                    message: "An error occurred while saving the customer. Please try again."
                });
            } else
            {
                const result = data.data.addCustomer;

                if (result.status === "EXISTS")
                {
                    setSuccess({
                        isShown: true,
                        success: false,
                        message: result.message
                    });
                } else if (result.status === "SUCCESS")
                {
                    console.log("Customer Saved: ", result.customer);
                    setSuccess({
                        isShown: true,
                        success: true,
                        message: result.message
                    });
                    setSubmitted(true);

                    setTimeout(() =>
                    {
                        resetForm();
                        router.replace('/');
                    }, 3000);
                }
            }
        } catch (error)
        {
            console.error("Network error: ", error);
            setSuccess({
                isShown: true,
                success: false,
                message: "Network error occurred"
            });
        } finally
        {
            isSaving(false);
        }
    }

    const prefModes = [
        { value: 'sms', label: 'SMS' },
        { value: 'email', label: 'Email' },
        { value: 'home_phone', label: 'Home Phone' },
        { value: 'mobile_phone', label: 'Mobile Phone' }
    ]

    const prefTimes = [
        { value: 'morning', label: 'Morning (9am - 11am)' },
        { value: 'afternoon', label: 'Afternoon (12pm - 4pm)' },
        { value: 'evening', label: 'Afternoon (5pm - 8pm)' },
    ]

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
                    <Text style={styles.h1}>Customer Preferences</Text>

                </View>

                {success.isShown && (
                    <View style={[styles.messageContainer, success.success ? styles.successMessage : styles.errorMessage]}>
                        <Text style={styles.messageText}>{success.message}</Text>
                    </View>
                )}

                <View style={styles.formContainer}>
                    <View style={styles.inputGroup}>
                        <TextInput
                            value={email}
                            onChangeText={(text) =>
                            {
                                setEmail(text)
                                setError({
                                    hasError: false,
                                    field: "",
                                    errorMessage: ""
                                })
                            }
                            }
                            placeholder="Email"
                            inputMode="email"

                            style={[styles.input, error.hasError && styles.inputError]}
                        />
                        {error.hasError ? (
                            <Text style={[styles.inputLabel, error.hasError && styles.errorText]}>{error.errorMessage}</Text>
                        ) : (<Text style={styles.inputLabel}>Email</Text>)}
                    </View>
                    <View style={styles.inputSplit}>
                        <View style={styles.inputSplitContainer}>

                            <TextInput inputMode="tel" keyboardType="name-phone-pad" placeholder="Home Phone" style={styles.input} value={homePhone} onChangeText={(text) => setHomePhone(text)} />
                            <Text style={styles.inputLabel}>Home Phone</Text>
                        </View>
                        <View style={styles.inputSplitContainer}>
                            <TextInput inputMode="tel" keyboardType="name-phone-pad" placeholder="Mobile Phone" style={styles.input} value={mobilePhone} onChangeText={(text) => setMobilePhone(text)} />
                            <Text style={styles.inputLabel}>Mobile Phone</Text>
                        </View>
                    </View>
                    <View style={styles.inputSplit}>
                        <View style={styles.inputSplitContainer}>
                            <Dropdown
                                style={[styles.dropdown, isMethodFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                search
                                data={prefModes}
                                maxHeight={200}
                                labelField="label"
                                valueField="value"
                                onChange={item =>
                                {
                                    setPrefContactMethod(item.value)
                                    setIsMethodFocus(false)
                                }}
                                value={prefContactMethod}
                                onFocus={() => setIsMethodFocus(true)}
                                onBlur={() => setIsMethodFocus(false)}
                                placeholder={!isTimeFocus ? 'Select item' : '...'}
                                searchPlaceholder="Search..."
                            />

                            <Text style={styles.inputLabel}>Preferred Contact Method</Text>
                        </View>
                        <View style={styles.inputSplitContainer}>
                            <Dropdown
                                style={[styles.dropdown, isTimeFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                search
                                data={prefTimes}
                                maxHeight={200}
                                labelField="label"
                                valueField="value"
                                onChange={item =>
                                {
                                    setPrefContactTime(item.value)
                                    setIsTimeFocus(false)
                                }}
                                value={prefContactTime}
                                onFocus={() => setIsTimeFocus(true)}
                                onBlur={() => setIsTimeFocus(false)}
                                placeholder={!isTimeFocus ? 'Select item' : '...'}
                                searchPlaceholder="Search..."
                            />

                            <Text style={styles.inputLabel}>Preferred Contact Time</Text>
                        </View>

                    </View>
                    <View style={{ alignSelf: "flex-start" }}>
                        <View style={[styles.inputSplit, { justifyContent: "space-evenly" }]}>
                            <View style={styles.switchContainer}>
                                <Switch value={emailOptIn} onValueChange={(e) => setEmailOptIn(e)} />
                                <Text style={styles.switchLabel}>Email Opt-In</Text>
                            </View>
                            <View style={styles.switchContainer}>
                                <Switch value={smsOptIn} onValueChange={(e) => setSmsOptIn(e)} />
                                <Text style={styles.switchLabel}>SMS Opt-In</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title={submitted ? "Submitted" : "Save"}
                        color={colors.secondary}
                        onPress={saveContact}
                        disabled={saving || submitted}
                    />
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>



    );
}
