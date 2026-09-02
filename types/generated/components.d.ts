import type { Schema, Struct } from '@strapi/strapi';

export interface CommonButton extends Struct.ComponentSchema {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface CommonLogo extends Struct.ComponentSchema {
  collectionName: 'components_common_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    height: Schema.Attribute.Integer;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    width: Schema.Attribute.Integer;
  };
}

export interface CommonSimpleLists extends Struct.ComponentSchema {
  collectionName: 'components_common_simple_lists';
  info: {
    displayName: 'Simple Lists';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

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

export interface HeroAnimationComponentsAnimation
  extends Struct.ComponentSchema {
  collectionName: 'components_hero_animation_components_animations';
  info: {
    displayName: 'animation';
  };
  attributes: {};
}

export interface HeroAnimationComponentsAnimationType2
  extends Struct.ComponentSchema {
  collectionName: 'components_hero_animation_components_animation_type2s';
  info: {
    displayName: 'AnimationType2';
  };
  attributes: {
    bottomLeft: Schema.Attribute.String;
    bottomRight: Schema.Attribute.String;
    boxText1: Schema.Attribute.String;
    boxText2: Schema.Attribute.String;
    boxText3: Schema.Attribute.String;
    boxText4: Schema.Attribute.String;
    topLeft: Schema.Attribute.String;
    topRight: Schema.Attribute.String;
  };
}

export interface HeroAnimationComponentsNetworkData
  extends Struct.ComponentSchema {
  collectionName: 'components_hero_animation_components_network_data';
  info: {
    displayName: 'Network Data';
  };
  attributes: {};
}

export interface HeroAnimationComponentsRoutes extends Struct.ComponentSchema {
  collectionName: 'components_hero_animation_components_routes';
  info: {
    displayName: 'Routes';
  };
  attributes: {
    code: Schema.Attribute.String;
    rate: Schema.Attribute.String;
    text: Schema.Attribute.String;
    time: Schema.Attribute.String;
  };
}

export interface HeroAnimationComponentsStausValues
  extends Struct.ComponentSchema {
  collectionName: 'components_hero_animation_components_staus_values';
  info: {
    displayName: 'Staus Values';
  };
  attributes: {
    text: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface HeroAnimationComponentsType1 extends Struct.ComponentSchema {
  collectionName: 'components_hero_animation_components_type1s';
  info: {
    displayName: 'AnimationType1';
  };
  attributes: {
    bottomLeftText: Schema.Attribute.String;
    bottomRightText: Schema.Attribute.String;
    button1Text: Schema.Attribute.String;
    button2Text: Schema.Attribute.String;
    routes: Schema.Attribute.Component<
      'hero-animation-components.routes',
      true
    >;
    statusValues: Schema.Attribute.Component<
      'hero-animation-components.staus-values',
      true
    >;
    svg: Schema.Attribute.Text;
    topHeading: Schema.Attribute.String;
  };
}

export interface HeroFancyHeading extends Struct.ComponentSchema {
  collectionName: 'components_hero_fancy_headings';
  info: {
    displayName: 'Fancy Heading';
  };
  attributes: {
    text: Schema.Attribute.Text;
    type: Schema.Attribute.Enumeration<['simple', 'fancy']>;
  };
}

export interface HeroFancyHeadingText extends Struct.ComponentSchema {
  collectionName: 'components_hero_fancy_heading_texts';
  info: {
    displayName: 'fancyHeading Text';
  };
  attributes: {};
}

export interface HeroHeroButtons extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_buttons';
  info: {
    displayName: 'Hero Buttons';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', false>;
  };
}

export interface HeroHero1 extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero1s';
  info: {
    displayName: 'Hero1';
  };
  attributes: {
    animation: Schema.Attribute.Relation<
      'oneToOne',
      'api::animation.animation'
    >;
    bottomLists: Schema.Attribute.Component<'common.simple-lists', true>;
    content: Schema.Attribute.Blocks;
    fancyHeading: Schema.Attribute.Component<'hero.fancy-heading', true>;
    heroButtons: Schema.Attribute.Component<'hero.hero-buttons', true>;
    topHeading: Schema.Attribute.String;
  };
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

export interface NavigationPreHeader extends Struct.ComponentSchema {
  collectionName: 'components_navigation_pre_headers';
  info: {
    displayName: 'Pre Header';
  };
  attributes: {
    leftText1: Schema.Attribute.String;
    leftText2: Schema.Attribute.String;
    leftText3: Schema.Attribute.String;
    Phonenumber: Schema.Attribute.String;
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
      'common.button': CommonButton;
      'common.logo': CommonLogo;
      'common.simple-lists': CommonSimpleLists;
      'footer.company-information': FooterCompanyInformation;
      'footer.countries': FooterCountries;
      'footer.countries-section': FooterCountriesSection;
      'footer.footer-bottom': FooterFooterBottom;
      'footer.links': FooterLinks;
      'footer.main': FooterMain;
      'footer.social-media': FooterSocialMedia;
      'footer.sub-footer': FooterSubFooter;
      'footer.subcoun': FooterSubcoun;
      'hero-animation-components.animation': HeroAnimationComponentsAnimation;
      'hero-animation-components.animation-type2': HeroAnimationComponentsAnimationType2;
      'hero-animation-components.network-data': HeroAnimationComponentsNetworkData;
      'hero-animation-components.routes': HeroAnimationComponentsRoutes;
      'hero-animation-components.staus-values': HeroAnimationComponentsStausValues;
      'hero-animation-components.type1': HeroAnimationComponentsType1;
      'hero.fancy-heading': HeroFancyHeading;
      'hero.fancy-heading-text': HeroFancyHeadingText;
      'hero.hero-buttons': HeroHeroButtons;
      'hero.hero1': HeroHero1;
      'navigation.dropdowns': NavigationDropdowns;
      'navigation.links': NavigationLinks;
      'navigation.pre-header': NavigationPreHeader;
      'navigation.sub-dropdowns': NavigationSubDropdowns;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
