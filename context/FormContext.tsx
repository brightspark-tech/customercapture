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

export function FormProvider({ children }: { children: React.ReactNode })
{
    const [formData, setFormData] = useState<FormData>(initialFormData);

    const updateFirstScreen = (data: Partial<FormData>) =>
    {
        setFormData(prev => ({ ...prev, ...data }));
    };

    const updateSecondScreen = (data: Partial<FormData>) =>
    {
        setFormData(prev => ({ ...prev, ...data }));
    };

    const resetForm = () =>
    {
        setFormData(initialFormData);
    };

    return (
        <FormContext.Provider value={{ formData, updateFirstScreen, updateSecondScreen, resetForm }}>
            {children}
        </FormContext.Provider>
    );
}

export function useForm()
{
    const context = useContext(FormContext);
    if (context === undefined)
    {
        throw new Error('useForm must be used within a FormProvider');
    }
    return context;
} 