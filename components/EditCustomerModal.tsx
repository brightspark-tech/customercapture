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