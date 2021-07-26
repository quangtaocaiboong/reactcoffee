import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>thefifteenbistro.com</SocialLogo>
            
            <SocialIcons>
              <SocialIconLink 
              href='//www.facebook.com/profile.php?id=100009918757219' 
              target='_blank' 
              aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink 
              href='//www.instagram.com/quanghuy_7/' 
              target='_blank' 
              aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink 
              href='//www.youtube.com/watch?v=hD5hIqeKNVE' 
              target='_blank' 
              aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href='//www.twitter.com/laquanghuy7'
                target='_blank'
                aria-label='Twitter'
                rel='noopener noreferrer'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
