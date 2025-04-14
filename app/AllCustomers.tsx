import { Text, View, SafeAreaView, TouchableOpacity, FlatList, TextInput, Button, KeyboardAvoidingView, Platform, Switch, ActivityIndicator } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React, { useState, useEffect } from 'react'
import { useForm } from '@/context/FormContext';

//import  constants
import colors from "@/constants/colors";
import styles from "@/constants/styles";
import { Dropdown } from "react-native-element-dropdown";
import EditCustomerModal from "@/components/EditCustomerModal";

interface Customer
{
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

export default function AllCustomers()
{
    const [customers, setCustomers] = useState<Customer[]>([])
    const [loading, isLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)

    const fetchCustomers = async () =>
    {
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
        try
        {
            const response = await fetch('http://192.168.68.55:8080/graphql', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query: query
                })
            });
            const data = await response.json();
            setCustomers(data.data.customers);
        } catch (error)
        {
            console.error('Error fetching customers:', error);
        } finally
        {
            isLoading(false);
        }
    };

    useEffect(() =>
    {
        fetchCustomers();
    }, []);

    const router = useRouter();
    const onBack = () =>
    {
        router.back();
    };

    const openEditModal = (customer: Customer) =>
    {
        setSelectedCustomer(customer);
        setModalOpen(true);
    };

    const closeEditModal = () =>
    {
        setModalOpen(false);
        setSelectedCustomer(null);
    };

    const handleCustomerUpdated = () =>
    {
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
