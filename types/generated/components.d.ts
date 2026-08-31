import type { Schema, Struct } from '@strapi/strapi';

export interface FooterCompanyInformation extends Struct.ComponentSchema {
  collectionName: 'components_footer_company_informations';
  info: {
    displayName: 'Company Information';
  };
  attributes: {
    countriesSection: Schema.Attribute.Component<
      'footer.countries-section',
      false
    >;
    main: Schema.Attribute.Component<'footer.main', false>;
  };
}

export interface FooterCountries extends Struct.ComponentSchema {
  collectionName: 'components_footer_countries';
  info: {
    displayName: 'Countries';
  };
  attributes: {
    flag: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

export interface FooterCountriesSection extends Struct.ComponentSchema {
  collectionName: 'components_footer_countries_sections';
  info: {
    displayName: 'Countries Section';
  };
  attributes: {
    countries: Schema.Attribute.Component<'footer.countries', true>;
    heading: Schema.Attribute.String;
  };
}

export interface FooterFooterBottom extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_bottoms';
  info: {
    displayName: 'Footer Bottom';
  };
  attributes: {
    Copyright: Schema.Attribute.String;
    socialMedia: Schema.Attribute.Component<'footer.social-media', true>;
  };
}

export interface FooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface FooterMain extends Struct.ComponentSchema {
  collectionName: 'components_footer_mains';
  info: {
    displayName: 'main';
  };
  attributes: {
    address: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
  };
}

export interface FooterSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_medias';
  info: {
    displayName: 'Social Media';
  };
  attributes: {
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface FooterSubFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_sub_footers';
  info: {
    displayName: 'Sub Footer';
  };
  attributes: {
    heading: Schema.Attribute.String;
    links: Schema.Attribute.Component<'footer.links', true>;
  };
}

export interface FooterSubcoun extends Struct.ComponentSchema {
  collectionName: 'components_footer_subcouns';
  info: {
    displayName: 'subcoun';
  };
  attributes: {};
}

export interface NavigationDropdowns extends Struct.ComponentSchema {
  collectionName: 'components_navigation_dropdowns';
  info: {
    displayName: 'dropdowns';
  };
  attributes: {
    desc: Schema.Attribute.String;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
    subDropdowns: Schema.Attribute.Component<'navigation.sub-dropdowns', true>;
    svg: Schema.Attribute.Text;
  };
}

export interface NavigationLinks extends Struct.ComponentSchema {
  collectionName: 'components_navigation_links';
  info: {
    displayName: 'Links';
  };
  attributes: {
    dropdowns: Schema.Attribute.Component<'navigation.dropdowns', true>;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['multi', 'simple', 'single', 'link']>;
  };
}

export interface NavigationSubDropdowns extends Struct.ComponentSchema {
  collectionName: 'components_navigation_sub_dropdowns';
  info: {
    displayName: 'subDropdowns';
  };
  attributes: {
    desc: Schema.Attribute.String;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
    svg: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'footer.company-information': FooterCompanyInformation;
      'footer.countries': FooterCountries;
      'footer.countries-section': FooterCountriesSection;
      'footer.footer-bottom': FooterFooterBottom;
      'footer.links': FooterLinks;
      'footer.main': FooterMain;
      'footer.social-media': FooterSocialMedia;
      'footer.sub-footer': FooterSubFooter;
      'footer.subcoun': FooterSubcoun;
      'navigation.dropdowns': NavigationDropdowns;
      'navigation.links': NavigationLinks;
      'navigation.sub-dropdowns': NavigationSubDropdowns;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
