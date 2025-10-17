export const defaultSEO = {
title: 'Constructora Andina | Obras seguras y de alta calidad',
description: 'Empresa constructora con 15+ años de experiencia en edificaciones residenciales y comerciales. Entregas a tiempo, calidad certificada y transparencia total.',
image: '/images/og.jpg',
locale: 'es_PE',
};


export function ogTags({ title, description, image }: Partial<typeof defaultSEO>) {
const t = title ?? defaultSEO.title;
const d = description ?? defaultSEO.description;
const i = image ?? defaultSEO.image;
return (
`<meta property="og:title" content="${t}" />
<meta property="og:description" content="${d}" />
<meta property="og:image" content="${i}" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${t}" />
<meta name="twitter:description" content="${d}" />
<meta name="twitter:image" content="${i}" />`

);
}