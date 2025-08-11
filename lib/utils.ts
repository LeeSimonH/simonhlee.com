import { Country } from '@/components/contact-modal-simple'
import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPhoneNumber = (phone: string): string => {
  // Format phone number with dashes
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2‑$3')
}

export const getCountryName = (countryCode: Country): string => {
  const countryNames = {
    [Country.US_CA]: 'United States & Canada',
    // [Country.US]: 'United States',
    // [Country.CA]: 'Canada',
    [Country.UK]: 'United Kingdom',
    [Country.AU]: 'Australia',
    [Country.DE]: 'Germany',
    [Country.FR]: 'France',
    [Country.IN]: 'India',
    [Country.JP]: 'Japan',
    [Country.CN]: 'China',
    [Country.BR]: 'Brazil',
    [Country.MX]: 'Mexico',
    [Country.IT]: 'Italy',
    [Country.ES]: 'Spain',
    [Country.RU]: 'Russia',
    [Country.KR]: 'South Korea',
  }
  return countryNames[countryCode] || countryCode
}

export const getRegionsByCountry = (country: Country): { value: string; label: string }[] => {
  const regionMap = {
    [Country.US_CA]: [
      { value: 'AL', label: 'Alabama' },
      { value: 'CA', label: 'California' },
      { value: 'FL', label: 'Florida' },
      { value: 'NY', label: 'New York' },
      { value: 'TX', label: 'Texas' },
      { value: 'WA', label: 'Washington' },
      // ],[Country.CA]:[
      { value: 'AB', label: 'Alberta' },
      { value: 'BC', label: 'British Columbia' },
      { value: 'ON', label: 'Ontario' },
      { value: 'QC', label: 'Quebec' },
    ],
    [Country.UK]: [
      { value: 'ENG', label: 'England' },
      { value: 'SCT', label: 'Scotland' },
      { value: 'WLS', label: 'Wales' },
      { value: 'NIR', label: 'Northern Ireland' },
    ],
    [Country.AU]: [
      { value: 'NSW', label: 'New South Wales' },
      { value: 'VIC', label: 'Victoria' },
      { value: 'QLD', label: 'Queensland' },
      { value: 'WA', label: 'Western Australia' },
    ],
    [Country.DE]: [
      { value: 'BY', label: 'Bavaria' },
      { value: 'BE', label: 'Berlin' },
      { value: 'NW', label: 'North Rhine-Westphalia' },
      { value: 'BW', label: 'Baden-Württemberg' },
    ],
    [Country.FR]: [
      { value: 'IDF', label: 'Île-de-France' },
      { value: 'ARA', label: 'Auvergne-Rhône-Alpes' },
      { value: 'PACA', label: "Provence-Alpes-Côte d'Azur" },
      { value: 'OCC', label: 'Occitanie' },
    ],
    [Country.IN]: [
      { value: 'MH', label: 'Maharashtra' },
      { value: 'DL', label: 'Delhi' },
      { value: 'KA', label: 'Karnataka' },
      { value: 'TN', label: 'Tamil Nadu' },
    ],
    [Country.JP]: [
      { value: 'TK', label: 'Tokyo' },
      { value: 'OS', label: 'Osaka' },
      { value: 'KY', label: 'Kyoto' },
      { value: 'YK', label: 'Yokohama' },
    ],
    [Country.CN]: [
      { value: 'BJ', label: 'Beijing' },
      { value: 'SH', label: 'Shanghai' },
      { value: 'GD', label: 'Guangdong' },
      { value: 'ZJ', label: 'Zhejiang' },
    ],
    [Country.BR]: [
      { value: 'SP', label: 'São Paulo' },
      { value: 'RJ', label: 'Rio de Janeiro' },
      { value: 'MG', label: 'Minas Gerais' },
      { value: 'BA', label: 'Bahia' },
    ],
    [Country.MX]: [
      { value: 'CDMX', label: 'Mexico City' },
      { value: 'JAL', label: 'Jalisco' },
      { value: 'NL', label: 'Nuevo León' },
      { value: 'BC', label: 'Baja California' },
    ],
    [Country.IT]: [
      { value: 'LOM', label: 'Lombardy' },
      { value: 'LAZ', label: 'Lazio' },
      { value: 'CAM', label: 'Campania' },
      { value: 'SIC', label: 'Sicily' },
    ],
    [Country.ES]: [
      { value: 'MD', label: 'Madrid' },
      { value: 'CT', label: 'Catalonia' },
      { value: 'AN', label: 'Andalusia' },
      { value: 'VC', label: 'Valencia' },
    ],
    [Country.RU]: [
      { value: 'MOW', label: 'Moscow' },
      { value: 'SPE', label: 'Saint Petersburg' },
      { value: 'NSO', label: 'Novosibirsk' },
      { value: 'YEK', label: 'Yekaterinburg' },
    ],
    [Country.KR]: [
      { value: 'SEL', label: 'Seoul' },
      { value: 'BSN', label: 'Busan' },
      { value: 'ICN', label: 'Incheon' },
      { value: 'DGU', label: 'Daegu' },
    ],
  }

  return regionMap[country] || []
}
