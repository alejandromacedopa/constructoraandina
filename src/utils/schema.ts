export function organizationSchema() {
return {
'@context': 'https://schema.org',
'@type': 'Organization',
name: 'Constructora Andina',
url: 'https://www.constructora-andina.com',
logo: 'https://www.constructora-andina.com/favicon.svg',
sameAs: [
'https://www.facebook.com/constructoraandina',
'https://www.instagram.com/constructoraandina',
'https://www.linkedin.com/company/constructora-andina'
],
address: {
'@type': 'PostalAddress',
addressCountry: 'PE',
addressLocality: 'Tarapoto',
},
contactPoint: [{
'@type': 'ContactPoint',
telephone: '+51-999-888-777',
contactType: 'customer service',
areaServed: 'PE'
}]
} as const;
}


export function websiteSchema() {
return {
'@context': 'https://schema.org',
'@type': 'WebSite',
name: 'Constructora Andina',
url: 'https://www.constructora-andina.com',
potentialAction: {
'@type': 'SearchAction',
target: {
'@type': 'EntryPoint',
urlTemplate: 'https://www.constructora-andina.com/?q={search_term_string}'
},
'query-input': 'required name=search_term_string'
}
} as const;
}