'use client'
import { formatPhoneNumber, getCountryName, getRegionsByCountry } from '@/lib/utils'
import { Button, Input, Modal, Select } from 'antd'
import { ChevronDownIcon } from 'lucide-react'
import React, { useCallback, useState } from 'react'

const { TextArea } = Input
const { Option } = Select

// Country codes for phone numbers
export enum CountryCode {
  US_CA = '+1',
  // CA = '+1',
  UK = '+44',
  AU = '+61',
  DE = '+49',
  FR = '+33',
  IN = '+91',
  JP = '+81',
  CN = '+86',
  BR = '+55',
  MX = '+52',
  IT = '+39',
  ES = '+34',
  RU = '+7',
  KR = '+82',
}

// Countries
export enum Country {
  US_CA = 'US_CA',
  // CA = 'CA',
  UK = 'UK',
  AU = 'AU',
  DE = 'DE',
  FR = 'FR',
  IN = 'IN',
  JP = 'JP',
  CN = 'CN',
  BR = 'BR',
  MX = 'MX',
  IT = 'IT',
  ES = 'ES',
  RU = 'RU',
  KR = 'KR',
}

const DEFAULT_CONTACT_FORM_DATA = {
  firstName: '',
  lastName: '',
  streetAddress: '',
  region: '',
  // language: Language.ENGLISH,
  countryCode: CountryCode.US_CA,
  country: Country.US_CA,
  city: '',
  zipCode: '',
  phoneNumber: '',
  notes: '',
}

// Data passed as props to the root component
export const mockRootModalProps: SimpleContactModalProps = {
  isOpen: true,
  onClose: () => console.log('Modal closed'),
  onSave: (data: any) => console.log('Contact saved:', data),
  initialData: DEFAULT_CONTACT_FORM_DATA,
}

// Props types (data passed to components)
export interface SimpleContactFormData {
  firstName: string
  lastName: string
  phoneNumber: string
  streetAddr: string
  city: string
  country: string
  zipCode: string
  region: string
  notes: string
}

export interface SimpleContactFormErrors {
  firstName?: string
  lastName?: string
  region?: string
  streetAddr?: string
  city?: string
  country?: string
  zipCode?: string
  phoneNumber?: string
}

export interface SimpleContactModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (data: SimpleContactFormData) => void
  initialData?: Partial<SimpleContactFormData>
}

export const SimpleContactModal: React.FC<SimpleContactModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData = {},
}) => {
  const [formData, setFormData] = useState<SimpleContactFormData>({
    firstName: initialData.firstName || '',
    lastName: initialData.lastName || '',
    phoneNumber: initialData.phoneNumber || '',
    streetAddr: initialData.streetAddr || '',
    city: initialData.city || '',
    country: initialData.country || 'US',
    region: initialData.region || '',
    zipCode: initialData.zipCode || '',
    notes: initialData.notes || '',
  })
  const [errors, setErrors] = useState<SimpleContactFormErrors>({})

  const validateForm = useCallback((): boolean => {
    const newErrors: SimpleContactFormErrors = {}

    // OVERVIEW:
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    // ADDRESS:
    if (!formData.region.trim()) newErrors.region = 'Region is required'
    if (!formData.streetAddr.trim()) newErrors.streetAddr = 'Street Address is required'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip code is required'
    if (!formData.phoneNumber?.trim()) newErrors.phoneNumber = 'Phone number is required'
    // Notes are optional

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])

  const handleFieldChange = (field: keyof SimpleContactFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Clear error when user starts typing
    if (errors[field as keyof SimpleContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSave = () => {
    if (!validateForm()) {
      return
    }
    onSave(formData)
  }

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={600}
      className="customerModal"
      destroyOnHidden
    >
      <div>
        <h2 className="mb-6 font-serif text-xl leading-7 font-bold tracking-tight text-zinc-600">
          Get in touch!
        </h2>

        <div className="flex flex-col gap-6">
          {/* Name Fields */}
          <div className="flex gap-6">
            <div className="flex grow flex-col gap-2">
              <label className="flex items-center gap-1 text-sm font-medium tracking-tight text-zinc-600">
                First Name
                <span className="text-xs text-zinc-600">*</span>
              </label>
              <Input
                value={formData.firstName}
                onChange={(e) => handleFieldChange('firstName', e.target.value)}
                placeholder="Jon"
                status={errors.firstName ? 'error' : undefined}
              />
              {errors.firstName && (
                <span className="text-xs text-zinc-600">{errors.firstName}</span>
              )}
            </div>

            <div className="flex grow flex-col gap-2">
              <label className="flex items-center gap-1 text-sm font-medium tracking-tight text-zinc-600">
                Last Name
                <span className="text-xs text-zinc-600">*</span>
              </label>
              <Input
                value={formData.lastName}
                onChange={(e) => handleFieldChange('lastName', e.target.value)}
                placeholder="Snow"
                status={errors.lastName ? 'error' : undefined}
              />
              {errors.lastName && <span className="text-xs text-zinc-600">{errors.lastName}</span>}
            </div>
          </div>

          {/* Country and Region */}
          <div className="flex gap-6">
            <div className="flex grow flex-col gap-2">
              <label className="flex items-center gap-1 text-sm font-medium tracking-tight text-zinc-600">
                Country
                <span className="text-xs text-zinc-600">*</span>
              </label>
              <Select
                value={formData.country}
                onChange={(value) => handleFieldChange('country', value)}
                placeholder="Select a country"
                suffixIcon={<ChevronDownIcon size={11} className="text-zinc-400" />}
                status={errors.country ? 'error' : undefined}
              >
                <Option value={Country.US_CA}>{getCountryName(Country.US_CA)}</Option>
                {/* <Option value={Country.CA}>{getCountryName(Country.CA)}</Option> */}
                <Option value={Country.UK}>{getCountryName(Country.UK)}</Option>
                <Option value={Country.AU}>{getCountryName(Country.AU)}</Option>
                <Option value={Country.DE}>{getCountryName(Country.DE)}</Option>
                <Option value={Country.FR}>{getCountryName(Country.FR)}</Option>
                <Option value={Country.IN}>{getCountryName(Country.IN)}</Option>
                <Option value={Country.JP}>{getCountryName(Country.JP)}</Option>
                <Option value={Country.CN}>{getCountryName(Country.CN)}</Option>
                <Option value={Country.BR}>{getCountryName(Country.BR)}</Option>
                <Option value={Country.MX}>{getCountryName(Country.MX)}</Option>
                <Option value={Country.IT}>{getCountryName(Country.IT)}</Option>
                <Option value={Country.ES}>{getCountryName(Country.ES)}</Option>
                <Option value={Country.RU}>{getCountryName(Country.RU)}</Option>
                <Option value={Country.KR}>{getCountryName(Country.KR)}</Option>
              </Select>
              {errors.country && <span className="text-xs text-zinc-600">{errors.country}</span>}
            </div>
            <div className="flex grow flex-col gap-2">
              <label className="flex items-center gap-1 text-sm font-medium tracking-tight text-zinc-600">
                Region
                <span className="text-xs text-zinc-600">*</span>
              </label>
              <Select
                value={formData.region}
                onChange={(value) => handleFieldChange('region', value)}
                suffixIcon={<ChevronDownIcon size={11} className="text-zinc-400" />}
                placeholder="Select your region"
                status={errors.region ? 'error' : undefined}
                disabled={!formData.country}
              >
                {formData.country &&
                  getRegionsByCountry(formData.country as Country).map((region) => (
                    <Option key={region.value} value={region.value}>
                      {region.label}
                    </Option>
                  ))}
              </Select>
              {errors.region && <span className="text-xs text-zinc-600">{errors.region}</span>}
            </div>
          </div>

          {/* Street Address */}
          <div className="flex grow flex-col gap-2">
            <label className="flex items-center gap-1 text-sm font-medium tracking-tight text-zinc-600">
              Street Address
              <span className="text-xs text-zinc-600">*</span>
            </label>
            <Input
              value={formData.streetAddr}
              onChange={(e) => handleFieldChange('streetAddr', e.target.value)}
              placeholder="Enter your street address"
              status={errors.streetAddr ? 'error' : undefined}
            />
            {errors.streetAddr && (
              <span className="text-xs text-zinc-600">{errors.streetAddr}</span>
            )}
          </div>

          {/* City and Zip Code */}
          <div className="flex w-full gap-6">
            <div className="flex grow flex-col gap-2">
              <label className="flex items-center gap-1 text-sm font-medium tracking-tight text-zinc-600">
                City
                <span className="text-xs text-zinc-600">*</span>
              </label>
              <Input
                value={formData.city}
                onChange={(e) => handleFieldChange('city', e.target.value)}
                placeholder="Enter your City"
                status={errors.city ? 'error' : undefined}
              />
              {errors.city && <span className="text-xs text-zinc-600">{errors.city}</span>}
            </div>

            <div className="flex grow flex-col gap-2">
              <label className="flex items-center gap-1 text-sm font-medium tracking-tight text-zinc-600">
                Zip Code
                <span className="text-xs text-zinc-600">*</span>
              </label>
              <Input
                value={formData.zipCode}
                onChange={(e) => handleFieldChange('zipCode', e.target.value)}
                placeholder="Enter zip code"
                status={errors.zipCode ? 'error' : undefined}
              />
              {errors.zipCode && <span className="text-xs text-zinc-600">{errors.zipCode}</span>}
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex grow flex-col gap-2">
            <label className="flex items-center gap-1 text-sm font-medium tracking-tight text-zinc-600">
              Phone Number
            </label>
            <Input
              value={formatPhoneNumber(formData.phoneNumber)}
              onChange={(e) =>
                handleFieldChange('phoneNumber', e.target.value.replace(/[^\d]/g, ''))
              }
              placeholder="111-555-0199"
            />
          </div>

          {/* Note */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-1 text-sm font-medium tracking-tight text-zinc-600">
              Leave me a message along with your contact information, and I'll get back to you as
              soon as possible.
            </label>
            <TextArea
              value={formData.notes}
              onChange={(e) => handleFieldChange('notes', e.target.value)}
              placeholder="A short and clear note..."
              className="resize-none rounded-lg"
              rows={8}
            />
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-between">
        <Button onClick={handleSave} className="draftButton">
          Save as Draft
        </Button>
        <Button type="primary" onClick={handleSave} className="primaryButton">
          Save and Next
        </Button>
      </div>
    </Modal>
  )
}
